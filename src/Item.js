import React from 'react';

// Use the given data properties to create a dynamic section with a title, an iframe source, a description, a specified programming skill, and a website link.
class Item extends React.Component {
  render(){
    let itemClass = this.props.item.type + ` item`;
    return <div className={itemClass}>
      {/* Title: */}
      <h1>{this.props.item.title}</h1>
      {/* Container class to hold the iframe: */}
      <div className="image">
        <a href={this.props.item.site} target="_blank" rel="noopener noreferrer"><img src={this.props.item.site}
        width="100%"
        position="relative"
        alt={this.props.item.description}/></a>
      </div>
      {/* A container to hold a description */}
      <article>
        <p>{this.props.item.description}</p>
      </article>
      {/* A container to hold the programming skill involved: */}
      <article>
        <p>Media: {this.props.item.media}.</p>
      </article>
      {/* A container to hold the link to the website: */}
      <article>
        <p><a href={this.props.item.source} className="App-link" target="_blank" rel="noopener noreferrer">Go to this link</a> to see {this.props.item.title} in full view.</p>
      </article>
    </div>;
  }
}

export default Item;  // Export as Item