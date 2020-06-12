const link = 'https://likejean.github.io/homework-5/';
const namePage = 'Complex Counter App';
const headerName = 'h1.header';
const subheaderName = '//h3[@class="total-count"]';
const defaultCounterName = '//div[@class]/h3';
const countValue = 'span.badge';
const editCounterTitle = '//div/label[text()="Edit Counter Title: "]';
const llf = "//button[@name='negative']";
const llfValue = "//input[@name='lower']";


describe('Before each', ()=> {
    it('open the Application', () => {
        browser.url(link);
    });
});

describe('Default Counter', () => {
    it('should return the correct page', () => {
        const text = browser.getTitle();
        expect(text).toEqual(namePage);
    });

    it('should check if "Counters" is present ',  () => {
        const text = $(headerName).getText();
        expect(text).toEqual('Counters');
    });

    it('should check if TV has title "Total: 0" ',  () => {
        const text = $(subheaderName).getText();
        expect(text).toEqual('Total: 0');
    });

    it('should Default name has title "1. Default Counter"', () => {
        const text = $(defaultCounterName).getText();
        expect(text).toEqual('1. Default Counter');
    });

    it('should check a CV = 0',  () => {
        const text = $(countValue).getText();
        expect(text).toEqual('0');
    });

    it('should check if Edit Counter Title is present ',  () => {
        const text = $(editCounterTitle).getText();
        expect(text).toEqual('Edit Counter Title:');
    });

    it('should check llf is clickable',  () => {
        const result = $(llf).isClickable();
        expect(result).toEqual(true);
    });

    it('should 1 is present',  () => {
        $(llf).click();
        browser.waitUntil(() => $(llf).isDisplayed() === true);
        const text = $(llfValue).getValue();
        expect(text).toEqual('1');
    });

    it('should check that spinner increase value +1',  () => {
        $(llfValue).click();
        browser.keys('ArrowUp');
        const text = $(llfValue).getValue();
        expect(text).toEqual('2');
    });

    it('should check that spinner increase value -1',  () => {
        browser.keys('ArrowDown');
        const text = $(llfValue).getValue();
        expect(text).toEqual('1');
    });
});

// describe('', () => {
//     it('should ',  () => {
//
//     });
// })




