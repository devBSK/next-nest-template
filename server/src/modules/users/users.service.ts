/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  getHello() {
    return 'hello world from next redux';
  }
}
