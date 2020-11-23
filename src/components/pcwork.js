import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import PhilipsImage from './images/PhilipsImage.png';
import PhilipsBrush from './images/PhilipsBrush.png';
import IfaImage from './images/IfaImage.png';
import DDBBifa from './images/DDBBifa.png';
import PostiAll from './images/PostiAll.jpg';

import SlushImage from './images/SlushImage.png';
import MoodScreens from './images/MoodScreens.png';
import LOFImood from './images/LOFImood.png';
import LOFIphone from './images/LOFIphone.png';
import FrameHiFi from './images/FrameHiFi.png';
import FrameHiFim1 from './images/FrameHiFim1.png';
import FrameHiFim2 from './images/FrameHiFim2.png';

import Pdance from './images/Pdance.gif';
import Pangry from './images/Pangry.gif';
import Pgreat from './images/Pgreat.gif';

import MoodMock from './images/MoodMock.png';
import MoodAM from './images/MoodAM.png';
import MoodHome from './images/MoodHome.png';
import EverisImage from './images/EverisImage.png';
import TriitVideo from './images/TriitV.mp4';
import MoodGIF from './images/MoodGIF.gif';
import FiltersGIF from './images/FiltersGIF.gif';
import StatusGIF from './images/StatusGIF.gif';
import SearchIcon from './images/SearchIcon.png';
import IdeaIcon from './images/IdeaIcon.png';
import ValidationIcon from './images/ValidateIcon.png';
import ProtoIcon from './images/ProtoIcon.png';
import PhilipsLetterIcon from './images/PhilipsLetterIcon.png';
import LogoPC from './images/pcIconN.png';

import OnlineUserIcon from './images/OnlineUserIcon.png';
import EcoIcon from './images/EcoIcon.png';
import ECommersIcon from './images/E-commersIcon.png';

