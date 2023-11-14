import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Börek',
        cookTime: '10-20',
        price: 3,
        favorite: false,
        origins: ['Turkije'],
        imageUrl: '/assets/images/borek.jpg',
        tags: ['Lunch'],
      },
      {
        id: 2,
        name: 'Kapsalon',
        price: 7,
        cookTime: '20-30',
        favorite: true,
        origins: ['Nederland'],
        imageUrl: '/assets/images/kapsalon.jpg',
        tags: ['Dinner', 'Lunch'],
      },
      {
        id: 3,
        name: 'Pita Shoarma',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Wereldwijd'],
        imageUrl: '/assets/images/pita shoarma.jpg',
        tags: ['FastFood'],
      },
      {
        id: 4,
        name: 'Pizza Salami',
        price: 12,
        cookTime: '15-20',
        favorite: true,
        origins: ['Italië'],
        imageUrl: '/assets/images/pizza salami.jpg',
        tags: ['FastFood'],
      },
      {
        id: 5,
        name: 'Turkse Pizza',
        price: 5,
        cookTime: '40-50',
        favorite: false,
        origins: ['Turkije'],
        imageUrl: '/assets/images/turkse pizza.jpg',
        tags: ['Dinner', 'Lunch'],
      },
    ]
  }
}
