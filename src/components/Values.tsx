import React from 'react'

export default function Values() {

    const valuesData = [
        {
            title: "Be world-class",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem amet quae unde non ex minima dolorem debitis! Aut distinctio nemo id praesentium provident assumenda fuga reiciendis aspernatur, ab neque."

        },
        {
            title: "Share everything you know",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem amet quae unde non ex minima dolorem debitis! Aut distinctio nemo id praesentium provident assumenda fuga reiciendis aspernatur, ab neque."
        },
        {
            title: "Always learning",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem amet quae unde non ex minima dolorem debitis! Aut distinctio nemo id praesentium provident assumenda fuga reiciendis aspernatur, ab neque."
            
        },
        {
            title: "Be supportive",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem amet quae unde non ex minima dolorem debitis! Aut distinctio nemo id praesentium provident assumenda fuga reiciendis aspernatur, ab neque."
        },
        {
            title: "Take responsibility",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem amet quae unde non ex minima dolorem debitis! Aut distinctio nemo id praesentium provident assumenda fuga reiciendis aspernatur, ab neque."
        },
        {
            title: "Enjoy downtime",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem amet quae unde non ex minima dolorem debitis! Aut distinctio nemo id praesentium provident assumenda fuga reiciendis aspernatur, ab neque."
        },
        
    ];

    return (
        <section id='about' className='container mx-auto px-4 md:px-0 my-7'>
            <div className='text-center mb-10'>
                <h2 className='text-[2.5rem] text-center leading-none  font-extrabold font-sans md:mx-auto md:text-5xl md:leading-tight mb-5 sm:text-center italic'>Our Values.</h2>
                <p className=' font-extralight text-center sm:text-center md:mx-auto max-w-[470px]'>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
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
