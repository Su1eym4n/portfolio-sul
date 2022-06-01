import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#15202b]">
      <div className="flex items-center">
        <strong>Suleiman</strong>
      </div>
      <nav>
        <div className="px-4 py-2 font-bold text-whiterounded hover:text-blue-300 text-lg hover:cursor-pointer">
          <Link

            href={'https://github.com/Su1eym4n'}
          >
            <AiFillGithub />
          </Link>
        </div>
      </nav>
    </div>

  )
}

export default Header