import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-lists',
  template: `
    <div *ngFor="let list of lists">
     <h3 (click)="selectList($event, list.id)">{{list.name}}</h3>
     <app-items [list_id]="list.id"></app-items>
    </div>
  `,
  styles: []
})
export class ListsComponent implements OnInit {
  lists = [];

  constructor(@Inject("lists-service") private listsService ) {}

  ngOnInit() {
    let res = this.listsService.getLists();
    res.subscribe((response) => {
      this.lists = response;
    });
  }

  selectList(event, id) {
    console.log(id)
  }

}
