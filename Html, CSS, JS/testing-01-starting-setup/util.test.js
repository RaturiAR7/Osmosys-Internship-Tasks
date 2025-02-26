const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
  const text2 = generateText("Anna", 28);
  expect(text2).toBe("Anna (28 years old)");
});

test("should ouput data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

test("Should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("should click around", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/");
  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Anna (28 years old)");
}, 10000);
