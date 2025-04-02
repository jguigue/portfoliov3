import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import SEO from '@components/SEO';
import CallToActionSection from "@components/sections/CallToAction";
import { getSortedProjectsData } from '../lib/projects';
import { useTranslation } from 'next-i18next';

import Link from "next/link";

const Projects2 = (props) => {
    const { t } = useTranslation('projects');
  return ( 
    <Layouts
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/portrait.jpg"}
    >
     <SEO page="portfolio" />
      <PageBanner
        pageTitle={t('pageTitle')}
        breadTitle={t('breadTitle')}
        align={"center"}
      />

      <ProjectsGrid projects={props.projects} columns={2} />

      <CallToActionSection />
    </Layouts>
  );
};

export default Projects2;

export async function getStaticProps({ locale }) {
  const allProjects = getSortedProjectsData(locale);

  return {
    props: {
      projects: allProjects,
      ...(await serverSideTranslations(locale, ['common', 'projects', 'cta'])),
    },
  };
}