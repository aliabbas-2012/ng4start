import { NgCastTutorialPage } from './app.po';

describe('ng-cast-tutorial App', function() {
  let page: NgCastTutorialPage;

  beforeEach(() => {
    page = new NgCastTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
