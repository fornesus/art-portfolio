import React from 'react';

import Cube from './Cube.js';
import Detail from './Detail.js';

class App extends React.Component {
  render(){
    let cubes = [
      {
        website: "", 
        image: "", 
        face: ""
      },
    ];
    let details = [
      {
        title: "", 
        description: ""
      },
    ];

    for(let cube of cubes){
      cubes.push(<Cube instance={cubes} />);
    }

    for(let detail of details){
      cubes.push(<Detail detail={details} />);
    }

    return (
      <div className="App">
        <section>
          <div className="scene">
            <div className="cube">
              {cubes}
            </div>
          </div>
          <div className="scene-bg">
            <p>Click the cube to display the website.</p>
          </div>
        </section>
        <section>
          {details}
        </section>
      </div>
    );
  }
}

export default App;
