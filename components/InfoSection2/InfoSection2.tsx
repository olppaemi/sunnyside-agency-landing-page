import * as S from "./styles";

export const InfoSection2 = () => {
  return (
    <S.InfoSection2>
      <S.Section $src="image-graphic-design.jpg" $color="dark_cyan">
        <S.Wrapper>
          <S.Title>Graphic Design</S.Title>
          <S.Text>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </S.Text>
        </S.Wrapper>
      </S.Section>
      <S.Section $src="image-photography.jpg" $color="dark_blue">
        <S.Wrapper>
          <S.Title>Photography</S.Title>
          <S.Text>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </S.Text>
        </S.Wrapper>
      </S.Section>
    </S.InfoSection2>
  );
};
