import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="qustion">
        <h4>How do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            voluptatum possimus architecto, facere nobis unde minus. Dignissimos
            rerum mollitia possimus, aut optio, temporibus nisi accusamus
            voluptatum suscipit repellendus, ducimus modi.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="qustion">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            voluptatum possimus architecto, facere nobis unde minus. Dignissimos
            rerum mollitia possimus, aut optio, temporibus nisi accusamus
            voluptatum suscipit repellendus, ducimus modi.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="qustion">
        <h4>Diferrent Payment</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            voluptatum possimus architecto, facere nobis unde minus. Dignissimos
            rerum mollitia possimus, aut optio, temporibus nisi accusamus
            voluptatum suscipit repellendus, ducimus modi.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="qustion">
        <h4>What Products do you offer</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            voluptatum possimus architecto, facere nobis unde minus. Dignissimos
            rerum mollitia possimus, aut optio, temporibus nisi accusamus
            voluptatum suscipit repellendus, ducimus modi.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .qustion {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
