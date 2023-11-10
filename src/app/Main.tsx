import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";
// import '../styles/globals.css'

const Main = () => {
  return (
    <div>
      <div className="main">
        <Header></Header>
        <div className="content">
          <Image
            src="/images/book.jpg"
            width={270}
            height={300}
            alt="PD Logo"
          />
          <h1>
            Web Design & <br />
            <span>Development</span> <br />
            Course
          </h1>
          <p className="par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
            expedita atque eveniet
            <br /> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad
            delectus
            <br /> a quae totam ipsa illum minus laudantium?
          </p>
          <button className="cn">
            <a href="#">JOIN US</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
