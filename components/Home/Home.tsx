import { Footer } from "../Footer";
import { Gallery } from "../Gallery";
import { Header } from "../Header";
import { InfoSection } from "../InfoSection";
import { InfoSection2 } from "../InfoSection2";
import { Testimonials } from "../Testimonials";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <InfoSection
          title="Transform your brand"
          text="We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you."
          src="image-transform.jpg"
        />
        <InfoSection
          title="Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          src="image-stand-out.jpg"
          color="red"
          reverse
        />
        <InfoSection2 />
        <Testimonials />
        <Gallery />
        <Footer />
      </main>
    </>
  );
};
