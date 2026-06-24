import { HeroBase } from "@/components/sections/hero/HeroBase";
import { heroSectionConfig } from "@/config/hero";
import { FeaturesBase } from "@/components/sections/features/FeaturesBase";
import { featuresSectionConfig } from "@/config/features";
import { StepsBase } from "@/components/sections/features/StepsBase";
import { stepsSectionConfig } from "@/config/features";
import { PricingBase } from "@/components/sections/pricing/PricingBase";
import { pricingSectionConfig } from "@/config/pricing";
import { TestimonialsBase } from "@/components/sections/testimonials/TestimonialsBase";
import { testimonialsSectionConfig } from "@/config/testimonials";
import { AboutBase } from "@/components/sections/aboutus/AboutUsBase";
import { aboutSectionConfig } from "@/config/aboutus";
import { FAQBase } from "@/components/sections/faq/FAQsBase";
import { faqSectionConfig } from "@/config/faq";
import { StatsRowBase } from "@/components/sections/cards/StatsRowBase";
import { statsRowSectionConfig } from "@/config/stats";
import { ContactBase } from "@/components/sections/contact/ContactBase";
import { contactSectionConfig } from "@/config/contact";
import { DashboardPreviewBase } from "@/components/sections/preview/DashboardPreviewBase";
import { dashboardPreviewConfig } from "@/config/dashboardPreview";
import { ArchitectureBase } from "@/components/sections/architecture/ArchitectureBase";
import { architectureSectionConfig } from "@/config/architecture";
import { AboutPlatformBase } from "@/components/sections/aboutus/AboutPlatformBase";
import { aboutPlatformConfig } from "@/config/aboutPlatform";

export default function HomePage() {
  return (
    <main>
       <HeroBase {...heroSectionConfig} />
       <AboutPlatformBase {...aboutPlatformConfig} />
       <StatsRowBase {...statsRowSectionConfig} />
       <DashboardPreviewBase {...dashboardPreviewConfig} />
       <ArchitectureBase {...architectureSectionConfig} />
       <FeaturesBase {...featuresSectionConfig} />
       <StepsBase {...stepsSectionConfig} />
       <PricingBase {...pricingSectionConfig} />
       <TestimonialsBase {...testimonialsSectionConfig} />
        <AboutBase {...aboutSectionConfig} />
        <FAQBase {...faqSectionConfig} />
        <ContactBase {...contactSectionConfig} />
    </main>
  );
}