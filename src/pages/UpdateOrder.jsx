import React, { useState } from 'react';
import { ArrowLeft, Save, Calendar, Clock, CreditCard, CheckCircle } from 'lucide-react';

const UpdateOrder = ({ order, orderIndex, onUpdateOrder, onNavigate }) => {
  const [formData, setFormData] = useState({
    ticketType: order.ticketType || 'standard',
    quantity: order.quantity || 1,
    seats: order.seats || 1,
    showTime: order.showTime || '19:00',
    date: order.date || new Date().toISOString().split('T')[0]
  });

  const [isUpdated, setIsUpdated] = useState(false);

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
    
    const updatedOrder = {
      ...order,
      ...formData,
      price: ticketPrices[formData.ticketType]
    };

    onUpdateOrder(orderIndex, updatedOrder);
    setIsUpdated(true);

    setTimeout(() => {
      onNavigate('basket');
    }, 1500);
  };

  if (isUpdated) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="success-message">
            <CheckCircle size={64} className="success-icon" />
            <h2>Заказ обновлён!</h2>
            <p>Возвращаемся в корзину...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container">
        <button onClick={() => onNavigate('basket')} className="back-btn">
          <ArrowLeft size={20} />
          Назад к корзине
        </button>

        <div className="page-header">
          <h1 className="page-title">Редактирование заказа</h1>
          <p className="page-subtitle">Измените параметры вашего билета</p>
        </div>

        <div className="order-form-layout">
          <div className="order-form-card">
            <form onSubmit={handleSubmit} className="order-form">
              <div className="form-section">
                <h3>
                  <Calendar size={20} />
                  Параметры бронирования
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
                  <span>Новая сумма:</span>
                  <span className="total-price">
                    {ticketPrices[formData.ticketType] * formData.quantity} ₽
                  </span>
                </div>
                <div className="total-info-small">
                  <span>Было: {order.price * order.quantity} ₽</span>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  <Save size={20} />
                  Сохранить изменения
                </button>
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => onNavigate('basket')}
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>

          <div className="order-movie-info">
            <img src={order.image} alt={order.title} className="order-movie-poster" />
            <div className="order-movie-details">
              <h3>{order.title}</h3>
              <p className="movie-genre">{order.genre}</p>
              <p>⭐ {order.rating}</p>
              <p>⏱️ {order.duration}</p>
              <p>🎬 {order.director}</p>
            </div>
            
            <div className="order-current-info">
              <h4>Текущие параметры:</h4>
              <p>📅 {order.date}</p>
              <p>🕐 {order.showTime}</p>
              <p>🎫 {order.ticketType === 'standard' ? 'Стандарт' : 'VIP'}</p>
              <p>🔢 {order.quantity} билетов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrder;