export const pricingSectionConfig = {
  id: "pricing",
  eyebrow: "Monetization & Scaling",
  title: "Flexible Licensing for Enterprise Retrieval",
  subtitle:
    "Indexora operates on a subscription-based SaaS model with query volume-based pricing, enterprise retrieval licensing, and custom RAG consulting.",
  align: "center",
  note:
    "Need custom RAG optimization consulting or unlimited API access? Leave a note in the contact form.",
  plans: [
    {
      id: "developer-api",
      badge: "For Developers",
      title: "XoraProbe",
      price: "$79",
      priceSuffix: "/month",
      description:
        "API access for vector intelligence services, designed for LLM application developers and small AI engineering teams.",
      emphasis:
        "Includes standard embedding optimizations and semantic retrieval APIs.",
      features: [
        "Up to 1M Search Queries Optimized",
        "Semantic Retrieval Enhancement Layer",
        "Basic Query Understanding System",
        "Retrieval Analytics Dashboard",
        "Community Support",
      ],
      ctaLabel: "Start Building",
      ctaHref: "https://buy.stripe.com/test_3cIbJ3eyu3Czdov8b38EM00",
      featured: false,
    },
    {
      id: "enterprise-saas",
      badge: "Most Popular",
      title: "XoraCluster",
      price: "$199",
      priceSuffix: "/month",
      discountLabel: "Volume-Based Pricing Available",
      description:
        "Subscription-based SaaS model offering full-scale Vector Index Optimization and Embedding Framework fine-tuning.",
      emphasis:
        "Best for Enterprise search platforms and knowledge management systems.",
      features: [
        "Up to 50M Search Queries Optimized",
        "Vector Index Optimization Engine",
        "Full Embedding Optimization Framework",
        "Advanced Query Intent Expansion",
        "Real-time Latency & Accuracy Monitoring",
        "Priority Technical Support",
      ],
      ctaLabel: "Upgrade to Enterprise SaaS",
      ctaHref: "https://buy.stripe.com/test_bJecN73TQa0Xesz9f78EM01",
      featured: true,
      highlightLabel: "High-Volume Data",
    },
    {
      id: "custom-rag",
      badge: "Full-Scale",
      title: "XoraMesh",
      price: "Custom",
      priceSuffix: "licensing",
      description:
        "Enterprise retrieval optimization licensing and dedicated consulting for complex generative AI systems.",
      emphasis:
        "On-premise deployment options and dedicated AI architects for your RAG pipelines.",
      features: [
        "Unlimited Query Volume Options",
        "Custom Embedding Fine-Tuning",
        "Domain-Specific Vector Space Models",
        "Dedicated Optimization Infrastructure",
        "NVIDIA-based Compute Acceleration Support",
        "White-Glove Integration & Deployment",
      ],
      ctaLabel: "Contact Sales",
      ctaHref: "#contact",
      featured: false,
    },
  ],
};
