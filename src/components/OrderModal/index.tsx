import { useEffect } from 'react';
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { Overlay, ModalBody, OrderDetails, Actions } from "./styles";

interface OrderModalProps {
  visible: boolean
  order: Order | null
  onClose: () => void
}

export function OrderModal ({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent){
      if(event.key === 'Escape'){
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if(!visible || !order) return null

  const total = order.products.reduce((total, { quantity, product }) => {
      return total + (product.price * quantity)
    }, 0
  )

  return (
    <Overlay onClick={onClose}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="submit" onClick={onClose}>
              <img src={closeIcon} alt="Close icon" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '⚪'}
              {order.status === 'IN_PRODUCTION' && '🟡'}
              {order.status === 'DONE' && '🟢'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, quantity, product }) => (
              <div className="item" key={_id}>
                <img
                  src={'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
                  alt={product.name}
                  width="56"
                  />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>🟡</span>
            <strong>Iniciar produção</strong>
          </button>
          <button type='button' className='secondary'>
            Cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}
