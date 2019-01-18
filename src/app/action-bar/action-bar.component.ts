import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Ifood } from '../ifood';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  foodData: Ifood[];
  errorMessage: string | false = false;

  constructor( private foodService: FoodService ) {
    foodService.getCartData$().subscribe(data => {
      this.foodData = data;
    });
  }

  ngOnInit() {
  }

  onSubmitForm(submittedForm) {
    let foodNameTest = submittedForm.value.name.toLowerCase();
    foodNameTest = foodNameTest.charAt(0).toUpperCase() + foodNameTest.slice(1);
    if (this.foodData.map( data => data.name ).includes(foodNameTest)) {
      this.errorMessage = 'FOOD ALREADY IN LIST!';
      console.log('error: food already included in array');
      return;
    }
    this.foodService.addCartData(
      foodNameTest,
      submittedForm.value.type,
      submittedForm.value.color
      );
    this.changeMessage();
  }
  changeMessage() {
    this.errorMessage = false;
  }

}
// onAddItem(newWord: string) {
//   let word = newWord.toLowerCase();
//   word = word.charAt(0).toUpperCase() + word.slice(1);
//   console.log(word);

//   if (this.cartData.map( data => data.name ).includes(word)) {
//     this.errorMessage = 'FOOD ALREADY EXISTS IN LIST!';
//     console.log('error: food already included in array');
//     return;
//   }
//   this.cartService.addToCart({ name: word });
//   console.log('Item Added: ' + word);
//   this.clearBox();
