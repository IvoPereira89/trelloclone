import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListsComponent, ListsService } from './lists';
import { ItemsComponents, ItemsService } from './items';

import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ItemsComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatButtonModule, MatInputModule
  ],
  providers: [
    { provide: 'lists-service', useClass: ListsService },
    { provide: 'items-service', useClass: ItemsService }
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})

export class AppModule {}
