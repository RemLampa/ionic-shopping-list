import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

/*
  Generated class for the ShoppingList provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ShoppingList {
  public shoppingList: Array<string>;

  constructor(public storage: Storage) {
    storage.ready().then(() => {
      this.getList();
    });
  }

  getList() {
    return this.storage.get('shoppingList').then(shoppingList => {
      this.shoppingList = shoppingList;

      if (!this.shoppingList || !this.shoppingList.length) {
        this.shoppingList = ['shirt', 'cap', 'leather bag'];
        this.saveList();
      }

      return this.shoppingList;
    });
  }

  saveList() {
    return this.storage.set('shoppingList', this.shoppingList);
  }

  add(item) {
    if (!item && item === '') return;

    this.shoppingList.push(item);

    return this.saveList();
  }

  update(originalItem, newItem) {
    let index = this.shoppingList.indexOf(originalItem);

    if (index >= 0) {
      this.shoppingList[index] = newItem;

      return this.saveList();
    }
  }

  delete(item) {
    let index = this.shoppingList.indexOf(item);

    if (index >= 0) {
      this.shoppingList.splice(index, 1);

      return this.saveList();
    }
  }
}
