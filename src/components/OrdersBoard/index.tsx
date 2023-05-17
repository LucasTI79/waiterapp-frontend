import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[]
}

export function OrdersBoard({
  icon,
  title,
  orders
}: OrdersBoardProps){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [seletectedOrder, setSeletectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order){
    setIsModalVisible(true)
    setSeletectedOrder(order)
  }

  function handleCloseModal(){
    setIsModalVisible(false)
    setSeletectedOrder(null)
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={seletectedOrder}
        onClose={handleCloseModal}
        />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {
        orders.length > 0 ? (
          <OrdersContainer>
          {orders.map(order => (
            <button
              key={order._id}
              type="button"
              onClick={() => handleOpenModal(order)}
              >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
        ) : null
      }

  </Board>
  )
}
