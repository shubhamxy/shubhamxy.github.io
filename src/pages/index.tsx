import AboutSection from "@/components/About";
import HorizontalLine from "@/components/HorizontalLine";
import MyStory from "@/components/MyStory";
import ProfileSection from "@/components/ProfileSection";
import Projects from "@/components/project/Projects";
import Work from "@/components/work/Work";

import Head from "next/head";

import t from "@/content/translations.json";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:image" content="/assets/cover-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={t.webUrl} />
        <link rel="icon" href={`/${t.favicon}`} />
      </Head>
      <ProfileSection />
      <HorizontalLine />
      <MyStory />
      <HorizontalLine />
      <Work />
      <HorizontalLine />
      <AboutSection />
      <HorizontalLine />
      <Projects />
    </div>
  );
}
