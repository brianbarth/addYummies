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

  sortByName() {
    console.log('sorted by name');
    this.cartData = this.cartData.sort(function(a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }
  sortByType() {
    console.log('sorted by type');
    this.cartData = this.cartData.sort(function(a, b) {
      if (a.type < b.type) { return -1; }
      if (a.type > b.type) { return 1; }
      return 0;
    });
  }
  sortByColor() {
    console.log('sorted by color');
    this.cartData = this.cartData.sort(function(a, b) {
      if (a.color < b.color) { return -1; }
      if (a.color > b.color) { return 1; }
      return 0;
    });
  }

  ngOnInit() {}

}
