"use client";

import { BentoGridContainer } from "@/components/layout";
import {
  HeroTrilingualCard,
  MetricCommissionCard,
  MetricSpeedCard,
  WorkflowTouristPoliceCard,
  RbacSecurityBannerCard,
  TallHousekeepingCard,
  DepositLockCard,
  AiHardwareBannerCard
} from "./components";

export interface BentoBenefitsFeatureProps {
  filter?: string;
}

export function BentoBenefitsFeature({ filter = "all" }: BentoBenefitsFeatureProps) {
  const showOps = filter === "all" || filter === "operations";
  const showRev = filter === "all" || filter === "revenue";

  return (
    <BentoGridContainer>
      {showOps && <HeroTrilingualCard />}
      {showOps && <WorkflowTouristPoliceCard />}
      {showRev && <MetricCommissionCard />}
      {showRev && <MetricSpeedCard />}
      {showRev && <DepositLockCard />}
      {showOps && <RbacSecurityBannerCard />}
      {showOps && <TallHousekeepingCard />}
      {showRev && <AiHardwareBannerCard />}
    </BentoGridContainer>
  );
}
