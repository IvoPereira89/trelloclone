import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-lists',
  template: `
    <div *ngFor="let list of lists">
     <h3 (click)="onClick($event, list.id)">{{list.name}}</h3>
     <ul *ngFor="let item of list.items">
      <li>
        <div>Title: {{item.title}}</div>
        <div>Description: {{item.description}}</div>
      </li>
     </ul>
    </div>
  `,
  styles: []
})
export class ListsComponent implements OnInit {
  lists = [];

  constructor(@Inject("list-service") private listService ) {}

  ngOnInit() {
    var listService = this.listService;
    var lists = [];
    let res = listService.getLists();
    res.subscribe((response) => {
      response.forEach( function(list) {
        let rest = listService.findList(list.id);
        rest.subscribe((response) => {
          lists.push(response)
        });
      });
    });
    this.lists = lists;
  }

  onClick(event, id) {
    console.log(id)
  }

}
