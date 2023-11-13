import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Dish } from '../../models/dish.model';  

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  items: Dish[] = []; 

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
}
