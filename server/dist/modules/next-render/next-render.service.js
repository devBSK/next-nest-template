"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextService = void 0;
const common_1 = require("@nestjs/common");
let NextService = class NextService {
    setApp(app) {
        this.app = app;
    }
    getApp() {
        return this.app;
    }
    async render(page, arg2, arg3, arg4) {
        if (this.isIncomingMessage(arg2)) {
            await this.app.render(arg2, arg3, page);
        }
        else {
            await this.app.render(arg3, arg4, page, arg2);
        }
    }
    isIncomingMessage(arg) {
        return typeof arg.httpVersion === 'string';
    }
};
exports.NextService = NextService;
exports.NextService = NextService = __decorate([
    (0, common_1.Injectable)()
], NextService);
//# sourceMappingURL=next-render.service.js.map