import styled from "styled-components";

export const BurgerIcon = styled.button`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  position: relative;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  gap: 0.7rem;
`;

export const Row = styled.div`
  width: 100%;
  height: 0.3rem;
  border-radius: 8rem;
  background-color: ${({ theme }) => theme.textColor};;
`;
