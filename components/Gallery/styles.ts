import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Container = styled.div`
  width: 100%;
  height: ${rem(447)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: ${media.md}) {
    height: ${rem(375)};
    grid-template-columns: 1fr 1fr;
  }
`;

export const Picture = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  background: ${({ $src }) =>
    `center / cover no-repeat url(/images/desktop/${$src})`};

  @media (max-width: ${media.md}) {
    background: ${({ $src }) =>
      `center / cover no-repeat url(/images/mobile/${$src})`};
  }
`;
