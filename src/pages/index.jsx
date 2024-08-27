import OurCoaches from "@/app/section/NewCoaches";
import Projects from "@/app/section/Projects";
import WelcomeSection from "@/app/section/Welcome";
import React from "react";

export default function Home() {
  return (
    <>
      <WelcomeSection></WelcomeSection>
      <OurCoaches></OurCoaches>
      <Projects></Projects>
    </>
  );
}
