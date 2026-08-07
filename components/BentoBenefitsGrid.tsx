import React from "react";
import { BentoBenefitsFeature } from "@/features/bento-benefits";

export function BentoBenefitsGrid({ filter }: { filter?: string }) {
  return <BentoBenefitsFeature filter={filter} />;
}
