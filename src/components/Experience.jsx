import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwild from '../assets/tailwind.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongoDB from '../assets/mongo-db.png'

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwild,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: express,
            title: 'Express JS',
            style: 'shadow-white'
        },
        {
            id: 9,
            src: mongoDB,
            title: 'Mongo DB',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        }
    ]
    
    return (
        <div
            name='experiencia'
            className='bg-gradient-to-b from-gray-800 to-black w-full pt-40 md:pt-0'
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experiencia</p>
                    <p className='py-6'>Estas son algunas de las tecnologías con las que he trabajado</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {techs.map(({id,src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Experience