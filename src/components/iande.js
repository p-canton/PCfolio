import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import SqBondImage from './images/SqBondImage.png';
import PostiMock from './images/SqBondProto.png';
import SqBondCJ from './images/SqBondCJ.png';
import PostiAll from './images/PostiAll.jpg';
import SearchIcon from './images/SearchIcon.png';
import IdeaIcon from './images/IdeaIcon.png';
import ValidationIcon from './images/ValidateIcon.png';
import ProtoIcon from './images/ProtoIcon.png';
import SqBondUP from './images/SqBondUP.png';
import TriitVideo from './images/SqBond.mp4';
import BCMSqBond from './images/BCMSqBond.png';

import SqBondScreens from './images/SqBondScreens.png';
import SqBondIcon from './images/SqBondIcon.png';
import LogoPC from './images/pcIconN.png';

import OnlineUserIcon from './images/HealthIcon.png';
import EcoIcon from './images/BrainIcon.png';
import ECommersIcon from './images/BusinessIcon.png';

class Resume extends Component {
  render() {
    return (
            <div style={{backgroundColor:"#23394C"}}>
              <div>
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                <div style={{fontSize: '1.5em', textAlign: 'left', color: 'white'}}>
                     <Link className="LinkStyle HidePhone" to="/PCfolio.github.io/hackathonWK">
                     <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                       <i class="fa fa-chevron-left fa-lg" style={{color: '#FF5E00', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                     <Link className="LinkStyle HidePC" to="/PCfolio.github.io/hackathonWK">
                     <i class="fa fa-chevron-left fa-lg" style={{color: '#FF5E00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                   </div>
                   <div style={{fontSize: '1.5em', textAlign: 'center', color: 'white'}}>
                     <Link className="LinkStyle" to="/PCfolio.github.io/">
                     <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                   </div>
                   <div style={{fontSize: '1.5em', textAlign: 'right', color: 'white'}}>
                   <Link className="LinkStyle HidePhone" to="/PCfolio.github.io/pcwork">
                     <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                     <i class="fa fa-chevron-right fa-lg" style={{color: '#FF5E00', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                     <Link className="LinkStyle HidePC" to="/PCfolio.github.io/pcwork">
                     <i class="fa fa-chevron-right fa-lg" style={{color: '#FF5E00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                   </div>
                </div>
                  <img  src={SqBondIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"Much more than an experience."</p>
                  </div>
                </div>
              <div style={{backgroundColor:"white"}}>
              <img className="imageProject" src={SqBondImage}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                Faced with the situation of social isolation that we are experiencing in 2020, human contact has drastically changed. Due to these changes,
                I decided to create a concept that would help people in social distancing to keep in touch with their friends and family. These are the main
                problems social distancing brings on people:
                </p>
              </div>
              <div className="textPadding" style={{textAlign: 'center', paddingTop: '2em'}}>
                <div className = "ContGrid3" style={{color: 'white', paddingBottom: '2em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={OnlineUserIcon} style={{height: '10vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Lifestyle</b></p>
                    <p>Negative effects on lifestyle</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={EcoIcon} style={{height: '10vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Psychology</b></p>
                    <p>Increases stress in people</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={ECommersIcon} style={{height: '10.1vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Business</b></p>
                    <p>~40% of turnover fall</p>
                  </div>
                </div>
              </div>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img className="HidePhone" src={PostiMock} style={{maxWidth: '100vh', width: '60%', height: 'auto', paddingTop: '2vh'}}/>
                  <img className="HidePC" src={PostiMock} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '2vh'}}/></div>

                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#FF5E00'}}><b>Problem statement</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                    Sq-Bond designs focus on people in social distancing, who struggle to find a balanced lifestyle without losing contact with the outside.
                    Our application connects them with their friends, family or new contacts promoting unique, shared and interactive activities.
                    </p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                    Also, we help restaurants and businesses affected by social distancing. With SQ-Bond, the local shops will be able to offer unique
                    experiences to their clients, increase the chances of finding new clients and increase their sales.
                    </p>
                  </div>
                </div>
                </div>
                <img className="imageProject" src={SqBondUP} />
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#FF5E00'}}><b>Sq-Bond</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      Unlike the competition, Sq-Bond offers a personalized experience on every shipment. By scanning the QR code, the app will guide step by step
                      on how the user can enjoy the experiences and share it during the video call. One possible scenario is a digital dinner, where each user will
                      have to cook while doing interactive games and sharing their progress. At the end of everything, they will be able to share their result in
                      Sq-Bond or social media.
                      </p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#FF5E00'}}><b>Business</b></h3>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                        Sq-Bond launch as an additional service to current home delivery businesses. In this way, you will begin to attract new users while developing your own logistics plan.
                        Once the platform/app reaches this maturity, it will be possible to implement new technologies such as collaborative calls in VR/AR, automation/AI of some experiences
                        or development of new services such as virtual events or subscriptions. Adding all these new features we guarantee the evolution of Sq-Bond for the next 10 years.
                        </p>
                    </div>
                    </div>
                  </div>
                  <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                        <img src={SqBondCJ} style={{maxWidth: '100vh', width: '90%', height: 'auto', paddingTop: '4vh'}}/>
                        <p className="TextFont" style={{padding: '2em', paddingLeft: '2em', textAlign: 'center', color: '#BDBDBD'}}>Customer Journey</p>
                      </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                        <img src={BCMSqBond} style={{maxWidth: '100vh', width: '90%', height: 'auto', paddingTop: '4vh'}}/>
                        <p className="TextFont" style={{padding: '2em', paddingLeft: '2em', textAlign: 'center', color: '#BDBDBD'}}>Business Model Canvas</p>
                      </div>
                  </div>
                </div>

                <div style={{backgroundColor: '#23394C'}}>
                <img className="imageProject" src={SqBondScreens}/>
                  <div style={{backgroundColor: '#23394C'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#FF5E00'}}><b>Result</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>
                  Sq-Bond should be a simple application that seeks to offer unique experiences to those people who are in social distancing. The platform must have a
                  strong presence in social media and provide experiences that encourage communication between friends and entertainment. The volume of users who continue
                  to use the application will be taken into account to evaluate the success and to see the results of the experiences that are more popular among users (
                  <a className = "LinkStyle" style={{color: 'white'}} href="https://www.figma.com/proto/Ya6QVoHwVKgwNZX9zyLTOe/Sq-Bond?node-id=3%3A0&scaling=scale-down">Try the prototype clicking here</a>).
                  These are the following process that I used for the development of the project:</p></div>
                  <div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#23394C', paddingTop: '3vh'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={SearchIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Problem</b></p>
                      <p style={{lineHeight: '80%'}}>Research</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={IdeaIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Ideation</b></p>
                      <p style={{lineHeight: '80%'}}>Double diamond</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ValidationIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Validation</b></p>
                      <p style={{lineHeight: '80%'}}>Usability testing</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ProtoIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Prototype</b></p>
                      <p style={{lineHeight: '80%'}}>Figma</p>
                    </div>
                  </div></div>
                    <div className="HidePC" style={{color: 'white', paddingBottom: '4em',backgroundColor:'#23394C', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Prototype video</p>
                      <video controls style={{width:'90%', borderRadius: '1em'}}>
                        <source src={TriitVideo} type="video/mp4"/>
                      </video>
                    </div>
                    <div className="HidePhone" style={{color: 'white', paddingBottom: '4em',backgroundColor:'#23394C', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Prototype video</p>
                      <video controls style={{width:'70%', borderRadius: '1em'}}>
                        <source src={TriitVideo} type="video/mp4"/>
                      </video>
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
