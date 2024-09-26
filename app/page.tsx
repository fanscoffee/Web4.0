'use client'

import { Parallax } from 'react-parallax'
import bgParallax from '../public/images/baker1.jpg'

export default function Home() {
  return (
    <Parallax
      bgImage='https://images.pexels.com/photos/5662082/pexels-photo-5662082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      strength={300}
      className='flex items-center justify-center bg-cover bg-center'
      style={{
        height: 'calc(100vh - 137px)'
      }}
    >
      <div className='items-center justify-center text-white space-y-10'>
        <p className='flex justify-center text-lg font-extralight'>Breaking Bread</p>
        <h1 className='text-6xl font-medium mx-auto flex justify-center text-center'>The Special Taste</h1>
        <p className='mx-auto flex justify-center text-center w-1/2 font-extralight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          dicta. Molestias at voluptate molestiae alias commodi aliquid sint
          excepturi consequuntur, vitae in, illo labore rem accusamus eligendi
          officia, unde nihil.
        </p>
      </div>
    </Parallax>
  )
}
