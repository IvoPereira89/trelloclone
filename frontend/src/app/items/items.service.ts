  import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ComponentFactoryResolver, ReflectiveInjector, Inject, Injectable } from '@angular/core';

import { ItemsComponent, ItemsFormComponent } from './items.component';

@Injectable()
export class ItemsService {
  headers = null;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getItems() {
    return this.http.get('http://localhost:3000/items', {headers: this.headers});
  }

  public findItem(id) {
    return this.http.get('http://localhost:3000/item/' + id, {headers: this.headers});
  }

  public saveItem(item) {
    return this.http.post('http://localhost:3000/item/', item, { headers: this.headers});
  }

}

@Injectable()
export class DynamicItemService {
  factoryResolver = null;
  rootViewContainer = null;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(item, chosenComponent) {
    this.rootViewContainer.clear();
    const factory = this.factoryResolver.resolveComponentFactory(chosenComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    component.instance.item = item;
    this.rootViewContainer.insert(component.hostView);
  }

}
