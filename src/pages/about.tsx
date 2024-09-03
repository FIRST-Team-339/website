import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import KilroyTransparent from "@public/assets/img/kilroy_transparent.png";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Kilroy Robotics</title>
        <meta name="title" content="About — Kilroy Robotics" />
        <meta name="description" content="FIRST™️ was founded in 1989 to inspire young people to be science and technology leaders, by engaging them in exciting mentor-based programs that build science, engineering and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership." />
        <meta property="og:image" content="/assets/img/about_page_banner.jpg" />
        <meta property="twitter:image" content="/assets/img/about_page_banner.jpg" />
      </Head>
      <div className="py-24 min-h-dvh text-gray-950 md:text-gray-50 md:bg-black md:bg-opacity-40 md:bg-blend-overlay md:bg-[url('/assets/img/about_page_banner_blurred.png')] bg-cover bg-left">
        <div className="flex flex-col mx-8">
          <span className="text-4xl sm:text-5xl font-bold mx-auto mb-4">Team History</span>
          <div className="flex flex-col md:flex-row lg:mx-16">
            <Image src={KilroyTransparent} alt="FIRST™️ Logo" className="aspect-square md:h-36 w-auto mx-auto md:mr-20"/>
            <div className="flex flex-col gap-y-8">
              <p className="text-lg justify-center">Kilroy was founded in 1999, and our Rookie Year was 2000. Kilroy is a FIRST™️ Robotics team dedicated to inspiring an interest in Science, Technology, Engineering, and Math among high school students in Stafford County, Virginia.</p>
            </div>
          </div>
          <span className="flex text-5xl font-bold justify-center mb-4 mt-12">How to Join</span>
          <div className="flex flex-col gap-y-8 lg:mx-16">
            <p className="text-lg justify-center">We are always happy to welcome new students to the team! All students interested in joining Kilroy Robotics should fill out the <Link href="/get-involved" className="hover:underline">interest form</Link> to arrange to attend a team meeting at North Stafford High School.</p>
            <p className="text-lg justify-center">Once you have attended your first meeting and confirmed that this is for you, you will be asked to submit a completed Student Application and a letter of recommendation from a STEM teacher or FIRST™️ coach (if you were previously on another FIRST™️ team) for consideration by the Leadership Team.</p>
          </div>
          <span className="flex text-5xl font-bold justify-center mb-4 mt-12">Team Structure</span>
          <div className="flex flex-col gap-y-8 lg:mx-16">
            <p className="text-lg justify-center">The Mechanical & Build Teams use the engineering design process to brainstorm, prototype, and 3D model ideas. Then they Design, build, and test the Robot.</p>
            <p className="text-lg justify-center">The Software Team programs robot movement & autonomous routes while use april tags, limelight vision cameras, and other sensors.</p>
            <p className="text-lg justify-center">The Electrical Team designs, wires, and tests electrical components/sensors. They also locate efficient placing for electrical devices.</p>
            <p className="text-lg justify-center">The Media, PR, & Business Teams work on award presentations, essay writing, fundraising, and STEM Outreach Events. The PR team designs & execute the business team’s plans. The media team does photography, videography, and handles social media.</p>
          </div>
          <span className="flex text-5xl font-bold justify-center mb-4 mt-12">A Year of Kilroy</span>
          <div className="flex flex-col gap-y-8 lg:mx-16">
            <p className="text-lg justify-center"><span className="font-bold">September - December (Fall)</span> Student recruitment, student leadership elections, outreach events, off- season competitions (typically last one day), tool & software training & certifications, fundraising take place during this time.</p>
            <p className="text-lg justify-center"><span className="font-bold">1st Saturday in January (Kickoff)</span> The FRC game is announced, and the build season officially begins.</p>
            <p className="text-lg justify-center"><span className="font-bold">January - February (Build Season)</span> The team comes up with ideas/concepts on a this season’s robot. After prototyping the top voted ideas, robot building process begins.</p>
            <p className="text-lg justify-center"><span className="font-bold">March - April (Competitions)</span> Competition season: the team usually tries to attend at least 2 events. These events typically run over the weekends.</p>
            <p className="text-lg justify-center"><span className="font-bold">May - August (Start of Offseason)</span> Student recruitment, outreach events, fundraising, reflections & planning take place during this time.</p>
          </div>
        </div>
      </div>
    </>
  )
}