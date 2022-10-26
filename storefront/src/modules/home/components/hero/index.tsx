import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

import Carousel from "../../../Carousel/Carousel"

import m1 from "../../../../../public/1.jpg"
import m2 from "../../../../../public/2.jpg"

const Hero = () => {
  const images = [m1, m2]

  return (
    <div className="h-[80vh] w-full">
      <Carousel img={images} />
    </div>
  )
}

export default Hero
