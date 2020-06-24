const login = require("../loginStage");

describe('CREATE DAY REPORT', () => {
    before(() => {
        login();
    });

it('it should click Create Day Report', () => {
    $("//div[@id='site-menu']//a[@qa='diary-link']").click();
});

it('should verify that Title is correct', () => {
    const actualText = $('//h1').getText();
    expect(actualText).eq('Daily reports');
});

    it('should check if CREATE DAILY REPORT is clickable',function (){
        const createDayReportButton = $("//a[@qa='create-day-report-button']");
        const result = createDayReportButton.isClickable()
        expect(result).true;
    });
    it('should',function (){
        $("//a[@qa='create-day-report-button']").click();
    });
    it('should mark I NEED HELP check box',function (){
        const element = $("//input[@id='input-0']");
        element.click();
        expect(element.isSelected()).true;
    });
    it('should mark I UNDERSTOOD EVERYTHING check box',function (){
        const element = $("//input[@id='input-1']");
        element.click();
        expect(element.isSelected()).true
    });
});


