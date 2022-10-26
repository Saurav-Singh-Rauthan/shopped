import Item from "./item"
import Masonry from "@mui/lab/Masonry"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

import Image from "next/image"
import model from "../../../../../public/model.jpg"
import model2 from "../../../../../public/cta_one.jpg"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Latest products
          </span>
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Our newest styles are here to help you look your best.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <div className="grid grid-cols-2 gap-x-16 my-[2rem] justify-center align-middle">
          <Masonry columns={2} spacing={4} className='justify-center'>
            {data
              ? data.map((product) => <Item product={product} />)
              : Array.from(Array(4).keys()).map((i) => (
                  <li key={i}>
                    <SkeletonProductPreview />
                  </li>
                ))}
          </Masonry>
          <Image
            src={model}
            alt="model"
            height={400}
            objectFit={"cover"}
            className="rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-16">
          <Image
            src={model2}
            alt="model"
            height={400}
            objectFit={"cover"}
            className="rounded-lg"
          />
          <Masonry columns={2} spacing={4}>
            {data
              ? data.map((product) => <Item product={product} />)
              : Array.from(Array(4).keys()).map((i) => (
                  <li key={i}>
                    <SkeletonProductPreview />
                  </li>
                ))}
          </Masonry>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
