import styled from "styled-components";


export const NavbarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 3;
`;

export const Navbar = styled.nav`
  display: flex;
  position: fixed;
  cursor: none;
  top: 2rem;
  left: 2rem;
  gap: 3rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 3;
  padding: 0 3rem;
  height: 5.5rem;
  transform: translateX(-110%);

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.whiteSemiTransparent};
    backdrop-filter: blur(5px) saturate(200%);
    filter: invert(1) hue-rotate(180deg);
    border-radius: 1.5rem;
  }

  @media (max-width: 414px) {
    height: 4.5rem;
    position: relative;
    left: 0;

    &:before {
      background-color: ${({ theme }) => theme.whiteSemiTransparent};
      backdrop-filter: blur(5px) saturate(200%);
      filter: invert(1) hue-rotate(180deg);
      border-radius: 1.5rem;
    }
  }
`;


export const IconsContainer = styled.div`
  display: flex;
  gap: 4rem;
`;

export const Anchor = styled.a`
  height: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  isolation: isolate;

  @media (max-width: 414px) {
    height: 2.3rem;
  }
`;

export const Icon = styled.img`
  height: 100%;
`;

export const Subtitle = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.purpleMedium};
  color: ${({ theme }) => theme.white};
  white-space: nowrap;
  width: fit-content;
  font-size: 1.6rem;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  opacity: 0;
  visibility: hidden;
`;
