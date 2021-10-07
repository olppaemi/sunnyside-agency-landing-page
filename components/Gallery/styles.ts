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

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
