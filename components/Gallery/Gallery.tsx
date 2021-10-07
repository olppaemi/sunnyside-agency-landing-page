import Image from "next/image";
import * as S from "./styles";

export const Gallery = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Image
          src="/images/desktop/image-gallery-milkbottles.jpg"
          width={720}
          height={894}
          objectFit="cover"
          objectPosition="center"
        />
      </S.Wrapper>
      <S.Wrapper>
        <Image
          src="/images/desktop/image-gallery-orange.jpg"
          width={720}
          height={894}
          objectFit="cover"
          objectPosition="center"
        />
      </S.Wrapper>
      <S.Wrapper>
        <Image
          src="/images/desktop/image-gallery-cone.jpg"
          width={720}
          height={894}
          objectFit="cover"
          objectPosition="center"
        />
      </S.Wrapper>
      <S.Wrapper>
        <Image
          src="/images/desktop/image-gallery-sugarcubes.jpg"
          width={720}
          height={894}
          objectFit="cover"
          objectPosition="center"
        />
      </S.Wrapper>
    </S.Container>
  );
};
