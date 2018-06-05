import { Component, OnInit, OnDestroy, Input, Inject } from "@angular/core";

@Component({
  selector: "app-items",
  template: `
     <div>
       <h4 class="deb" (click)="selectItem($event, item)">{{item.title}}</h4>
       <small>{{item.description}}</small>
     </div>
  `,
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() item;

  constructor(@Inject("items-service") private itemsService) {}

  ngOnInit() {
  }

  selectItem(event, item) {
    const element = event.target;
    element.parentElement.innerHTML = form;
  }
}

@Component({
  selector: 'app-item-form',
  template: `
    <div id="item-form">
    <div>
      <label for="title">Title</label>
      <input name="title" type="text" value={{item.title}}></input>
    </div>
    <div>
      <label for="description">Description</label>
      <input name="description" type="text" value={{item.description}}></input>
    </div>
    <button type="button" (click)="saveItem($event)">Save</button>
  </div>`
})
export class ItemForm implements OnInit, OnDestroy {
  @Input() item;

  saveItem(event){

  }
}
