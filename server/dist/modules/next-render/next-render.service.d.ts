export declare class NextService {
    private app;
    setApp(app: any): void;
    getApp(): any;
    render(page: string, req: any, res: any): Promise<void>;
    render(page: string, data: any, req: any, res: any): Promise<void>;
    private isIncomingMessage;
}
