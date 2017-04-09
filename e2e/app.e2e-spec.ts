import { HealthLyneAngularPage } from './app.po';

describe('health-lyne-angular App', function() {
  let page: HealthLyneAngularPage;

  beforeEach(() => {
    page = new HealthLyneAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
