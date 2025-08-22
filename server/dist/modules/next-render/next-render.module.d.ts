import { NextService } from './next-render.service';
export declare class NextModule {
    private readonly next;
    constructor(next: NextService);
    prepare(options?: {}): Promise<void>;
}
