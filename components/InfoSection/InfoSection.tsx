import Link from "next/link";
import * as S from "./styles";

type InfoSectionProps = {
  title: string;
  text: string;
  src: string;
  color?: "red" | "yellow";
  reverse?: boolean;
};

export const InfoSection = ({
  title,
  text,
  src,
  color = "yellow",
  reverse = false,
}: InfoSectionProps) => {
  return (
    <S.InfoSection $reverse={reverse}>
      <S.Section>
        <S.Content>
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href="/" passHref>
            <div>
              <S.More $color={color}>LEARN MORE</S.More>
            </div>
          </Link>
        </S.Content>
      </S.Section>
      <S.ImageContainer $src={src} />
    </S.InfoSection>
  );
};
