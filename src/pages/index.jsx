import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import { getSortedPostsData } from "@library/posts";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import Story from "@components/sections/Story";
import SkillsTwoSection from "@components/sections/SkillsTwo";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionSection from "@components/sections/CallToAction";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home1 = (props) => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-1.jpg"}
      rightPanelImg={"/img/person/portrait.jpg"}
    >
      <HeroOneSection />
      <AboutSection />
      <Story />
      <SkillsTwoSection />
      <ServicesSection />
      <CallToActionSection />
    </Layouts>
  );
};

export default Home1;

export async function getStaticProps({ locale }) {
  const allPosts = getSortedPostsData();

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'story',
        'hero',
        'about',
        'skills',
        'services',
        'cta'
      ])),
      posts: allPosts,
    },
  };
}