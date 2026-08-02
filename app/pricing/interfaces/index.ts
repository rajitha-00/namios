export type BillingCycle = "monthly" | "annual";

export type PlanId = "launch" | "standard" | "ai" | "pro";

export interface PricingPlan {
  id: PlanId;
  name: string;
  description: string;
  monthlyPrice: number;
  badge?: string;
  featured?: boolean;
}

export type FeatureValue = boolean | string;

export interface ComparisonFeature {
  name: string;
  values: Record<PlanId, FeatureValue>;
}

export interface ComparisonGroup {
  name: string;
  features: ComparisonFeature[];
}
