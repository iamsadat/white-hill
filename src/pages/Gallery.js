import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertySlider from "../components/PropertySlider";
import ScrollAnimation from "../components/ScrollAnimation";
import Whatsapp from "../components/Whatsapp";

import "../styles/PropertySlider.css";
import "../styles/Gallery.css";

const Gallery = () => {
  const interiorImages = [
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/hero/image.png?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/interior/image.webp?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/interior/image1.jpg?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/interior/image2.jpg?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/interior/image6.jpg?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/interior/image8.jpg?raw=true",
  ];

  const kitchenImages = [
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/hero/image.png?raw=true?raw=true",
  ];

  const barCounterImages = [
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/barcounter/image5.webp?raw=true",
  ];

  const lawnImages = [
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/lawn/image11.jpg?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/lawn/image12.jpg?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/lawn/image9.webp?raw=true",
  ];

  const poolImages = [
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/pool/image.png?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/pool/image7.jpg?raw=true",
  ];

  const nv = [
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/image3.webp?raw=true",
    "https://github.com/iamsadat/white-hill/blob/main/src/assests/photos/image4.webp?raw=true",
  ];

  return (
    <>
      <Navbar />
      <Whatsapp />
      <ScrollAnimation>
        <div className="gallery--container">
          <ScrollAnimation>
            <h3 className="gallery--title">Explore Our Gallery</h3>
          </ScrollAnimation>

          <ScrollAnimation>
            <p className="gallery--description">
              Immerse yourself in the captivating beauty of our farm stay
              through our carefully curated photo gallery. Each image captures
              the essence of our serene surroundings, charming accommodations,
              and the authentic farm experience we offer.
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Interior</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Step into our beautifully designed interior spaces that exude
                  comfort and charm. Every detail has been carefully crafted to
                  create a warm and inviting ambiance, ensuring a delightful
                  stay for our guests.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="interiorImages-container">
              <PropertySlider images={interiorImages} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Night view</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Experience the magic of nights at White Hills Farm! 🌌✨
                  Explore our Nightview Photos Section and be enchanted by the
                  captivating beauty of our farm under the stars. 🌙📸
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="lawnImages-container">
              <PropertySlider images={nv} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Pool</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Dive into ultimate relaxation in our refreshing pool. Take a
                  dip to beat the heat, swim a few laps, or simply lounge by the
                  poolside while enjoying the tranquil surroundings. Our pool
                  area provides the perfect escape to rejuvenate and unwind.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="poolImages-container">
              <PropertySlider images={poolImages} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Lawn</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Our sprawling lawn offers a serene outdoor space where you can
                  relax and bask in the beauty of nature. Surrounded by lush
                  greenery, it's the perfect spot for a leisurely stroll, an
                  afternoon picnic, or simply unwinding with a good book.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="lawnImages-container">
              <PropertySlider images={lawnImages} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Bar Counter Setup</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Unwind and socialize at our well-equipped bar counter.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="barCounterImages-container">
              <PropertySlider images={barCounterImages} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Open Theatre Area</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Enjoy Movies with your friends and family.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="kitchenImages-container">
              <PropertySlider images={kitchenImages} />
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default Gallery;
