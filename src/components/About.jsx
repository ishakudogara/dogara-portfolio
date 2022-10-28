import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b bg-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-white">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    I am a software engineer with over two plus years experience
                    in the full software development cycle. I have trained over 1,000 persons on computer science, statistical
                    computation, machine learning and data science. I have spoken at
                    several technology conferences on advanced concepts within the field
                    of computer science.
                </p>

                <br />

                <p className="text-xl">
                    I have engineered and built robust solutions
                    for enterprises. I am a senior software engineer at OneBit Technologies,
                    where I lead the development of several fintech applications. I previously
                    served as a techlead for Edge ML, a remote based company in Germany.
                    I have served as a visiting professor in Baze University. Publishing
                    papers on Boltzman Machines, System Design and Computer theoory.
                </p>
            </div>
        </div>
    )
}

export default About