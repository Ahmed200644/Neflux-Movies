const Register = function render() {
    return`<section class="login">
    <img class="logo" src="images/logo.svg" width="126">
        <form>
        <span class="form-field">
        <label for="email">البريد الألكتروني</label>
            <input required type="email" id="email">
        </span>
        <span class="form-field">
            <label for="password">كلمة السر</label>
            <input required type="password" id="password">
        </span>
        <span class="form-field">
            <label for="password">إعاده كلمة السر</label>
            <input required type="password" id="password">
        </span>
        <span class="form-field">
            <input type="submit" value="إنشاء حساب">
            <a href="#/login">تسجيل الدخول</a>
        </span>
        </form>
    </section>`;}
    export { Register };