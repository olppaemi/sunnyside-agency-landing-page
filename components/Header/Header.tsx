import { Logo } from "../icons/Logo";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <S.NavBar>
        <Logo />
      </S.NavBar>
    </S.Header>
  );
};
