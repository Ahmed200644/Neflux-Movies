const Header = function render() {
  return `<div class="container">
    <button class="navbar-burger">
      <span class="navicon"></span>
    </button>
    <a class="navbar-item navbar-logo" href="#/">
      <img src="images/logo.svg" width="80" />
    </a>
    <ul class="navbar-menu">
      <li>
        <a class="navbar-item active" href="#/">الرئيسية</a>
      </li>
      <li>
        <a class="navbar-item" href="#/movies">أفلام</a>
      </li>
      <li>
        <a class="navbar-item" href="#/shows">مسلسلات</a>
      </li>
    </ul>
    <div class="navbar-search">
      <input
        class="searchInput"
        type="text"
        name="search"
        placeholder="إبحث عن فيلم أو مسلسل..."
      />
    </div>
  </div>`;
};
export { Header };
