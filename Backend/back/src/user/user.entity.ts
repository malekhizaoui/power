import { Column, Entity, PrimaryGeneratedColumn , OneToMany } from 'typeorm';
import {Car} from '../car/entities/car.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Number;

  @OneToMany(()=>Car, car =>car.users)
  cars : Car [];

  @Column()
  FirstName: String;

  @Column()
  LastName: String;

  @Column()
  email: String;

  @Column()
  phoneNumber: Number;

  @Column()
  password: String;

  @Column( {default: ""})
  image: String;
  
  @Column( {default: ""})
  adress: String;

  @Column( {default: null})
  cin: Number;

  @Column( {default: ""})
  type: String;
}
