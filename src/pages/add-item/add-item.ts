import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ShoppingList } from '../../providers/shopping-list';

/**
 * Generated class for the AddItem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItem {

  item: string;

  constructor(public viewCtrl: ViewController,
              private shoppingList: ShoppingList) {
  }

  addItem() {
    this.shoppingList
        .add(this.item)
        .then(() => this.dismiss());
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
