import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">Take a look on my Skills</h2>
          <p className='text-gray-500 pt-2' data-aos="zoom-in-up">I offer end-to-end web development services, which include HTML, CSS, JavaScript, and Wordpress for creating stunningly beautiful yet highly responsive websites. My expertise in PHP and Laravel will help me construct robust, scalable, and secure backend systems that fuel your web applications. Be it a simple website or complex web application, I strive to provide a quality, efficient, and customized solution for all your requirements.</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-blue-600 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">Next.Js</h2>
              <h2 data-aos="zoom-in-up">PHP</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Javascript</h2>
              <h2 data-aos="zoom-in-up">Laravel</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
