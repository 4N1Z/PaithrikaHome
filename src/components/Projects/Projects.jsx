import React from 'react'
import "./Projects.css"
function Projects() {
  return (
    <div className='projects-container'>
        <div className="project" id='upcoming-project' onMouseEnter={()=>{
            document.getElementsByClassName('project')[0].style.width = '50%'
            document.getElementsByClassName('project')[0].style.writingMode = ''

            document.getElementsByClassName('project')[1].style.width = '25%'
            document.getElementsByClassName('project')[1].style.writingMode = 'vertical-rl'

            document.getElementsByClassName('project')[2].style.width = '25%'
            document.getElementsByClassName('project')[2].style.writingMode = 'vertical-rl'
            
        }}
        style={
            {
                backgroundImage : "url('https://w0.peakpx.com/wallpaper/747/327/HD-wallpaper-tanjiro-pic-fan-art-anime-demon-slayer-kimetsu-no-yaiba.jpg')",
                width:"50%",
            }
        }>
            
            <div className="black-overlay"><p><span className='project-bold'>Upcoming</span><br />Projects</p></div>
        </div>
        <div className="project" id='ongoing-project'  onMouseEnter={()=>{
            document.getElementsByClassName('project')[1].style.width = '50%'
            document.getElementsByClassName('project')[1].style.writingMode = ''

            document.getElementsByClassName('project')[0].style.width = '25%'
            document.getElementsByClassName('project')[0].style.writingMode = 'vertical-rl'

            document.getElementsByClassName('project')[2].style.width = '25%'
            document.getElementsByClassName('project')[2].style.writingMode = 'vertical-rl'
        }}
        style={
            {
                backgroundImage : "url('https://www.nawpic.com/media/2020/zenitsu-nawpic-68.jpg')",
                width:"25%",
                writingMode:'vertical-rl',
            }
        }>
            <div className="black-overlay">
                <p><span className='project-bold'>Ongoing</span><br />Projects</p>
            </div>
        </div>
        <div className="project" id='finished-project'  onMouseEnter={()=>{
            document.getElementsByClassName('project')[2].style.width = '50%'
            document.getElementsByClassName('project')[2].style.writingMode = ''
            document.getElementsByClassName('project')[2].style.textOrientation = ''

            document.getElementsByClassName('project')[1].style.width = '25%'
            document.getElementsByClassName('project')[1].style.writingMode = 'vertical-rl'

            document.getElementsByClassName('project')[0].style.width = '25%'
            document.getElementsByClassName('project')[0].style.writingMode = 'vertical-rl'
        }}
        style={
            {
                backgroundImage : "url('https://assets.puzzlefactory.pl/puzzle/439/559/original.jpg')",
                width:"25%",
                writingMode:'vertical-rl',
            }
        }>
            <div className="black-overlay">
                <p><span className='project-bold'>Finished</span><br />Projects</p>
            </div>
        </div>
    </div>
  )
}

export default Projects