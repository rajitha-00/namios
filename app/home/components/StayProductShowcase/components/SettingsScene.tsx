import Image from "next/image";
import { ActualPageHeader } from "./ActualUi";
import { ProductFrame, ProductIcon } from "./ProductFrame";

const subItems = ["Property Profile", "Layout & Rooms", "Branding", "Team & Roles", "Billing & Taxes", "Automation", "Tourist Police"];

export const SettingsScene = () => (
  <div className="art-scene actual-scene settings-scene">
    <ProductFrame activeNav="Settings">
      <div className="art-screen actual-screen settings-screen">
        <ActualPageHeader title="Settings" subtitle="Configure your property, teams, billing, automation, and compliance." />
        <div className="settings-layout"><aside>{subItems.map((item,index) => <span className={index === 0 ? "active" : ""} key={item}><ProductIcon name={index === 1 ? "bed" : index === 3 ? "guest" : index === 4 ? "card" : index === 6 ? "police" : "settings"} /><b>{item}</b><i>›</i></span>)}</aside><main><section className="settings-profile-card"><header><div><span>PROPERTY PROFILE</span><strong>General property information</strong><p>Used across reservations, invoices, guest communication, and reports.</p></div><button type="button">Save changes</button></header><div className="settings-logo-row"><span><Image src="/product/stay/nami-mark.svg" alt="" width={30} height={30} /></span><div><strong>Nami Stay</strong><p>Default property identity</p><button type="button">Upload property logo</button></div></div><div className="settings-form-grid"><label><span>Property name</span><b>Nami Stay Demo Hotel</b></label><label><span>Property type</span><b>Boutique Hotel⌄</b></label><label><span>Registration number</span><b>SLTDA-HO-28417</b></label><label><span>Primary email</span><b>stay@demo.namios.com</b></label><label><span>Phone number</span><b>+94 11 234 5678</b></label><label><span>Time zone</span><b>Asia / Colombo⌄</b></label></div></section><section className="settings-address-card"><header><strong>Property address</strong><span>Shown on invoices and reports</span></header><div><label><span>Address</span><b>42 Lighthouse Street</b></label><label><span>City</span><b>Galle</b></label><label><span>Postal code</span><b>80000</b></label></div></section></main></div>
      </div>
    </ProductFrame>
    <div className="art-float settings-float-saved"><span className="art-float-icon success">✓</span><div><small>SETTINGS SAVED</small><strong>Property profile updated</strong><p>Applied across Stay OS instantly</p></div></div>
    <div className="art-float settings-float-modules"><span>07</span><div><small>CONFIGURATION AREAS</small><strong>Everything in one place</strong><p>Profile to compliance</p></div></div>
    <div className="actual-highlight settings-highlight"><span>All Settings sub-items</span></div>
  </div>
);
