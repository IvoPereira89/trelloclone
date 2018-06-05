import { Component, OnInit, Input } from "@angular/core";
import { Inject } from "@angular/core";

@Component({
  selector: "app-items",
  template: `
    <ul *ngFor="let item of items.items">
     <li (click)="selectItem($event, item.id)" >
       <div>
         <div>Title: {{item.title}}</div>
         <div>Description: {{item.description}}</div>
       </div>
     </li>
    </ul>
  `,
  styles: []
})
export class ItemsComponent implements OnInit {
  @Input() list_id;

  items = [];

  constructor(@Inject("items-service") private itemsService) {}

  ngOnInit() {
    let res = this.itemsService.getItems(this.list_id);
    res.subscribe(response => {
      this.items = response;
    });
  }
}
