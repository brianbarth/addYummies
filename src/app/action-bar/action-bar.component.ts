import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  constructor( private foodService: FoodService ) { }

  ngOnInit() {
  }

  onSubmitForm(submittedForm) {
    this.foodService.addCartData(
      submittedForm.value.name,
      submittedForm.value.type,
      submittedForm.value.color
      );
  }

}
