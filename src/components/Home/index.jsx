import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import BallotResults from "./ballot-result";

const MemPortHome = () => {
  return (
    <>
      <Breadcrumb title="Members Portal" subtitle="Members Portal" />
      <BallotResults />
      <Footer />
    </>
  );
};

export default MemPortHome;
