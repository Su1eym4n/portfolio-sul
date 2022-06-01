import React from 'react'
import Image from 'next/image'
const styles = {
  feedWrapper: 'py-1',
  aboutWrapper: 'text-center px-3 py-2 text-2xl',
  experienceWrapper: 'text-center px-3 py-2 text-2xl',
  projectsWrapper: 'text-center px-3 py-2 text-2xl',
  playgroundWrapper: 'text-center px-3 py-2 text-2xl',
}
const Feed = () => {
  return (
    <div className={styles.feedWrapper}>
      <div className={styles.aboutWrapper}>
        About
        <div className='grid grid-rows-2 gap-3 px-3 py-2 '>
          <div className='text-sm text-left rounded-md py-3 px-1 bg-slate-400/10 hover:bg-slate-400/5 w-90  '>
            <p>I am Suleiman, Software Developer from Dallas. In 3+ years of experience I worked with various modern technologies used in Web Development, and WEB 3.0</p>
          </div>
          <div className='flex'>
            <span className="text-xs font-semibold inline-block py-1 px-2 my-4 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-emerald-400">
              React.js
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 my-4 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-orange-400">
              Next.js
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 my-4 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-indigo-400">
              Rust
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 my-4 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-red-400">
              Solidity
            </span>
          </div>

        </div>

      </div>
      <div className={styles.experienceWrapper}>
        Experience
        
      </div>
      <div className={styles.projectsWrapper}>
        Projects
      </div>
      <div className={styles.playgroundWrapper}>
        Playground
      </div>

    </div>
  )
}

export default Feed