import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Car } from './car/entities/car.entity';

import { CarModule } from './car/car.module';
import { Connection } from 'typeorm';
import { RatingModule } from './rating/rating.module';
@Module({
  imports: [
    UserModule,
    CarModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'power',
      entities: [Car, User],
      synchronize: true,
    }),
    RatingModule,
    
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
