import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { ShoppingList } from '../../providers/shopping-list';

/**
 * Generated class for the ShoppingItem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'modal-shopping-item',
  templateUrl: 'shopping-item.html'
})
export class ShoppingItem {

  originalItem: string;
  item: string;

  constructor(public viewCtrl: ViewController,
              private params: NavParams,
              private shoppingList: ShoppingList) {
    this.item = params.get('item');
    this.originalItem = this.item;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  delete() {
    this.shoppingList
        .delete(this.originalItem)
        .then(() => this.dismiss());
  }

  save() {
    this.shoppingList
        .update(this.originalItem, this.item)
        .then(() => this.dismiss());
  }
}
