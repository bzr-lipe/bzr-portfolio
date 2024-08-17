import styled from "styled-components";

export const ScrollButton= styled.button`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 414px) {
    gap: 2rem;
  }
`;

export const Text = styled.p`
  font-weight: 300;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.8rem;

  @media (max-width: 414px) {
    font-size: 1.15rem;
    letter-spacing: 0.12rem;
  }
`;

export const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  border-width: 0 0.4rem 0.4rem 0;
  border-style: solid;
  transform: rotate(45deg);
  border-color: ${({ theme }) => theme.primaryColor};

  @media (max-width: 414px) {
    border-width: 0 0.3rem 0.3rem 0;
    width: 2rem;
    height: 2rem;
  }
`;

export const ScrollUpText = styled(Text)`
  position: absolute;
  bottom: -3.5rem;
  visibility: hidden;
  opacity: 0;

  @media (max-width: 414px) {

  }
`; 
