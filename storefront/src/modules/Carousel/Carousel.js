import React, { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import Image from "next/image"

const CarouselComp = (props) => {
  const [imgLoad, setimgLoad] = useState(0)

  return (
    <Carousel
      autoPlay={props.auto ? props.auto : true}
      dynamicHeight={true}
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      swipeable={true}
    >
      {props.img.map((img, index) => {
        return (
          <div key={`${img} ${index}`} className={`${props.height ? props.height : 'h-[80vh]'}`}>
            <Image
              src={img}
              alt="img"
              onLoad={() => {
                setimgLoad(imgLoad + 1)
              }}
              layout="fill"
              loading="eager"
              priority={true}
              quality={90}
              objectFit="cover"
              className="absolute inset-0"
              draggable="false"
            />
          </div>
        )
      })}
    </Carousel>
  )
}

export default CarouselComp
