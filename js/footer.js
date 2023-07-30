const Footer = function render() {
    return `<div class="container">
    <section class="footer-nav" role="navigation">
      <a class="navbar-logo grayscale" href="#/">
        <img src="images/logo.svg" width="80" />
      </a>
      <div class="navbar-menu">
        <ul class="navbar-menu">
          <li>
            <a class="navbar-item" href="#/">الرئيسية</a>
          </li>
          <li>
            <a class="navbar-item" href="#/movies">أفلام</a>
          </li>
          <li>
            <a class="navbar-item" href="#/shows">مسلسلات</a>
          </li>
        </ul>
      </div>
      <a class="navbar-item logout" href="#/logout">تسجيل الخروج</a>
    </section>
  </div>`;
  };
  export { Footer };
  