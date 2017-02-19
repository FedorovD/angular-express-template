import { AngularExpressTemplatePage } from './app.po';

describe('angular-express-template App', function() {
  let page: AngularExpressTemplatePage;

  beforeEach(() => {
    page = new AngularExpressTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
