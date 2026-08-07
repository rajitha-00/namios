"use client";

import Image from "next/image";

export const BeforeAfterExperience = () => {
  return (
    <section id="before-after" className="comparison-section section-pad" aria-labelledby="comparison-title">
      <div className="container comparison-grid-layout">
        
        {/* Left Column */}
        <div className="comparison-left-col">
          <div className="comparison-image-wrapper">
            <Image
              className="comparison-main-image"
              src="/brand/hotel-checkin-lobby.jpg"
              alt="Professional boutique hotel check-in experience showing guest and receptionist"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="comparison-metrics-row">
            <div className="comparison-metric-card grey">
              <span className="metric-label">Check-in speed</span>
              <strong className="metric-value">90% faster</strong>
            </div>
            <div className="comparison-metric-card mint">
              <span className="metric-label">Manual admin</span>
              <strong className="metric-value">15+ hrs saved</strong>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="comparison-right-col">
          <div className="comparison-copy">
            <div className="comparison-eyebrow-container">
              <span className="comparison-dot" />
              <span className="comparison-eyebrow">Before and after NamiOS</span>
            </div>
            <h2 id="comparison-title" className="comparison-heading-text">
              From nightly admin to one calm operating view.
            </h2>
            <p className="comparison-desc">
              NamiOS replaces scattered property work with a shared guest, room, payment, and compliance timeline your whole team can trust.
            </p>
          </div>

          {/* Episode-style banner/card */}
          <div className="comparison-preview-card">
            <div className="preview-thumbnail-wrapper">
              <Image
                className="preview-thumbnail"
                src="/product/stay/booking-calendar.png"
                alt="Nami Stay calendar view"
                width={80}
                height={80}
              />
            </div>
            <div className="preview-details">
              <span className="preview-tag">NAMI STAY FEATURE</span>
              <h4 className="preview-title">Unified Booking & Room Timeline</h4>
              <button className="preview-play-btn" onClick={() => alert("Launching Nami Stay timeline preview...")}>
                <svg className="play-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="14" fill="#0A382D" />
                  <path d="M18.5 14L11 19.1962L11 8.80385L18.5 14Z" fill="white" />
                </svg>
                <span>See how it works</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <hr className="comparison-divider" />

          {/* Connected channels */}
          <div className="comparison-sync-row">
            <span className="sync-label">Syncs with</span>
            <div className="sync-logos">
              {/* Booking.com styled badge */}
              <div className="sync-badge booking">
                <span className="brand-dot blue" />
                <strong>Booking.com</strong>
              </div>
              
              {/* Airbnb styled badge with Bélo icon */}
              <div className="sync-badge airbnb">
                <svg className="brand-icon-airbnb" width="16" height="16" viewBox="0 0 24 24" fill="#FF5A5F" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
                </svg>
                <strong>airbnb</strong>
              </div>

              {/* Agoda styled badge */}
              <div className="sync-badge agoda">
                <span className="brand-dot red" />
                <span className="brand-dot yellow" />
                <span className="brand-dot blue" />
                <strong>agoda</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
