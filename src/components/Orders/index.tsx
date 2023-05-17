import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'DONE',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668472896991-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668473462705-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

const OrderBoardInfo = {
  WAINTING: {
    icon: "⚪",
    title: "Fila de espera",
    orders: orders.filter(order => order.status === 'IN_PRODUCTION')
  },
  IN_PRODUCTION: {
    icon: "🟡",
    title: "Em preparação",
    orders: orders.filter(order => order.status === 'IN_PRODUCTION')
  },
  DONE: {
    icon: "🟢",
    title: "Pronto",
    orders: orders.filter(order => order.status === 'DONE')
  },
  CANCEL: {
    icon: "🔴",
    title: "Cancelados",
    orders: orders.filter(order => order.status === 'CANCELED')
  }
}

export function Orders(){
  return (
    <Container>
      <OrdersBoard
        {...OrderBoardInfo['WAINTING']}
        />
      <OrdersBoard
        {...OrderBoardInfo['IN_PRODUCTION']}
        />
      <OrdersBoard
        {...OrderBoardInfo['DONE']}
        />
      <OrdersBoard
        {...OrderBoardInfo['CANCEL']}
        />
    </Container>
  )
}
