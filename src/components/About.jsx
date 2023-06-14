import React from 'react'

const About = () => {
    return (
        <div
            name='acerca de'
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Acerca de mi</p>
                </div>
                <p className='text-xl'>
                    Estudie la carrera de ingeniería en sistemas computacionales en el TecNM campues Tierra blanca, donde desarrolle diferentes proyectos y conoci muchas tecnologias tambien.
                </p>
                <br />
                <p className='text-xl'>
                    Posteriormente trabaje en la empresa IDS como desarrollador cobol por seis meses donde aprendí muchas cosas pero tambien me dí cuenta que lo que en verdad me gustaba era el desarrollo web
                </p>
                <br />
                <p className='text-xl'>
                    Actualmente me encuentro laborando como un desarrollador fullstack de manera freelance
                </p>
            </div>
        </div>
    )
}

export default About