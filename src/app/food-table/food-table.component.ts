import { Component, OnInit } from '@angular/core';
import { Ifood } from '../ifood';
import { FoodService} from '../food.service';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit {

  cartData: Ifood[];

  constructor( private foodService: FoodService ) {
    foodService.getCartData$().subscribe(data => {
      this.cartData = data;
    });
  }

  ngOnInit() {}

}
