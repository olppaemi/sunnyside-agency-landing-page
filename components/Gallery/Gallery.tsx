import * as S from "./styles";

export const Gallery = () => {
  return (
    <S.Container>
      <S.Picture $src="image-gallery-milkbottles.jpg" />
      <S.Picture $src="image-gallery-orange.jpg" />
      <S.Picture $src="image-gallery-cone.jpg" />
      <S.Picture $src="image-gallery-sugarcubes.jpg" />
    </S.Container>
  );
};
