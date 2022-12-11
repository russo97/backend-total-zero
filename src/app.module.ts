import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://russo:Q5NP1ddXFvjMt0BP@projeto0.1rjdoqd.mongodb.net/test'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
