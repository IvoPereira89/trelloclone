import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule} from '@angular/http';
//import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';

import { ListService } from './lists/list.service';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: "list-service", useClass: ListService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{

}
