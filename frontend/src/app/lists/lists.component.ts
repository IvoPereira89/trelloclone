import { Component, Inject, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { List, ListInterface } from './list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[];

  constructor(@Inject('lists-service') private listsService) {}

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    const resultedLists: ListInterface[] = [];
    const listsService = this.listsService;
    const gettedLists = listsService.getLists();
    gettedLists.subscribe((lists: List[]) => {
      lists.forEach(function(list: ListInterface) {
        const gettedItems = listsService.findList(list.id);
        gettedItems.subscribe(
          (items) => {
            list.items = items.items;
            resultedLists.push(list);
          },
          (error: HttpErrorResponse) => {
            if (error.error) {
              console.log(error.message);
            } else {
              console.log('Error occurred in server side.');
            }
          }
        );
      });
    },
    (error: HttpErrorResponse) => {
      if (error.error) {
        console.log(error.message);
      } else {
        console.log('Error occurred in server side.');
      }
    });
    this.lists = resultedLists;
  }
}
