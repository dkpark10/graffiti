import { PostItem, NavName } from 'custom-type';
declare type MockStatus = {
    [key in NavName]: PostItem[];
};
export declare const mockData: MockStatus;
export {};
