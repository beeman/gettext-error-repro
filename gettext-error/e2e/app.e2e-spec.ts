import { GettextErrorPage } from './app.po';

describe('gettext-error App', function() {
  let page: GettextErrorPage;

  beforeEach(() => {
    page = new GettextErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
