import bizMockData from './Bizhub';
import cultureMockData from './Culturehub';
import entertainmentMockData from './Entertainmenthub';
import foodMockData from './Foodhub';
import issueMockData from './Issuehub';
import lifeMockData from './Lifehub';
import techMockData from './Techhub';
import tripMockData from './Triphub';
import { PostItem, NavName } from 'custom-type';

type MockStatus = {
  [key in NavName]: PostItem[];
};

export const mockData: MockStatus = {
  biz: bizMockData,
  culture: cultureMockData,
  entertainment: entertainmentMockData,
  food: foodMockData,
  issue: issueMockData,
  life: lifeMockData,
  tech: techMockData,
  trip: tripMockData,
  '': [],
};
