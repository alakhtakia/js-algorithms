import { JsAlgorithmsPage } from './app.po';

describe('js-algorithms App', () => {
  let page: JsAlgorithmsPage;

  beforeEach(() => {
    page = new JsAlgorithmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
