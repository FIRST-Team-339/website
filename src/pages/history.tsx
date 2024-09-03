import Banner from "@/components/banner";
import Head from "next/head";

export default function HistoryPage() {
  return (
    <>
      <Head>
        <title>History — Kilroy Robotics</title>
        <meta name="title" content="History — Kilroy Robotics" />
        <meta name="description" content="Kilroy is a FIRST™️ Robotics team dedicated to inspiring an interest in Science, Technology, Engineering, and Math among high school students in Stafford County, Virginia." />
        <meta property="og:image" content="/assets/img/history_page_bg.jpg" />
        <meta property="twitter:image" content="/assets/img/history_page_bg.jpg" />
      </Head>
      <div className="mt-16">
        {/* <div>
          <span className="flex text-5xl font-bold justify-center text-orange-500 py-4">Kilroy History</span>
          <p className="flex text-lg justify-center text-gray-950">a</p>
        </div> */}
        <div className="flex flex-col py-12 mt-4 gap-20 w-full bg-[url('/assets/img/history_page_bg_blurred.png')] bg-cover bg-right">
          <span className="text-5xl font-bold text-center text-gray-50">Major Awards</span>
            <div className="grid mx-auto grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-10">
            <div><Banner blueBanner specialText="Winner" text="2022 Rumble in the Roads"/></div>
            <div><Banner blueBanner specialText="Entrepreneur -ship Award" text="2016 World Championship - Curie Division"/></div>
            <div><Banner blueBanner specialText="Delphi &quot;Driving Tomorrow's Technology&quot;" text="2009 World Championship"/></div>
            <div><Banner blueBanner specialText="Winner" text="2002 J&J Mid Atlantic Regional"/></div>
          </div>
          <span className="text-5xl font-bold text-center text-gray-50">Other Awards</span>
          <div className="grid mx-auto grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-11 gap-x-5 gap-y-10">
            <div><Banner specialText="Finalist" text="2024 CHS District Ashland VA Event"/></div>
            <div><Banner specialText="Creativity Award" text="2020 CHS District Haymarket VA Event"/></div>
            <div><Banner specialText="District Engineering Inspiration Award" text="2019 CHS District Oxon Hill MD Event"/></div>
            <div><Banner specialText="Quality Award" text="2019 CHS District Haymarket VA Event"/></div>
            <div><Banner specialText="FIRST™️ Dean's List Finalist Award" text="2018 FIRST™️ Chesapeake District Championship"/></div>
            <div><Banner specialText="Entrepreneur -ship Award" text="2018 FIRST™️ Chesapeake District Championship"/></div>
            <div><Banner specialText="Team Spirit Award" text="2018 CHS District Central Maryland Event"/></div>
            <div><Banner specialText="District Engineering Inspiration Award" text="2018 CHS District Central Virginia Event"/></div>
            <div><Banner specialText="Innovation in Control Award" text="2017 CHS District Northern Maryland Event"/></div>
            <div><Banner specialText="District Engineering Inspiration Award" text="2017 CHS District Southwest Virginia Event"/></div>
            <div><Banner specialText="Industrial Design Award" text="2016 FIRST™️ Chesapeake District Championship"/></div>
            <div><Banner specialText="Creativity Award" text="2016 CHS District Central Virginia Event"/></div>
            <div><Banner specialText="Entrepreneur -ship Award" text="2016 CHS District Southwest Virginia Event"/></div>
            <div><Banner specialText="Industrial Safety Award" text="2015 Virginia Regional"/></div>
            <div><Banner specialText="Industrial Design Award" text="2014 Greater DC Regional"/></div>
            <div><Banner specialText="Innovation in Control Award" text="2014 North Carolina Regional"/></div>
            <div><Banner specialText="Industrial Safety Award" text="2013 Washington DC Regional"/></div>
            <div><Banner specialText="Engineering Excellence Award" text="2012 North Carolina Regional"/></div>
            <div><Banner specialText="Coopertition Award" text="2010 Washington DC Regional"/></div>
            <div><Banner specialText="Judges Award" text="2010 Washington DC Regional"/></div>
            <div><Banner specialText="Autodesk Visualization Award" text="2009 Chesapeake Regional"/></div>
            <div><Banner specialText="Delphi &quot;Driving Tomorrow's Technology&quot;" text="2009 Washington DC Regional"/></div>
            <div><Banner specialText="Autodesk Visualization Award" text="2008 Chesapeake Regional"/></div>
            <div><Banner specialText="Regional Finalist" text="2007 Chesapeake Regional"/></div>
            <div><Banner specialText="Regional Finalist" text="2005 NASA / VCU Regional"/></div>
            <div><Banner specialText="Motorola Quality Award" text="2004 NASA / VCU Regional"/></div>
            <div><Banner specialText="GM Industrial Design Award" text="2003 Chesapeake Regional"/></div>
            <div><Banner specialText="Creativity Award" text="2001 NASA Langley Regional"/></div>
          </div>
        </div>
      </div>
    </>
  )
}