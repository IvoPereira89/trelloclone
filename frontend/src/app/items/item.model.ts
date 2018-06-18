export class Item {
  id: number;
  title: string;
  description: string;
  list_id: number;
}

export class ItemInterface extends Item {
  editMode = false;
}
