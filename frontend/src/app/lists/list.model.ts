import { Item } from '../items/item.model';

export class List {
  id: number;
  name: string;
}

export class ListInterface extends List {
  items: Item[] = [];
}