class Resume extends Component {
  render() {
    return (
            <div style={{backgroundColor:"#2770FA"}}>
              <div>
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PCfolio.github.io/iande">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PCfolio.github.io/iande">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PCfolio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PCfolio.github.io/hackathonEU">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PCfolio.github.io/hackathonEU">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={PhilipsLetterIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"Revolutionizing team management, knowing the story behind the team."</p>
                  </div>
                </div>
              <div style={{backgroundColor:"white"}}>
              <img className="imageProject" src={PhilipsImage}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                On February to August of 2020, I started my internship as a UX Designer at <a className = "LinkStyle" href="https://www.philips.com/global">Philips</a> based in Amsterdam. I was involved in
                two different projects inside the design department of Philips Amsterdam and Eindhoven. In both projects, I make use of my technical background as a Computer Engineer, while I use my designing skills
                to design a new idea and better user experience. The main objective of the projects consists of development ideas that the design department of Philips can use for a future project or inside their team
                management.</p>
                <h3 style={{padding: '0.2em',textAlign: 'center', color: '#FFAD00'}}><b>Team mood dashboard</b></h3>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                Work environments are becoming increasingly collaborative, but team management applications typically lack features that focus on the team mood and employees emotions. To understand better the team mood,
                Philips developed an internal tool that helps employees share their feelings, so team managers create a positive work environment. To reach this goal, the team followed the user-centred design methods.
                Based on project Aristoteles from Google, the objective is to create a team dashboard that displays how the employees are feeling. Also, the solution should develop a procedure to obtain a teammate's mood,
                guarantee the data reliability. These are the central features that TRIIT brings:</p>
                <div className = "ContGrid3" style={{color: 'white', paddingBottom: '2em', paddingTop:"2em"}}>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={StatusGIF} style={{height: '25vh', borderRadius:"100%"}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Teammate status</b></p>
                    <p>See the status of each teammate to know more from them.</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={FiltersGIF} style={{height: '25vh', borderRadius:"100%"}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Team filters</b></p>
                    <p>Create team filter to improve communication and team connections.</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={MoodGIF} style={{height: '25vh', borderRadius:"100%"}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>User mood</b></p>
                    <p>Using the emotion wheel to represents up to 32 emotions.</p>
                  </div>
                </div>
              </div>
              <img className="imageProject" src={MoodAM} />
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#FFAD00'}}><b>Design</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  <b>Research</b></p>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                  The research process took a total of four weeks. During this period, I focus on doing an observation procedure inside the company and collect data from papers and past projects. Additionally, I created a
                  questionnaire to obtain relevant quantitative data and conducted a total of 16 interviews to obtain qualitative data. To evaluate and analyse all the data, for the ideation process, the team used an affinity
                  mapping and brains storming techniques.</p>
                </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <img src={MoodMock} style={{maxWidth: '100vh', width: '70%', height: 'auto', paddingTop: '8vh'}}/></div>
                </div>
                </div>
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '2em'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                    <img src={Pangry} style={{maxWidth: '100vh', width: '25%', height: 'auto', paddingTop: '4vh', borderRadius: "100%", padding:"0.5em"}}/>
                    <img src={Pdance} style={{maxWidth: '100vh', width: '25%', height: 'auto', paddingTop: '4vh', borderRadius: "100%", padding:"0.5em"}}/>
                    <img src={Pgreat} style={{maxWidth: '100vh', width: '25%', height: 'auto', paddingTop: '4vh', borderRadius: "100%", padding:"0.5em"}}/></div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                    <b>Ideation</b></p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                    The ideation process was divide into two different cycles, a Lo-Fi prototyping AvsB testing and a Hi-Fi usability testing procedure. With the first cycle, the ideation procedure confirms that the user feels more
                    comfortable expressing their emotion using images or tools that let them express their thought. The second cycle shows how using Gif, and an interactive dashboard made the users feel more comfortable using a mood
                    dashboard inside their work environment.
                    </p>
                  </div>
                  </div>
                  </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src={LOFImood} style={{paddingTop:"2em", paddingBottom:"2em", width:'90%', borderRadius: '1em',textAlign: 'center'}}/></div>
                <div style={{paddingTop:'4vh', paddingBottom:'4vh'}}><div className="textPadding">
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>The final design is a web app that captures the emotions of
                  the team using a daily subjective survey and displays the overall result on a dashboard using an animated gif of each employee. The objective of using gif is to make the
                  application more human, avoiding to treat the emotions of the employees just like a simple number and understand the reason for their mood. Overall the final result was a
                  complete success and Philips will implement this knowledge in future projects.</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img className ="HidePhone" src={FrameHiFi} style={{paddingTop:"2em" ,width:'80%',textAlign: 'center'}}/></div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img className ="HidePC" src={FrameHiFim1} style={{paddingTop:"2em" ,width:'80%',textAlign: 'center'}}/></div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img className ="HidePC" src={FrameHiFim2} style={{paddingTop:"2em" ,width:'80%',textAlign: 'center'}}/></div>
                </div>
                <div style={{backgroundColor: '#2770FA', paddingBottom: '8vh'}}>
                <img className="imageProject" src={MoodHome} />
                  <div style={{backgroundColor: '#2770FA'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#FFAD00'}}><b>Process</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>The project intended to teach the
                  overall process and practices of <b>user-centred design</b> of digital products and services. Therefore, we needed to start designing them from scratch
                  going through all the stages of the procedure. During this process, these are the following tools that were used by the team.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#2770FA', paddingTop: '4vh', paddingBottom: '8vh'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={SearchIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Problem</b></p>
                      <p style={{lineHeight: '80%'}}>Research + Observation</p>
                      <p style={{lineHeight: '80%'}}>Semi-structured interviews</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={IdeaIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Ideation</b></p>
                      <p style={{lineHeight: '80%'}}>Workshop + Affinity Mapping</p>
                      <p style={{lineHeight: '80%'}}>Personas + Story board</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ValidationIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Validation</b></p>
                      <p style={{lineHeight: '80%'}}>A vs B testing</p>
                      <p style={{lineHeight: '80%'}}>Usability testing</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ProtoIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Prototype</b></p>
                      <p style={{lineHeight: '80%'}}>Lo-Fi: Framer X</p>
                      <p style={{lineHeight: '80%'}}>Hi-Fi: React</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img className="HidePhone" src={MoodScreens} style={{width:'50%', borderRadius: '1em',textAlign: 'center'}}/>
                    <img className="HidePC" src={MoodScreens} style={{width:'90%', borderRadius: '1em',textAlign: 'center'}}/>

                  </div>
              </div>
              </div>
              </div>
              <div style={{textAlign: "center",paddingBottom:"1em", backgroundColor:"white"}}>
                <p className = "SubTittle" style={{paddingTop: '4vh', fontSize:'wvh'}}>Feel free to contact:</p>
                <div className = "ContGrid4-1" style={{borderRadius: '2em'}}>
                <div>
                  <p class="ButtonLine" style={{textAlign: "center"}}> <a className="LinkStyle" href="mailto:pablocg1995@gmail.com">
                  <i class="fa fa-envelope fa-lg" style={{color: '#0097a7', fontSize:'3vh', padding:'1vh'}}></i>pablocg1995@gmail.com</a></p></div>
                <div>
                  <p class="ButtonLine" style={{textAlign: "center"}}><a className="LinkStyle" href="tel:+34676328005">
                  <i class="fa fa-phone fa-lg" style={{color: '#0097a7 ', fontSize:'3vh', padding:'1vh'}}></i>+34 676 32 80 05</a></p></div>
                <div>
                  <p class="ButtonLine" style={{textAlign: "center"}}><a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
                  <i class="fa fa-linkedin fa-lg" style={{color: '#0097a7', fontSize:'3vh', padding:'1vh'}}></i>linkedin.com/p-canton</a></p></div>
                <div>
                  <p class="ButtonLine" style={{textAlign: "center"}}><a className="LinkStyle" href="https://github.com/p-canton">
                  <i class="fa fa-github fa-lg" style={{color: '#0097a7', fontSize:'3vh', padding:'1vh'}}></i>github.com/p-canton</a></p></div>
                </div>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <Link className="LinkStyle" to="/PCfolio.github.io/">
                  <p style={{color: '#FFAD00', fontSize:'2.5vh', textAlign: 'center', paddingTop:"1em"}}>Home</p></Link>
                </div>
              </div>
            </div>
    );
  }
  }
export default Resume;
