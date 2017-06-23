import { ComUChatPage } from './app.po';

describe('com-u-chat App', () => {
  let page: ComUChatPage;

  beforeEach(() => {
    page = new ComUChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
