import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  height: 100%;
  cursor: none;
`;

export const Text = styled.p`
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Cursor = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  border: 0.3rem solid ${({ theme }) => theme.colors.purpleMedium};
  pointer-events: none;
`;
