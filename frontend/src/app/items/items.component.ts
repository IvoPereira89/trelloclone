import { Component, OnInit, Input } from "@angular/core";
import { Inject } from "@angular/core";

@Component({
  selector: "app-items",
  template: `
     <div (click)="selectItem($event, item.id)">
       <h4>{{item.title}}</h4>
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

  selectItem(event, id) {
    console.log(id)
  }
}
