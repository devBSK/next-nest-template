import { Module } from '@nestjs/common';
import { NextModule } from '../modules/next-render/next-render.module';
import { UsersModule } from '../modules/users/users.module';
import { SiteModule } from '../modules/site/site.module';

@Module({
  imports: [NextModule, UsersModule, SiteModule],
})
export class AppModule {}
