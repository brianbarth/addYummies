import { Component, OnInit } from '@angular/core';
import { Ifood } from '../ifood';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-remove-table',
  templateUrl: './remove-table.component.html',
  styleUrls: ['./remove-table.component.css']
})
export class RemoveTableComponent implements OnInit {

  cartData: Ifood[];
  numItems: number;

  constructor( private foodService: FoodService ) {
    foodService.getCartData$().subscribe(data => {
      this.cartData = data;
      this.numItems = data.length;
    });
  }

  onSubmitForm() {

  }

  removeItem() {

  }

  ngOnInit() {
  }

}
