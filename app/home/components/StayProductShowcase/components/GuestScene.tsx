import { ProductFrame } from "./ProductFrame";

export const GuestScene = () => (
  <div className="art-scene actual-scene art-guest-scene">
    <ProductFrame activeNav="Guests">
      <div className="art-screen actual-screen art-guest">
        <div className="art-guest-hero">
          <div className="art-guest-person"><i>AS<span>VIP</span></i><div><span>RETURNING GUEST · 4TH STAY</span><h4>Amara Silva</h4><p>Colombo, Sri Lanka · English / Sinhala</p></div></div>
          <div className="art-guest-buttons"><button type="button">Message guest</button><button type="button" className="primary">Complete check-in →</button></div>
        </div>
        <div className="art-journey-stepper"><div className="done"><i>✓</i><span><strong>Reserved</strong><small>Jul 12</small></span></div><b /><div className="done"><i>✓</i><span><strong>Deposit paid</strong><small>Jul 12</small></span></div><b /><div className="active"><i>3</i><span><strong>Arriving today</strong><small>10:30 AM</small></span></div><b /><div><i>4</i><span><strong>Check-out</strong><small>Aug 05</small></span></div></div>
        <div className="art-guest-grid">
          <div className="art-guest-left">
            <article className="art-guest-card art-stay-card"><header><div><span>CURRENT STAY</span><strong>Ocean Suite · 304</strong></div><b>3 nights</b></header><div className="art-stay-visual"><div><span>CHECK-IN</span><strong>02 Aug</strong><small>10:30 AM</small></div><i>→</i><div><span>CHECK-OUT</span><strong>05 Aug</strong><small>11:00 AM</small></div><div className="art-stay-total"><span>STAY TOTAL</span><strong>LKR 186,750</strong><small>Deposit paid · LKR 93,375</small></div></div></article>
            <article className="art-guest-card art-preference-card"><header><span>GUEST PREFERENCES</span><b>Auto-saved</b></header><div className="art-preference-list"><span>Quiet room</span><span>High floor</span><span>Vegetarian</span><span>Late breakfast</span></div><p>“Anniversary trip. Arrange a small welcome amenity if possible.”</p></article>
          </div>
          <div className="art-guest-right">
            <article className="art-guest-card art-payment-card"><header><span>PAYMENT</span><b>50% paid</b></header><div className="art-payment-ring"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" /><circle className="progress" cx="40" cy="40" r="30" /></svg><div><strong>50%</strong><small>secured</small></div></div><p><span>Deposit received</span><b>LKR 93,375</b></p><p><span>Balance at checkout</span><b>LKR 93,375</b></p><button type="button">View folio</button></article>
            <article className="art-guest-card art-doc-card"><header><span>GUEST RECORD</span><b>Verified</b></header><p><span>Passport</span><strong>•••• 4821</strong></p><p><span>Tourist Police</span><strong>Ready to sync</strong></p><p><span>Contact</span><strong>amara@email.com</strong></p></article>
          </div>
        </div>
      </div>
    </ProductFrame>
    <div className="art-float art-float-memory"><span>✦</span><div><small>GUEST MEMORY</small><strong>Recognized instantly</strong><p>Preferences from 3 previous stays</p></div></div>
    <div className="art-float art-float-request"><span className="art-float-icon success">✓</span><div><small>SPECIAL REQUEST</small><strong>Welcome amenity assigned</strong><p>Housekeeping · Nadeesha</p></div></div>
  </div>
);
