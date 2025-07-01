
import CourseHero from "@/components/CourseHero";
import ObjectiveSection from "@/components/ObjectiveSection";
import SyllabusSection from "@/components/SyllabusSection";
import PracticeSection from "@/components/PracticeSection";
import AssessmentSection from "@/components/AssessmentSection";
import AudienceSection from "@/components/AudienceSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CourseHero />
      <ObjectiveSection />
      <SyllabusSection />
      <PracticeSection />
      <AssessmentSection />
      <AudienceSection />
      <DeliverablesSection />
      <PricingSection />
    </div>
  );
};

export default Index;
