import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import UWeekendAll from './images/UWeekendAll.jpg';
import UWeekendWin from './images/UWeekendWin.jpg';

import ADMphone from './images/optimoPC.png';

import ADMpayment from './images/ADMpayment.jpeg';
import ADMmockup from './images/LoFiOptimo.png';
import ADMaIcon from './images/GoalsIcon.png';
import ADMdIcon from './images/SkillsIcon.png';
import ADMmIcon from './images/AnalyIcon.png';
import OptimoImg from './images/OptimoImg.jpg';
import OptimoLap from './images/OptimoLap.png';
import KareTV from './images/KareTV.jpg';
import ADMIcon from './images/OptimoIcon.png';
import OptimoPhone from './images/OptimoPhone.png';
import ReactIcon from './images/ReactIcon.png';
import FireBaseIcon from './images/FireBaseIcon.png';
import SearchIcon from './images/SearchIcon.png';
import IdeaIcon from './images/IdeaIcon.png';
import ValidationIcon from './images/ValidateIcon.png';
import ProtoIcon from './images/ProtoIcon.png';
import PythonIcon from './images/PythonIcon.png';
import IBMIcon from './images/IBMIcon.png';
import TeklaVideo from './images/optimoVideo.mp4';


class Resume extends Component {
  render() {
    return (
            <div style={{backgroundColor:"#2F0252"}}>
              <div>
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PCfolio.github.io/hackathonGOC">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#FF5F55', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PCfolio.github.io/hackathonGOC">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#FF5F55', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PCfolio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PCfolio.github.io/iande">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FF5F55', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PCfolio.github.io/iande">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FF5F55', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={ADMIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"Assure upskilling in a world of continuous disruption"</p>
                  </div>
                </div>
              <div>
              <img className="imageProject" src={OptimoImg}/>
              <div style={{backgroundColor: "white"}}>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                I was one of the five co-founders of <b>Optimo</b> in Frankfurt, inside a three-month accelerator program at <b>Futury</b>. The startup was found in October of 2020 to upskill
                factory workers so that they are prepared with future relevant skills. The solution aims to let the shift manager and factory workers have a personalised learning
                strategy, track their skill improvement, and reach their learning goals. With Otimo, factories will help de up-skilling of their workers, while keeping the production rate high.
                </p>
              </div>
              <div className="textPadding" style={{textAlign: 'center'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                Optimo develops a smart upskilling planner for factory workers. Presently, our product is in the introductory stage. The USP is the combination of production-based
                planning and the skill-based matching of the workforce, each factory worker, with a learning module and a time slot. Our future includes user testing, developing an
                MVP in close cooperation with our partners and launching the product in March 2022. Additionally to this future plan, these are the central features that Optimo brings:
                </p><br/>
                <div className = "ContGrid3" style={{color: 'white'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={ADMaIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Learning goals</b></p>
                    <p>Achieve the learning goals</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={ADMdIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Skills track</b></p>
                    <p>Track the skill improvements</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={ADMmIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Learning strategy</b></p>
                    <p>Long-term learning strategy</p>
                  </div>
                </div>
                <br/>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                We define our market as upskilling solutions for the manufacturing industry. The total market size of our obtainable market is 1300 production companies. This number is expected
                to increase by 2% yearly. Central to our solution is its sustainability impact. We believe that for our solution to be the most effective, we need to plan learnings in a way that
                the workers learn more sustainably, to create a flexible and resilient workforce.
                </p><br/>
              </div>
                <div style={{backgroundColor: "#2F0252"}}>
                <img className="imageProject" src={OptimoPhone} />
                  <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div>
                          <h3 style={{color: '#FF5F55'}}><b>Development</b></h3>
                          <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}><b>Research</b></p>
                          <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                          The research process took a total of three weeks. During this period, I focus on conducting several interviews with our partners at the accelerator. Some of these partners
                          were Schaeffler, Nestle, Microsoft, TeamViewer, Deutsche Bank etc. Additionally, the team created a questionnaire to obtain relevant quantitative data and conducted 41
                          interviews to obtain qualitative data. The team used an affinity mapping and brains storming techniques using Mirro.
                          </p>
                          <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                          Our user interviews have shown that the learning content already exists within the company. Also, we find out that we have to develop a solution that trains the factory workers
                          in sustainably way and prepare them for the upcoming challenges of Industry 4.0.
                          </p>
                        </div>
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div>
                        <img src={ADMmockup} style={{maxWidth: '95vh', width: '95%', height: 'auto', paddingTop: '4vh'}}/></div>
                      </div>
                    </div>
                    <div style={{color: 'black', backgroundColor:'white'}}>
                      <div className="textPadding">
                      <br/><p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}><b>Ideation</b></p>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                        The ideation process was divide into two different cycles, a Lo-Fi prototyping testing from a mobile-first design method, and a Hi-Fi usability
                        testing procedure with five tasks.
                        </p>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                        The first cycle evaluates the idea that the teams developed during the ideation procedure and tested different concepts. During this first step, Optimo finds out that the tool
                        should focus more on the shift manager and be designed fo laptops or tablets. The second cycle evaluated the usability of the product and the general user experience. This
                        usability testing ends up with good feedback, and we find some improvement for the user interface.
                        </p>
                      </div>
                      <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div>
                        <img src={OptimoLap} style={{maxWidth: '90vh', width: '90%', height: 'auto', paddingTop: '4vh'}}/></div>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <div>
                            <h3 style={{color: '#FF5F55'}}><b>Result</b></h3>
                            <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                            Our smart upskilling planner is based on a three-step web app solution approach. In the first step, Optimo collects the following data points. Firstly, the competence matrix
                            to capture the status quo of the current competence level of your workforce. Secondly, the production capacity in order to be able to adapt the learning volume to the machine
                            utilization (through the MES system of the company). Thirdly, the possible learning modules, in order to get an overview of the already existing upskilling opportunities within
                            the company, and their deadlines, in order to know until when certain competencies are needed (I. E. to have a trained factory worker to operate a new machine when it arrives).
                            </p>
                            <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                            After processing this data in the second step, the final step generates the following three outcomes: First, the match, which gives you concrete and adapted suggestions, when who
                            should learn what to bring the biggest benefit. Secondly the learning calendar, that clearly shows all planned learning sessions. Finally, the learning roadmap and progress view,
                            which on the one hand display your learning objectives over time and on the other hand displays the learning achievements which were accomplished.
                            </p>
                          </div>
                          </div>
                        </div>
                    </div></div>
                  <div style={{backgroundColor:"#2F0252"}}>
                  <img className="imageProject" src={ADMphone} />
                  <div style={{backgroundColor: '#2F0252'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#FF5F55'}}><b>Process</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>To develop the idea, the team followed a
                  <b>user-centred design</b> methodology focuses on digital products and services. To mage team communication and organization, we used an <b>AGILE methodology</b>.
                  Therefore, we needed to start designing the idea from scratch going through all the stages of developing a new start-up. During this project, these are the following
                  tools and methods that the team used.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#2F0252', paddingTop: '4vh', paddingBottom: '8vh'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={SearchIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Problem</b></p>
                      <p style={{lineHeight: '80%'}}>Companies analysis</p>
                      <p style={{lineHeight: '80%'}}>Semi-structured interviews</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={IdeaIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Ideation</b></p>
                      <p style={{lineHeight: '80%'}}>Hypothesis map + User journey</p>
                      <p style={{lineHeight: '80%'}}>Affinity Mapping</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ValidationIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Validation</b></p>
                      <p style={{lineHeight: '80%'}}>Lo-Fi testing</p>
                      <p style={{lineHeight: '80%'}}>User testing</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ProtoIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Prototype</b></p>
                      <p style={{lineHeight: '80%'}}>Illustrator</p>
                      <p style={{lineHeight: '80%'}}>Figma</p>
                    </div>
                  </div></div>
                  <div className="HidePhone" style={{color: 'black', backgroundColor:'#2F0252', textAlign: 'center'}}>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Optimo pitch</p><br/>
                    <video controls style={{width:'70%', borderRadius: '1em'}}>
                      <source src={TeklaVideo} type="video/mp4"/>
                    </video>
                  </div>
                  <div style={{color: 'white', paddingBottom:'4vh', textAlign: 'center'}}>
                    <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '2vh',textAlign: 'center', color: '#FF5F55'}}><b>Team Members</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'white'}}>
                    Vinusha Navakumaran <b>-</b> Mona Ghazi <b>-</b> Pablo Cantón <b>-</b> Laura Schildknecht <b>-</b> Rinusan Navakumaran
                    </p>
                  </div>
                </div>
              </div></div>
              <div className="section fp-auto-height" style={{textAlign: "center",paddingBottom:"1em", backgroundColor:"white"}}>
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
                  <p style={{color: '#FF5F55', fontSize:'2.5vh', textAlign: 'center', paddingTop:"1em"}}>Home</p></Link>
                </div>
              </div>
            </div>
    );
  }
  }
export default Resume;
