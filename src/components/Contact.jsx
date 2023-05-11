import React from 'react'

const Contact = () => {
  return (
    <div
        name='contacto'
        className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contacto</p>
                <p className='py-6'>Envia el formulario para ponerte en contacto conmigo</p>
            </div>
            
            <div className='flex justify-center items-center'>
                <form 
                    action="https://getform.io/f/e1158678-0636-4aaa-9f8e-52caea45e579" 
                    method='POST'
                    className='flex flex-col w-full md:w-1/2'>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Escribe tu nombre'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Escribe tu correo'
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <textarea 
                        name="message" 
                        placeholder='Escribe tu mensaje'
                        rows="10"
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    ></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Hablemos!!</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact