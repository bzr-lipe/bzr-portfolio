import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  position: fixed;
  cursor: none;
  top: 2rem;
  left: 2rem;
  gap: 3rem;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.navBackgroundColor};
  padding: 0 3rem;
  height: 7rem;
  border-radius: 5rem;
  box-shadow: 0 0.2rem 2rem -0.5rem ${({ theme }) => theme.navBackgroundColor};
  border: 0.1rem solid ${({ theme }) => theme.navBorderColor};
  backdrop-filter: blur(5px) saturate(200%);
  transform: translateX(-110%);

  @media (max-width: 414px) {
    display: none
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Link = styled.p`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: -0.1rem;

  color: ${({ theme }) => theme.navTextColor};
`;

export const ThemeButton = styled.p`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;

  color: ${({ theme }) => theme.navTextColor};
`;