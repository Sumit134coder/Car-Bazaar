
import Image from 'next/image'
import heroBg from '../../public/hero-bg.png'
import hero from '../../public/hero.png'

export default function Home() {
  return (
    <div className=''>
      {/* ---hero section--- */}
      <div className='grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen py-[4rem]'>
        {/* --text--- */}
        <div className='px-global h-full flex flex-col justify-evenly gap-[2rem]'>
          <h1 className='text-[4rem] font-bold leading-tight'>Find, book, rent a car <br/> - quick and super easy!</h1>
          <p className='text-[2rem]'>Streamline your car rental experience with our effortless booking process.</p>
          <button type='button' className='btn btn-primary w-min'>Explore</button>
        </div>

        {/* --images--- */}
        <div className='h-[20rem] mt-[2rem] md:mt-0 md:h-auto relative overflow-hidden'>
          <Image src={heroBg} height={1000} width={1000} className='h-full w-full absolute ' />
          <Image src={hero} height={1000} width={1000} className='h-auto w-auto absolute bottom-0' />
        </div>
      </div>
    </div>
  )
}
