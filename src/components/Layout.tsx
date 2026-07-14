import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Linkedin, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Platform",
    "href": "#platform"
  },
  {
    "name": "Lenders",
    "href": "#lenders"
  },
  {
    "name": "Developers",
    "href": "#developers"
  },
  {
    "name": "Intelligence",
    "href": "#intelligence"
  },
  {
    "name": "Security",
    "href": "#security"
  },
  {
    "name": "Company",
    "href": "#company"
  },
  {
    "name": "Hero",
    "href": "#hero"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Fidaris"
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3GU1gv0194AL2KrpwHYY6DRZ6x6/uploaded-1784015144708-2nd8rk06.png"
      ctaButton={{
        text: "Request a Demo",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Fidaris"
      copyright="© 2024 Fidaris Finance Technology. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
          href: "#",
        },
        {
          icon: Linkedin,
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
