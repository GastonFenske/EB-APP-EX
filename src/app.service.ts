import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string, status: number } {
    return {
      message: 'Hello World! HealthCheck passed from AWS',
      status: 200,
    }
  }
}
