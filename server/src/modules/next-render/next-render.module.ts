import { Module } from '@nestjs/common';
import next from 'next';

import { NextService } from './next-render.service';

@Module({
  providers: [NextService],
  exports: [NextService],
})
export class NextModule {
  constructor(private readonly next: NextService) {}

  public async prepare(options = {}) {
    const app = next({
      dev: process.env.NODE_ENV !== 'production',
      ...options,
    });
    return app.prepare().then(() => this.next.setApp(app));
  }
}
