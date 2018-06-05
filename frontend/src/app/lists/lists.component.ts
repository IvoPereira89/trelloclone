import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-lists',
  template: `
    <div class="list" *ngFor="let list of lists">
     <h3 (click)="selectList($event, list.id)">{{list.name}}</h3>
     <ul *ngFor="let item of list.items">
      <li>
        <app-items [item]="item"></app-items>
      </li>
     </ul>
    </div>
  `,
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists = [];

  constructor(@Inject("lists-service") private listsService) {}

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

  selectList(event, id) {
    console.log(id)
  }

}
