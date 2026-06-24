import Image from "next/image";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

export const footerSectionConfig = {
  logo: (
    <Image
      src="/logo/logo.svg"
      alt="Indexora logo"
      width={24}
      height={24}
      className="h-6 w-6"
    />
  ),
  productName: "Indexora",
  description: "An AI-powered retrieval intelligence platform designed to improve the performance, accuracy, and scalability of vector databases used in modern AI systems.",
  socialIcons: [
    { icon: <Twitter className="h-4 w-4" />, href: "#" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#" },
    { icon: <Github className="h-4 w-4" />, href: "#" },
  ],
  footerColumns: [
    {
      title: 'Platform',
      links: [
        { text: 'Vector Optimization', href: '#features' },
        { text: 'Enterprise Solutions', href: '#pricing' },
        { text: 'Developer API', href: '#' },
        { text: 'Documentation', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#about' },
        { text: 'Careers', href: '#' },
        { text: 'Contact', href: '#contact' },
        { text: 'Partners', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: '#' },
        { text: 'Privacy Policy', href: '#' },
        { text: 'Cookie Settings', href: '#' },
      ],
    },
  ],
  newsletter: {
    title: "Stay ahead with Indexora",
    description: "Join our enterprise newsletter for the latest advancements in vector optimization, embedding frameworks, and RAG architectures.",
    placeholder: "Enter your email",
    ctaLabel: "Subscribe Now",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=240&q=80"
  },
};
