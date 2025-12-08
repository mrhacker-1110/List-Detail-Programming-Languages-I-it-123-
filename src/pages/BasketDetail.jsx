import React from 'react';
import { ArrowLeft, ShoppingCart, Calendar, Clock, MapPin, CreditCard } from 'lucide-react';

const BasketDetail = ({ basket, onNavigate }) => {
  const totalPrice = basket.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalTickets = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="main-content">
      <div className="container">
        <button onClick={() => onNavigate('basket')} className="back-btn">
          <ArrowLeft size={20} />
          Назад к корзине
        </button>

        <div className="page-header">
          <h1 className="page-title">Детали корзины</h1>
          <p className="page-subtitle">Подробная информация о вашем заказе</p>
        </div>

        <div className="detail-card">
          <div className="order-summary-full">
            <div className="order-section">
              <h2>
                <ShoppingCart size={24} />
                Товары в корзине
              </h2>
              
              {basket.map((item, index) => (
                <div key={index} className="order-item-detail">
                  <div className="order-item-header">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p className="order-item-genre">{item.genre}</p>
                    </div>
                  </div>
                  
                  <div className="order-item-info-grid">
                    <div className="info-item">
                      <Calendar size={18} />
                      <span>Время сеанса:</span>
                      <strong>{item.showTime}</strong>
                    </div>
                    <div className="info-item">
                      <MapPin size={18} />
                      <span>Мест:</span>
                      <strong>{item.seats}</strong>
                    </div>
                    <div className="info-item">
                      <CreditCard size={18} />
                      <span>Тип билета:</span>
                      <strong>{item.ticketType === 'standard' ? 'Стандартный' : 'VIP'}</strong>
                    </div>
                    <div className="info-item">
                      <span>💰</span>
                      <span>Цена:</span>
                      <strong>{item.price} ₽</strong>
                    </div>
                    <div className="info-item">
                      <span>🎫</span>
                      <span>Количество:</span>
                      <strong>{item.quantity}</strong>
                    </div>
                    <div className="info-item">
                      <span>💵</span>
                      <span>Итого:</span>
                      <strong className="highlight">{item.price * item.quantity} ₽</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-section">
              <h2>
                <CreditCard size={24} />
                Итоговая сумма
              </h2>
              
              <div className="order-total-details">
                <div className="total-row">
                  <span>Всего товаров:</span>
                  <span>{basket.length}</span>
                </div>
                <div className="total-row">
                  <span>Всего билетов:</span>
                  <span>{totalTickets}</span>
                </div>
                <div className="total-row">
                  <span>Сумма товаров:</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="total-row">
                  <span>Сервисный сбор:</span>
                  <span>0 ₽</span>
                </div>
                <div className="total-divider"></div>
                <div className="total-row total-final">
                  <span>Итого к оплате:</span>
                  <span>{totalPrice} ₽</span>
                </div>
              </div>

              <div className="order-actions">
                <button className="btn-primary" onClick={() => onNavigate('create-order')}>
                  Оформить заказ
                </button>
                <button className="btn-secondary" onClick={() => onNavigate('basket')}>
                  Вернуться к корзине
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketDetail;