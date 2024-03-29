import React, { useEffect } from "react";
import "../styling/reviews.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Reviews() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="reviewsBg">
      <div id="reviews-"></div>
      <div id="reviews">
        <h2 id="customer" data-aos="fade-right">
          What our customers think of us:
        </h2>
        <div data-aos="fade-up" className="reviewBlocks">
          <div className="wholeReview">
            <div className="reviewBlock">
              <i className="fas fa-quote-left topLeft"></i>
              <p>
                My first time with EAF. They were very efficient and scheduled
                me very quickly: my deck and side-stair case were both done
                within a week of accepting their contract.{" "}
              </p>
              <i className="fas fa-quote-right bottomRight"></i>
            </div>
            <h3>Carole A.</h3>
            <div className="fiveStars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="wholeReview">
            <div className="reviewBlock">
              <i className="fas fa-quote-left topLeft"></i>
              <p>
                We can't thank you guys enough! Great work! We are soooo happy!
                <br />
                <br />
                <span style={{ fontSize: "1.5em" }}>Super happy!</span>
              </p>
              <i className="fas fa-quote-right bottomRight"></i>
            </div>
            <h3>Erin G. and Jane A. via Facebook</h3>
            <div className="fiveStars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="wholeReview">
            <div className="reviewBlock">
              <i className="fas fa-quote-left topLeft"></i>
              <p>
                We researched 3 different companies to renovate our front and
                back porch. We selected EAF because they were competitively
                priced and all communication I had with them was extremely
                professional.
              </p>
              <i className="fas fa-quote-right bottomRight"></i>
            </div>
            <h3>Michael R.</h3>
            <div className="fiveStars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
