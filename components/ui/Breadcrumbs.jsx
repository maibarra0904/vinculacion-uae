'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
    const pathname = usePathname();
    
    // Ignore home page from rendering the breadcrumb since it's redundant
    if (pathname === '/') return null;

    const paths = pathname.split('/').filter(Boolean);

    const nameMap = {
        'labor': 'Labor Comunitaria',
        'practica': 'Prácticas Preprofesionales',
        'tema': 'Ideas de Temas IA',
        'oficio': 'Solicitud de Oficio',
        'login': 'Iniciar Sesión',
        'register': 'Registrarse',
        'perfil': 'Perfil del Proyecto',
        'informe': 'Informe Final',
        'convenio': 'Convenios'
    };

    return (
        <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-sm text-gray-500 dark:text-gray-400 mb-6 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-gray-200/80 dark:border-gray-800/80 w-fit max-w-full">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 focus:outline-none whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                </svg>
                <span>Inicio</span>
            </Link>

            {paths.map((path, index) => {
                const url = `/${paths.slice(0, index + 1).join('/')}`;
                const isLast = index === paths.length - 1;
                const label = nameMap[path] || path.charAt(0).toUpperCase() + path.slice(1);

                return (
                    <div key={url} className="flex items-center space-x-2 flex-shrink-0">
                        <span className="text-gray-300 dark:text-gray-600">/</span>
                        {isLast ? (
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                                {label}
                            </span>
                        ) : (
                            <Link href={url} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap">
                                {label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
