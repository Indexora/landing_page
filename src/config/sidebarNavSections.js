import {
  LayoutDashboard,
  BarChart3,
  Database,
  Network,
  Activity,
  Workflow,
  FileText,
  Settings,
  CreditCard,
  LifeBuoy,
} from "lucide-react";

export const sidebarNavSections = [
  {
    id: "main",
    label: "Intelligence Layer",
    items: [
      {
        id: "overview",
        label: "Command Center",
        href: "/dashboard",
        exact: true,
        icon: <LayoutDashboard className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "analytics",
        label: "Retrieval Analytics",
        icon: <BarChart3 className="h-4 w-4" aria-hidden="true" />,
        children: [
          {
            id: "analytics-overview",
            label: "Performance Metrics",
            href: "/dashboard/analytics",
          },
          {
            id: "analytics-funnels",
            label: "Query Transformation",
            href: "/dashboard/analytics/funnels",
          },
          {
            id: "analytics-retention",
            label: "Embedding Efficiency",
            href: "/dashboard/analytics/retention",
          },
        ],
      },
      {
        id: "vector-dbs",
        label: "Vector Databases",
        href: "/dashboard/tasks",
        icon: <Database className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "semantic-search",
        label: "Semantic Indexing",
        href: "/dashboard/calendar",
        icon: <Network className="h-4 w-4" aria-hidden="true" />,
      },
    ],
  },
  {
    id: "workspace",
    label: "Optimization Framework",
    items: [
      {
        id: "accounts",
        label: "LLM Applications",
        href: "/dashboard/accounts",
        icon: <Activity className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "pipeline",
        label: "RAG Pipelines",
        href: "/dashboard/pipeline",
        icon: <Workflow className="h-4 w-4" aria-hidden="true" />,
        badgeLabel: "Beta",
        badgeTone: "warning",
      },
      {
        id: "reports",
        label: "Knowledge Stores",
        href: "/dashboard/reports",
        icon: <FileText className="h-4 w-4" aria-hidden="true" />,
      },
    ],
  },
  {
    id: "settings",
    label: "System configuration",
    items: [
      {
        id: "settings-general",
        label: "API Settings",
        href: "/dashboard/settings",
        icon: <Settings className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "billing",
        label: "Billing & Usage",
        href: "/dashboard/billing",
        icon: <CreditCard className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "support",
        label: "Developer Docs",
        href: "/dashboard/support",
        icon: <LifeBuoy className="h-4 w-4" aria-hidden="true" />,
      },
    ],
  },
];
