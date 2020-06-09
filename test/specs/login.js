describe('LOG IN', () => {
   it('should verify that user can log in', () => {
      browser.url('https://stage.pasv.us/');
      const loginButton = $('[qa="login-link"]');
      loginButton.click();
      const email = $('[name="email"]');
      email.setValue('katavdeeva@gmail.com');
      const password = $('[name="password"]');
      password.setValue('11111');
      const submitButton = $('button.btn');
      submitButton.click();
   });
});