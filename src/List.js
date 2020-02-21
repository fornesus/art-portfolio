import React from 'react';
import './List.css';
import Item from './Item';
import img1 from './img/0-1.jpg';
import img2 from './img/0-2.jpg';
import img3 from './img/0-3.jpg';
import img4 from './img/0-4.jpg';
import img5 from './img/0-5.jpg';
import img6 from './img/0-6.jpg';
import img7 from './img/0-7.jpg';
import img8 from './img/0-8.jpg';
import img9 from './img/0-9.jpg';
import img10 from './img/1-1.jpg';
import img11 from './img/1-2.jpg';
import img12 from './img/1-3.jpg';
import img13 from './img/1-4.jpg';
import img14 from './img/1-5.jpg';
import img15 from './img/1-6.jpg';
import img16 from './img/1-7.jpg';
import img17 from './img/2-1.jpg';
import img18 from './img/2-2.jpg';
import img19 from './img/2-3.jpg';
import img20 from './img/2-4.jpg';
import img21 from './img/2-5.jpg';
import img22 from './img/2-6.jpg';
import img23 from './img/2-7.jpg';
import img24 from './img/2-8.jpg';
import img25 from './img/2-9.jpg';
import img26 from './img/2-10.jpg';
import img27 from './img/2-11.jpg';
import img28 from './img/2-12.jpg';
import img29 from './img/2-13.jpg';
import img30 from './img/2-14.jpg';
import img31 from './img/2-15.jpg';

class List extends React.Component {
  constructor(){
    super();  // Call the Component superconstructor
    // Create the items array as a state:
    this.state = {
      items: [],  // All items

      // Selection state for each category:
      digitalSelected: true,
      drawingSelected: true,
      mixedSelected: true,
      paintingSelected: true
    };
    this.selectAll = this.selectAll.bind(this);
    this.selectDigital = this.selectDigital.bind(this);
    this.selectDrawing = this.selectDrawing.bind(this);
    this.selectMixed = this.selectMixed.bind(this);
    this.selectPainting = this.selectPainting.bind(this);

    // Fetch items from items.json:
    fetch("items.json")
      .then(response => response.json())
      .then(json => {this.setState({items: json})})
      .catch(error => console.log(error));
  }

  // A method used to select an image to show up on a slide show
  selectAll(){
    this.setState({
      digitalSelected: true,
      drawingSelected: true,
      mixedSelected: true,
      paintingSelected: true
    });
  }

  selectDigital(){
    this.setState({
      digitalSelected: true,
      drawingSelected: false,
      mixedSelected: false,
      paintingSelected: false
    });
  }

  selectDrawing(){
    this.setState({
      digitalSelected: false,
      drawingSelected: true,
      mixedSelected: false,
      paintingSelected: false
    });
  }

  selectMixed(){
    this.setState({
      digitalSelected: false,
      drawingSelected: false,
      mixedSelected: true,
      paintingSelected: false
    });
  }

  selectPainting(){
    this.setState({
      digitalSelected: false,
      drawingSelected: false,
      mixedSelected: false,
      paintingSelected: true
    });
  }

