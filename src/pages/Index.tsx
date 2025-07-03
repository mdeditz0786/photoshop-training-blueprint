
import CourseHero from "@/components/CourseHero";
import CourseInfo from "@/components/CourseInfo";
import ObjectiveSection from "@/components/ObjectiveSection";
import SyllabusSection from "@/components/SyllabusSection";
import PracticeSection from "@/components/PracticeSection";
import AssessmentSection from "@/components/AssessmentSection";
import AudienceSection from "@/components/AudienceSection";
import DeliverablesSection from "@/components/DeliverablesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CourseHero />
      <CourseInfo />
      <ObjectiveSection />
      <SyllabusSection />
      <PracticeSection />
      <AssessmentSection />
      <AudienceSection />
      <DeliverablesSection />
    </div>
  );
};

export default Index;
