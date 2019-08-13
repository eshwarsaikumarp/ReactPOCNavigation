import React, { Component } from "react";
import "./styles.scss";

class CustomCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      imgUrls: [
        "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
        "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
        "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
        "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
        "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
      ]
    };
  }

  previousSlide = () => {
    const { currentImageIndex, imgUrls } = this.state;
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState(() => ({ currentImageIndex: index }));
  };

  nextSlide = () => {
    const { currentImageIndex, imgUrls } = this.state;
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState(() => ({ currentImageIndex: index }));
  };

  render() {
    const { imgUrls, currentImageIndex } = this.state;
    console.log(this.state);
    return (
      <div className="carousel">
        <Arrow direction="left" clickFunction={this.previousSlide} glyph="<" />
        <ImageSlide url={imgUrls[currentImageIndex]} />
        <Arrow direction="right" clickFunction={this.nextSlide} glyph=">" />
      </div>
    );
  }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px"
  };

  return <div className="image-slide" style={styles} />;
};

export default CustomCarousel;
