import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { FoodTableComponent } from './food-table/food-table.component';
import { FoodService } from './food.service';
import { ActionBarComponent } from './action-bar/action-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodTableComponent,
    ActionBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
