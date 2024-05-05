'use client'

import Image from "next/image"
import Link from "next/link"



const CategoryIcon = ({category, path}) => {
    

  return (
    <div
        className={`${path.includes("/"+category?.slug) ? 'bg-indigo-400' :''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
        <div className="w-16 h-10 relative">
        <Image 
            fill
            src={`/icon_${category.slug}.jpg`} 
            alt="Imagen Categoria"
        />
        </div>
        <Link className={`text-xl font-bold ${path.includes("/"+category?.slug) ? "text-white" :"text-indigo-800"}`} href={`/${category.slug}`}>{category.name}</Link>
    </div>
  )
}

export default CategoryIcon