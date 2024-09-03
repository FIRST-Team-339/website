import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import FIRSTLogo from "@public/assets/img/FIRST.png";

export default function FIRSTPage() {
  return (
    <>
      <Head>
        <title>FIRST — Kilroy Robotics</title>
        <meta name="title" content="FIRST — Kilroy Robotics" />
        <meta name="description" content="FIRST was founded in 1989 to inspire young people to be science and technology leaders, by engaging them in exciting mentor-based programs that build science, engineering and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership." />
        <meta property="og:image" content="/assets/img/FIRST_horiz.png" />
        <meta property="twitter:image" content="/assets/img/FIRST_horiz.png" />
      </Head>
      <div className="py-24 min-h-dvh">
        <div className="flex flex-col mx-8">
          <span className="text-4xl sm:text-5xl font-bold mx-auto text-orange-500 mb-4">What is <span className="italic mr-2">FIRST</span>?</span>
          <div className="flex flex-col md:flex-row lg:mx-16">
            <Image src={FIRSTLogo} alt="FIRST Logo" className="md:h-36 mx-auto md:mr-20"/>
            <div className="flex flex-col gap-y-8">
              <p className="text-lg justify-center text-gray-950">FIRST was founded in 1989 to inspire young people to be science and technology leaders, by engaging them in exciting mentor-based programs that build science, engineering and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.</p>
              <p className="text-lg justify-center text-gray-950"><span className="font-bold">Gracious Professionalism</span> and <span className="font-bold">Coopertition</span> are integral parts of the ethos of FIRST. <span className="font-bold">Gracious Professionalism</span> is a way of doing things that encourages high-quality work, emphasizes the value of others, and respects individuals and the community. <span className="font-bold">Coopertition</span> is displaying unqualified kindness and respect in the face of fierce competition, and is founded on the philosophy that teams can and should help and cooperate with each other even as they compete.</p>
              <p className="text-lg justify-center text-gray-950">With these tenets, fierce competition and mutual gain are not separate notions. Successful FIRST teams assist and enable others whenever they can.</p>
              <p className="text-lg justify-center text-gray-950">Kilroy robotics is a First Robotics Competition (FRC) team. Every year, a new challenge/game is released to teams all around the world in over 30 countries. These teams compete in these games in 3 team versus 3 team matches, with somewhere between 50-100 matches at most competitions. Every game consists of 15 seconds of autonomous (auto) control, where the robot operates on it's own, based on pre-programmed instructions. In autonomous, points are scored with more weight. After those 15 seconds, the teleoperated (teleop/human control) phase begins, lasting 2 minutes and 15 seconds. In this phase, 2 drivers are controlling their teams' robot, 1 coach makes calls and instructions, and 1 "human player" has very specific interactions with the game field, usually supplying game pieces to robots.</p>
              <p className="text-lg justify-center text-gray-950">Teams are ranked based on matches won, playoff matches played, and awards earned. The top 50 percent got to their district championship. We are in the FIRST Chesapeake District, but not every team is in a district. For those teams, they participate in 2 "regional" games for a chance to go to the World Championship. From there the top 600 teams around the world compete to see who the best alliance is for that year.</p>
            </div>
          </div>
          <span className="flex text-5xl font-bold justify-center text-orange-500 mb-4 mt-12">Alumni & Scholarship Opportunities</span>
          <div className="flex flex-col gap-y-8 lg:mx-16">
            <p className="text-lg justify-center text-gray-950">FIRST has a wide range of support, resources, and opportunities for alumni.</p>
            <p className="text-lg justify-center text-gray-950">FIRST Alumni have access to special scholarships. You can view those scholarship opportunities <Link href="https://www.firstinspires.org/alumni/scholarships" className="hover:underline text-orange-500">here</Link>.</p>
          </div>
        </div>
      </div>
    </>
  )
}