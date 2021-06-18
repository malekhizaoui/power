import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

 cars:Car[]=[];

  constructor(private CarService : CarService) {}

  ngOnInit(): void {
    this.getCars()
  }

  getCars():void{
    this.CarService.getCars()
    .subscribe((cars: Car[])=>{
      this.cars=cars
      console.log(this.cars)
    })
  }

  
}
