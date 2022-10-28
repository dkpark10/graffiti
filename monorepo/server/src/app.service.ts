import { Injectable } from '@nestjs/common';
import { NavName, PostItem } from 'custom-type';
import { mockData } from '@/assets/hubmock/index';
import { join } from 'path';
import { renderToString } from 'vue/server-renderer';
import { readFile } from 'fs';

@Injectable()
export class AppService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async getServerSideRender(url: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const manifest = require('../ssr/server/ssr-manifest.json');
    const appPath = join(__dirname, '../ssr', 'server', manifest['app.js']);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const createApp = require(appPath).default;

    const { app, router } = await createApp();

    router.push(url);
    await router.isReady();
    let appContent = await renderToString(app);

    return new Promise((res) => {
      readFile(
        join(__dirname, '../ssr/client/index.html'),
        'utf8',
        (err, html) => {
          if (err) {
            throw err;
          }

          appContent = `<div id="app">${appContent}</div>`;
          html = html
            .toString()
            .replace('<div id="app"></div>', `${appContent}`);
          res(html);
        },
      );
    });
  }

  getDataByCategory(category: NavName): Promise<PostItem[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(mockData[category]);
      }, 200);
    });
  }
}
