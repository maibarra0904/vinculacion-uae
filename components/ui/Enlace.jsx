import Link from "next/link"

const Enlace = ({ url, text, nuevo = false, external = false }) => {
    return (
        <Link
            href={url}
            className="flex justify-center items-center gap-2 hover:text-blue-500"
            target={nuevo ? '_blank' : ''}
        >
            {
                external ?
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circles-relation" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
                        <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
                    </svg>
            }
            {" " + text}
        </Link>
    )
}

export default Enlace