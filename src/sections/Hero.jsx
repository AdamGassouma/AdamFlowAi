import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* Left text column */}
          <div className="max-w-512 max-lg:max-w-388 text-center lg:text-left lg:flex-1">
            <div className="caption small-2 uppercase text-p3 mb-2">
              AI automation
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly powerful
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We build AI systems that eliminate repetitive work and save businesses hundreds of hours every month
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          {/* Right image column */}
          <div className="lg:flex-1 flex justify-center lg:justify-end fade-image">
            <img
              src="/images/hero-image.png"
              className="w-full max-w-[1200px] rounded-lg h-[350px]" // make it bigger
              alt="hero"
            />
          </div>

        </div>
      </Element>
    </section>
  );
};

export default Hero;
