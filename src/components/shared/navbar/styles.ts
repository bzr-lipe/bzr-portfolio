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
  z-index: 3;
  padding: 0 3rem;
  height: 7rem;
  border-radius: 5rem;
  box-shadow: 0 0.2rem 2rem -0.5rem ${({ theme }) => theme.whiteSemiTransparent};
  transform: translateX(-110%);
  border: 0.1rem solid ${({ theme }) => theme.whiteHalf};

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.whiteSemiTransparent};
    backdrop-filter: blur(5px) saturate(200%);
    filter: invert(1) hue-rotate(180deg);
    border-radius: 5rem;
    box-shadow: 0 0.2rem 2rem -0.5rem ${({ theme }) => theme.whiteSemiTransparent};
  }

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
  isolation: isolate;
  color: ${({ theme }) => theme.black};

  filter: invert(1) hue-rotate(180deg);
`;