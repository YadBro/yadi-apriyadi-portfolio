import HeaderSection from "@/components/component-home/HeaderSection";
import HeroSection from "@/components/component-home/HeroSection";
import AboutSection from "@/components/component-home/AboutSection";
import PortfolioSection from "@/components/component-home/PortfolioSection";
import SkillsSection from "@/components/component-home/SkillsSection";
import AchievementSection from "@/components/component-home/AchievementSection";
import ContactSection from "@/components/component-home/ContactSection";
import FooterSection from "@/components/component-home/FooterSection";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Header Section Start */}
      <HeaderSection />
      {/* Header Section End */}

      <main>
        {/* Hero Section Start */}
        <HeroSection />
        {/* Hero Section End */}

        {/* About Section Start */}
        <AboutSection />
        {/* About Section End */}

        {/* Portfolio Section Start */}
        <PortfolioSection />
        {/* Portfolio Section End */}

        {/* Skills Section Start */}
        <SkillsSection />
        {/* Skills Section End */}

        {/* Achievement Section Start */}
        <AchievementSection />
        {/* Achievement Section End */}

        {/* Contact Section Start */}
        <ContactSection />
        {/* Contact Section End */}
      </main>

      {/* Footer Section Start */}
      <FooterSection />
      {/* Footer Section End */}
    </div>
  );
}
