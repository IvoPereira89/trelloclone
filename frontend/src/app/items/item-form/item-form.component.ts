import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item, ItemInterface } from '../item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  @Input() item: ItemInterface;

  constructor(@Inject('items-service') private itemsService,
    private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.prepareForm();
  }

  prepareForm(): void {
    const list_id = +this.route.snapshot.paramMap.get('list_id');
    if (list_id) {
      this.item = new ItemInterface;
      this.item.list_id = list_id;
    }
  }

  onSave(event, item: ItemInterface) {
    if (!item.title && !item.description) { return; }
    const savedItem = this.itemsService.saveItem(item as Item);
    savedItem.subscribe(
      (result: Item) => {
        console.log('Item was successfuly saved!');
      },
      (error: HttpErrorResponse) => {
        if (error.error) {
          console.log(error.message);
        } else {
          console.log('Error occurred in server side.');
        }
      }
    );
    if (this.item.editMode) {
      this.item.editMode = false;
    } else {
      this.location.back();
    }
  }
}
