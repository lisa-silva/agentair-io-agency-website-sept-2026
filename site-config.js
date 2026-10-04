/** Owner-controlled commercial configuration. Keep unapproved values null. */
window.AGENT_AIR_SITE_CONFIG = Object.freeze({
  publishPlans: false,
  publicPricingMessage: "Contact us for agency pricing",
  inquiryTarget: "#agency-demo",
  plans: ["starter", "growth", "scale"].map((id) => ({
    id,
    name: null,
    monthlyPrice: null,
    auditAllowance: null,
    supportLevel: null,
    teamAccess: null,
    includedFeatures: null,
    paymentLink: null
  }))
});