  render(){
    let items = [
      {
        title: "One Minute Solutions Logo",
        site: img1,
        source: img1,
        media: "Graphic Design using Adobe Illustrator",
        description: "The logo for the theoretical company 'One Minute Solutions'.",
        type: "digital"
      },
      {
        title: "One Minute Solutions Business Card",
        site: img2,
        source: img2,
        media: "Graphic Design using Adobe Illustrator",
        description: "A business card design for 'One Minute Solutions'.",
        type: "digital"
      },
      {
        title: "One Minute Solutions Prop",
        site: img3,
        source: img3,
        media: "Graphic Design using Adobe Illustrator",
        description: "A prop that can serve as a card or a coaster with information about 'One Minute Solutions'.",
        type: "digital"
      },
      {
        title: "We Rise By Lifting Others",
        site: img4,
        source: img4,
        media: "Graphic Design using Adobe Illustrator",
        description: "A graphic design based on this quote by Robert Ingersol.",
        type: "digital"
      },
      {
        title: "Mayu and Kiba",
        site: img5,
        source: img5,
        media: "Graphic Design using Adobe Illustrator",
        description: "A tribute to my late Rat Terrier puppy: Mayu.",
        type: "digital"
      },
      {
        title: "City-State of the Future",
        site: img6,
        source: img6,
        media: "Graphic Design using Adobe Photoshop",
        description: "An imaginary city-state set up in a base in outer space.",
        type: "digital"
      },
      {
        title: "Autism Acceptance Poster",
        site: img7,
        source: img7,
        media: "Graphic Design using Adobe Photoshop",
        description: "A poister design that highlights the importance of accepting autistic people.",
        type: "digital"
      },
      {
        title: "Final",
        site: img8,
        source: img8,
        media: "Graphic Design using Adobe Photoshop",
        description: "A collage of self-portraits assembled using both photos of your's truly and my artwork.",
        type: "digital"
      },
      {
        title: "Cosmic Radiation",
        site: img9,
        source: img9,
        media: "Graphic Design using Adobe Photoshop",
        description: "Using my artwork, I created a piece that best represents my sense of spirituality.",
        type: "digital"
      },
      {
        title: "Blue Heart",
        site: img10,
        source: img10,
        media: "Ink on paper",
        description: "A stylized drawing of a heart (given away at auction for Hurricane Harvey survivors).",
        type: "drawing"
      },
      {
        title: "Exploration",
        site: img11,
        source: img11,
        media: "Charcoal and colored pencil on Cardboard",
        description: "A sculptural mash of abstract drawings (given away at auction for Hurricane Harvey survivors).",
        type: "drawing"
      }
      ,
      {
        title: "Brainstorming",
        site: img12,
        source: img12,
        media: "Charcoal, foil and wrapping paper on Poster board",
        description: "A 3D piece that I created out of various types of paper, posterboard and wrappers.",
        type: "drawing"
      }
      ,
      {
        title: "Primaries",
        site: img13,
        source: img13,
        media: "Mixed Media/Watercolor and ink on Canson paper",
        description: "An abstract ink and watercolor drawing and painting with a focus on design.",
        type: "mixed"
      }
      ,
      {
        title: "Iconic Self-Portrait",
        site: img14,
        source: img14,
        media: "Mixed Media/Charcoal and watercolor on Cardboard",
        description: "A self-portrait meant to emulate those of several legendary pop artists.",
        type: "mixed"
      }
      ,
      {
        title: "49",
        site: img15,
        source: img15,
        media: "Graphite, ink and colored pencil on Canson paper",
        description: "Abstraction as a tribute to those we lost at Pulse as a united Black and Brown queer community.",
        type: "drawing"
      }
      ,
      {
        title: "Freedom",
        site: img16,
        source: img16,
        media: "Ink on Canson paper",
        description: "A simple, minimal, yet meaningful, composition of peace and freedom in the midst of turmoil.",
        type: "drawing"
      }
      ,
      {
        title: "Identity and Erasure",
        site: img17,
        source: img17,
        media: "Mixed media/Watercolor and Charcoal on Canson paper",
        description: "A study of identity and erasure of people of color in American society.",
        type: "mixed"
      }
      ,
      {
        title: "These Tears",
        site: img18,
        source: img18,
        media: "Mixed media/Watercolor and charcoal on Canson paper",
        description: "",
        type: "mixed"
      }
      ,
      {
        title: "Dimensions",
        site: img19,
        source: img19,
        media: "Oil stick on Canvas",
        description: "An oil painting meant to emulate a misshapen viewfinder.",
        type: "painting"
      }
      ,
      {
        title: "Environmental Cause",
        site: img20,
        source: img20,
        media: "Mixed media/Acrylic medium, rocks and gouache on Cardboard",
        description: "The key to saving our planet lies in dismantling the global establishment of white supremacy.",
        type: "mixed"
      }
      ,
      {
        title: "Ink Self-Portrait",
        site: img21,
        source: img21,
        media: "Mixed media/Ink and watercolor on Canson paper",
        description: "An ink and watercolor self-portrait painting.",
        type: "mixed"
      }
      ,
      {
        title: "Mania",
        site: img22,
        source: img22,
        media: "Mixed media/Soy sauce and ink on Office paper, Canson paper and Canvas",
        description: "From the maniacal, diabolical mind of CftxP is fabulous abstraction and determination: all in a painting!",
        type: "mixed"
      }
      ,
      {
        title: "Pagmamahal",
        site: img23,
        source: img23,
        media: "Watercolor on Canson paper",
        description: "This is the Tagalog word for 'love', adn this is 'pagmamahal' in Baybayin script.",
        type: "painting"
      }
      ,
      {
        title: "Spirits",
        site: img24,
        source: img24,
        media: "Watercolor and ink on Canson paper",
        description: "My interpretation of the spiritual plane as it appears before us.",
        type: "painting"
      }
      ,
      {
        title: "CSF",
        site: img25,
        source: img25,
        media: "Watercolor on Canson paper",
        description: "My Tagalog initials ('ca', 'sa', 'pa') in Baybayin script.",
        type: "painting"
      }
      ,
      {
        title: "Drip",
        site: img26,
        source: img26,
        media: "Watercolor on Canson paper",
        description: "Abstracted use of the dripping technique to create a colorful composition.",
        type: "painting"
      }
      ,
      {
        title: "Splatter Self-Portrait",
        site: img27,
        source: img27,
        media: "Watercolor on Canson paper",
        description: "A self-portrait using watercolor and implemented using the splatter technique.",
        type: "painting"
      }
      ,
      {
        title: "Bricks",
        site: img28,
        source: img28,
        media: "Watercolor and Ink on Canson paper",
        description: "Bricks represent the foundation of society, the values that make us h8man and who we are as a collective humankind.",
        type: "mixed"
      }
      ,
      {
        title: "Nest",
        site: img29,
        source: img29,
        media: "Watercolor on Canson paper",
        description: "Using the splatter and drip techniques, I imagined my version of a nest.",
        type: "painting"
      }
      ,
      {
        title: "Open Up",
        site: img30,
        source: img30,
        media: "Watercolor and ink on Canson paper",
        description: "There is a vibrant, colorful world of wonder within all of us.",
        type: "painting"
      }
      ,
      {
        title: "Maze",
        site: img31,
        source: img31,
        media: "Watercolor and gouache on Canson paper",
        description: "Using the drip technique and gouache, this maze represents the many paths that we can take in our lives.",
        type: "painting"
      }
    ]
    // Empty array to hold items:
    let itemComponents = [];

    // Loop through the fetched items in items.json:
    for(let item of items){
      // Push each item as an Item component with a property named "item" to the itemComponents class.

      // If digitalSelected is true and the item type is "digital":
      if(this.state.digitalSelected && (item.type === "digital")){
        itemComponents.push(<Item item={item} />);
      }
      // If drawingSelected is true and the item type is "drawing":
      if(this.state.drawingSelected && (item.type === "drawing")){
        itemComponents.push(<Item item={item} />);
      }
      // If mixedSelected is true and the item type is "mixed":
      if(this.state.mixedSelected && (item.type === "mixed")){
        itemComponents.push(<Item item={item} />);
      }
      // If paintingSelected is true and the item type is "painting":
      if(this.state.paintingSelected && (item.type === "painting")){
        itemComponents.push(<Item item={item} />);
      }
    }

    // Return the list of Item components:
    return <div id="components">
      <nav>
        <div className="button" onClick={() => this.selectDigital()}>Digital</div>
        <div className="button" onClick={() => this.selectDrawing()}>Drawing</div>
        <div className="button" onClick={() => this.selectMixed()}>Mixed Media</div>
        <div className="button" onClick={() => this.selectPainting()}>Painting</div>
        <div className="button" onClick={() => this.selectAll()}>All</div>
      </nav>
      {itemComponents}
    </div>;

  }
}

export default List;  // Export the List class as List
