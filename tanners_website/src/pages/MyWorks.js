import React from 'react';
import './MyWorks.css';

// Project Images
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';

class MyWorks extends React.Component {
        render() {
                return (
                        <div>   
                                <div className="WorksTop">
                                        <div className="WorksLinks">
                                                <div><a>Design</a></div>
                                                <div><a>Development</a></div>
                                                <div><a>Small Projects</a></div>
                                                <div><a>Professional Work</a></div>
                                        </div>
                                </div>
                                
                                <div className="WorksContainer">
                                        <div className="Works-row">
                                                <div className="column" onClick={(e) => this.refs.domad.openTab(e)} >DoMAD</div>
                                                <div className="column" onClick={(e) => this.refs.lbs.openTab(e)} >London Bridge Studios</div>
                                                <div className="column" onClick={(e) => this.refs.spotipy.openTab(e)} >Spotify Data Analysis</div>
                                                <Project ref='domad' class="workDropbox"
                                                title="DoMAD" position='Lead UI Designer, Front-End Developer' 
                                                desc='Website design and build for non-profit donation org. DoMAD' 
                                                location='Boulder, CO'
                                                imgsrc={DoMADLogo} 
                                                />
                                                <Project ref='lbs' class="workDropbox" 
                                                title="London Bridge Studios" position='Web Developer' 
                                                desc='Page flows and SEO enhancements for a Seattle-based recording studio' 
                                                location='Seattle, WA'
                                                imgsrc={DoMADLogo} 
                                                />
                                                <Project ref='spotipy' class="workDropbox"
                                                title="Spotipy Data Analysis" position='Data Analytics Researcher' 
                                                desc='Discovered patterns in past, present, and future musical attributes' 
                                                location='Boulder, CO'
                                                imgsrc={DoMADLogo}
                                                />
                                        </div>

                                        <div className="Works-row">
                                                <div className="column" onClick={(e) => this.refs.d.openTab(e)} >DoMAD</div>
                                                <div className="column" onClick={(e) => this.refs.l.openTab(e)} >London Bridge Studios</div>
                                                <div className="column" onClick={(e) => this.refs.s.openTab(e)} >Spotify Data Analysis</div>
                                                <Project ref='d' title="DoMAD"
                                                position='Lead UI Designer, Front-End Developer' 
                                                desc='Website design and build for non-profit donation org. DoMAD' 
                                                location='Boulder, CO'
                                                imgsrc={DoMADLogo} 
                                                />
                                                <Project ref='l' title="London Bridge Studios" 
                                                position='Web Developer' 
                                                desc='Page flows and SEO enhancements for a Seattle-based recording studio' 
                                                location='Seattle, WA'
                                                imgsrc={DoMADLogo} 
                                                />
                                                <Project ref='s' title="Spotipy Data Analysis" 
                                                position='Data Analytics Researcher' 
                                                desc='Discovered patterns in past, present, and future musical attributes' 
                                                location='Boulder, CO'
                                                imgsrc={DoMADLogo}
                                                />
                                        </div>
                                </div>
                        </div>
                )
        }
}

class Project extends React.Component {
        constructor(props) {
                super(props);
                
                this.state = {
                        title: props.title,
                        position: props.position,
                        description: props.desc,
                        location: props.location,
                        image: props.imgsrc,
                        display: false
                }
                this.openTab = this.openTab.bind(this);
                this.closeTab = this.closeTab.bind(this);
        }

        openTab(e) {
                if (!this.state.display) {
                        var i, x;
                        x = document.getElementsByClassName("work-dropbox");
                        for (i = 0; i < x.length; i++) {
                                x[i].style.display = "none";
                        }
                        this.setState({display: true});
                }
        } 

        closeTab() {
                this.setState({display: false});
        }

        render() {
                this.styles = {
                        background: 'blue',
                        display: this.state.display ? 'block' : 'none'
                }
        /* <img src={this.state.image} alt='' style={{width: "50px", height: "50px"}}/>*.
        /* Chamge into inherited subclasses of Project, i.e. Project.type - Project.Design */
        return (
                <div style={this.styles} className='work-dropbox'>
                        <div className="content">
                                <span onClick={() => this.closeTab()} className="closebtn">X</span>
                                <h2>{this.state.title}</h2>
                                <h4>{this.state.position}</h4>
                                <h4>{this.state.location}</h4>
                                <p>{this.state.description}</p>
                        </div>
                </div>
        );
        }
}





class ToTopBtn extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                show: false,
                scrollInterval: 0
            };
            this.handleScroll = this.handleScroll.bind(this);
            this.scrollToTop = this.scrollToTop.bind(this);
        }
    
        /* -- componentDidMount ----
            - Description: Member function called on page load and re-render, invokes an initial
                        handle of page position and adds scroll event listener.
        */
        componentDidMount() {
            this.handleScroll();
            window.addEventListener('scroll', this.handleScroll);
        }
        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    
        /* -- handleScroll --->
            - Description: Determines button render state based on pageYoffset value
            - Parameters: none
            - Returns: T/F button show state
        */
        handleScroll() {
            if (window.pageYOffset > 100) {
                if (!this.state.show) {
                    //this.props.style.display = "block";
                    this.setState({show: true });
                }
            } else {
                if (this.state.show) {
                    //this.props.style.display = "none";
                    this.setState({show: false });
                }
            }
        }
    
        /* -- SendCountryOnSelect ---
            - Description: Initiate scrolling the document to top on button click
            - Parameters: none
            - Returns: new interval state for next scroll step
        */
        scrollToTop() { 
            let interval = setInterval(this.scrollStep.bind(this), this.props.returnstepinms);
            this.setState({ scrollInterval: interval});
        }
    
        /* -- scrollStep ---
            - Description: Creates a dynamic scroll effect as part of scrollToTop() 
                        by scrolling X pixels every Y milliseconds 
            - Parameters: none
            - Returns: scrolls window up
        */
        scrollStep() {
            if (window.pageYOffset === 0) {
                clearInterval(this.state.scrollInterval);
            }
            window.scroll(0, window.pageYOffset - this.props.returnstepinpx);
        }
    
        render () {
            let defaultStyles = {
                position: "fixed", 
                bottom: "75px", right: "10px",
                padding: "12px",
                zIndex: "98", /*--make sure theres no overlap */
                outline: "none",
                border: "none", borderRadius: "6px",
                backgroundColor: "#CBB95A",
                fontSize: "0.9em", 
                color: "black",
                cursor: "pointer", 
                
                display: "block", /* toggling display doesnt allow for animation */
                opacity: (this.state.show ? 1 : 0),
                visibility: (this.state.show ? 'visible' : 'hidden'),
                transition: "visibility 0s, opacity 0.5s linear",
                transitionDuration: "0.2s", transitionDelay: "0"
            }
            
            return (
                <div>
                    <button id='new-search-btn' style={defaultStyles}
                        onClick={ () => {this.scrollToTop()}}>To Top</button>
                </div>
            )
        }
    }

export default MyWorks;