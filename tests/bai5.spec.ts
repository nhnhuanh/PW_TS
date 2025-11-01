import { test, expect } from '@playwright/test';
const DEMO_URL  = 'https://demoapp-sable-gamma.vercel.app/'
// test('allTextContents', async ({ page }) => {
// // Lấy tất cả options trong dropdown
// const dropdownOptions = page.locator('#demo-dropdown option');
// const allOptions = await dropdownOptions.allTextContents();

// // Lấy tất cả text trong danh sách
// const listItems = page.locator('.demo-list-item');
// const allTexts = await listItems.allTextContents();
// const allInnerTexts = await listItems.allInnerTexts();

// })
// test('toBe(value)', () => {

// })
// bài tập:
// 1. so sánh tên của user là Playwright Learner

 //2. so sánh Profile JSON có giá trị là
  //   {
  //   "id": 101,
  //   "role": "student",
  //   "active": true,
  //   "premium": false
  // }


  //span[text()='Danh sách phim']/ancestor::div[@class='ant-card-head']/following-sibling::div//div[contains(@class,'movie-card')]


  test('Bài tập UI Movies', async ({ page }) => {
  await page.goto(DEMO_URL);
  await page.getByRole('link', { name: 'Bài 3: Tổng hợp Text Methods' }).click();
  await page.getByRole('tab', { name: 'Expect Assertions' }).click();
  //1 tìm locator của 4 thẻ phim
  const movieCards = await page
    .locator(
      "//span[text()='Danh sách phim']/ancestor::div[@class='ant-card-head']/following-sibling::div//div[contains(@class,'movie-card')]"
    )
    .all();
  console.log('Số lượng movies,', movieCards.length);
  expect(movieCards).toHaveLength(4);
  //const moviesData: IMovieData[] = [];
  for (let i = 0; i < movieCards.length; i++) {
    //index =0 => slient code
    const card = movieCards[i];
    //lấy thông tin về thẻ phim
    const dataTitle = await card.getAttribute('data-title');
    console.log(dataTitle);
    const dataYear = await card.getAttribute('data-year');
    const dataRating = await card.getAttribute('data-rating');
    const dataGenres = await card.getAttribute('data-genres');
    const titleText = await card.locator('.ant-card-meta-detail span').nth(0).innerText();
    console.log('TitleTExt', titleText);
    const ratingText = await card.locator('.ant-card-meta-detail span').nth(1).innerText();
    console.log('ratingText', ratingText);
    const yearText = await card.locator('.ant-card-meta-description div').nth(0).innerText();
    console.log('yearText', yearText);
    await page.pause();
  }
});


test('hover trong PW', async ({ page }) => {
  await page.goto('https://demoapp-sable-gamma.vercel.app/');
  await page.getByRole('link', { name: 'Bài 4: Mouse Actions' }).click();
  await page.locator('//div[text()="Hover để xem tooltip"]').nth(0).hover();
  const toolTip = await page.locator('//div[@class="ant-tooltip-inner"]').innerText();
  console.log(toolTip);
  await expect(page.getByRole('tooltip')).toBeVisible();
  await page.pause();
});