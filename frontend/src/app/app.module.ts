import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule} from '@angular/http';
//import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ListsComponent } from './lists/lists.component';
import { ListsService } from './lists/lists.service';

import { ItemsComponent } from './items/items.component';
import { ItemsService } from './items/items.service';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: "lists-service", useClass: ListsService },
    { provide: "items-service", useClass: ItemsService }
  ],
  bootstrap: [AppComponent]
})

export class AppModule
{

}
