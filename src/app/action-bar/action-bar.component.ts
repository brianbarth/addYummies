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
  numItems: number;

  constructor( private foodService: FoodService ) {
    foodService.getCartData$().subscribe(data => {
      this.foodData = data;
      this.numItems = data.length;
    });
  }

  ngOnInit() {
  }

  onSubmitForm(submittedForm) {
    if (submittedForm.invalid) {
      console.log('the form is invalid');
      return;
    }
    console.log('the form is valid');
    const foodNameTest = submittedForm.value.name.toLowerCase();
    const foodTypeTest = submittedForm.value.type.toLowerCase();
    const foodColorTest = submittedForm.value.color.toLowerCase();
    if (this.foodData.map( data => data.name ).includes(foodNameTest)) {
      this.errorMessage = foodNameTest.toUpperCase() + ' Already In List!';
      console.log('error: food already included in array');
      submittedForm.reset();
      return;
    }
    this.foodService.addCartData(
      foodNameTest,
      foodTypeTest,
      foodColorTest
    );
    this.errorMessage = false;
    submittedForm.reset();
  }
  resetMessage() {
    this.errorMessage = false;
  }
}

