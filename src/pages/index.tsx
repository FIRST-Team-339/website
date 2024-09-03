import Image from 'next/image'
import HomepageBanner from "@public/assets/img/homepage_banner.jpg";
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home — Kilroy Robotics</title>
        <meta name="title" content="Home — Kilroy Robotics" />
        <meta name="description" content="Kilroy is a FIRST™️ Robotics team dedicated to inspiring an interest in Science, Technology, Engineering, and Math among high school students in Stafford County, Virginia." />
        <meta property="og:image" content="/assets/img/homepage_banner.jpg" />
        <meta property="twitter:image" content="/assets/img/homepage_banner.jpg" />
      </Head>
      <div>
        <div className="relative isolate px-6 pt-14 lg:px-8 md:pb-36 lg:pb-48">
          <div className="mx-auto max-w-2xl sm:max-w-4xl md:max-w-5xl py-32 sm:pt-48 lg:pt-56">
            <div className="text-center">
              <h1 className="text-4xl font-black tracking-tight text-orange-500 sm:text-6xl md:text-7xl">
                "Who's here? Kilroy is here!"
              </h1>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute h-screen w-full top-0 inset-x-0 -z-10 overflow-hidden"
          >
            <Image src={HomepageBanner} alt="Team Photo for being Event Finalists; taken at the 2024 Ashland Competition" className="absolute h-full w-full object-cover"/>
            <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-45" />
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-orange-500 py-20 sm:py-30">
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#65ff46] to-[#1569d8] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#65ff46] to-[#1569d8] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Kilroy</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Kilroy is a FIRST™️ Robotics team dedicated to inspiring an interest in Science, Technology, Engineering, and Math among high school students in Stafford County, Virginia. In partnership with Stafford County Public Schools, Kilroy has been working towards this goal since 1999.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <Link href="/about">
                    Learn More <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link href="/first">
                    What is <span className="italic">FIRST™️</span>? <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link href="/history">
                    Team History <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link href="/get-involved">
                    Get Involved <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Event Wins</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">2</dd>
                  </div>
                  <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">World Champ Appearances</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">5</dd>
                  </div>
                  <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Awards</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">30+</dd>
                  </div>
                  <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Members & Mentors</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">25+</dd>
                  </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="relative top-0 isolate overflow-hidden bg-[url('/assets/img/match_alliance_planning_blurred.png')] bg-cover lg:bg-top bg-center py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Sign up for our mailing list</h2>
                <p className="flex flex-col gap-2 mt-4 text-lg leading-8 text-gray-300">
                  <span>Interested in hearing more about Kilroy Robotics? Subscribe to our mailing list to receive updates on our team and upcoming events.</span>
                  <span>Interseted in joining the team as a student or mentor? Fill out a form <Link href="/get-involved" className="text-gray-50 font-medium hover:underline">here</Link>.</span>
                </p>
              </div>
              <div>
                <form className="flex flex-col gap-4">
                  <span className="font-semibold text-white">Mailing list sign-up coming soon, sorry for the inconvenience! In the meantime, you can email <Link className="hover:underline" href="mailto:contact@kilroyrobotics.us">contact@kilroyrobotics.us</Link> or <Link className="hover:underline" href="mailto:media@kilroyrobotics.us">media@kilroyrobotics.us</Link> if you are interested.</span>
                  {/* TODO: Complete Google Workspace  */}
                  {/* <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    autoComplete="name"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  />
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    Sign Up
                  </button> */}
                </form>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-50">No spam</dt>
                  <dd className="mt-2 leading-7 text-gray-200">
                    We respect your privacy.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}