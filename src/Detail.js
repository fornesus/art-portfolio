import React from 'react';

class Detail extends React.Component {
  render(){
    return (
      <article className="description">
        <h2><span className="guide left">back</span> {this.props.detail.title} <span className="guide right">forward</span></h2>
        <p>{this.props.detail.description}</p>
        <p className="site-menu"><span className="loader">Click here or on the cube to load this website</span> | <a href="{{ detail.website }}" target="_blank">Click here to go to this website.</a><span className="load-helper"> |</span></p>
        <p><span className="guide less">Click here to go back</span> | <span class="guide more">Click here for the next detail</span></p>
      </article>
    )
  }
}

export default Detail;