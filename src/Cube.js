import React from 'react';

class Cube extends React.Component {
  render(){
    return (
      <div className="cube-face cube-face-{this.props.instance.face}"><iframe src="{this.props.instance.image}" data-src="{this.props.instance.website}" className="iframe-site"></iframe></div>
    )
  }
}

export default Cube;