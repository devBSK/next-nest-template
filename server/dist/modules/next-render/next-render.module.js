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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextModule = void 0;
const common_1 = require("@nestjs/common");
const next_1 = __importDefault(require("next"));
const next_render_service_1 = require("./next-render.service");
let NextModule = class NextModule {
    constructor(next) {
        this.next = next;
    }
    async prepare(options = {}) {
        const app = (0, next_1.default)({
            dev: process.env.NODE_ENV !== 'production',
            ...options,
        });
        return app.prepare().then(() => this.next.setApp(app));
    }
};
exports.NextModule = NextModule;
exports.NextModule = NextModule = __decorate([
    (0, common_1.Module)({
        providers: [next_render_service_1.NextService],
        exports: [next_render_service_1.NextService],
    }),
    __metadata("design:paramtypes", [next_render_service_1.NextService])
], NextModule);
//# sourceMappingURL=next-render.module.js.map