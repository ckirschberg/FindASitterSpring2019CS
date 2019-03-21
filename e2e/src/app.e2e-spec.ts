import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 1.0: Verify that I can go to the login component
  // 1.1: ...

  it('1.0: Verify that I can go to the login component', () => {
    browser.get('home/login');
    let loginText = element(by.id('login')).getText();

    expect(loginText).toEqual("Login");
  });

  it('login by filling out username and password, landing page afterwards', () => {
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('admin');
    
    element(by.id('submitLogin')).click();
    
    // Cleaner way to check that you are in the right place.
    expect(browser.getCurrentUrl()).toContain('/portal/display-quizzes');

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
