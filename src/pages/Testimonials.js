import React from "react";
import "../styles/Testimonials.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAnimation";
import { FaUserAlt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <ScrollAnimation>
        <section className="client">
          <div className="section__container client__container">
            <ScrollAnimation>
              <h2 className="section__header">What our guests say</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="client__grid">
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Niharika K</h4>
                  </div>
                  <p>
                    Decent place party, container building. Might shake while someone walks. Good interiors with terrace seating, bar counter, garden area & pool. There are 4 bedrooms , open to sky seating, looks unique.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Prateek Reddy</h4>
                  </div>
                  <p>
                    recently had the pleasure of staying at Whitehill Resort in Hyderabad, and it proved to be a delightful experience. Nestled in a serene location, this resort offers a tranquil escape from the bustling city life. With its well-appointed amenities, including a swimming pool, a sprawling garden, a bar area, and five comfortable bedrooms, Whitehill Resort truly provided a memorable stay.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Anshul</h4>
                  </div>
                  <p>
                    A lovely farm house for parties and events. The owner
                    is very friendly and accommodating of some requests. It’s a
                    newly renovated property with modern amenities, a nice
                    swimming pool, a large bar counter.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Jagad Jagadeesh</h4>
                  </div>
                  <p>
                    Best farmhouse within budget with all the
                    amenities......staff is friendly and helpful
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Vaibhav ayachitula</h4>
                  </div>
                  <p>
                    It's a good place and great resort!! Loved it!! ❤️     </p>           </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Sushant Gagad</h4>
                  </div>
                  <p>
                    Its a perfect place to chill out and relax with family and
                    friends. Kids enjoyed a lot at the pool area. View is
                    beautiful and well maintained.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Shaik Saifuddin</h4>
                  </div>
                  <p>
                    White Hills Farm offers a charming blend of luxury and nature. The cottages were cozy and well-equipped, offering stunning views of the surrounding landscape.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Naveen Kumar</h4>
                  </div>
                  <p>
                    Awesome ambience.. Well maintained Luxury villa type stay..
                    Swimming pool will blow your mind. A perfect way to spend
                    your weekend with Family.
                  </p>
                </div>

                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Akshith ch</h4>
                  </div>
                  <p>
                    A true combination of luxury and comfort. This villa is so
                    well planned that it has every amenity you can think of for
                    your holiday. The look and feel is awesome and gives you all
                    5 star comforts but yet makes you feel like home away from
                    home.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Vinnu</h4>
                  </div>
                  <p>
                    Property and interior is just amazing and each and every
                    corner of the place has its own vibes. Definitely a perfect
                    place to visit!
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Aseel Aladeen</h4>
                  </div>
                  <p>
                    This is by far the most beautiful and comfortable farm stay
                    I have been to. The ambiance is beautiful and its a perfect
                    get away to just relax and spend quality time with family and host functions.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Shruthi Mantri</h4>
                  </div>
                  <p>
                    This beautiful property had all the amenities with luxury…it
                    had all the comfort.would recommend this place 👍🏻
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Testimonials;
