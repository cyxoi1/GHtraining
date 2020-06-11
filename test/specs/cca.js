const link = 'https://likejean.github.io/homework-5/';
const namePage = 'Complex Counter App';
const headerName = 'h1.header';
const subheaderName = '//h3[@class="total-count"]';
const defaultCounterName =


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

    it('should check if "Total: 0" is present ',  () => {
        const text = $(subheaderName).getText();
        expect(text).toEqual('Total: 0');
    });

    it('should Default name is present', () => {
        const =
        expect().toEqual();

    });
});


