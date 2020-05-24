import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Projects from './projects';
import Posti from './posti';
import HackathonGOC from './hackathonGOC';
import HackathonAD from './hackathonAD';
import HackathonWK from './hackathonWK';
import HackathonEU from './hackathonEU';
import BetsFriends from './betsFriends';
import Vredestein from './vredestein';
import PCdesign from './pcdesign';
import PCtechnical from './pctechnical';
import PCwork from './pcwork';
import IandE from './iande';
import Tekla from './tekla';

const Main = () => (
  <Switch>
    <Route exact path="/PCfolio.github.io/" component={LandingPage}/>
    <Route path="/PCfolio.github.io/projects" component={Projects} />
    <Route path="/PCfolio.github.io/posti" component={Posti} />
    <Route path="/PCfolio.github.io/hackathonGOC" component={HackathonGOC} />
    <Route path="/PCfolio.github.io/hackathonAD" component={HackathonAD} />
    <Route path="/PCfolio.github.io/hackathonWK" component={HackathonWK} />
    <Route path="/PCfolio.github.io/hackathonEU" component={HackathonEU} />
    <Route path="/PCfolio.github.io/betsFriends" component={BetsFriends} />
    <Route path="/PCfolio.github.io/vredestein" component={Vredestein} />
    <Route path="/PCfolio.github.io/pcdesign" component={PCdesign} />
    <Route path="/PCfolio.github.io/pctechnical" component={PCtechnical} />
    <Route path="/PCfolio.github.io/pcwork" component={PCwork} />
    <Route path="/PCfolio.github.io/tekla" component={Tekla} />
    <Route path="/PCfolio.github.io/iande" component={IandE} />

  </Switch>
)

export default Main;
