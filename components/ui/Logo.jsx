import Image from "next/image"
import Link from "next/link"

const Logo = () => {

  return (
    <div className="flex justify-center mt-5">

        <div className="relative w-40 h-40">
            <Link href={'/'}>
            <Image 
                fill
                alt="Logotipo Vinculacion"
                src='/logo.jpg'
                priority="true"
            />
            
            </Link>

        </div>

    </div>
  )
}

export default Logo