import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { DishService } from '../../services/dish.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';  

@Component({
    selector: 'app-dish-list',
    templateUrl: './dish-list.component.html',
  })
  export class DishListComponent implements OnInit {
    dishes: Dish[] = [];
  
    constructor(private dishService: DishService, private cartService: ShoppingCartService) {}
  
    ngOnInit(): void {
      this.dishes = this.dishService.getDishes();
    }
  
    addToCart(dish: Dish): void {
      this.cartService.addToCart(dish);  // Roep de addToCart-methode aan in ShoppingCartService
    }
  }