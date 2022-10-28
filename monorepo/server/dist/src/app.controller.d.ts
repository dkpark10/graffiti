import { AppService } from './app.service';
import { PostItem } from 'custom-type';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    getTest(): string;
    getRandomTest(): string;
    getDataByCategory(category: string): Promise<PostItem[]>;
    getHome(request: Request): Promise<string>;
}
