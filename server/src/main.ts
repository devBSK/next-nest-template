import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NextModule } from './modules/next-render/next-render.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app
    .get(NextModule)
    .prepare({ dir: './client/src/' })
    .then(async () => {
      await app.listen(process.env.PORT || 3000, '0.0.0.0');
      console.log(`Ready on ${await app.getUrl()} with Next.js!`);
    });
}
bootstrap();
