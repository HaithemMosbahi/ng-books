import { NgBooksPage } from './app.po';

describe('ng-books App', () => {
  let page: NgBooksPage;

  beforeEach(() => {
    page = new NgBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
