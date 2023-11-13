import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html'
})
export class DishListComponent implements OnInit {
  dishes: Dish[];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }
}
