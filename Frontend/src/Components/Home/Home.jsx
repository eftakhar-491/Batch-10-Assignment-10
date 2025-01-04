import React from "react";
import Hero from "../Header/Hero";
import LatestVisas from "../LatestVisas/LatestVisas";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
import { Helmet } from "react-helmet-async";
import VisaProcess from "../VisaProcess/VisaProcess";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />;
      <LatestVisas />
      <VisaProcess />
      <ClientFeedback />
    </>
  );
}
