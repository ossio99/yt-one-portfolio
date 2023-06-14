import travelAgency from '../assets/portfolio/travelAgency.png'
import appGastos from '../assets/portfolio/appGastos.png'

// import javascript from '../assets/portfolio/techs/javascript.png'
import node from '../assets/portfolio/techs/node.png'
import reactImage from '../assets/portfolio/techs/react.png'
// import nextjs from '../assets/portfolio/techs/nextjs.png'
import tailwild from '../assets/portfolio/techs/tailwind.png'
import express from '../assets/portfolio/techs/express.png'
import firebase from '../assets/portfolio/techs/firebase.png'
// import reactRouter from '../assets/portfolio/techs/react-router.png'

const Portfolio = () => {
	const projects = [
		{
			id: 2,
			src: appGastos,
			title: 'Control de gastos',
			description: 'Aplicacion para administrar tus gastos',
			demoLink: 'https://app-gastos-2.web.app/',
			codeLink: 'https://github.com/ossio99/app_gastos',
			techs: [reactImage, firebase]
			// techs: [reactImage, reactRouter, firebase]
		},
		{
			id: 3,
			src: travelAgency,
			title: 'Agencia de viajes',
			description: 'Pagina con toda la informacion necesaria de una agencia de viajes',
			demoLink: 'https://agencia-viajes.herokuapp.com/',
			codeLink: 'https://github.com/ossio99/agenvia-viajes',
			techs: [node, express, tailwild]
		}
	]

	return (
		<div name='portafolio' className='bg-gradient-to-b from-black to-gray-800 w-full lg:h-screen text-white'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
					<p className='py-6'>Echale un ojo a algunos de mis trabajos</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{projects.map(({ id, src, demoLink, codeLink, title, techs, description }) => (
						<div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
							<img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
							<div>
								<h2 className='text-center my-3'>{title}</h2>
								<p className='m-5'>{description}</p>
								<div className='flex justify-center'>
									{techs.map((tech, i) => (
										<img key={i} src={tech} alt=""  className="mx-3"/>
									))}
								</div>
							</div>
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