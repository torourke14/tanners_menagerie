import React from 'react';
import './Inspiration.css';

class Inspiration extends React.Component {
        render() {
                return (

                <div>
                        <div>
                        <h1>Smooth Scrolling Sticky ScrollSpy Navigation</h1>
                        <section id="introduction">
                                <h2>Introduction</h2>
                                <p>…</p>
                        </section>
                        <section id="request-response">
                                <h2>Request &amp; Response</h2>
                                <p>…</p>
                        </section>
                        <section id="authentication">
                                <h2>Authentication</h2>
                                <p>…</p>
                        </section>
                        <section id="endpoints">
                                <h2>Endpoints</h2>
                                <section id="endpoints--root">
                                <h3>Root</h3>
                                <p>…</p>
                                </section>
                                <section id="endpoints--cities-overview">
                                <h3>Cities Overview</h3>
                                <p>…</p>
                                </section>
                                <section id="endpoints--city-detail">
                                <h3>City Detail</h3>
                                <p>…</p>
                                </section>
                                <section id="endpoints--city-config">
                                <h3>City Config</h3>
                                <p>…</p>
                                </section>
                                <section id="endpoints--city-spots-overview">
                                <h3>City Spots Overview</h3>
                                <p>…</p>
                                </section>
                                <section id="endpoints--city-spot-detail">
                                <h3>City Spot Detail</h3>
                                <p>…</p>
                                </section>
                                <section id="endpoints--city-icons-overview">
                                <h3>City Icons Overview</h3>
                                <p>…</p>
                                </section>
                                <section id="endpoints--city-icon-detail">
                                <h3>City Icon Detail</h3>
                                <p>…</p>
                                </section>
                        </section>
                        <section id="links">
                                <h2>Links</h2>
                                <p>…</p>
                        </section>
                        <section id="expanders">
                                <h2>Expanders</h2>
                                <p>…</p>
                        </section>
                        <section id="filters">
                                <h2>Filters</h2>
                                <p>…</p>
                        </section>
                        </div>
                        <nav class="section-nav">
                        <ol>
                                <li><a href="#introduction">Introduction</a></li>
                                <li><a href="#request-response">Request &amp; Response</a></li>
                                <li><a href="#authentication">Authentication</a></li>
                                <li><a href="#endpoints">Endpoints</a>
                                <ul>
                                        <li class=""><a href="#endpoints--root">Root</a></li>
                                        <li class=""><a href="#endpoints--cities-overview">Cities Overview</a></li>
                                        <li class=""><a href="#endpoints--city-detail">City Detail</a></li>
                                        <li class=""><a href="#endpoints--city-config">City Config</a></li>
                                        <li class=""><a href="#endpoints--city-spots-overview">City Spots Overview</a></li>
                                        <li class=""><a href="#endpoints--city-spot-detail">City Spot Detail</a></li>
                                        <li class=""><a href="#endpoints--city-icons-overview">City Icons Overview</a></li>
                                        <li class=""><a href="#endpoints--city-icon-detail">City Icon Detail</a></li>
                                </ul>
                                </li>
                                <li class=""><a href="#links">Links</a></li>
                                <li class=""><a href="#expanders">Expanders</a></li>
                                <li class=""><a href="#filters">Filters</a></li>
                        </ol>
                        </nav>
                </div>
                );
        }
}

export default Inspiration;