import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='inicio' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    {/* <div name='inicio' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 md:pt-0'> */}
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-6xl md:text-7xl font-bold text-white'>
                {/* <h2 className='text-4xl sm:text-7xl font-bold text-white'> */}
                    Soy un desarrollador Full Stack
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Me encanta trabajar en el desarrollo web fullstack usando tecnologias modernas y estar el pendiente de las nuevas tecnologias y caracteristicas de estas mismas.
                </p>
                <div>
                    <Link to='portafolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portafolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img 
                    src={HeroImage} 
                    alt='my profile'
                    className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>

        </div>
    </div>
  )
}

export default Home