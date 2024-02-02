import React from 'react'

export default function Values() {

    const valuesData = [
        {
            title: "Be world-class",
            description: "Elevate your expectations with Baby Queen Transport - where excellence is not just a goal but a journey. We strive to provide top-notch services that redefine industry standards and exceed your every expectation."
    
        },
        {
            title: "Share everything you know",
            description: "At Baby Queen Transport, we believe in the power of knowledge-sharing. Our commitment is to openly share our expertise, ensuring transparency and collaboration at every step of your journey with us."
    
        },
        {
            title: "Always learning",
            description: "Embrace a culture of continuous improvement with Baby Queen Transport. We are dedicated to learning, adapting, and staying ahead of the curve to deliver innovative solutions for your transportation needs."
    
        },
        {
            title: "Be supportive",
            description: "Experience a supportive partnership with Baby Queen Transport. Our team is here to understand your unique requirements and provide personalized, reliable support, ensuring your success in every delivery."
    
        },
        {
            title: "Take responsibility",
            description: "Rest easy knowing that Baby Queen Transport takes full responsibility for your cargo. Our commitment to accountability ensures that your shipments are in safe hands, allowing you to focus on your core business."
    
        },
        {
            title: "Enjoy downtime",
            description: "Balance work and relaxation with Baby Queen Transport. We understand the importance of downtime, and our efficient services ensure you have more time to enjoy the moments that matter while we handle your transportation needs."
        }
    
    ];
    

    return (
        <section id='values' className='container mx-auto px-4 md:px-0 my-7'>
            <div className='text-center mb-10'>
                <h2 className='text-[2.5rem] text-center leading-none  font-extrabold font-sans md:mx-auto md:text-5xl md:leading-tight mb-5 sm:text-center italic'>Our Values.</h2>
                <p className=' font-extralight text-center sm:text-center md:mx-auto max-w-[470px]'>We pride ourselves on being more than just colleagues; we are a family. </p>
            </div>

            <div className="mx-auto md:mb-32 grid text-center  lg:w-full lg:mb-0 md:grid-cols-2  lg:grid-cols-3 lg:text-left">
                {valuesData.map((value, index) => (
                    <div
                        key={index}
                        className={`group rounded-lg border border-transparent px-5 py-4 cursor-pointer transition-colors`}
                    >
                        <h2 className={`mb-3 text-2xl sm:text-center lg:text-left`}>
                            {value.title}
                        </h2>
                        <p className={`lg:m-0 md:max-w-full text-sm opacity-50 mx-auto`}>
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
