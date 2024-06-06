import React from 'react';


class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                <h1>Images from {this.props.name}</h1>
                
                <div className="gallery-container">

                <img src= {require("../gallery/traingle1.jpg")} alt="Triangle 1" />
                <img src= {require("../gallery/triangle2.png" )} alt="Triangle 2" />
                <img src= {require("../gallery/triangle3.jpg" )} alt="Triangle 3" />
                <img src={require("../gallery/traingle4.jpg" )} alt="Triangle 4" />

                </div>


            </div>
        );
    }
}

export default Gallery;

