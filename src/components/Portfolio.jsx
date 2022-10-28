import React from 'react'
import blockchainProject from '../assets/blockchainProject.png';
import LinearRegressionProject from '../assets/LinearRegressionProject.png';
import predictProject from '../assets/predictProject.png';
// import wordleProjectCopy from '../assets/wordleProjectCopy.png';
// import wordleProject from '../assets/wordleProject.png';
// import calculatorProject from '../assets/calculatorProject.png';



const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: blockchainProject,
        },
        {
            id: 2,
            src: LinearRegressionProject,
        }, {
            id: 3,
            src: predictProject,
        },

    ]


    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b bg-black w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-white">
                        Portfolio
                    </p>
                    <p className="py-6">Take a look at my open-source projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    View
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio