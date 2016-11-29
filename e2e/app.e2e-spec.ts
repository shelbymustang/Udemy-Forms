import { UdemyFormsPage } from './app.po';

describe('udemy-forms App', function() {
  let page: UdemyFormsPage;

  beforeEach(() => {
    page = new UdemyFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('UF05 works!');
  });
});
