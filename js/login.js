const Login = function render() {
  return `<section class="login">
  <img class="logo" src="images/logo.svg" width="126">
        <form method="Get" action="#/login" id="loginForm">
        <span class="form-field">
        <label for="email">البريد الألكتروني</label>
        <input type="email" id="email" autocomplete="username" required>
        </span>
        <span class="form-field">
            <label for="password">كلمة السر</label>
            <input type="password" id="password" autocomplete="current-password" required>
        </span>
        <span class="form-field">
            <input type="submit" value="تسجيل الدخول">
            <a href="#/register">إنشاء حساب</a>
        </span>
        </form>
    </section>`;
};
export { Login };
