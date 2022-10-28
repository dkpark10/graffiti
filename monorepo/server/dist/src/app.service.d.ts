import { NavName, PostItem } from 'custom-type';
export declare class AppService {
    constructor();
    getServerSideRender(url: string): Promise<string>;
    getDataByCategory(category: NavName): Promise<PostItem[]>;
}
