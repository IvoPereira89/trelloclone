import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

import { ListsComponent } from './lists/lists.component';
import { ListsService } from './lists/lists.service';

import { ItemsComponent, ItemsFormComponent } from './items/items.component';
import { ItemsService, DynamicItemService } from './items/items.service';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ItemsComponent,
    ItemsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'lists-service', useClass: ListsService },
    { provide: 'items-service', useClass: ItemsService },
    { provide: 'dynamic-item-service', useClass: DynamicItemService }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ItemsComponent,
    ItemsFormComponent
  ]
})

export class AppModule {}
