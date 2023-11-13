import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  items;

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
}
