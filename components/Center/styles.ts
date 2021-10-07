import styled from "styled-components";
import { rem } from "../../styles/utils";
import { media } from "../../styles/media";

export const Center = styled.div`
  max-width: ${rem(1440)};
  margin: auto;

  @media (max-width: ${media.lg}) {
    max-width: ${rem(960)};
  }

  @media (max-width: ${media.md}) {
    max-width: ${rem(720)};
  }

  @media (max-width: ${media.sm}) {
    max-width: ${rem(540)};
  }
`;
