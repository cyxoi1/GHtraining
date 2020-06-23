const { expect } = require('chai'); // returns object: assert, expect (деструктуризация массива)


describe('', () =>{
    before( () => {
        browser.url('https://stage.pasv.us/user/register');
    });

    it('should verify the title of the page', function () {
        const actualText = $('//h1').getText();
        const expectedText = 'User Register';
        expect(actualText).eq(expectedText);
    });

    it('should verify that Submit button is disabled', function () {
        const button = $('//button[@type="submit"]').isClickable();
        expect(button).eq(false);
    });

    it('should fill out the input field of First Name', function () {
        const inputFirstName = $('//input[@name="firstName"]');
        inputFirstName.setValue('Ekaterina');
    });

    it('should verify that the First Name input is valid', function () {
        const inputFirstName = $('//input[@name="firstName"]');
        browser.keys('Tab');
        browser.pause(5000);
        const result = inputFirstName.getAttribute('class').includes('is-valid');
        expect(result).eq(true);
    });

    it('should fill out the field Last Name', function () {
        const inputLastName = $('//input[@name="lastName"]');
        inputLastName.setValue('Avdeeva');
        const text = inputLastName.getValue();
        expect(text).eq('Avdeeva');
    });

    it('should fill out phone field', function () {
        const inputPhone = $('//input[@name="phone"]');
        inputPhone.setValue('13456667777');
        const text = inputPhone.getValue();
        expect(text).eq('13456667777');
    });

    it('should verify that phone input is valid', function () {
        const inputPhone = $('//input[@name="phone"]');
        browser.keys('Tab');
        browser.pause(5000);
        const result = inputPhone.getAttribute('class').includes('is-valid');
        expect(result).eq(true);
    });

    it('should fill out the field with email', function () {
        const inputLastName = $('//input[@name="email"]');
        inputLastName.setValue('katavdeeva@gmail.com');
        const text = inputLastName.getValue();
        expect(text).eq('katavdeeva@gmail.com');
    });

    it('should fill out the field with password', function () {
        const inputLastName = $('//input[@name="password"]');
        inputLastName.setValue('111111');
        const text = inputLastName.getValue();
        expect(text).eq('111111');
    });

    it('should verify the Sbmit button is enabled', function () {
        const button = $('//button[@type="submit"]').isEnabled();
        expect(button).eq(true);
    });
});