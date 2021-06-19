import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
<<<<<<< HEAD
=======
  exports: [TypeOrmModule, UserService],
>>>>>>> ce6909466aa282bb0f82125d532d230fe4ecd0b9
})
export class UserModule {}
