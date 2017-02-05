import { BreweryPage } from './app.po';

describe('brewery App', function() {
  let page: BreweryPage;

  beforeEach(() => {
    page = new BreweryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
