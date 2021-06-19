import { Entity, Column, PrimaryGeneratedColumn , OneToMany } from 'typeorm';
import{User} from '../../user/user.entity'

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => User, user => user.FirstName) users: User[];  

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  seats: number;

  @Column()
  doors: number;

  @Column()
  transmission: string;

  @Column()
  suitcases: number;

  @Column()
  aircond: string;

  @Column()
  age: number;

  @Column()
  img1: string;

  @Column()
  img2: string;

  @Column()
  img3: string;
}