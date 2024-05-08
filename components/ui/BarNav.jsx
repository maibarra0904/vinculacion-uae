import React from 'react'
import CategoryIcon from './CategoryIcon'

const BarNav = ({path, showNavBar}) => {
    const categories = [
        {
            id: 1,
            name: "Labores Comunitarias",
            slug: "labor"
        },
        {
            id: 2,
            name: "Practicas Preprofesionales",
            slug: "practica"
        },
        {
            id: 3,
            name: 'Desglose (Egresados)',
            slug: "desglose"
        }
    ]
  return (
    <nav className={`${showNavBar ? 'mt-0' : 'mt-10'}`}>
            {
                categories.map(category => (
                    <CategoryIcon 
                        key={category.id}
                        category={category}
                        path={path}
                    />
                ))
            }
        </nav>
  )
}

export default BarNav