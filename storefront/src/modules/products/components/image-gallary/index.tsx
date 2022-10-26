import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { useRef } from "react"
import Carousel from "../../../Carousel/Carousel"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  const img: any = []
  images.map((image) => {
    img.push(image.url)
  })

  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        <Carousel img={img} auto={false} />
      </div>
    </div>
  )
}

export default ImageGallery
