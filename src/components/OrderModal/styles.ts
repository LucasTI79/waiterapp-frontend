import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  top: 0px;
  left: 0px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 3rem;


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      display: flex;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: .5rem;
      align-items: center;
    }
  }
`

export const OrderDetails = styled.div`
  margin-top: 3rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: .25rem;

        strong {
          display: block;
          margin-bottom: .25rem;
        }

        span {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  margin-top: 2rem;

  .primary {
    background-color: #333;
    border-radius: 2.5rem;
    border: 0;
    color: #fff;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }
  .secondary {
    padding: 0.75rem 1.5rem;
    color: #D73035;
    font-weight: bold;
    border-radius: 2.5rem;
    border: 0;
    background-color: transparent;
  }
`
