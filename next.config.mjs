/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/, // Configura las extensiones de archivos MDX
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // Incluye las extensiones de archivos MDX en las páginas
  // Otras opciones de configuración de Next.js si las tienes
}

export default withMDX(nextConfig)

  

  
