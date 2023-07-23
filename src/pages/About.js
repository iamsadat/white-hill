import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAnimation";
import ReactPlayer from "react-player";
import VideoSlider from "../components/VideoSlider";
import video1 from "../assests/videos/video1.mp4";
import video2 from "../assests/videos/video2.mp4";
import video3 from "../assests/videos/video3.mp4";
import video4 from "../assests/videos/video4.mp4";
import video5 from "../assests/videos/video5.mp4";

const About = () => {
  const videos = [video1, video2, video3, video4, video5];
  return (
    <>
      <Navbar />
      <Whatsapp />
      <ScrollAnimation>
        <ScrollAnimation>
          <div class="container---">
            <div className="player-wrapper">
              <VideoSlider videos={videos} />
            </div>
            <ScrollAnimation>
              <h1 className="underlined-heading">White Hill</h1>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Welcome to White Hill Resort, Where tranquility meets luxury's
                embrace. Nestled amidst nature's scenic allure, A haven for your
                soul to find solace.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Experience a stay beyond compare, Where every moment turns into
                a dream. From sun-kissed dawns to starlit air, Unwind in
                opulence, it's more than it seems.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Celebrate love with weddings divine, With breathtaking backdrops
                for your special day. Or host corporate events that truly shine,
                In a setting that will take breaths away.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                For photographers seeking the perfect frame, Capturing beauty
                here is an effortless feat. And all your joyous celebrations, we
                aim, To make them unforgettable and sweet.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Open for bookings, our doors await, Dial 📞 +91 9121699121 to
                reserve your stay. Discover serenity at White Hill Resort, Where
                cherished memories bloom and sway.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <h1 className="underlined-heading">AMENITIES</h1>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Our resort boasts a wide array of amenities, carefully curated
                to cater to your every desire. From tranquil relaxation to
                exciting entertainment, you'll find it all amidst the nature.
              </p>
            </ScrollAnimation>
            <ul class="amenities-list">
              <ScrollAnimation>
                <li>
                  Luxurious Bedrooms and Bathrooms: With five exquisitely
                  designed bedrooms, your comfort is our top priority. Each room
                  offers a cozy sanctuary to unwind and recharge. Accompanied by
                  seven elegantly appointed bathrooms, you'll have all the space
                  you need to refresh and rejuvenate.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Spacious Living Rooms: Experience the joy of togetherness in
                  our two large living rooms. Gather with your loved ones, bask
                  in the warmth of the surroundings, and create cherished
                  memories that will last a lifetime.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Captivating Bar Setup with Amazing Views: Raise a toast to
                  life's moments of joy at our well-equipped bar area. Marvel at
                  the breathtaking vistas while sipping on your favorite
                  beverages, making your stay truly unforgettable.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Thrilling Pool Table: For those seeking entertainment, our
                  resort offers a thrilling pool table that guarantees hours of
                  friendly competition and fun-filled laughter.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Expansive Ground Floor: The large ground floor space allows
                  for various indoor activities, giving you the freedom to
                  create your own memorable experiences.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Enchanting Open Theatre Area: Immerse yourself in the magic of
                  cinema under the starry sky. Our open theatre area provides
                  the perfect setting for unforgettable movie nights with your
                  loved ones.
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
                  <p>
                    For bookings and further inquiries, please contact us at:
                  </p>
                </ScrollAnimation>
                <ScrollAnimation>
                  <p>Phone: +91 9121699121</p>
                </ScrollAnimation>
                <ScrollAnimation></ScrollAnimation>
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
        </ScrollAnimation>
        <Footer />
      </ScrollAnimation>
    </>
  );
};

export default About;
