"use client";

import React from "react";
import { BentoBenefitsGrid } from "@/components";

export interface BenefitsSectionProps {
  filter?: string;
}

export function BenefitsSection({ filter }: BenefitsSectionProps) {
  return (
    <div className="benefits-section-root">
      <BentoBenefitsGrid filter={filter} />
    </div>
  );
}
