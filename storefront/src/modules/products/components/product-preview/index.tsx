import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <a>
        <div className="relative transition-all duration-300 shadow hover:shadow-black hover:scale-105">
          <Thumbnail thumbnail={thumbnail} size="full" />

          <div className="text-base-regular mt-2 p-4 relative flex flex-col gap-4 justify-between">
            <div>
              <span>{title}</span>
              <div className="flex items-center gap-x-2 mt-1">
                {price ? (
                  <>
                    {price.price_type === "sale" && (
                      <span className="line-through text-gray-500">
                        {price.original_price}
                      </span>
                    )}
                    <span
                      className={clsx("font-semibold", {
                        "text-rose-500": price.price_type === "sale",
                      })}
                    >
                      {price.calculated_price}
                    </span>
                  </>
                ) : (
                  <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
                )}
              </div>
            </div>
            <button className="bg-blue-800 text-white h-fit py-2 px-4 rounded hover:bg-blue-400 float-right bottom-0">
              View
            </button>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
