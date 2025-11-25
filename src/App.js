import React, { useState } from 'react';
import { Film, Star, Clock, Calendar, ArrowLeft } from 'lucide-react';
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

  const MovieList = () => (
    <div className="app">
      <div className="container">
        <div className="header">
          <Film className="header-icon" size={48} />
          <h1 className="header-title">Кинотека</h1>
          <p className="header-subtitle">Коллекция легендарных фильмов</p>
        </div>

        <div className="movies-grid">
          {moviesData.map(movie => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              className="movie-card"
            >
              <div className="movie-poster-wrapper">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-rating">
                  <Star size={16} fill="currentColor" />
                  {movie.rating}
                </div>
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
                <button className="btn-detail">Подробнее</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MovieDetail = ({ movie }) => (
    <div className="app">
      <div className="container">
        <button onClick={() => setSelectedMovie(null)} className="back-btn">
          <ArrowLeft size={20} />
          Назад к списку
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
                <button className="btn-secondary">В избранное</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
        <MovieList />
      )}
    </>
  );
}

export default App;