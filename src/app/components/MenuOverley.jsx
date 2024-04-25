import React from 'react'
import NavLink from './NavLink'

function MenuOverley({ links }) {
  return (
    <ul className='flex flex-col fy-4 items-center md:hidden'>
        {
            links.map((link, index) => (
                <li key={index}>
                <NavLink href={link.path} title={link.title} />
                </li>
            ))
        }
    </ul>
  )
}

export default MenuOverley