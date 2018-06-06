import { Component, OnDestroy, Input, Output, ViewChild, Inject, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-items',
  template: `
     <div #itemContainer>
       <h4 class="deb" (click)="selectItem($event, item)">{{item.title}}</h4>
       <small>{{item.description}}</small>
     </div>
  `,
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() item: Object = {};
  @ViewChild('itemContainer', { read: ViewContainerRef }) _itemContainer;

  constructor(@Inject('items-form-service') private itemsFormService) {}

  selectItem(event, item) {
    const element = event.target;
    this.itemsFormService.setRootViewContainerRef(this._itemContainer);
    this.itemsFormService.addDynamicComponent(item);
    element.parentNode.remove();
  }
}

@Component({
  selector: 'app-item-form',
  template: `
    <div id="item-form">
    <div>
      <label for="title">Title</label>
      <input #itemTitle name="item[title]" type="text" value={{item.title}}>
    </div>
    <div>
      <label for="description">Description</label>
      <input #itemDescription name="item[description]" type="text" value={{item.description}}>
    </div>
    <button type="button" (click)="onUpdate({
      id: item.id,
      name: itemTitle.value,
      description: itemDescription.value
    })">Save</button>
  </div>`
})
export class ItemsFormComponent implements OnDestroy {
  @Input() item: Object = {};

  constructor(@Inject('items-service') private itemsService) {}

  ngOnDestroy() {}

  onUpdate(item) {
    const res = this.itemsService.updateItem(item);
    res.subscribe((response) => {
      console.log(response);
    });
  }
}
