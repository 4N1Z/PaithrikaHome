import React from 'react'
import "./Projects.css"
function Projects() {

    // On mouse enter functions
    const upcoming_mouse_enter = () =>{
        document.getElementsByClassName('project')[0].style.width = '50%'
        document.getElementsByClassName('project')[0].style.writingMode = ''

        document.getElementsByClassName('project')[1].style.width = '25%'
        document.getElementsByClassName('project')[1].style.writingMode = 'vertical-rl'

        document.getElementsByClassName('project')[2].style.width = '25%'
        document.getElementsByClassName('project')[2].style.writingMode = 'vertical-rl'
        
    }

    const ongoing_mouse_enter = ()=> {
        document.getElementsByClassName('project')[1].style.width = '50%'
        document.getElementsByClassName('project')[1].style.writingMode = ''

        document.getElementsByClassName('project')[0].style.width = '25%'
        document.getElementsByClassName('project')[0].style.writingMode = 'vertical-rl'

        document.getElementsByClassName('project')[2].style.width = '25%'
        document.getElementsByClassName('project')[2].style.writingMode = 'vertical-rl'
    }
    const finished_mouse_enter = ()=>{
        document.getElementsByClassName('project')[2].style.width = '50%'
        document.getElementsByClassName('project')[2].style.writingMode = ''
        document.getElementsByClassName('project')[2].style.textOrientation = ''

        document.getElementsByClassName('project')[1].style.width = '25%'
        document.getElementsByClassName('project')[1].style.writingMode = 'vertical-rl'

        document.getElementsByClassName('project')[0].style.width = '25%'
        document.getElementsByClassName('project')[0].style.writingMode = 'vertical-rl'
    }

    const project_images = {
        ongoing:"url('https://w0.peakpx.com/wallpaper/747/327/HD-wallpaper-tanjiro-pic-fan-art-anime-demon-slayer-kimetsu-no-yaiba.jpg')",
        upcoming : "url('https://www.nawpic.com/media/2020/zenitsu-nawpic-68.jpg')",
        finished : "url('https://assets.puzzlefactory.pl/puzzle/439/559/original.jpg')"
    }

  return (
    <>
    <section id="project">
        <h1 className='title'>Projects</h1>

    <div className='projects-container'>
        <div className="project" id='upcoming-project' onMouseEnter={upcoming_mouse_enter}
        style={
            {
                backgroundImage : project_images.upcoming,
                width:"50%",
            }
        }>
            
            <div className="black-overlay"><p><span className='project-bold'>Upcoming</span><br />Projects</p></div>
        </div>
        <div className="project" id='ongoing-project'  onMouseEnter={ongoing_mouse_enter}
        style={
            {
                backgroundImage : project_images.ongoing,
                width:"25%",
                writingMode:'vertical-rl',
            }
        }>
            <div className="black-overlay">
                <p><span className='project-bold'>Ongoing</span><br />Projects</p>
            </div>
        </div>
        <div className="project" id='finished-project'  onMouseEnter= {finished_mouse_enter}
        style={
            {
                backgroundImage : project_images.finished,
                width:"25%",
                writingMode:'vertical-rl',
            }
        }>
            <div className="black-overlay">
                <p><span className='project-bold'>Finished</span><br />Projects</p>
            </div>
        </div>
    </div>
    </section>
  </>
  )
}

export default Projects