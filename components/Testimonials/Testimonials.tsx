import Image from "next/image";
import * as S from "./styles";

export const Testimonials = () => {
  return (
    <S.Container>
      <S.Testimonials>
        <S.Title>CLIENT TESTIMONIALS</S.Title>
        <S.Wrapper>
          <S.Testimonial>
            <Image
              className="profile-image"
              src="/images/image-emily.jpg"
              alt="profile image"
              width={72}
              height={72}
            />
            <S.Text>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </S.Text>
            <S.Who>
              <S.Name>Emily R.</S.Name>
              <S.Job>Marketing Director</S.Job>
            </S.Who>
          </S.Testimonial>
          <S.Testimonial>
            <Image
              className="profile-image"
              src="/images/image-thomas.jpg"
              alt="profile image"
              width={72}
              height={72}
            />
            <S.Text>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </S.Text>
            <S.Who>
              <S.Name>Thomas S.</S.Name>
              <S.Job>Chief Operating Officer</S.Job>
            </S.Who>
          </S.Testimonial>
          <S.Testimonial>
            <Image
              className="profile-image"
              src="/images/image-jennie.jpg"
              alt="profile image"
              width={72}
              height={72}
            />
            <S.Text>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </S.Text>
            <S.Who>
              <S.Name>Jennie F.</S.Name>
              <S.Job>Business Owner</S.Job>
            </S.Who>
          </S.Testimonial>
        </S.Wrapper>
      </S.Testimonials>
    </S.Container>
  );
};
