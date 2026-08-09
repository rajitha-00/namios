"use client";

import { useState } from "react";
import { comparisonGroups, pricingPlans } from "../constants";
import type { BillingCycle, FeatureValue, PlanId, PricingPlan } from "../interfaces";

const formatLkr = (amount: number) => `LKR ${amount.toLocaleString("en-LK")}`;

const FeatureStatus = ({ value }: { value: FeatureValue }) => {
  if (typeof value === "string") return <span className="comparison-text-value">{value}</span>;
  return value
    ? <span className="comparison-check" aria-label="Included">{"\u2713"}</span>
    : <span className="comparison-missing" aria-label="Not included">{"\u2014"}</span>;
};

const PlanShowcase = ({ billingCycle, plan }: { billingCycle: BillingCycle; plan: PricingPlan }) => {
  const annualTotal = Math.round(plan.monthlyPrice * 12 * 0.9);
  const effectiveMonthly = Math.round(annualTotal / 12);
  const isAnnual = billingCycle === "annual";

  return (
    <article className={`pricing-showcase-plan ${plan.featured ? "is-featured" : ""}`}>
      <div className="comparison-plan-label">
        <strong>{plan.name}</strong>
        {plan.badge && <span>{plan.badge}</span>}
      </div>
      <p>{plan.description}</p>
      <div className="comparison-price">
        <strong>{formatLkr(isAnnual ? annualTotal : plan.monthlyPrice)}</strong>
        <span>/{isAnnual ? "year" : "month"}</span>
      </div>
      <small>{isAnnual ? `Equivalent to ${formatLkr(effectiveMonthly)}/month · 10% off` : "Exact monthly price · billed month to month"}</small>
      <a href="/offers">
        Start 1-month free trial
        <svg className="lucide-arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </article>
  );
};

const ComparisonPlanHeader = ({ activePlan, plan }: { activePlan: PlanId; plan: PricingPlan }) => (
  <div className={`comparison-plan-heading comparison-plan-heading-compact ${plan.featured ? "is-featured" : ""} ${plan.id === activePlan ? "is-mobile-active" : ""}`}>
    <div className="comparison-plan-label">
      <strong>{plan.name}</strong>
      {plan.badge && <span>{plan.badge}</span>}
    </div>
  </div>
);

export const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [activeComparisonPlan, setActiveComparisonPlan] = useState<PlanId>("standard");

  return (
    <div className="saas-pricing comparison-pricing">
      <div className="comparison-controls">
        <div>
          <strong>Choose how you pay</strong>
          <span>All plans begin with a 1-month free trial.</span>
        </div>
        <div className="billing-switch" aria-label="Choose billing cycle">
          <button className={billingCycle === "monthly" ? "active" : ""} onClick={() => setBillingCycle("monthly")} type="button">Monthly</button>
          <button className={billingCycle === "annual" ? "active" : ""} onClick={() => setBillingCycle("annual")} type="button">Annual <span>Save 10%</span></button>
        </div>
      </div>

      <div className="pricing-showcase-grid">
        {pricingPlans.map((plan) => <PlanShowcase billingCycle={billingCycle} key={plan.id} plan={plan} />)}
      </div>

      <div className="comparison-section-heading">
        <span className="eyebrow">Full comparison</span>
        <h3>See exactly what is included.</h3>
        <p>No hidden modules or unclear feature limits. Compare every plan in one table.</p>
      </div>

      <div className="mobile-comparison-tabs" role="tablist" aria-label="Select a plan to compare">
        {pricingPlans.map((plan) => (
          <button
            className={plan.id === activeComparisonPlan ? "active" : ""}
            type="button"
            role="tab"
            aria-selected={plan.id === activeComparisonPlan}
            aria-controls="mobile-plan-comparison"
            key={plan.id}
            onClick={() => setActiveComparisonPlan(plan.id)}
          >
            <span>{plan.name}</span>
            {plan.badge && <small>{plan.badge}</small>}
          </button>
        ))}
      </div>

      <div className="comparison-scroll" id="mobile-plan-comparison" role="region" aria-label="NamiOS plan feature comparison" tabIndex={0}>
        <div className="comparison-table">
          <div className="comparison-corner">
            <strong>Plan features</strong>
            <small>Select a plan above on smaller screens</small>
          </div>
          {pricingPlans.map((plan) => <ComparisonPlanHeader activePlan={activeComparisonPlan} key={plan.id} plan={plan} />)}

          {comparisonGroups.filter((group) => billingCycle === "annual" || group.name !== "Annual plan benefits").map((group) => (
            <div className="comparison-group" key={group.name}>
              <div className="comparison-group-title">{group.name}</div>
              {group.features.map((feature) => (
                <div className="comparison-feature-row" key={feature.name}>
                  <div className="comparison-feature-name">{feature.name}</div>
                  {pricingPlans.map((plan) => (
                    <div className={`comparison-feature-value ${plan.featured ? "is-featured" : ""} ${plan.id === activeComparisonPlan ? "is-mobile-active" : ""}`} key={plan.id}>
                      <FeatureStatus value={feature.values[plan.id]} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="trial-assurance" aria-label="Trial and billing assurances">
        <div><span>01</span><strong>1 month free</strong><p>Test your actual property workflows before billing starts.</p></div>
        <div><span>02</span><strong>0% booking commission</strong><p>Your direct-booking revenue remains yours.</p></div>
        <div><span>03</span><strong>Annual website included</strong><p>Annual customers receive a custom direct-booking website.</p></div>
        <div><span>04</span><strong>Pro launch package</strong><p>Pro Annual includes branding and social-media launch support.</p></div>
      </div>
    </div>
  );
};
