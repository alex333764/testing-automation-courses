class LoginPage {
    get username() { return $('#username') }
    get password() { return $('#password')}
    get button() { return $('.radius')}

    setUsernameInput(value) {
        this.username.addValue(value);
    }

    setPasswordInput(value) {
        this.password.addValue(value);
    }

    clickSubButton() {
        this.button.click();
    }
}
export default new LoginPage()