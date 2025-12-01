import React, { useState } from 'react';
import { Film, Star, Clock, Calendar, ArrowLeft, Home, Search, Heart, User, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, X } from 'lucide-react';
import './App.css';

const moviesData = [
  {
    id: 1,
    title: "Побег из Шоушенка",
    year: 1994,
    rating: 9.3,
    duration: "142 мин",
    genre: "Драма",
    director: "Фрэнк Дарабонт",
    description: "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки.",
    cast: "Тим Роббинс, Морган Фриман",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Тёмный рыцарь",
    year: 2008,
    rating: 9.0,
    duration: "152 мин",
    genre: "Боевик, Криминал",
    director: "Кристофер Нолан",
    description: "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности. Но появляется новый злодей - Джокер.",
    cast: "Кристиан Бэйл, Хит Леджер, Аарон Экхарт",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Начало",
    year: 2010,
    rating: 8.8,
    duration: "148 мин",
    genre: "Фантастика, Триллер",
    director: "Кристофер Нолан",
    description: "Кобб - талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадёт ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим.",
    cast: "Леонардо ДиКаприо, Джозеф Гордон-Левитт, Эллен Пейдж",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Криминальное чтиво",
    year: 1994,
    rating: 8.9,
    duration: "154 мин",
    genre: "Криминал, Драма",
    director: "Квентин Тарантино",
    description: "Двое бандитов Винсент Вега и Джулс Винфилд проводят время в философских беседах. Параллельно разворачиваются три истории с участием незадачливых грабителей и боксёра.",
    cast: "Джон Траволта, Сэмюэл Л. Джексон, Ума Турман",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Форрест Гамп",
    year: 1994,
    rating: 8.8,
    duration: "142 мин",
    genre: "Драма, Мелодрама",
    director: "Роберт Земекис",
    description: "От лица главного героя Форреста Гампа, слабоумного безобидного человека с благородным и открытым сердцем, рассказывается история его необыкновенной жизни.",
    cast: "Том Хэнкс, Робин Райт, Гэри Синиз",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Интерстеллар",
    year: 2014,
    rating: 8.6,
    duration: "169 мин",
    genre: "Фантастика, Драма",
    director: "Кристофер Нолан",
    description: "Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека.",
    cast: "Мэттью МакКонахи, Энн Хэтэуэй, Джессика Честейн",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop"
  }
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // home, search, favorites, profile
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Функция поиска фильмов
  const filteredMovies = moviesData.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.director.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Добавить/удалить из избранного
  const toggleFavorite = (movie) => {
    if (favorites.find(fav => fav.id === movie.id)) {
      setFavorites(favorites.filter(fav => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  // Переход на страницу
  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedMovie(null);
    setSearchQuery('');
  };

  // Header Component
  const Header = () => (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="header-logo" onClick={() => navigateTo('home')}>
          <Film className="logo-icon" size={36} />
          <span className="logo-text">Кинотека</span>
        </div>
        
        <nav className="header-nav">
          <button 
            onClick={() => navigateTo('home')} 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          >
            <Home size={20} />
            <span>Главная</span>
          </button>
          <button 
            onClick={() => navigateTo('search')} 
            className={`nav-link ${currentPage === 'search' ? 'active' : ''}`}
          >
            <Search size={20} />
            <span>Поиск</span>
          </button>
          <button 
            onClick={() => navigateTo('favorites')} 
            className={`nav-link ${currentPage === 'favorites' ? 'active' : ''}`}
          >
            <Heart size={20} />
            <span>Избранное ({favorites.length})</span>
          </button>
          <button 
            onClick={() => navigateTo('profile')} 
            className={`nav-link ${currentPage === 'profile' ? 'active' : ''}`}
          >
            <User size={20} />
            <span>Профиль</span>
          </button>
        </nav>

        {currentPage === 'search' && (
          <div className="header-search">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Поиск по названию, жанру, режиссёру..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')}>
                <X size={18} />
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );

  // Footer Component
  const Footer = () => (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Film size={32} />
              <span>Кинотека</span>
            </div>
            <p className="footer-description">
              Ваш надёжный гид в мире кино. Лучшая коллекция фильмов всех времён и народов.
            </p>
            <div className="footer-social">
              <a href="#facebook" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#instagram" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#youtube" className="social-link">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Навигация</h3>
            <ul className="footer-links">
              <li><button onClick={() => navigateTo('home')}>Главная</button></li>
              <li><button onClick={() => navigateTo('search')}>Поиск</button></li>
              <li><button onClick={() => navigateTo('favorites')}>Избранное</button></li>
              <li><button onClick={() => navigateTo('profile')}>Профиль</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Жанры</h3>
            <ul className="footer-links">
              <li><button onClick={() => { setSearchQuery('Драма'); navigateTo('search'); }}>Драма</button></li>
              <li><button onClick={() => { setSearchQuery('Боевик'); navigateTo('search'); }}>Боевик</button></li>
              <li><button onClick={() => { setSearchQuery('Комедия'); navigateTo('search'); }}>Комедия</button></li>
              <li><button onClick={() => { setSearchQuery('Фантастика'); navigateTo('search'); }}>Фантастика</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-contacts">
              <li>
                <Mail size={18} />
                <span>info@kinoteka.com</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Кинотека. Все права защищены.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Политика конфиденциальности</a>
            <span>•</span>
            <a href="#terms">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );

  // Movie Card Component
  const MovieCard = ({ movie }) => (
    <div className="movie-card">
      <div className="movie-poster-wrapper">
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-poster"
          onClick={() => setSelectedMovie(movie)}
        />
        <div className="movie-rating">
          <Star size={16} fill="currentColor" />
          {movie.rating}
        </div>
        <button 
          className={`favorite-btn ${isFavorite(movie.id) ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie);
          }}
        >
          <Heart size={20} fill={isFavorite(movie.id) ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="meta-item">
            <Calendar size={14} />
            {movie.year}
          </span>
          <span className="meta-item">
            <Clock size={14} />
            {movie.duration}
          </span>
        </div>
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-description">{movie.description}</p>
        <button className="btn-detail" onClick={() => setSelectedMovie(movie)}>
          Подробнее
        </button>
      </div>
    </div>
  );

  // Home Page
  const HomePage = () => (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Популярные фильмы</h1>
          <p className="page-subtitle">Коллекция легендарных фильмов всех времён</p>
        </div>
        <div className="movies-grid">
          {moviesData.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );

  // Search Page
  const SearchPage = () => (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Поиск фильмов</h1>
          <p className="page-subtitle">
            {searchQuery 
              ? `Найдено: ${filteredMovies.length} ${filteredMovies.length === 1 ? 'фильм' : 'фильмов'}`
              : 'Введите название, жанр или режиссёра'}
          </p>
        </div>
        {searchQuery && filteredMovies.length === 0 ? (
          <div className="empty-state">
            <Search size={64} />
            <h2>Ничего не найдено</h2>
            <p>Попробуйте изменить запрос</p>
          </div>
        ) : (
          <div className="movies-grid">
            {(searchQuery ? filteredMovies : moviesData).map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Favorites Page
  const FavoritesPage = () => (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Избранное</h1>
          <p className="page-subtitle">
            {favorites.length > 0 
              ? `У вас ${favorites.length} избранных ${favorites.length === 1 ? 'фильм' : 'фильмов'}`
              : 'Здесь пока пусто'}
          </p>
        </div>
        {favorites.length === 0 ? (
          <div className="empty-state">
            <Heart size={64} />
            <h2>Нет избранных фильмов</h2>
            <p>Добавьте фильмы в избранное, нажав на сердечко</p>
            <button className="btn-primary" onClick={() => navigateTo('home')}>
              Перейти к фильмам
            </button>
          </div>
        ) : (
          <div className="movies-grid">
            {favorites.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Profile Page
  const ProfilePage = () => (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Профиль пользователя</h1>
          <p className="page-subtitle">Ваша статистика и настройки</p>
        </div>
        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-avatar">
              <User size={64} />
            </div>
            <h2>Имя Пользователя</h2>
            <p className="profile-email">user@example.com</p>
            
            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-value">{favorites.length}</div>
                <div className="stat-label">Избранных</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{moviesData.length}</div>
                <div className="stat-label">Просмотрено</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">24</div>
                <div className="stat-label">Рецензий</div>
              </div>
            </div>

            <button className="btn-primary">Редактировать профиль</button>
          </div>
        </div>
      </div>
    </div>
  );

  // Movie Detail Page
  const MovieDetail = ({ movie }) => (
    <div className="main-content">
      <div className="container">
        <button onClick={() => setSelectedMovie(null)} className="back-btn">
          <ArrowLeft size={20} />
          Назад
        </button>

        <div className="detail-card">
          <div className="detail-content">
            <img
              src={movie.image}
              alt={movie.title}
              className="detail-poster"
            />

            <div className="detail-info">
              <div className="detail-header">
                <div>
                  <h1 className="detail-title">{movie.title}</h1>
                  <p className="detail-genre">{movie.genre}</p>
                </div>
                <div className="detail-rating">
                  <Star size={24} fill="currentColor" />
                  {movie.rating}
                </div>
              </div>

              <div className="detail-meta-grid">
                <div className="meta-box">
                  <p className="meta-label">Год выпуска</p>
                  <p className="meta-value">
                    <Calendar size={18} />
                    {movie.year}
                  </p>
                </div>
                <div className="meta-box">
                  <p className="meta-label">Длительность</p>
                  <p className="meta-value">
                    <Clock size={18} />
                    {movie.duration}
                  </p>
                </div>
                <div className="meta-box">
                  <p className="meta-label">Режиссёр</p>
                  <p className="meta-value">{movie.director}</p>
                </div>
              </div>

              <div className="detail-section">
                <h2>Описание</h2>
                <p>{movie.description}</p>
              </div>

              <div className="detail-section">
                <h2>В ролях</h2>
                <p>{movie.cast}</p>
              </div>

              <div className="action-buttons">
                <button className="btn-primary">Смотреть трейлер</button>
                <button 
                  className={`btn-secondary ${isFavorite(movie.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(movie)}
                >
                  <Heart size={20} fill={isFavorite(movie.id) ? 'currentColor' : 'none'} />
                  {isFavorite(movie.id) ? 'Убрать из избранного' : 'В избранное'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main Render
  return (
    <div className="app">
      <Header />
      
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
        <>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'search' && <SearchPage />}
          {currentPage === 'favorites' && <FavoritesPage />}
          {currentPage === 'profile' && <ProfilePage />}
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;