import React from 'react'
import typescript from '../assets/typescript.png'
import keras from '../assets/keras.png'
// import node from '../assets/node.png'
// import pytorch from '../assets/pytorch.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import cpp from '../assets/cpp.png'
import golang from '../assets/golang.jpg'




const Experience = () => {
    const tools = [
        {
            id: 1,
            src: typescript,
            title: "TypeScript",
            style: "shadow-blue-500",
        },
        {
            id: 2,
            src: keras,
            title: "Keras",
            style: "shadow-red-500",
        },
        {
            id: 3,
            src: java,
            title: "Java",
            style: "shadow-orange-400",
        },
        {
            id: 4,
            src: python,
            title: "Python",
            style: "shadow-yellow-500",
        },
        {
            id: 5,
            src: cpp,
            title: "C++",
            style: "shadow-blue-400",
        },
        {
            id: 6,
            src: golang,
            title: "GoLang",
            style: "shadow-green-400",
        },
    ];
    return (
        <div
            name="experience"
            className="bg-gradient-to-b bg-black w-full h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">These are the Tools I have worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {tools.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience