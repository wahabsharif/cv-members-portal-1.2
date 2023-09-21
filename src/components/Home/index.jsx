import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import BallotResults from "./ballot-result";
import EmailPopup from "../Contact";

const MemPortHome = () => {
  return (
    <>
      <Breadcrumb title="Members Portal" subtitle="Members Portal" />
      <BallotResults />
      <EmailPopup />
      <Footer />
    </>
  );
};

export default MemPortHome;
