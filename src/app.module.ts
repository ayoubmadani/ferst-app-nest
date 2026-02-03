import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // يجعل Config متاح في كل المشروع
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
