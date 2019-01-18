import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ifood } from './ifood';

const fsCollectionName = 'foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  cart = this.db.collection<Ifood>(fsCollectionName);

  constructor(private db: AngularFirestore ) {}

  getCartData$() {
    return this.cart.valueChanges();
  }
}
