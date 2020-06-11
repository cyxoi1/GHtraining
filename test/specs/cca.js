const link = 'https://likejean.github.io/homework-5/';
const namePage = 'Complex Counter App';
const headerName = 'h1.header';
const subheaderName = '//h3[@class="total-count"]';
const defaultCounterName = '//div[@class]/h3';
const countValue = 'span.badge';
const editCounterTitle = '//div/label[text()="Edit Counter Title: "]';


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
        expect(text).toEqual('Edit Counter Title');
    });

});


