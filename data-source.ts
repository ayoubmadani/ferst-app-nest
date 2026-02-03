import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from 'src/user/entities/user.entity';

config(); // تحميل متغيرات .env

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  // استخدم SSL فقط إذا كان موجود في env
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});
