"use client";

import { useState } from "react";
import { stayScenes } from "../constants";
import type { StaySceneKey } from "../interfaces";
import { BookingsScene } from "./BookingsScene";
import { ChannelsScene } from "./ChannelsScene";
import { DashboardScene } from "./DashboardScene";
import { GuestScene } from "./GuestScene";
import { HousekeepingScene } from "./HousekeepingScene";
import { OtaImportScene } from "./OtaImportScene";
import { PaymentsScene } from "./PaymentsScene";
import { RoomsScene } from "./RoomsScene";
import { SettingsScene } from "./SettingsScene";
import { TouristPoliceScene } from "./TouristPoliceScene";

const sceneComponents = {
  dashboard: DashboardScene,
  bookings: BookingsScene,
  guests: GuestScene,
  rooms: RoomsScene,
  housekeeping: HousekeepingScene,
  payments: PaymentsScene,
  touristPolice: TouristPoliceScene,
  otaImport: OtaImportScene,
  channels: ChannelsScene,
  settings: SettingsScene
};

export const StayProductShowcase = () => {
  const [activeScene, setActiveScene] = useState<StaySceneKey>("dashboard");
  const scene = stayScenes.find((item) => item.key === activeScene) ?? stayScenes[0];
  const ActiveScene = sceneComponents[activeScene];

  return (
    <section className="section-pad art-showcase" aria-labelledby="stay-product-title">
      <div className="container art-showcase-intro">
        <div><span className="eyebrow">Designed around the operating day</span><h2 id="stay-product-title">Hospitality feels better when everything moves together.</h2></div>
        <p>NamiOS Stay turns complex property work into clear, confident moments—from the morning pulse to the final room handoff.</p>
      </div>

      <div className="art-showcase-body">
        <div className="container art-showcase-layout">
          <aside className="art-module-rail">
            <div><span>STAY OS</span><strong>Explore every module</strong><p>Ten connected workspaces. One familiar operating system.</p></div>
            <div className="art-showcase-tabs" role="tablist" aria-label="Explore NamiOS Stay modules">
              {stayScenes.map((item) => (
                <button type="button" role="tab" aria-selected={item.key === activeScene} className={item.key === activeScene ? "active" : ""} onClick={() => setActiveScene(item.key)} key={item.key}>
                  <span>{item.number}</span><strong>{item.label}</strong><i>→</i>
                </button>
              ))}
            </div>
          </aside>
          <div className="art-module-content">
            <div className="art-scene-copy" aria-live="polite">
              <span>{scene.eyebrow}</span><h3>{scene.title}</h3><p>{scene.description}</p>
            </div>
            <div className="art-stage-wrap">
              <div className="art-stage-grid" aria-hidden="true" />
              <div className="art-stage"><ActiveScene /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container art-feature-rail">
        <div><span>01</span><strong>One live truth</strong><p>Every team sees the same guest, room, and payment status.</p></div>
        <div><span>02</span><strong>Revenue protected</strong><p>Deposits, gaps, and booking signals surface automatically.</p></div>
        <div><span>03</span><strong>Service remembered</strong><p>Guest context stays ready for every arrival and return.</p></div>
        <div><span>04</span><strong>Local by design</strong><p>Sri Lankan billing and compliance are built into the flow.</p></div>
      </div>
    </section>
  );
};
