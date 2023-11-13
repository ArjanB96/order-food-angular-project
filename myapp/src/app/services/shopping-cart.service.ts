import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: Dish[] = [];

  addToCart(dish: Dish): void {
    this.items.push(dish);
  }

  getItems(): Dish[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}
