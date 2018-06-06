import { Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemsFormComponent } from '../items/items.component';

@Component({
  selector: 'app-lists',
  template: `
    <div class="list" *ngFor="let list of lists">
     <h3 (click)="selectList($event, list.id)">{{list.name}}</h3>
     <button #itemContainer type="button" (click)="onCreate($event)">New</button>
     <ul>
      <li *ngFor="let item of list.items">
        <app-items [item]="item"></app-items>
      </li>
     </ul>
    </div>
  `,
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists = [];
  @ViewChild('itemContainer', { read: ViewContainerRef }) itemContainer: ViewContainerRef;

  constructor(@Inject("lists-service") private listsService,
    @Inject('dynamic-item-service') private dynamicItemService) {}

  ngOnInit() {
    var lists = [];
    const listsService = this.listsService;
    let res = listsService.getLists();
    res.subscribe((response) => {
      response.forEach( function(list) {
        let rest = listsService.findList(list.id);
        rest.subscribe((response) => {
          lists.push(response)
        });
      });
    });
    this.lists = lists;
  }

  onCreate(event) {
    this.dynamicItemService.setRootViewContainerRef(this.itemContainer);
    this.dynamicItemService.addDynamicComponent({}, ItemsFormComponent);
  }

  selectList(event, id) {
    console.log(id)
  }

}
