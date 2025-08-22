import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { NextService } from '../next-render/next-render.service';

@Controller()
export class SiteController {
  constructor(private readonly next: NextService) {}

  @Get()
  public async homePage(@Req() req: Request, @Res() res: Response) {
    return this.next.getApp().getRequestHandler()(req, res);
  }

  @Get('*')
  public async handle(@Req() req: Request, @Res() res: Response) {
    return this.next.getApp().getRequestHandler()(req, res);
  }
}
