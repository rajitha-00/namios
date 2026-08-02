import type { Metadata } from "next";
import { CtaBand, FeatureMosaic, ProductGrid, ProductTable, WorkflowStrip } from "../components";
import { StayProductShowcase } from "../home/components";
import { PageHero } from "../site";

export const metadata: Metadata = {
  title: "Nami Stay",
  description: "Explore Nami Stay for Sri Lankan hotel bookings, rooms, guests, housekeeping, billing, OTA imports, and compliance."
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nami Stay · Available now"
        title="The operating system for every stay."
        description="Run bookings, guests, rooms, housekeeping, deposits, invoices, OTA imports, and compliance from one focused workspace built for Sri Lankan hospitality."
        image="/brand/hero-courtyard-hotel.webp"
        alt="A contemporary Sri Lankan hotel courtyard"
        signals={["Live property operations", "Local workflows included", "The foundation of NamiOS"]}
        secondaryHref="/pricing"
        secondaryLabel="View pricing"
      />

      <StayProductShowcase />

      <section className="section-pad page-section reveal-section">
        <div className="container">
          <div className="page-section-head">
            <div><span className="eyebrow">Three connected products</span><h2>Start with the front desk. Connect the rest when ready.</h2></div>
            <p>Independent properties should not need an enterprise implementation to gain one reliable view of bookings, guests, rooms, dining, and revenue.</p>
          </div>
          <ProductGrid />
        </div>
      </section>

      <section className="section-pad page-section page-section-ink reveal-section">
        <div className="container">
          <div className="page-section-head">
            <div><span className="eyebrow light">Nami Stay depth</span><h2>The daily property workflows are already connected.</h2></div>
            <p>Built around the tasks Sri Lankan front desks repeat every day, from OTA imports and deposit checks to Tourist Police records and branded folios.</p>
          </div>
          <FeatureMosaic />
        </div>
      </section>

      <section className="section-pad page-section reveal-section">
        <div className="container">
          <div className="page-section-head compact">
            <div><span className="eyebrow">One guest timeline</span><h2>From reservation to invoice, without retyping the stay.</h2></div>
          </div>
          <WorkflowStrip />
          <div className="product-table-wrap">
            <ProductTable />
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
