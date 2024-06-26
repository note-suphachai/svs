import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import Footer from "@/layout/footers/footer";


const Project = () => {
  return (
    <>
      <HeaderSix  />
      <main>
        <BreadcrumbSeven />
        <Portfolio />
        {/* <CtaArea /> */}
      </main>
      <Footer/>
      {/* <FooterFive style_contact={true}  style_team={true} /> */}
    </>
  );
};

export default Project;
