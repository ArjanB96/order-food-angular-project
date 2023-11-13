import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  getDishes(): Dish[] {
    // Connect with API, Dummy data for now
    return [
      { name: 'Gerecht 1', price: 10, imageURL: 'url1' },
      { name: 'Gerecht 2', price: 15, imageURL: 'url2' },
    ];
  }
}
