export const heroSectionConfig = {
  id: "hero",
  layout: "overlay-center",
  align: "center",
  background: {
    type: "image",
    imageSrc: "/images/hero-bg.png",
    imageAlt: "Indexora AI infrastructure background",
    imagePosition: "center",
    overlay: "auto", // "dark" | "light" | "none" | "auto"
  },
  eyebrow: "Retrieval Intelligence – for Vector-Scale AI",
  title: "The Vector Database Optimization & Retrieval Intelligence Platform.",
  subtitle:
    "Enhancing vector search performance, embedding management, and semantic retrieval accuracy for large-scale AI applications.",
  primaryCta: {
    label: "Vexor v1.0",
    href: "/",
  },
  secondaryCta: {
    label: "View Architecture",
    href: "#workflow",
  },
  stats: [
    { label: "Vector Search Queries Optimized", value: "1B+" },
    { label: "Average Latency Reduction", value: "85%" },
  ],
};



export const logoStripSectionConfig = {
  id: "tech-logos",
  eyebrow: "Powered by AI Architecture",
  title: "Integrated with Leading Vector Databases",
  subtitle:
    "Indexora introduces an intelligent optimization layer that enhances vector indexing and query understanding over your existing infrastructure.",
  align: "center",
  speed: "normal", // "slow" | "normal" | "fast"
  logos: [
    {
      src: "/tech-logos/pinecone.svg",
      name: "Pinecone",
      alt: "Pinecone",
    },
    {
      src: "/tech-logos/milvus.svg",
      name: "Milvus",
      alt: "Milvus",
    },
    {
      src: "/tech-logos/weaviate.svg",
      name: "Weaviate",
      alt: "Weaviate",
    },
    {
      src: "/tech-logos/nvidia.svg",
      name: "NVIDIA SDK",
      alt: "NVIDIA SDK",
    },
    {
      src: "/tech-logos/gemini.svg",
      name: "Gemini",
      alt: "Gemini",
    },
    {
      src: "/tech-logos/openai.svg",
      name: "OpenAI",
      alt: "OpenAI",
    },
    {
      src: "/tech-logos/qdrant.svg",
      name: "Qdrant",
      alt: "Qdrant",
    },

    {
      src: "/tech-logos/chroma.svg",
      name: "Chroma",
      alt: "Chroma",
    },
    {
      src: "/tech-logos/cohere.svg",
      name: "Cohere",
      alt: "Cohere",
    },
    {
      src: "/tech-logos/huggingface.svg",
      name: "HuggingFace",
      alt: "HuggingFace",
    },
    {
      src: "/tech-logos/langchain.svg",
      name: "LangChain",
      alt: "LangChain",
    },
  ],
};
