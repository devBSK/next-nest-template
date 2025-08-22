import { NestMiddleware } from '@nestjs/common';
import { NextService } from './next-render.service';
export declare class NextMiddleware implements NestMiddleware {
    private readonly next;
    constructor(next: NextService);
    use(req: any, res: any): void;
}
