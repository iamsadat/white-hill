import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/Contact.css";
import { FaRoad, FaPhone, FaEnvelope } from "react-icons/fa";
import PropertySlider from "../components/PropertySlider";
import "../styles/About.css";
import "../styles/PropertySlider.css";
import "../styles/Gallery.css";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAnimation";

const Home = () => {
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
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <Whatsapp />
      <div class="container---">
        <ScrollAnimation>
          <h1>White Hill Hyd</h1>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Welcome to White Hill Resort,
            Where tranquility meets luxury's embrace.
            Nestled amidst nature's scenic allure,
            A haven for your soul to find solace.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Experience a stay beyond compare,
            Where every moment turns into a dream.
            From sun-kissed dawns to starlit air,
            Unwind in opulence, it's more than it seems.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Celebrate love with weddings divine,
            With breathtaking backdrops for your special day.
            Or host corporate events that truly shine,
            In a setting that will take breaths away.

          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            For photographers seeking the perfect frame,
            Capturing beauty here is an effortless feat.
            And all your joyous celebrations, we aim,
            To make them unforgettable and sweet.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Open for bookings, our doors await,
            Dial 📞 +91 9121699121 to reserve your stay.
            Discover serenity at White Hill Resort,
            Where cherished memories bloom and sway.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>

          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>

          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>

          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="gallery--container">
            <ScrollAnimation>
              <h3 className="gallery--title underlined-heading">
                Explore Our Gallery
              </h3>
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
                  <h3 className="container--title">Night view</h3>
                </ScrollAnimation>
                <ScrollAnimation>
                  <p className="container--description">
                    Experience the magic of nights at White Hills Farm! 🌌✨ Explore our Nightview Photos Section and be enchanted by the captivating beauty of our farm under the stars. 🌙📸
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

        <ScrollAnimation>
          <h1 className="underlined-heading">AMENITIES</h1>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Our resort boasts a wide array of amenities, carefully curated to cater to your every desire. From tranquil relaxation to exciting entertainment, you'll find it all amidst the nature.

          </p>
        </ScrollAnimation>
        <ul class="amenities-list">
          <ScrollAnimation>
            <li>
              Luxurious Bedrooms and Bathrooms:
              With five exquisitely designed bedrooms, your comfort is our top priority. Each room offers a cozy sanctuary to unwind and recharge. Accompanied by seven elegantly appointed bathrooms, you'll have all the space you need to refresh and rejuvenate.

            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Spacious Living Rooms:
              Experience the joy of togetherness in our two large living rooms. Gather with your loved ones, bask in the warmth of the surroundings, and create cherished memories that will last a lifetime.
            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Captivating Bar Setup with Amazing Views:
              Raise a toast to life's moments of joy at our well-equipped bar area. Marvel at the breathtaking vistas while sipping on your favorite beverages, making your stay truly unforgettable.

            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Thrilling Pool Table:
              For those seeking entertainment, our resort offers a thrilling pool table that guarantees hours of friendly competition and fun-filled laughter.

            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Expansive Ground Floor:
              The large ground floor space allows for various indoor activities, giving you the freedom to create your own memorable experiences.
            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Enchanting Open Theatre Area:
              Immerse yourself in the magic of cinema under the starry sky. Our open theatre area provides the perfect setting for unforgettable movie nights with your loved ones.
            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Board Games: Spend quality time indoors with our collection of
              board games. Challenge your friends and family to a friendly
              competition.
            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Kitchen: Our well-equipped kitchen is at your disposal. It
              includes a gas stove, utensils, and crockery, allowing you to
              prepare your favorite meals during your stay.
            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            {/* <li>

            </li> */}
          </ScrollAnimation>
          <ScrollAnimation>
            {/* <li>

            </li> */}
          </ScrollAnimation>
          <ScrollAnimation>
            {/* <li>

            </li> */}
          </ScrollAnimation>
        </ul>
        <ScrollAnimation>
          <div class="contact---info">
            <ScrollAnimation>
              <p>For bookings and further inquiries, please contact us at:</p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>Phone: +91 9121699121</p>
            </ScrollAnimation>
            <ScrollAnimation>
              <h1 className="underlined-heading">LOCATION</h1>
            </ScrollAnimation>
            <ScrollAnimation>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30461.637258710034!2d78.22995!3d17.377939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbeb4b49942561%3A0x773ea0cc350e33ac!2sWhite%20Hill%20Hyd!5e0!3m2!1sen!2sin!4v1689942594177!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </ScrollAnimation>
            <ScrollAnimation>
              <h3 className="directions">
                <a
                  href="https://maps.google.com/maps/dir//White+Hill+Hyd+96HH%2B7PM+Chinna+Mangalaram,+Telangana+501504/@17.377939,78.22995,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bcbeb4b49942561:0x773ea0cc350e33ac"
                  target="_blank"
                  rel="noreferrer"
                  className="directions--a"
                >
                  Get Directions
                </a>
              </h3>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <div className="cbody">
          <div className="container">
            <h1 className="brand underlined-heading">
              <span></span>Contact Us
            </h1>
            <div className="wrapper animated bounceInLeft">
              <div className="company-info">
                <h3 className="company-info-title">White Hill Hyd</h3>
                <ul>
                  <li>
                    <FaRoad /> : 96HH+7PM, Chinna Mangalaram, Telangana 501504
                  </li>
                  <li>
                    <FaPhone /> : +91 9121699121
                  </li>
                  <li>
                    <FaEnvelope /> : xxxxxxxxxxxxx@gmail.com
                  </li>
                </ul>
              </div>
              <div className="contact">
                <form>
                  <p>
                    <label>Name</label>
                    <input type="text" name="name" />
                  </p>
                  <p>
                    <label>Email Address</label>
                    <input type="email" name="email" />
                  </p>
                  <p>
                    <label>Phone Number</label>
                    <input type="text" name="phone" />
                  </p>
                  <p className="full">
                    <label>Message</label>
                    <textarea name="message" rows="5" />
                  </p>
                  <p className="full">
                    <button>Submit</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default Home;
