const Home = function render() {
    var suggestedMovies = [{"originalTitle": "The Maze Runner","img": "images/movie1.svg"},{"originalTitle": "Breaking Bad","img": "images/movie2.svg"},{"originalTitle": "Peaky Blinders","img": "images/movie3.svg"},{"originalTitle": "The Good Doctor","img": "images/movie4.svg"}]
    return`<section class="section hero featuredMovies has-bullets">
<div class="container">
    <div class="slide featured">
        <h2 class="featured-title">Peaky Blinders</h2>
        <p class="featured-overview">
            المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد العصابة بالأضافة إلى
            سام نيل في دور المحقق المسؤول عن قمع العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل عرض
            لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات
        </p>
        <p class="buttons">
            <a href="#/details" class="button">شاهد الفيلم</a>
            <a href="#/details" class="button is-secondary">إقرأ المزيد</a>
        </p>
    </div>
</div>
</section>
<section class="section movies slider has-arrows is-suggested">
<div class="container">
    <h3 class="section-title">إقتراحتنا لك</h3>
    <ul class="moviesGrid" id="suggestedMovies">
        ${suggestedMovies.map(movie => `<li class="movie">
        <a href="#/details">
        <img src="https://image.tmdb.org/t/p/w500${movie.posterPath}" />
                <span class="movie-description">
                    ${movie.originalTitle}
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Maze Runner
                </span>
            </a>
        </li>`).join("")}
        <li class="movie">
            <a href="#/details">
                <img src="images/movie2.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Breaking Bad
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie3.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Peaky Blinders
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie4.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Good Doctor
                </span>
            </a>
        </li>
    </ul>
</div>
</section>
<section class="section movies slider has-arrows is-trending">
<div class="container">
    <h3 class="section-title">الأكثر مشاهدة</h3>
    <ul class="moviesGrid">
        <li class="movie">
            <a href="#/details">
                <img src="images/movie2.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Breaking Bad
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie3.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Peaky Blinders
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie4.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Good Doctor
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie1.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Maze Runner
                </span>
            </a>
        </li>
    </ul>
</div>
</section>
<section class="section movies slider has-arrows is-series">
<div class="container">
    <h3 class="section-title">أحدث المسلسلات</h3>
    <ul class="moviesGrid">
        <li class="movie">
            <a href="#/details">
                <img src="images/movie4.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Good Doctor
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie2.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Breaking Bad
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie1.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Maze Runner
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie2.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Breaking Bad
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie3.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Peaky Blinders
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie3.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Peaky Blinders
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie1.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Maze Runner
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie4.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Good Doctor
                </span>
            </a>
        </li>
    </ul>
</div>
</section>
<section class="section movies slider has-arrows is-movies">
<div class="container">
    <h3 class="section-title">أحدث الأفلام</h3>
    <ul class="moviesGrid">
        <li class="movie">
            <a href="#/details">
                <img src="images/movie3.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Peaky Blinders
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie4.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Good Doctor
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie1.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Maze Runner
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie2.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Breaking Bad
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie2.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Breaking Bad
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie3.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    Peaky Blinders
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie4.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Good Doctor
                </span>
            </a>
        </li>
        <li class="movie">
            <a href="#/details">
                <img src="images/movie1.svg">
                <span class="movie-description">
                    <span class="play-icon">
                        <i class="fas fa-play"></i>
                    </span>
                    The Maze Runner
                </span>
            </a>
        </li>
    </ul>
</div>
</section>`;}
export { Home };
