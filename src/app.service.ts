import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  getHello(): string {
    // نحصل على المتغير من .env، وإذا لم يوجد نرجع القيمة الافتراضية
    const val = this.config.get<string>('TEST_ENV') ?? 'no env';
    return val;
  }
}
