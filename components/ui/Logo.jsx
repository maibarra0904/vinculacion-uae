import Image from "next/image"
import Link from "next/link"

const Logo = ({image}) => {

  return (
    <div className="flex justify-center md:mt-5">

        <div className="relative w-40 h-40">
            <Link href={'/'}>
            <Image 
                fill
                alt="Logotipo Vinculacion"
                src={image}
                priority="true"
            />
            
            </Link>

        </div>

    </div>
  )
}

export default Logo