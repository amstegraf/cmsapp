import { CmsappPage } from './app.po';

describe('cmsapp App', function() {
  let page: CmsappPage;

  beforeEach(() => {
    page = new CmsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
