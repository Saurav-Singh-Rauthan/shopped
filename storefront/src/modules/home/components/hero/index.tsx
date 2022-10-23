import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

import Carousel from "../../../Carousel/Carousel"

import m1 from "../../../../../public/cta_four.jpg"
import m2 from "../../../../../public/cta_one.jpg"
import m3 from "../../../../../public/cta_three.jpg"
import m4 from "../../../../../public/cta_two.jpg"

const Hero = () => {
  const images = [m1, m2, m3, m4]

  return (
    <div className="h-[90vh] w-full relative lg:grid lg:grid-cols-2 ">
      {/* <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Summer styles are finally here
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div> */}
      {/* <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      /> */}
      <Carousel img={images} />
      <div className="lg:bg-black max-[768px]:absolute  text-center  flex lg:block cursor-default w-full">
        <p className="transition-all text-[48px] lg:text-[64px] max-[1023px]:bottom-[250px] max-[1023px]:absolute w-full justify-center lg:relative lg:top-1/2 align-middle text-white capitalize">
          Find your <strong className="text-blue-500">inner</strong> self
        </p>
      </div>
    </div>
  )
}

export default Hero
