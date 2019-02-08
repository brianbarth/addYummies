import { Component, OnInit } from '@angular/core';
import { Ifood } from '../ifood';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-remove-table',
  templateUrl: './remove-table.component.html',
  styleUrls: ['./remove-table.component.css']
})
export class RemoveTableComponent implements OnInit {

  foodData: Ifood[];
  numItems: number;
  errorMessage: string | false = false;

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
    const foodNameTest = submittedForm.value.name.toLowerCase();
    if (this.foodData.map( data => data.name ).includes(foodNameTest)) {
      this.foodService.removeFoodItem(foodNameTest);
      this.errorMessage = false;
      submittedForm.reset();
      return;
    }
    console.log('your item is not in db!');
    this.errorMessage = 'not in database!';
    submittedForm.reset();
  }

  resetMessage() {
    this.errorMessage = false;
  }

}
