import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
    id:number
    name: string;
    price: string;
    seats: number;
    doors: number;
    transmission: string;
    suitcases: number;
    aircond: string;
    age: number;
    img1:string;
    img2:string;
    img3:string;
}

