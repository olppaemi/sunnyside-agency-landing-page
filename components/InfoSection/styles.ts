import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const InfoSection = styled.div<{ $reverse: boolean }>`
  width: 100%;
  height: ${rem(600)};
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  @media (max-width: ${media.md}) {
    flex-direction: column-reverse;
    height: ${rem(749)};
  }
`;

export const Section = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${media.md}) {
    width: 100%;
    height: 58%;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 61.8%;
  height: 47.5%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h2 {
    font-family: ${({ theme }) => theme.fonts.accent};
    font-weight: 900;
    font-size: ${rem(40)};
  }

  p {
    font-size: ${rem(18)};
    line-height: ${rem(30)};
    letter-spacing: -${rem(0.13)};
    color: ${({ theme }) => theme.palette.dark_grayish_blue};
  }

  @media (max-width: ${media.md}) {
    width: 87.2%;
    height: 70.7%;
    text-align: center;

    h2 {
      font-size: ${rem(32)};
    }
  }
`;

export const More = styled.a<{ $color: "red" | "yellow" }>`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: ${rem(15)};
  position: relative;

  &::after {
    display: block;
    content: "";

    width: ${rem(137)};
    height: ${rem(10)};

    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(-${rem(16)}, ${rem(4)});

    background-color: ${({ theme, $color }) => theme.palette[$color]};
    border-radius: ${rem(28)};
    opacity: 0.25;
  }
`;

export const ImageContainer = styled.div<{
  $src: string;
}>`
  width: 50%;
  height: 100%;
  background: ${({ $src }) =>
    `center / cover no-repeat url(/images/desktop/${$src})`};

  @media (max-width: ${media.md}) {
    width: 100%;
    height: 42%;
    background: ${({ $src }) =>
      `center / cover no-repeat url(/images/mobile/${$src})`};
  }
`;
