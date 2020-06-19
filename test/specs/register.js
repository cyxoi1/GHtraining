// describe('Test Progress Monitor', () => {
//     // it('should have the right title', () => {
//     //     browser.url('https://app.pasv.us');
//     //     const actualTitle = browser.getTitle();
//     //     const expectedTitle = 'Progress Monitor';
//     //     expect(actualTitle).toEqual(expectedTitle);
//     // });
//
//     // it('should go to Login page', () => {
//     //     const loginButton = $('//a[@qa="login-link"]');
//     //     const text = loginButton.getText();
//     //     const expected = 'Login';
//     //     expect(text).toEqual(expected);
//     // });
//
//     it('should verify that Login is clickable and go to Login page', () => {
//         browser.url('https://app.pasv.us');
//         const loginButton = $('//a[@qa="login-link"]');
//         loginButton.click();
//         browser.pause(5000);
//     });
//
//     it('should check Login page Title', () => {
//         const elementText = $('//h1').getText();
//         const expected = 'User Login';
//         expect(elementText).toEqual(expected);
//         browser.pause(3000);
//     });
// });
//
//
// describe('verify that Register is clickable and go to Register page', () => {
//
//     it('should go to Register page', () => {
//         browser.url('https://app.pasv.us');
//         const registerButton = $('//a[@qa="register-link"]');
//         registerButton.click();
//         browser.pause(5000);
// });
//     it('should check Register page Title', () => {
//         const elementText = $('//h1').getText();
//         const expected = 'User Register';
//         expect(elementText).toEqual(expected);
//         browser.pause(3000);
//     });
//  });
//
// describe('verify that Forgot password is clickable and go to Forgot Password page', () => {
//
//     // it('should go to Forgot Password page', () => {
//     //     browser.url('https://app.pasv.us');
//     //     const forgotPasswordButton = $('//a[@qa="forgot-password-link"]');
//     //     forgotPasswordButton.click();
//     //     browser.pause(5000);
//     // });
//     it('should check Forgot Password page Title', () => {
//         browser.url('https://app.pasv.us');
//         browser.pause(1000);
//         const forgotPasswordButton = $('//a[@qa="forgot-password-link"]').getText();
//         forgotPasswordButton.click();
//         browser.pause(500);
//         const elementText = $('//h1').getText();
//         const expected = 'Reset your Password';
//         expect(elementText).toEqual(expected);
//         browser.pause(3000);
//     });
// });
//
// describe('verify that login button is active after input', () => {
//
//     it('should go to login page', () => {
//         browser.url('https://app.pasv.us');
//         const loginButton = $('//a[@qa="login-link"]');
//         loginButton.click();
//         browser.pause(5000);
//     });
//     // it('should check the label Email and Password', () => {
//     //     const labelEmail = $('//label[@for="email"]');
//     //     const expectedLabelEmail = 'Email';
//     //     expect(labelEmail).toEqual(expectedLabelEmail);
//     //     const labelPassword = $('//label[@for="password"]');
//     //     const expectedLabelPassword = 'Password';
//     //     expect(labelPassword).toEqual(expectedLabelPassword);
//     //     browser.pause(3000);
//     // });
//
//     it('should fill out the input for email and password', () => {
//         const inputEmail = $('//input[@name="email"]');
//         inputEmail.setValue('katekhazieff@gmail.com');
//         const inputPassword = $('//input[@name="password"]');
//         inputPassword.setValue('11111');
//         const loginButton = $('//button[@type="submit"]');
//         loginButton.click();
//         browser.pause(3000);
//     });
//
//     it('should check Login page Title', () => {
//         const elementText = $('//h1').getText();
//         const expected = 'Ekaterina Khazieff';
//         expect(elementText).toEqual(expected);
//         browser.pause(3000);
//     });
// });
//
// describe('should verify that a new user can register', () => {
//     it('should register a new user', () => {
//         browser.url('https://stage.pasv.us/user/register');
//         const inputFirstName = $("input[name='firstName']");
//         inputFirstName.setValue('Ivan');
//         const inputLastName = $("input[name='lastName']");
//         inputLastName.setValue('Ivanov');
//         const inputEmail = $("input[name='email']");
//         inputFirstName.setValue('katavdeeva@gmail.com');
//         const inputPassword = $("input[name='password']");
//         inputPassword.setValue('11111');
//         const buttonSubmit = $("button.btn");
//         buttonSubmit.click();
//
//
//     });
// });