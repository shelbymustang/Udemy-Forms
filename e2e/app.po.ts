import { browser, element, by } from 'protractor';

export class UdemyFormsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('UF05-root h1')).getText();
  }
}
