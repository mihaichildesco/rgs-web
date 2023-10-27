import React from "react";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import ContactUs from "../components/ContactUs";

const AboutPage = () => {
  return (
    <Layout>
      <AboutUs />
      <ContactUs />
    </Layout>
  );
};

export default AboutPage;
