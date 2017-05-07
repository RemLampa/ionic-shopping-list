import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ShoppingItem } from '../shopping-item/shopping-item';
import { AddItem } from '../add-item/add-item';
import { ShoppingList } from '../../providers/shopping-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: Array<string>;

  constructor(public modalCtrl: ModalController,
              private shoppingList: ShoppingList) {
    this.updateItems();
  }

  showItem(item) {
    let shoppingItemModal = this.modalCtrl.create(ShoppingItem, { item });

    shoppingItemModal.onDidDismiss(() => this.updateItems());

    shoppingItemModal.present();
  }

  addItem() {
    let shoppingItemModal = this.modalCtrl.create(AddItem);

    shoppingItemModal.onDidDismiss(() => this.updateItems());

    shoppingItemModal.present();
  }

  updateItems() {
    this.shoppingList
        .getList()
        .then(shoppingList => this.items = shoppingList);
  }
}