import styled from "styled-components";

export const Navbar = styled.nav`
  align-items: center;
  position: fixed;
  top: 2rem;
  left: 2rem;
  flex-direction: row;
  justify-content: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.whiteSemiTransparent};
  padding: 3rem 3rem;
  border-radius: 5rem;
  box-shadow: 0 3px 20px -5px #FFFFFF26;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 3rem;

  white-space: nowrap;

  @media (max-width: 414px) {
    font-size: 5rem;
  }
`;

export const Link = styled.p`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;

  color: ${({ theme }) => theme.colors.black};
`;