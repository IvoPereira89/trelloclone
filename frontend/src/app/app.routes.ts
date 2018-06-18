import { Routes } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { ItemComponent } from './items/item.component';
import { ItemFormComponent } from './items/item-form/item-form.component';

export const RoutesPath: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'lists', component: ListsComponent },
  { path: 'lists/:list_id/items/new', component: ItemFormComponent },
  { path: 'lists/:list_id/items/:id', component: ItemComponent }
];
