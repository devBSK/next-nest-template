"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const next_render_module_1 = require("./modules/next-render/next-render.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app
        .get(next_render_module_1.NextModule)
        .prepare({ dir: './client/src/' })
        .then(async () => {
        await app.listen(process.env.PORT || 3000, '0.0.0.0');
        console.log(`Ready on ${await app.getUrl()} with Next.js!`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map