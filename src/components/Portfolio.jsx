import React from 'react';
import Ai from '../images/aiweb.png'

const Portfolio = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden px-4 py-4 bg-blue-300">
            <h2 className="text-center mt-4 font-bold underline text-3xl title-font text-black tracking-widest">Projects</h2>
            <div className="container px-5 items-center justify-center mx-auto py-10">
                <div className="flex flex-wrap w-full">
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 h-[70vh]">
                        <img className='rounded' src={Ai} />
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0 items-center">
                        <h1 className="text-gray-900 text-2xl title-font items-center font-medium mb-1 mt-6">The Ai Web</h1>
                        <p className="">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">Visit Ai Web</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Visit Ai</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
