import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const InfoSection2 = styled.div`
  width: 100%;
  height: ${rem(600)};
  display: flex;

  @media (max-width: ${media.md}) {
    flex-direction: column;
    height: ${rem(1200)};
  }
`;

type SectionProps = {
  $src: string;
  $color: "dark_cyan" | "dark_blue";
};

export const Section = styled.section<SectionProps>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: ${rem(59)};
  color: ${({ theme, $color }) => theme.palette[$color]};
  background: ${({ $src }) =>
    `center / cover no-repeat url(/images/desktop/${$src})`};

  @media (max-width: ${media.md}) {
    width: 100%;
    height: 50%;
  }
`;

export const Wrapper = styled.div`
  width: 47%;
  text-align: center;

  @media (max-width: ${media.md}) {
    width: 87.733333%;
  }
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-weight: 900;
  font-size: ${rem(28)};
  margin-bottom: ${rem(27)};
`;

export const Text = styled.p`
  font-size: ${rem(16)};
  line-height: ${rem(27)};
  letter-spacing: -${rem(0.11)};
`;
