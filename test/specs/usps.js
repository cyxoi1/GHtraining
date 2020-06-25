const {expect} = require('chai');
import login from "../loginUSPS";


describe('CREATE ACCOUNT', () => {
    before(() => {
        login();
    });

    it('should verify that LOGO is displayed ', function () {
        const logo = $('#usps-logo');
        const result = logo.isDisplayed();
        expect(result).true;
    });

    // it('should select language ', function () {
    //     const languageDropDown = $('#slanguage');
    //     languageDropDown.selectByVisibleText('Español');
    //     browser.pause(3000);
    // });
    //
    // it('should select language ', function () {
    //     const languageDropDown = $('#slanguage');
    //     languageDropDown.selectByVisibleText('Inglés');
    //     browser.pause(3000);
    // });

    it('should input Username', function () {
        const userName = $("#tuserName");
        userName.setValue('user1111');
    });

    it('should input Username', function () {
        const userName = $("#tPassword");
        userName.setValue('111111');
    });

    it('should choose the first question', function () {
        const firstQ = $("#ssec1");
        firstQ.selectByVisibleText('In what city were you born?');
    });

    it('should verify that first question is selected', function () {
        const firstQ =  $("#01");
        firstQ.scrollIntoView();
        const result = firstQ.isSelected();
        expect(result).true;
        browser.pause(2000);
    });

    it('should fill the input of the first question', function () {
        const inputAnswer = $("#tsecAnswer1");
        inputAnswer.setValue('Nizhny');
        browser.pause(3000);
    });

    it('should choose the second question', function () {
        const firstQ = $("#ssec2");
        firstQ.selectByVisibleText('What is your favorite movie?');
        browser.pause(3000);
    });

    it('should verify that the second question is selected', function () {
        const secondQ =  $("#ssec2");
        secondQ.scrollIntoView();
        const result = secondQ.isSelected();
        expect(result).true;
        browser.pause(200);
    });

    it('should fill the input of the second question', function () {
        const inputAnswer = $("#tsecAnswer2");
        inputAnswer.setValue('Terminator');
        browser.pause(3000);
    });




})