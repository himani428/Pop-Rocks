import { useEffect, useState } from "react";
import { api } from "../api/client";
import { FALLBACK_PRICING } from "../data/fallback";
import "../styles/pricing.css";

export default function Pricing() {
  const [pricing, setPricing] = useState(FALLBACK_PRICING);

  useEffect(() => {
    api.getPricing().then((data) => {
      if (data?.pricing?.regular) setPricing(data.pricing);
    }).catch(() => {});
  }, []);

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Plans</span>
          <h2>Simple, class-based pricing</h2>
          <p>All in-studio batches — pay per block of classes, or save with a 3-month package.</p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-panel">
            <h3 className="pricing-panel-title">Regular Batch Plans</h3>
            <ul className="pricing-list">
              {pricing.regular.map((row) => (
                <li key={row.batch}>
                  <div>
                    <strong>{row.batch}</strong>
                    <span>{row.detail}</span>
                  </div>
                  <span className="pricing-amount">₹{row.price.toLocaleString("en-IN")}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing-panel pricing-panel-accent">
            <h3 className="pricing-panel-title">3-Month Packages</h3>
            <p className="pricing-panel-note">Best value if you're committing to a full term.</p>
            <ul className="pricing-list">
              {pricing.package3month.map((row) => (
                <li key={row.batch}>
                  <div>
                    <strong>{row.batch}</strong>
                    <span>{row.detail}</span>
                  </div>
                  <span className="pricing-amount">₹{row.price.toLocaleString("en-IN")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pricing-footnote">
          All plans are for in-studio classes at Pop Rocks Dance Academy. Write to us on{" "}
          <a href="https://www.instagram.com/poprocks_dance_academy/" target="_blank" rel="noreferrer">Instagram</a> or use the contact form below for current availability.
        </p>
      </div>
    </section>
  );
}
