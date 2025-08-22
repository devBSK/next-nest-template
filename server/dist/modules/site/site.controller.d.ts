import { Request, Response } from 'express';
import { NextService } from '../next-render/next-render.service';
export declare class SiteController {
    private readonly next;
    constructor(next: NextService);
    homePage(req: Request, res: Response): Promise<any>;
    handle(req: Request, res: Response): Promise<any>;
}
