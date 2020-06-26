function login() {
    browser.maximizeWindow();
    browser.url('https://stage.pasv.us/user/login');
    $("//input[@name='email']").setValue('katavdeeva@gmail.com');
    $("//input[@name='password']").setValue('11111');
    $("//button[@type='submit']").click();
}

module.exports = login;


///panteleyeva Practice GitHub jun, 26 2020