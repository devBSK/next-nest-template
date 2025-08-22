import { Injectable } from '@nestjs/common';

@Injectable()
export class NextService {
  private app!: any;

  public setApp(app: any): void {
    this.app = app;
  }

  public getApp(): any {
    return this.app;
  }

  public async render(page: string, req, res): Promise<void>;

  public async render(page: string, data: any, req, res): Promise<void>;

  public async render(
    page: string,
    arg2: any,
    arg3: any,
    arg4?: any,
  ): Promise<void> {
    if (this.isIncomingMessage(arg2)) {
      await this.app.render(arg2, arg3, page);
    } else {
      await this.app.render(arg3, arg4, page, arg2);
    }
  }

  private isIncomingMessage(arg: any) {
    return typeof arg.httpVersion === 'string';
  }
}
