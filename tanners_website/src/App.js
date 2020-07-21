// Modules
import React, { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// Pages
import Intro from './pages/Intro';
import AboutMe from './pages/AboutMe';

import MyWorks from './pages/MyWorks';
import Skills from './pages/Skills';
// Components
import ConnectDrawer from './components/ConnectDrawer';
import FloatingFooter from './components/FloatingFooter';

/*
*
========== Task List =============
--add extra stylesheets to <head>

-- add about me content, content design
---portfolio entry design + content
---Intro content

---add home icons
---authenticate <AboutMe/> with redirect
*
*/

class App extends React.Component {
    render() {
        return (
            <div><Master/></div>
        );
    }
}

class Master extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentRoute: 'Intro',
            menuActive: false,
            submenuActive: false,
        }
    }

    /*componentDidMount() {
        Router.useEffect(() => {
            window.scrollTo(0, 0)
          }, [])
    }*/

    closeSubmenu(e) {
        const menu = document.querySelector(".menu");
        let isClickInside = menu.contains(e.target);
      
        if (!isClickInside && menu.querySelector(".submenu-active")) {
          menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
    }

    /*
    * ---PAGES-----------------------------------
    * Intro     -- Intro
                -- Hero Table of Contents
    * About Me  -- Intro Banner (not too high)
                -- Timeline paragraphs
                -- descr of my services
    * My Works  -- Portfolio grid
    * Skills    -- Skill bars
    * 
    * ---COMPONENTS-------------------------------
    * Footer    -- Sticky bottom nav + Footer
    * Connect   -- side pullout/modal with form
    *
    */
    render() {
        // Intro renders ALWAYS
        // FloatingFooter renders when another path exists (i.e. not "/"")
        // About, Works, Skills render EXCLUSIVELY
        // ConnectDrawer RENDERED on LINKto

        return (
            <Router>
                <Route path="/" 
                    render={() => <div>  <Intro/>  </div>} 
                />
                <Route path='/:subpath' 
                    render={() =>   <Fragment>  <FloatingFooter/><ConnectDrawer/>  </Fragment>}
                />

                <Switch>
                    <Route path="/about" 
                        render={() => <div>  <AboutMe/>  </div>} 
                    />
                    <Route path="/works" 
                        render={() => <div>  <MyWorks/>  </div>}
                    />
                    <Route path="/experience" 
                        render={() => <div>  <Skills/>  </div>}
                    /> 
                </Switch>
            </Router>
        );
    }
}

/*
<div className="App" onClick = {(e) => this.closeSubMenu(e)}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <nav>
                    <ul className={(this.state.menuActive) ? "menu active" : "menu"}>
                        <li className="logo">&nbsp;</li>

                        <li className="item">
                            <a onClick={() => this.renderSwitch('Portfolio')}>Home</a>
                        </li>
                        <li className="item">
                            <a onClick={() => this.renderSwitch('About')}>About Me</a>
                        </li>
                        <li className="item button">
                            <a onClick={() => this.renderSwitch('Connect')}>Connect</a>
                        </li>
                        <li className="item">
                            <a onClick={() => this.renderSwitch('MyWorks')}>My Works</a>
                        </li>
                        
                        <li className="toggle" onClick = { () => this.setState((prevState) => {return {menuActive: !prevState.menuActive}}) }>
                            {(this.state.menuActive) 
                                ? (<i className="fas fa-bars"></i>)
                                : (<i className="fas fa-times" />) }
                            <a href="#">  
                                <i className="fas fa-bars">----</i>
                            </a>
                        </li>
                    </ul>
                </nav>
*/
/*
<li className="item">
                            <a onClick={() => this.renderSwitch('Portfolio')}>Home</a>
                        </li>
                        <li className="item">
                            <a onClick={() => this.renderSwitch('About')}>About Me</a>
                        </li>
                        <li className="item button">
                            <a onClick={() => this.renderSwitch('Connect')}>Connect</a>
                        </li>
                        <li className="item">
                            <a onClick={() => this.renderSwitch('MyWorks')}>My Works</a>
                        </li>
*/
    /*
    * Home -- Intro to me (specialities)
            RECENT works
            Social Links icons
    Portfolio (Professional Overview) -- My creative process, 
    *                                      List of Experiences
    *                                      Downloadable resume
    *                                      Specialities
    * 
    * My Works -- Full documented 'tabs' of my work over the years
    * 
    * Connect -- All links
    *           social accounts
    *           form for contact
    * About Me -- Bio (what I've done, where Im at, what I want to do)
    *               Photo
    *               Link to Connect
    */

/*
<Tabs selectedIndex= {this.state.tabIndex} onSelect= {(i,pi) = > this.handleTabChange(i,pi)} 
          forceRenderTabPanel= {true} >
          <TabList id= "tabs-flexbox">
              <li id= "flag-wrap">
                  {(this.state.active_abbr != =  '')
                      ? (<img id= "flag-img" src= {'./flags/'+this.state.active_abbr+'.png'} alt= "No Flag" />)
                      : (<div/>) }
              </li>
              <li id= "name-wrap">
                  {this.state.active_country}
              </li>
              <li className= "regular-tabs">Country Info</li>
              <li className= "regular-tabs">Donation Items</li>
              <li className= "regular-tabs">Organizations</li>
              <li className= "regular-tabs">Blog Posts</li>
          </TabList>
          <TabPanel tabIndex= {0}>
              <CountryInfoComponent ref= 'InfoRef' data= {this.state.infoData} />
          </TabPanel>
          <TabPanel tabIndex= {1}>
              <DonationItemsComponent ref= "DonationsRef" data= {this.state.blogData} />
          </TabPanel>
          <TabPanel tabIndex= {2}>
              <OrganizationsComponent ref= "OrgsRef" data= {this.state.orgData} />
          </TabPanel>
          <TabPanel tabIndex= {3}>
              <BlogPostsComponent ref= "BlogsRef" data= {this.state} />
          </TabPanel>
          </Tabs>
*/

export default App;