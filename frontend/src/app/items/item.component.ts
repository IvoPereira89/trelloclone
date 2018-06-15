import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Item, ItemInterface } from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[];
  @Input() item: ItemInterface;
  @Input() listID = null;

  constructor(@Inject('items-service') private itemsService) {}

  ngOnInit() {
    if (this.listID) { this.getItems(this.listID); }
  }

  selectItem(): void {
    this.item.editMode = true;
  }

  getItems(list_id = null): void {
    const gettedItems = this.itemsService.getItems(list_id);
    gettedItems.subscribe(
      (items: ItemInterface[]) => {
        this.items = items;
      },
      (error: HttpErrorResponse) => {
        if (error.error) {
          console.log(error.message);
        } else {
          console.log('Error occurred in server side.');
        }
      }
    );
  }

  deleteItem(event, item: Item): void {
    const element = event.target;
    const deletedItem = this.itemsService.deleteItem(item);
    deletedItem.subscribe(
      (result) => {
        this.item = result;
      },
      (error: HttpErrorResponse) => {
        if (error.error) {
          console.log(error.message);
        } else {
          console.log('Error occurred in server side.');
        }
      }
    );
  }

}
