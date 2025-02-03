import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperties/FeaturedProperty";
import MailList from "../../components/mailList/MailList";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property</h1>
        <PropertyList />
        <h1 className="homeTitle">homes guests love</h1>
        <FeaturedProperty />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
