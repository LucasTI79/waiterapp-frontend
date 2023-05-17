import styled from "styled-components"

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204,204,204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  & > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  gap: 24px;

  button {
    width: 100%;
    background-color: #fff;
    border: 1px solid rgba(204,204,204, 0.4);
    height: 128px;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .25rem;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: 0.875rem;
    }
  }
`
