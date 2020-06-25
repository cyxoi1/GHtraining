// const link = 'https://likejean.github.io/homework-5/';
// const namePage = 'Complex Counter App';
// const headerName = 'h1.header';
// const subheaderName = '//h3[@class="total-count"]';
// const defaultCounterName = '//div[@class]/h3';
// const countValue = 'span.badge';
// const editCounterTitle = '//div/label[text()="Edit Counter Title: "]';
// const llf = "//button[@name='negative']";
// const llfValue = "//input[@name='lower']";
// const leftCrossButton = "//button[text()='X']";
// const ulf = "//button[@name='positive']";
// const ulfValue = "//input[@name='upper']";
// const rightCrossButton = "//button[text()='X']";
//
//
// describe('Before each', ()=> {
//     it('open the Application', () => {
//         browser.url(link);
//     });
// });
//
// describe('Default Counter', () => {
//     it('should return the correct page', () => {
//         const text = browser.getTitle();
//         expect(text).toEqual(namePage);
//     });
//
//     it('should check if "Counters" is present ',  () => {
//         const text = $(headerName).getText();
//         expect(text).toEqual('Counters');
//     });
//
//     it('should check if TV has title "Total: 0" ',  () => {
//         const text = $(subheaderName).getText();
//         expect(text).toEqual('Total: 0');
//     });
//
//     it('should Default name has title "1. Default Counter"', () => {
//         const text = $(defaultCounterName).getText();
//         expect(text).toEqual('1. Default Counter');
//     });
//
//     it('should check a CV = 0',  () => {
//         const text = $(countValue).getText();
//         expect(text).toEqual('0');
//     });
//
//     it('should check if Edit Counter Title is present ',  () => {
//         const text = $(editCounterTitle).getText();
//         expect(text).toEqual('Edit Counter Title:');
//     });
//
//     it('should check llf is clickable',  () => {
//         const result = $(llf).isClickable();
//         expect(result).toEqual(true);
//     });
//
//     it('should "1" is present',  () => {
//         $(llf).click();
//         browser.waitUntil(() => $(llf).isDisplayed() === true);
//         const text = $(llfValue).getValue();
//         expect(text).toEqual('1');
//     });
//
//     it('should check that spinner increases value +1',  () => {
//         $(llfValue).click();
//         browser.keys('ArrowUp');
//         const text = $(llfValue).getValue();
//         expect(text).toEqual('2');
//     });
//
//     it('should check that spinner decreases value -1',  () => {
//         browser.keys('ArrowDown');
//         const text = $(llfValue).getValue();
//         expect(text).toEqual('1');
//     });
//
//     it('should left red cross button is clickable',  () => {
//         const result = $(leftCrossButton).isClickable();
//         expect(result).toEqual(true);
//     });
//
//     it('should check if left red button with X is working',  () => {
//         $(leftCrossButton).click();
//         const text = $(llf).getText();
//         expect(text).toEqual('CHANGE STEP OPTIONS?')
//     });
//
//     it('should check ulf is clickable',  () => {
//         const result = $(ulf).isClickable();
//         expect(result).toEqual(true);
//     });
//
//     it('should 3 is present',  () => {
//         $(ulf).click();
//         browser.waitUntil(() => $(ulf).isDisplayed() === true);
//         const text = $(ulfValue).getValue();
//         expect(text).toEqual('3');
//     });
//
//     it('should check that spinner increases value +1',  () => {
//         $(ulfValue).click();
//         browser.keys('ArrowUp');
//         const text = $(ulfValue).getValue();
//         expect(text).toEqual('4');
//     });
//
//     it('should check that spinner decreases value -1',  () => {
//         browser.keys('ArrowDown');
//         const text = $(ulfValue).getValue();
//         expect(text).toEqual('3');
//     });
//
//     it('should right red cross button is clickable',  () => {
//         const result = $(rightCrossButton).isClickable();
//         expect(result).toEqual(true);
//     });
//
//     it('should check if right red button with X is working',  () => {
//         $(rightCrossButton).click();
//         const text = $(ulf).getText();
//         expect(text).toEqual('CHANGE STEP OPTIONS?')
//     });
//
//     it('should verify that ABs and Sbs are present',  () => {
//        browser.$$(subButtons).includes(-1, -2, -3, 1, 2, 3);
//     });
//
//
// });
//
//
//
//
// //Tanya
// // delete
// // Reset
// // subButtons-1, 3
// // Default Counter
// //boundary tests
//
// //refresh page
//
// //Describe
// // Add counter:
// // Enter counter title , title
// // Enter initial count
// // Input, spinner
//
// //Describe
// //second counter
//
// //scrollIntoView
//
//
//
//
//
//
//
//
//
