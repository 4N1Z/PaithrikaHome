import React from 'react'
import "./Projects.css"
import { logo, } from '../../assets/images/export_file'
import { project_images } from '../../constants/index'
import { Link } from 'react-router-dom'
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



  return (
    <>
    <section className='projectMainContainer' id="project">
        <h1 className='titleProject'>Projects</h1>

    <div className='projects-container'>
        <Link to="/upcoming" className="project" id='upcoming-project' onMouseEnter={upcoming_mouse_enter}
        style={
            {
                // backgroundImage : project_images.upcoming,
                width:"50%",
            }
        }>
            
            <div className="black-overlay"><p className='projectSubtitle'><span className='project-bold'>Upcoming</span><br/>Projects</p></div>
        </Link>
        <Link to="/ongoing" className="project" id='ongoing-project'  onMouseEnter={ongoing_mouse_enter}
        style={
            {
                // backgroundImage : project_images.ongoing,
                width:"25%",
                writingMode:'vertical-rl',
            }
        }>
            <div className="black-overlay">
                <p  className='projectSubtitle'><span className='project-bold'>Ongoing</span><br />Projects</p>
            </div>
        </Link>
        <Link to="/finished" className="project" id='finished-project'  onMouseEnter= {finished_mouse_enter}
        style={
            {
                // backgroundImage : project_images.finished,
                width:"25%",
                writingMode:'vertical-rl',
            }
        }>
            <div className="black-overlay">
                <p className='projectSubtitle'><span className='project-bold'>Finished</span><br />Projects</p>
            </div>
        </Link>
    </div>
    </section>
  </>
  )
}

export default Projects