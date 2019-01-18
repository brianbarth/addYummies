import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ifood } from './ifood';

const fsCollectionName = 'foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  cart = this.db.collection<Ifood>(fsCollectionName);
  newCartItem: Ifood;

  constructor(private db: AngularFirestore ) {}

  getCartData$() {
    return this.cart.valueChanges();
  }

  addCartData(name: string, type: string, color: string) {
    this.newCartItem = {name: name, type: type, color: color};
    console.log(this.newCartItem);
    this.cart.add(this.newCartItem);
  }
}
