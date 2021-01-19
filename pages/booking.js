import React from "react";
import BookingForm from "../components/BookingForm";
import BookingLanding from "../components/BookingLanding";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
export default function booking() {
  return (
    <>
      <Layout title="Dine Restaurant">
        <BookingLanding />
        <BookingForm />
        <Footer />
      </Layout>
    </>
  );
}
