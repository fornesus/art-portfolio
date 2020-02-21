import React, { Component } from 'react';
import './App.css';

// Images:
import profile from './img/fornesa.jpg';

class App extends Component {
  constructor(){
    super();

    this.state = {
      isFull: false // Determines if the full description will be shown
    }

    // Bind this for the fullness method as its own:
    this.fullness = this.fullness.bind(this);
  }

  // Set the "isFull" state as the opposite of its current state:
  fullness(full){
    this.setState({isFull: !full}); // Toggles isFull
  }

  render() {
    // getFullClass determines the class based on the current state of isFull
    let getFullClass = this.state.isFull ? "full" : "";
    let getMoreText = this.state.isFull ? "Show less." : "Read more about me.";

    return (
      <div className="App">
        <header className="App-header">
          <h1 id="heading">
            {/* The application logo: */}
            <span className="Logo-scale"><img src={profile} className="App-logo" alt="logo" /></span>
            {/* The application's heading: */}
            <code>Chris Fornesa&rsquo;s Art Portfolio</code>
          </h1>
        </header>
        <div id="description">
          <h2>About My Work</h2>
          {/* Clicking on #toggle toggles the isFull state */}
          <p className="center">My name is Christopher Fornesa and, among other things, I am an artist who specializes in digital art and graphic design.  However, I also enjoy drawing and painting using various media.  <span id="toggle" onClick={() => this.fullness(this.state.isFull)}>{getMoreText}</span></p>
          <div>
            {/* getFullClass is designated as the class name */}
            <div id="full" className={getFullClass}>
              <p>All my life, I have had a creative soul, but I will be honest, there was a period of time (during high school) when I thought that creativity was unattainable for me.  But, in fact, the pain of repressing my creativity, my sexuality, and my disability brought me to a deep darkness from which I thought I would never come out of.  Things changed when I found out that I was autistic.  I already knew that I was depressed and constantly anxious but it never made sense until I learned that I am autistic.</p>
              <p>It didn't take me too long to get accustomed to this reality, especially when being gay was something I had recently come to terms with.  But my parents wouldn't have my being "out" of a place that gave me so much emotional anguish, so I had to force myself to take the brave step to do it anyway.</p>
              <p>Encouraged by my newfound freedom, I continued on my creative journey, finishing (and excelling) in my first painting class.  I also became more active at school and joined the "Psychology Club" service organization on campus, sharing my passion for art by crafting posters.  During this period between 2013 and 2015, my soul was vibrant, my creativity stood out, and I was able to feel like my true self had unleashed.</p>
              <p>However, that all changed when I graduated from community college and transferred to the University of Houston.  While I was able to continue with some aspects of my arts education (but also taking other, more practical, minors), fear and anxiety crept back into my life with the Pulse nightclub shooting and other political events that made me feel the need to crawl back inside my shell.  In fact, I still feel that this is the stage of my life that I am in, for the time being.</p>
              <p>A college graduate near the top of his class with a creative background is the hallmark of employable in this society, but disability, race and class find their way to impact anyone within grasp.  Thus, my health problems and other external conditions have found their way to stiffle my creativity.  But, even in this, I have found hope in my art, in my creative abilities, and in my code.  I have found confidence in my abilities as an artist, specifically as a graphic designer and web designer.  Knowing that a computer can, for a relatively cheap price, give me a chance at the career that I want and the sustenance that I need is enthralling and has kept me going in spite of the rest.</p>
              <p>I write this because honesty is my self-determination, and the truth is my responsibility as an artist.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App; // Export as App
