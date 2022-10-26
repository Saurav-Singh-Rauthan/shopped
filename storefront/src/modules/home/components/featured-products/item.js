import React, { useState } from "react"

import Image from "next/image"

import ProductPreview from "@modules/products/components/product-preview"

const Item = (props) => {
  const [open, setopen] = useState(false)

  console.log(props.product)

  return (
    <>
      {!open === true ? (
        <div onClick={() => setopen(true)} className="transition-all duration-300 grid grid-cols-2 gap-1 bg-[#F8F8FA] rounded-md hover:scale-105 hover:border-black border cursor-pointer">
          <Image
            src={props.product.thumbnail}
            loading="eager"
            quality={100}
            objectFit="cover"
            height={200}
            width={100}
          />
          <div className="flex flex-col gap-y-2 align-middle justify-center text-center">
            <div>{props.product?.title}</div>
            <div>{props.product?.price.original_price}</div>
          </div>
        </div>
      ) : (
        <div key={props.product.id}>
          <ProductPreview
            {...props.product}
            className={`"transition-all duration-300  ${
              open ? "" : "!h-[0px] !w-[0px]"
            }"`}
          />
        </div>
      )}
    </>
  )
}

export default Item
