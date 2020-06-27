const {expect} = require('chai');
const login = require("../loginStage");

describe('CREATE DAY REPORT', () => {
    before(() => {
        login();
    });

    it('it should click Create Day Report', () => {
        $("//div[@id='site-menu']//a[@qa='diary-link']").click();
    });

    it('should verify that Title of the page is correct', () => {
        const actualText = $('//h1').getText();
        expect(actualText).eq('Daily reports');
    });

    it('should click CREATE DAILY REPORT', function () {
        $("//a[@qa='create-day-report-button']").click();
    });

    it('should mark I NEED HELP checkbox', function () {
        const element = $("//input[@id='input-0']");
        element.click();
        expect(element.isSelected()).true;
    });

    it('should mark I UNDERSTOOD EVERYTHING checkbox', function () {
        const element = $("//input[@id='input-1']");
        element.click();
        expect(element.isSelected()).true
    });


    // working in Git_ Liza (true:-)


});
//work

//});




//});

//Mariia's changes




/////Sveta+1++


//commit

/////Irina