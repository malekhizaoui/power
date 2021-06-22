import { Entity, Column, PrimaryGeneratedColumn , ManyToMany } from 'typeorm';
import{User} from '../../user/user.entity'
import {Car} from '../../car/entities/car.entity' 

Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToMany()


    @Column()
    stars:number;

    
}
