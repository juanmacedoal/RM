import { RealmadridPage } from './app.po';

describe('realmadrid App', function() {
  let page: RealmadridPage;

  beforeEach(() => {
    page = new RealmadridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
