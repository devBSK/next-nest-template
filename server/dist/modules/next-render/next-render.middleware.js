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
exports.NextMiddleware = void 0;
const common_1 = require("@nestjs/common");
const next_render_service_1 = require("./next-render.service");
let NextMiddleware = class NextMiddleware {
    constructor(next) {
        this.next = next;
    }
    use(req, res) {
        const handle = this.next.getApp().getRequestHandler();
        handle(req, res);
    }
};
exports.NextMiddleware = NextMiddleware;
exports.NextMiddleware = NextMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [next_render_service_1.NextService])
], NextMiddleware);
//# sourceMappingURL=next-render.middleware.js.map