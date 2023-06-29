let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team", { timeout: 5000});
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toContain("GitHub for teams · Build like the best teams on the planet · GitHub");
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});

describe("Github page2 tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/enterprise", { timeout: 5000});
  });
  
  afterEach(() => {
    page.close();
  });

test("The page2 heading", async () => {
  const btnSelector2 = "h1.h1-mktg.mb-3.color-fg-default";
  await page.waitForSelector(btnSelector2, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector2, link => link.textContent);
  expect(actual).toContain("Build like the best") 
});


test("The page2 contains Sign in button", async () => {
  const btnSelector3 = "a.HeaderMenu-link.HeaderMenu-link--sign-in.flex-shrink-0.no-underline.d-block";
  await page.waitForSelector(btnSelector3, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector3, link => link.textContent);
  expect(actual).toContain("Sign in")
}); 


test("The page2 contains Sign in button", async () => {
  const btnSelector4 = "a.btn-mktg.mr-2.mt-2";
  await page.waitForSelector(btnSelector4, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector4, link => link.textContent);
  expect(actual).toContain("Start a free trial")
  });
});