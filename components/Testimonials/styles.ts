import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Container = styled.div`
  width: 100%;
  height: ${rem(777)};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${media.md}) {
    height: ${rem(1258)};
  }
`;

export const Testimonials = styled.div`
  width: ${(1110 / 1440) * 100}%;
  height: ${(457 / 777) * 100}%;

  @media (max-width: ${media.md}) {
    width: ${(327 / 375) * 100}%;
    height: ${(1108 / 1258) * 100}%;
  }
`;

export const Title = styled.h4`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-weight: 900;
  font-size: ${rem(20)};
  color: ${({ theme }) => theme.palette.grayish_blue};
  letter-spacing: ${rem(5)};
  text-align: center;
  margin-bottom: ${rem(80)};

  @media (max-width: ${media.md}) {
    font-size: ${rem(16)};
    letter-spacing: ${rem(4)};
    margin-bottom: ${rem(64)};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${media.md}) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Testimonial = styled.div`
  width: calc(${(1 / 3) * 100}% - ${rem(14)});
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  .profile-image {
    border-radius: 50%;
  }

  @media (max-width: ${media.md}) {
    width: 100%;
    height: calc(${(1 / 3) * 100}% - ${rem(64)});
  }
`;

export const Text = styled.p`
  font-size: ${rem(18)};
  line-height: ${rem(32)};
  letter-spacing: -${rem(0.13)};
  color: ${({ theme }) => theme.palette.very_dark_grayish_blue};
`;

export const Who = styled.div`
  & > * + * {
    margin-top: ${rem(8)};
  }
`;

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: ${rem(18)};
  font-weight: 900;
  letter-spacing: -${rem(0.13)};
  color: ${({ theme }) => theme.palette.very_dark_desaturated_blue};
`;
export const Job = styled.p`
  font-size: ${rem(14)};
  letter-spacing: -${rem(0.1)};
  color: ${({ theme }) => theme.palette.grayish_blue};
`;
