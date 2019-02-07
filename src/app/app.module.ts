import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FoodTableComponent } from './food-table/food-table.component';
import { FoodService } from './food.service';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { RemoveTableComponent } from './remove-table/remove-table.component';
import { HeaderComponent } from './header/header.component';

const routes = [
  { path: '', component: ActionBarComponent },
  { path: 'add-item', component: ActionBarComponent },
  { path: 'remove-item', component: RemoveTableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FoodTableComponent,
    ActionBarComponent,
    RemoveTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
