import React from 'react';
import './Portfolio.css';



class Portfolio extends React.Component {
        render() {
                return (
                <div id="portfolio-container">
                        <div className="container">
                                <div id="hero-wrapper">
                                        <div id="hero-content">
                                                <div id="hero-block-left">
                                                        <div id="hero-name"><p><b>Tanner</b> <i>O'Rourke</i></p></div>
                                                        <div className="hero-link"><a >UX / UI Design</a></div>
                                                        <div className="hero-link"><a>Front-End</a></div>
                                                        <div className="hero-link"><a>Freelance</a></div>
                                                </div>
                                                <div id="hero-block-right">
                                                        <h4 id="desscription">
                                                        I Design Websites FOR THE FREAKING SOUL AAHHHH
                                                        LETS BUILD FACEBOOK AAHHHHHH IM LIKE PICASSO BUT
                                                        ILL WORK FOR YOU (maybe)
                                                        </h4>
                                                
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="container">
                                <div id="works-wrapper">
                                        <div id='works-title'>
                                                <p><i>My Works</i></p>
                                        </div>

                                        <div className="portfolio-grid">
                                                <Project type="design" />
                                                <Project type="design" />
                                                <Project type="design" />
                                                <Project type="design" />
                                        </div>

                                </div>
                        </div>

                </div>
                )
        }
}


class Project extends React.Component {
        constructor(props) {
                super(props);
                this.type = props.type;
        }

        render() {
        let defaultStyles = {
                color: "white"
        }
        return (
                <div className="project design">
                <div className="content">
                        <img src="../images/LinkedInPic.jpg" alt="" style={{width: "100%"}}/>
                        <h4>Design Project</h4>
                        <p>Details..</p>
                </div>
                </div>
        );
        }
}
export default Portfolio;