import travelAgency from '../assets/portfolio/travelAgency.png'
import appGastos from '../assets/portfolio/appGastos.png'

const Portfolio = () => {
	const portfolios = [
		// {
		// 	id: 1,
		// 	src: arrayDestruct
		// },
		// {
		// 	id: 2,
		// 	src: reactParallax
		// },
		// {
		// 	id: 3,
		// 	src: navBar
		// },
		// {
		// 	id: 4,
		// 	src: reactSmooth
		// },
		// {
		// 	id: 5,
		// 	src: installNode
		// },
		// {
		// 	id: 6,
		// 	src: reactWeather
		// },
		{
			id: 7,
			src: appGastos,
			demoLink: 'https://app-gastos-2.web.app/',
			codeLink: 'https://github.com/ossio99/app_gastos'
		},
		{
			id: 8,
			src: travelAgency,
			demoLink: 'https://agencia-viajes.herokuapp.com/',
			codeLink: 'https://github.com/ossio99/agenvia-viajes'
		}
	]

	return (
		<div name='portafolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
					<p className='py-6'>Echale un ojo a algunos de mis trabajos</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{portfolios.map(({ id, src, demoLink, codeLink }) => (
						<div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
							<img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
							<div className='flex items-center justify-center'>
								<a href={demoLink} target='_black'>
									<button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
								</a>
								<a href={codeLink} target='_black'>
									<button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
								</a>
							</div>
						</div>
					))}
				</div>


			</div>
		</div>
	)
}

export default Portfolio