export const productPageConfig = {
  hero: {
    eyebrow: "New product release",
    title: "Vexor v1.0",
    subtitle:
      "A retrieval intelligence layer for teams building AI products that need sharper context, faster semantic search, and calmer infrastructure decisions.",
    primaryCta: {
      label: "Launch Vexor",
      href: "https://app.indexora.one",
      external: true,
    },
    secondaryCta: {
      label: "Explore the experience",
      href: "#story",
    },
  },
  story: {
    eyebrow: "Why teams choose Vexor",
    title: "From dense vectors to grounded product experiences",
    subtitle:
      "Vexor turns hard-to-navigate embedding data into a reliable retrieval layer for search, copilots, recommendation flows, and enterprise knowledge tools.",
  },
  capabilities: [
    {
      title: "Sharper retrieval",
      description:
        "Surface the most relevant context before it is ever shown to users, so AI answers feel more precise and less random.",
      icon: "Sparkles",
    },
    {
      title: "Clean product signals",
      description:
        "Structure messy vector spaces into a clearer experience for ranking, filtering, and intent-aware discovery.",
      icon: "BrainCircuit",
    },
    {
      title: "Faster journeys",
      description:
        "Reduce the friction between a user query and a high-quality retrieval result with a system that feels effortless under load.",
      icon: "ScanSearch",
    },
  ],
  workflow: {
    eyebrow: "How it works",
    title: "A product-ready path from intake to answer",
    subtitle:
      "The experience stays simple for product teams while the platform handles the heavy lifting behind the scenes.",
    steps: [
      {
        title: "Ingest with context",
        description:
          "Bring in documents, embeddings, and metadata from the systems your product already uses.",
      },
      {
        title: "Refine relevance",
        description:
          "Apply semantic understanding and retrieval intelligence so queries expand into stronger intent paths.",
      },
      {
        title: "Deliver with confidence",
        description:
          "Return results that are faster, cleaner, and easier to trust inside your product experience.",
      },
    ],
  },
  metrics: [
    { value: "85%", label: "lower retrieval latency in high-volume scenarios" },
    { value: "3x", label: "faster semantic routing for complex queries" },
    { value: "24/7", label: "steady performance across large embedding workloads" },
  ],
  technicalHighlights: [
    {
      title: "Vector-scale indexing",
      description:
        "Approximate nearest neighbor search and index optimization keep large retrieval sets responsive.",
    },
    {
      title: "Semantic expansion",
      description:
        "Query understanding helps the platform interpret intent beyond keyword overlap.",
    },
    {
      title: "Deployment-ready stack",
      description:
        "A GPU-accelerated runtime helps teams move from experimentation to production with less friction.",
    },
  ],
};
