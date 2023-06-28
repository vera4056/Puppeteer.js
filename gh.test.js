let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForTimeout(5000);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    await page.waitForTimeout(5000);
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    await page.waitForTimeout(5000);
    expect(actual).toContain("Get started with Team")
  });
});


test("The page2 heading", async () => {
  await page.goto("https://github.com/enterprise"); 
  const btnSelector2 = "h1.h1-mktg.mb-3.color-fg-default";
  await page.waitForSelector(btnSelector2, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector2, link => link.textContent);
  await page.waitForTimeout(5000);
  expect(actual).toContain("Build like the best") 
});

afterEach(() => {
  page.close();
});

test("The page2 contains Sign in button", async () => {
  await page.goto("https://github.com/enterprise"); 
  const btnSelector3 = "a.HeaderMenu-link.HeaderMenu-link--sign-in.flex-shrink-0.no-underline.d-block";
  await page.waitForSelector(btnSelector3, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector3, link => link.textContent);
  await page.waitForTimeout(5000);
  expect(actual).toContain("Sign in")
}); 

afterEach(() => {
  page.close();
});

test("The page2 contains Sign in button", async () => {
  await page.goto("https://github.com/enterprise"); 
  const btnSelector4 = "a.btn-mktg.mr-2.mt-2";
  await page.waitForSelector(btnSelector4, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector4, link => link.textContent);
  await page.waitForTimeout(5000);
  expect(actual).toContain("Start a free trial")
});

afterEach(() => {
  page.close();
});