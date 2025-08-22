import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { SiteController } from './site.controller';
import { NextModule } from '../next-render/next-render.module';
import { NextMiddleware } from '../next-render/next-render.middleware';

@Module({
  imports: [NextModule],
  controllers: [SiteController],
})
export class SiteModule {
  constructor() {}

  configure(consumer: MiddlewareConsumer) {
    // handle scripts
    consumer.apply(NextMiddleware).forRoutes({
      path: '_next*',
      method: RequestMethod.GET,
    });

    // handle other assets
    consumer.apply(NextMiddleware).forRoutes({
      path: 'static*',
      method: RequestMethod.GET,
    });

    consumer.apply(NextMiddleware).forRoutes({
      path: 'favicon.ico',
      method: RequestMethod.GET,
    });
  }
}
