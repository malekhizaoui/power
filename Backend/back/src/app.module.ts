import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Car } from './car/entities/car.entity';
import { Reservation } from './reservation/entities/reservation.entity';


import { CarModule } from './car/car.module';
import { Connection } from 'typeorm';
import { RatingModule } from './rating/rating.module';
import { ReservationModule } from './reservation/reservation.module';
import { MessagesModule } from './messages/messages.module';
import { CommentModule } from './comment/comment.module';
@Module({
  imports: [
    ReservationModule,
    UserModule,
    CarModule,
    RatingModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'power',
      entities: [Car, User, Reservation],
      synchronize: true,
    }),
    MessagesModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private connection: Connection
  ) {

  }
}
