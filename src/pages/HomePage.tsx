import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesArrowCards from '@/components/sections/features/FeaturesArrowCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="FIDARIS DEVELOPMENT FINANCE"
      title="TRUST, UNDERWRITTEN."
      description="The live development-finance platform where developers, lenders, and every critical number meet. Build the deal once. Reconcile every source. Move from feasibility to credit decision with full visibility."
      primaryButton={{
        text: "Request a Demo",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore the Platform",
        href: "#platform",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/patriot-day-commemoration-high-angle_52683-94469.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/future-visions-business-technology-concept_23-2151893436.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="storytelling" data-section="storytelling">
    <SectionErrorBoundary name="storytelling">
          <FeaturesArrowCards
      tag="THE DEAL LIFECYCLE"
      title="Controlled, Accountable, Live."
      description="Progressively reconciled data moving from initial feasibility to final credit approval in a single controlled environment."
      items={[
        {
          title: "Build: One model starts the deal.",
          tags: [
            "Feasibility",
            "Modeling",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphics-arrangement_23-2148991185.jpg",
        },
        {
          title: "Reconcile: Figures brought to agreement.",
          tags: [
            "QS",
            "Valuation",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-time-machine_23-2151599406.jpg",
        },
        {
          title: "Test: Live covenant verification.",
          tags: [
            "Covenants",
            "Funding",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-time-machine_23-2151599423.jpg",
        },
        {
          title: "Assess: Specialist AI, human decision.",
          tags: [
            "AI Agents",
            "Approval",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/glowing-digital-sphere-futuristic-environment_23-2152020906.jpg",
        },
        {
          title: "Approve: Credit decision achieved.",
          tags: [
            "Credit",
            "Audit",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-background-with-landscape-blocks_1048-12498.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="platform" data-section="platform">
    <SectionErrorBoundary name="platform">
          <FeaturesImageBento
      tag="THE FIDARIS PLATFORM"
      title="ONE DEAL. ONE SOURCE OF TRUTH."
      description="High-fidelity interface design providing visibility across every critical deal component."
      items={[
        {
          title: "Deal Overview",
          description: "Unified project metrics.",
          imageSrc: "http://img.b2bpic.net/free-photo/determined-ceo-works-office-analyzing-infographics-setting-business-goals_482257-116818.jpg",
        },
        {
          title: "Covenant Status",
          description: "Continuous tracking.",
          imageSrc: "http://img.b2bpic.net/free-photo/notebook-economy-chart_23-2148542001.jpg",
        },
        {
          title: "Reconciliation",
          description: "Model vs Source data.",
          imageSrc: "http://img.b2bpic.net/free-photo/advisory-board-members-team-leaders-gathering-review-project-outcomes_482257-115651.jpg",
        },
        {
          title: "Assessment Flow",
          description: "AI-drafted reports.",
          imageSrc: "http://img.b2bpic.net/free-photo/advisory-board-members-meeting-boardroom-establish-future-development-plan_482257-113859.jpg",
        },
        {
          title: "Evidence Store",
          description: "Traceable documents.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-african-american-entrepreneur-analyzing-company-profit_482257-20207.jpg",
        },
        {
          title: "Drawdown Progress",
          description: "Funding status.",
          imageSrc: "http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-57447.jpg",
        },
        {
          title: "Approval Gates",
          description: "Human controls.",
          imageSrc: "http://img.b2bpic.net/free-photo/forecast-expert-ceo-analyzing-investment-insights-negotiations-details_482257-116884.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="reconciliation" data-section="reconciliation">
    <SectionErrorBoundary name="reconciliation">
          <MetricsSimpleCards
      tag="RECONCILIATION"
      title="Numbers That Agree"
      description="Identifying deviations between developer models, QS reports, and property valuations instantly."
      metrics={[
        {
          value: "100%",
          description: "Traceability score",
        },
        {
          value: "Live",
          description: "QS comparison",
        },
        {
          value: "Verified",
          description: "Valuation check",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="covenants" data-section="covenants">
    <SectionErrorBoundary name="covenants">
          <FeaturesArrowCards
      tag="COVENANT TESTING"
      title="Adaptive Covenants"
      description="Covenants that evolve with the deal, not static spreadsheet checks."
      items={[
        {
          title: "Threshold Monitoring",
          tags: [
            "Real-time",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/male-administrator-using-chroma-key-display-digital-analysis_482257-126246.jpg",
        },
        {
          title: "Forecast Positioning",
          tags: [
            "Predictive",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-latest-financial-results-desk_1098-1983.jpg",
        },
        {
          title: "Source Validation",
          tags: [
            "Audit",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/teleworker-home-office-gathering-information-from-internet-seminar_482257-119301.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="intelligence" data-section="intelligence">
    <SectionErrorBoundary name="intelligence">
          <AboutTestimonial
      tag="INTELLIGENCE"
      quote="Specialist AI agents draft assessments across six disciplines. Every decision, however, remains visible, reviewable, and human-approved. Intelligence without losing control."
      author="Fidaris Engineering Team"
      role="Platform Governance"
      imageSrc="http://img.b2bpic.net/free-photo/woman-working-late-project_23-2149006067.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="security" data-section="security">
    <SectionErrorBoundary name="security">
          <MetricsSimpleCards
      tag="SECURITY & TRUST"
      title="Designed for Decisions"
      description="Institutional-grade accountability for credit committees and property developers."
      metrics={[
        {
          value: "Controlled",
          description: "Access levels",
        },
        {
          value: "Visible",
          description: "Audit trails",
        },
        {
          value: "Accountable",
          description: "Human gates",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="GET STARTED"
      text="Move the deal forward with every number in view. Speak with our team to see Fidaris in action."
      primaryButton={{
        text: "Request a Demo",
        href: "#",
      }}
      secondaryButton={{
        text: "Explore Platform",
        href: "#platform",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
