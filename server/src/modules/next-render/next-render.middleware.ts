import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextService } from './next-render.service';

@Injectable()
export class NextMiddleware implements NestMiddleware {
  constructor(private readonly next: NextService) {}

  public use(req, res) {
    const handle = this.next.getApp().getRequestHandler();
    handle(req, res);
  }
}
