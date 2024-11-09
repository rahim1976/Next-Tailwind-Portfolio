import Image from 'next/image';
import React from 'react'

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
    return (
        <div className='border-2 border-teal-50 w-[300px] sm:w-[350px]' data-aos="flip-up"
        >
            <div>
                <Image className='w-[300px] sm:w-[350px] h-auto'
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                    // width={800} // Width in pixels
                    // height={600} // Height in pixels
                    // sizes="(max-width: 768px) 400px, 800px" // Responsive sizes
                    // priority // Load this image first
                />
            </div>
            <div className='px-5 py-2 space-y-4'>
                <div className='text-4xl font-extralight'>{title}</div>
                <div>{desc}</div>
                <div>{tags.map((el) => (
                    <div className='tags' key={el}>

                        {el}

                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Card
