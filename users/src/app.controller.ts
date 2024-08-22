import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: any): string {
    console.log('DATA', data);
    return data;
  }

  @MessagePattern({ cmd: 'getUsers' })
  getUser(): string {
    return this.appService.getHello();
  }
}
