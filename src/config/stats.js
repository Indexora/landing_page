import { Activity, Database, Zap } from "lucide-react";

export const statsRowSectionConfig = {
  id: "kpis",
  eyebrow: "Infrastructure Health Metrics",
  title: "Massive scale, minimal latency",
  subtitle:
    "Indexora acts as an intelligent optimization layer, drastically reducing query overhead while improving semantic ranking accuracy.",
  align: "center",
  cardAlign: "center",
  stats: [
    {
      id: "latency-reduced",
      icon: <Zap className="h-4 w-4" />,
      value: 85,
      suffix: "%",
      label: "Reduction in Search Latency",
      description:
        "By improving indexing structures for vector databases, query overhead is virtually eliminated even at extreme scale.",
      highlight: true,
    },
    {
      id: "accuracy-improved",
      icon: <Activity className="h-4 w-4" />,
      value: 99,
      suffix: ".9%",
      label: "Retrieval Precision & Accuracy",
      description:
        "Our Query Understanding System interprets user intent, expanding it for near-perfect context matching",
    },
    {
      id: "vectors-optimized",
      icon: <Database className="h-4 w-4" />,
      value: 50,
      suffix: "B+",
      label: "High-Dimensional Embeddings Optimized",
      description:
        "Fine-tuning embedding representations to reduce noise in vector space and vastly improve clustering similarities.",
    },
  ],
};
