import React from 'react'
import Image from 'next/image'
import pic from '../public/IMG_6948.JPG'
import Post from './Post'
const styles = {
    feedWrapper: ' lg:mx-20 sm:mx-2',
    aboutWrapper: 'text-center px-3 py-2 text-2xl',
    experienceWrapper: 'text-center px-3 py-2 text-2xl',
    projectsWrapper: 'text-center px-3 py-2 text-2xl',
    playgroundWrapper: 'text-center px-3 py-2 text-2xl',
}


const tech1 = ['React', 'Node', 'Tailwind', 'Stripe']
const color1 = ['bg-emerald-400', 'bg-orange-400', 'bg-indigo-400', 'bg-red-400', 'bg-purple-400']

const tech2 = ['React', 'Node', 'Stripe', 'Axios', 'cheerio']
const color2 = ['bg-indigo-400', 'bg-purple-400', 'bg-emerald-400', 'bg-red-400', 'bg-cyan-400']

const tech3 = ['React', 'Node', 'Solidity', 'Stripe', 'Truffle']
const color3 = ['bg-orange-400', 'bg-indigo-400', 'bg-red-400', 'bg-purple-400', 'bg-emerald-400']

const tech4 = ['React.js', 'Next.js', 'Solidity', 'Stripe', 'Truffle']
const color4 = ['bg-red-400', 'bg-orange-400', 'bg-indigo-400', 'bg-emerald-400', 'bg-purple-400']


const Feed = () => {
    return (

        <div className={styles.feedWrapper}>
            <div className={styles.aboutWrapper}>
                <div className="grid grid-rows-3 grid-flow-col gap-1">
                    <div className="row-span-3">
                        <Image
                            className='object-scale-cover rounded-full border-2'
                            src={pic}
                            width={100}
                            height={100}
                            placeholder='empty'
                            alt='logo'
                        />
                    </div>
                    <div className="col-span-2 text-2xl">About me</div>
                    <div className="row-span-2 col-span-2">
                        <div className='text-sm text-left rounded-md py-3 px-1 bg-slate-400/10 hover:bg-slate-400/5'>
                            <p>I am Suleiman, Software Developer from Dallas. In 3+ years of experience I worked with various modern technologies used in Web Development, and WEB 3.0</p>
                            <p>Some text goes here...</p>
                        </div>
                    </div>
                </div>

                {/* About Me
                <div className='grid grid-rows-2 gap-3 px-3 py-2 '>
                    <div className='text-sm text-left rounded-md py-3 px-1 bg-slate-400/10 hover:bg-slate-400/5 w-90  '>
                        <p>I am Suleiman, Software Developer from Dallas. In 3+ years of experience I worked with various modern technologies used in Web Development, and WEB 3.0</p>
                    </div> */}
                <div className='flex'>
                    <span className="text-xs font-semibold inline-block py-1 px-2 my-1 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-emerald-400">
                        React.js
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 my-1 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-orange-400">
                        Next.js
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 my-1 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-indigo-400">
                        Rust
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 my-1 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-red-400">
                        Solidity
                    </span>
                </div>

                {/* </div> */}

            </div>
            <div className={styles.experienceWrapper}>
                Experience
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 '>
                    <Post position={'Fullsatck Developer'} company={'skillcrucial.com'} tech={tech1} description='Lorem Ipsum Abobaist Mangaed  dkjf or os dojkfnls don sod v os o vkrhjgsr islrgn osng srgj ksgn osrjgn sksrhjg  ojfg  joisrjg opkgvno ojhsrvno osjgnk khldgio ihgl;n dilng' color={color1} />
                    <Post position={'Fullstack Developer'} company={'PixelKraft LLS'} tech={tech2} description='Lorem Ipsum Abobaist' color={color2} />
                    <Post position={'Developer'} company={'myNFT.is '} tech={tech3} description='Lorem Ipsum Abobaist' color={color3} />
        

                </div>


            </div>
            <div className={styles.projectsWrapper}>
                Projects
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                    <Post position={'Creator'} company={'Decentralized social platform'} tech={tech1} description='Lorem Ipsum Abobaist Mangaed  dkjf or os dojkfnls don sod v os o vkrhjgsr islrgn osng srgj ksgn osrjgn sksrhjg  ojfg  joisrjg opkgvno ojhsrvno osjgnk khldgio ihgl;n dilng' color={color1} />
                    <Post position={'Creater'} company={'Web Scraper'} tech={tech2} description='Lorem Ipsum Abobaist' color={color2} />

                </div>

            </div>
            {/* <div className={styles.playgroundWrapper}>
                Playground
            </div> */}

        </div>


    )
}

export default Feed