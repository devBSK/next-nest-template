"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteModule = void 0;
const common_1 = require("@nestjs/common");
const site_controller_1 = require("./site.controller");
const next_render_module_1 = require("../next-render/next-render.module");
const next_render_middleware_1 = require("../next-render/next-render.middleware");
let SiteModule = class SiteModule {
    constructor() { }
    configure(consumer) {
        consumer.apply(next_render_middleware_1.NextMiddleware).forRoutes({
            path: '_next*',
            method: common_1.RequestMethod.GET,
        });
        consumer.apply(next_render_middleware_1.NextMiddleware).forRoutes({
            path: 'static*',
            method: common_1.RequestMethod.GET,
        });
        consumer.apply(next_render_middleware_1.NextMiddleware).forRoutes({
            path: 'favicon.ico',
            method: common_1.RequestMethod.GET,
        });
    }
};
exports.SiteModule = SiteModule;
exports.SiteModule = SiteModule = __decorate([
    (0, common_1.Module)({
        imports: [next_render_module_1.NextModule],
        controllers: [site_controller_1.SiteController],
    }),
    __metadata("design:paramtypes", [])
], SiteModule);
//# sourceMappingURL=site.module.js.map