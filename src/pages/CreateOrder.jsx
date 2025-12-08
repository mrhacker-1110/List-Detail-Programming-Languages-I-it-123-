import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, CreditCard, CheckCircle, Calendar, Clock } from 'lucide-react';

const CreateOrder = ({ movie, onAddToBasket, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ticketType: 'standard',
    quantity: 1,
    seats: 1,
    showTime: '19:00',
    date: new Date().toISOString().split('T')[0]
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const ticketPrices = {
    standard: 500,
    vip: 1200
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderData = {
      ...movie,
      ...formData,
      price: ticketPrices[formData.ticketType],
      orderId: Date.now(),
      orderDate: new Date().toLocaleString('ru-RU')
    };

    onAddToBasket(orderData);
    setIsSubmitted(true);

    setTimeout(() => {
      onNavigate('basket');
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="success-message">
            <CheckCircle size={64} className="success-icon" />
            <h2>Билет добавлен в корзину!</h2>
            <p>Перенаправление в корзину...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container">
        <button onClick={() => onNavigate('detail')} className="back-btn">
          <ArrowLeft size={20} />
          Назад к фильму
        </button>

        <div className="page-header">
          <h1 className="page-title">Заказ билета</h1>
          <p className="page-subtitle">Заполните данные для бронирования</p>
        </div>

        <div className="order-form-layout">
          <div className="order-form-card">
            <form onSubmit={handleSubmit} className="order-form">
              <div className="form-section">
                <h3>
                  <User size={20} />
                  Личные данные
                </h3>
                
                <div className="form-group">
                  <label>Имя и Фамилия *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Mail size={16} />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ivan@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Phone size={16} />
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>
                  <Calendar size={20} />
                  Детали бронирования
                </h3>

                <div className="form-group">
                  <label>Дата сеанса *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Clock size={16} />
                    Время сеанса *
                  </label>
                  <select
                    name="showTime"
                    value={formData.showTime}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="10:00">10:00</option>
                    <option value="13:00">13:00</option>
                    <option value="16:00">16:00</option>
                    <option value="19:00">19:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    <CreditCard size={16} />
                    Тип билета *
                  </label>
                  <select
                    name="ticketType"
                    value={formData.ticketType}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="standard">🎟️ Стандартный - {ticketPrices.standard} ₽</option>
                    <option value="vip">👑 VIP - {ticketPrices.vip} ₽</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Количество билетов</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Количество мест</label>
                    <input
                      type="number"
                      name="seats"
                      value={formData.seats}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-total">
                <div className="total-info">
                  <span>Итого к оплате:</span>
                  <span className="total-price">
                    {ticketPrices[formData.ticketType] * formData.quantity} ₽
                  </span>
                </div>
              </div>

              <button type="submit" className="btn-primary btn-submit">
                Добавить в корзину
              </button>
            </form>
          </div>

          <div className="order-movie-info">
            <img src={movie.image} alt={movie.title} className="order-movie-poster" />
            <div className="order-movie-details">
              <h3>{movie.title}</h3>
              <p className="movie-genre">{movie.genre}</p>
              <p>⭐ {movie.rating}</p>
              <p>⏱️ {movie.duration}</p>
              <p>🎬 {movie.director}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;