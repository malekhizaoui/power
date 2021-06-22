import { Entity, Column, PrimaryGeneratedColumn , OneToMany } from 'typeorm';
import{User} from '../../user/user.entity'
import {Car} from '../../car/entities/car.entity' 

Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;

    // @OneToMany(()=>)
    

    @Column()
    stars:number;

    
}
