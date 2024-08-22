import { Controller, Get, Post, Inject, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post('')
  createUsers(@Body() body: any) {
    return this.natsClient.send({ cmd: 'createUser' }, body);
  }

  @Get('')
  getUsers() {
    this.natsClient.send({ cmd: 'getUser' }, {});
  }
}
