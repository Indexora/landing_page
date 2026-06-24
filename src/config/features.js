export const featuresSectionConfig = {
  id: "features",
  eyebrow: "Semantic Retrieval Intelligence Layer",
  title: "AI-Powered Vector Optimization Engine",
  subtitle:
    "Enhances your existing vector databases and RAG pipelines to deliver unmatched contextual relevance and performance.",
  align: "left",
  layout: "columns",
  features: [
    {
      badge: "Indexing",
      eyebrow: "Storage Efficiency",
      title: "Vector Index Optimization Engine",
      description:
        "Improves indexing structures for vector databases. Reduces search latency and query overhead while optimizing the storage efficiency for high-dimensional embeddings.",
      image: "/images/bb1.png",
      mediaSide: "right",
      cta: { label: "Learn more", href: "#" },
    },
    {
      badge: "Semantic",
      eyebrow: "Contextual Relevance",
      title: "Semantic Retrieval Intelligence",
      description:
        "Improves ranking of retrieved results, enhances contextual relevance of search outputs, and optimizes embedding similarity scoring for precise answers.",
      image: "/images/bb2.png",
      mediaSide: "left",
      cta: { label: "Learn more", href: "#" },
    },
    {
      badge: "Querying",
      eyebrow: "AI Semantics",
      title: "Query Understanding System",
      description:
        "Interprets user queries using AI semantics to automatically expand and refine search intent, drastically improving retrieval precision for LLM applications.",
      image: "/images/bb3.png",
      layout: "stacked",
      cta: { label: "Learn more", href: "#" },
    },
  ],
};

export const stepsSectionConfig = {
  id: "workflow",
  eyebrow: "The AI Process",
  title: "How Embeddings Flow Through Indexora",
  subtitle:
    "A visualizer showing embedding generation pipelines, vector indexing workflows, and semantic search optimization layers.",
  align: "left",
  stepsAlign: "left",
  steps: [
    {
      step: "01",
      eyebrow: "Data Connection",
      title: "Ingestion Layer",
      meta: "Vector DBs",
      description:
        "Connect Pinecone, Weaviate, Milvus, and enterprise data sources via low-latency API streams.",
    },
    {
      step: "02",
      eyebrow: "Embedding Optimization",
      title: "Processing Engine",
      meta: "NVIDIA SDK",
      description:
        "Reduce noise in vector space representations. The AI engine fine-tunes embeddings and compresses vectors.",
    },
    {
      step: "03",
      eyebrow: "Retrieval Ranking",
      title: "Semantic Context",
      meta: "Real-time AI",
      description:
        "Queries are rewritten, intents expanded, and outputs are strictly ranked for maximal relevance.",
    },
    {
      step: "04",
      eyebrow: "LLM Integration",
      title: "Generation Phase",
      meta: "Agentic Output",
      description:
        "Seamlessly connects with intelligent agents to deliver highly accurate, hallucination-free generation.",
    },
  ],
};
