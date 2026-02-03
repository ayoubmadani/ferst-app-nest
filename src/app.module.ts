import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DATABASE_URL'),
        entities: [User],
        synchronize: true, // فقط للتطوير، لا تستخدم في الإنتاج
        ssl: {
          rejectUnauthorized: false, // ضروري للاتصال بـ Prisma/Heroku/Cloud DB
        },
      }),
    }),
    UserModule,
  ],
})
export class AppModule {}
