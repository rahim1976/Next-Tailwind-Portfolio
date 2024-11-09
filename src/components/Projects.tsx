import React from 'react'
import { DiJavascript } from 'react-icons/di'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Daffodil Laundry",
        desc: "This portfolio website for Daffodil Laundry in Dubai highlights their key services, including free pickup and delivery.",
        img: "/project_00.png",
        tags: ["HTML", "CSS", "Javascript"],
    },
    {
        id: 1,
        title: "QuriarBox",
        desc: "This web app for Quriarbox, a courier service provider, is built with core PHP, fully functional & user-friendly.",
        img: "/project_01.png",
        tags: ["HTML", "CSS", "Javascript" , "PHP"],
    },
    {
        id: 2,
        title: "Extreme Computers",
        desc: "This is a fully functional eCommerce website for Extreme Computers, Developed using Laravel/PHP.",
        img: "/project_02.png",
        tags: ["HTML", "CSS", "Javascript" , "Laravel/PHP"],
    },
    {
        id: 3,
        title: "Paper Verse",
        desc: "This is a fully responsive Static Web Design Book Store, Designed using HTML, Bootsrap, & Javascript",
        img: "/project_03.png",
        tags: ["HTML", "CSS", "Javascript"],
    },
    {
        id: 4,
        title: "Mobile Wali",
        desc: "This is a fully functional Web application for a mobile bussiness, Developed using HTML, Bootsrap, & Javascript",
        img: "/project_04.png",
        tags: ["HTML", "CSS", "Javascript"],
    },
    {
        id: 5,
        title: "Soccer Club",
        desc: "This is a fully functional Sports Website, Soccer Club, Developed using HTML, CSS, & Javascript , Laravel/PHP",
        img: "/project_05.png",
        tags: ["HTML", "CSS", "Javascript" ,"Laravel/PHP"],
    },

]

const Projects = () => {
    return (
        <div id='projects' className='container pt-32'>
            <Heading title='My Projects'/>
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
                {data.map((el) => (<Card
                    key={el.id}
                    title={el.title}
                    desc={el.desc}
                    img={el.img}
                    tags={el.tags}
                />))}
            </div>
        </div>
    )
}

export default Projects
