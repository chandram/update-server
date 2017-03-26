import { UpdateServerPage } from './app.po';

describe('update-server App', () => {
  let page: UpdateServerPage;

  beforeEach(() => {
    page = new UpdateServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
