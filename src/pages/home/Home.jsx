import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import TicketImg from "../../assets/images/Ticket.png";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-copy">
        <div className="home-copy-wrapper">
          <h1>Conference</h1>
        </div>
        <div className="home-copy-wrapper">
          <h1>Ticket</h1>
          <h1>Generator</h1>
        </div>
      </div>

      <Link to="/Ticket" className="home-tagline">
        <button className="ticket-selection">Ticket Selection</button>
      </Link>
    </section>
  );
};

export default Home;
