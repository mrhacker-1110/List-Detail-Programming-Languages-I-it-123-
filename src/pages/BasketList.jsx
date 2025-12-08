import React from 'react';
import { ShoppingCart, Trash2, Edit, Plus, Package } from 'lucide-react';

const BasketList = ({ basket, onRemoveFromBasket, onNavigate, onEditOrder }) => {
  // Подсчёт общей суммы
  const totalPrice = basket.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (basket.length === 0) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Корзина</h1>
            <p className="page-subtitle">Ваша корзина пуста</p>
          </div>
          
          <div className="empty-state">
            <ShoppingCart size={64} />
            <h2>Корзина пуста</h2>
            <p>Добавьте билеты на фильмы, чтобы оформить заказ</p>
            <button className="btn-primary" onClick={() => onNavigate('home')}>
              Перейти к фильмам
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            <ShoppingCart size={40} style={{ display: 'inline', verticalAlign: 'middle' }} />
            {' '}Корзина
          </h1>
          <p className="page-subtitle">У вас {basket.length} {basket.length === 1 ? 'товар' : 'товаров'} в корзине</p>
        </div>

        <div className="basket-layout">
          <div className="basket-items">
            {basket.map((item, index) => (
              <div key={index} className="basket-item">
                <img src={item.image} alt={item.title} className="basket-item-image" />
                
                <div className="basket-item-info">
                  <h3 className="basket-item-title">{item.title}</h3>
                  <p className="basket-item-type">
                    {item.ticketType === 'standard' ? '🎟️ Стандартный билет' : '👑 VIP билет'}
                  </p>
                  <p className="basket-item-details">
                    {item.showTime} • {item.seats} {item.seats === 1 ? 'место' : 'мест'}
                  </p>
                  <p className="basket-item-price">
                    {item.price} ₽ × {item.quantity} = <strong>{item.price * item.quantity} ₽</strong>
                  </p>
                </div>

                <div className="basket-item-actions">
                  <button 
                    className="basket-btn basket-btn-edit"
                    onClick={() => onEditOrder(item, index)}
                    title="Редактировать"
                  >
                    <Edit size={18} />
                  </button>
                  <button 
                    className="basket-btn basket-btn-delete"
                    onClick={() => onRemoveFromBasket(index)}
                    title="Удалить"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="basket-summary">
            <div className="summary-card">
              <h3>Итого</h3>
              
              <div className="summary-row">
                <span>Товаров:</span>
                <span>{basket.length}</span>
              </div>
              
              <div className="summary-row">
                <span>Всего билетов:</span>
                <span>{basket.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row summary-total">
                <span>Общая сумма:</span>
                <span>{totalPrice} ₽</span>
              </div>

              <button 
                className="btn-primary btn-checkout"
                onClick={() => onNavigate('create-order')}
              >
                <Package size={20} />
                Оформить заказ
              </button>
              
              <button 
                className="btn-secondary"
                onClick={() => onNavigate('home')}
              >
                <Plus size={20} />
                Добавить ещё
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketList;