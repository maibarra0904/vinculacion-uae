'use client'
import Link from "next/link"

const CategoryIcon = ({category, path}) => {
  const isActive = path.includes("/" + category?.slug)

  const getIcon = (slug) => {
    if (slug === 'labor') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m.94 3.197c0-.225-.012-.447-.037-.666A11.944 11.944 0 0112 21c2.17 0 4.207-.576 5.963-1.584M12 21a11.944 11.944 0 01-5.963-1.584M6 18.72a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198l-.001.031c0 .225.012.447.037.666A11.944 11.944 0 0012 21c2.17 0 4.207-.576 5.963-1.584M12 11.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zm10.5-1.125a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zm-21 0a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z" />
        </svg>
      )
    }
    if (slug === 'practica') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c.496 0 .911-.322 1.045-.8l.81-2.834c.143-.499-.236-1.016-.755-1.016H2.65c-.519 0-.898.517-.755 1.016l.81 2.834c.134.478.549.8 1.045.8m16.5 0H3.75m16.5 0h.01m-16.5 0h.01m0 0H3.75m11.25-11.25H9m3.75 0V15M12 18.75h.008v.008H12v-.008z" />
        </svg>
      )
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.59 4.59A2 2 0 0111.17 4H12a2 2 0 012 2v.59a2 2 0 00.58 1.42l4.83 4.83a2 2 0 010 2.83l-4.83 4.83a2 2 0 01-2.83 0l-4.83-4.83a2 2 0 010-2.83l4.83-4.83z" />
      </svg>
    )
  }

  return (
    <Link href={`/${category.slug}`} className="block mx-3 mb-1">
      <div className={`flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}>
         <div className={`p-1.5 rounded-lg ${isActive ? 'bg-indigo-500' : 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400'}`}>
            {getIcon(category.slug)}
         </div>
         <span className="font-semibold text-sm">{category.name}</span>
      </div>
    </Link>
  )
}

export default CategoryIcon