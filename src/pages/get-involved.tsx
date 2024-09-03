import { HandRaisedIcon, InboxStackIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <>
      <Head>
        <title>Get Involved — Kilroy Robotics</title>
        <meta name="title" content="Get Involved — Kilroy Robotics" />
        <meta name="description" content="Learn how to get involved with the team, whether that be as a student member, mentor, or a team sponsor." />
        <meta property="og:image" content="/assets/img/get_involved_banner.jpg" />
        <meta property="twitter:image" content="/assets/img/get_involved_banner.jpg" />
      </Head>
        <div className="mt-16 min-h-dvh">
            <div className="py-8 bg-[url('/assets/img/get_involved_banner_blurred.png')] bg-cover bg-top">
                <span className="flex text-5xl font-bold justify-center text-gray-50 mb-4">Get Involved</span>
                <div className="relative top-0 isolate overflow-hidden rounded-md ring-1 ring-white mx-2 sm:mx-6 md:mx-12 lg:mx-20 bg-gray-950/50 lg:bg-top bg-center py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="max-w-xl lg:max-w-lg">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Student Interest Form</h2>
                                <p className="flex flex-col gap-2 mt-4 text-lg leading-8 text-gray-300">
                                    <span>Are you an SCPS student interested in the field of Robotics? Fill out an interest form today!</span>
                                    <span>Interseted in joining the team as a mentor? Fill out the mentor application <Link href="#mentor-application" className="text-gray-50 font-medium hover:underline">here</Link>.</span>
                                </p>
                            </div>
                            <form>
                                <div className="flex flex-col gap-4">
                                    <span className="font-semibold text-white">Student Interest Form coming soon, sorry for the inconvenience! In the meantime, you can email <Link className="hover:underline" href="mailto:contact@kilroyrobotics.us">contact@kilroyrobotics.us</Link> or <Link className="hover:underline" href="mailto:media@kilroyrobotics.us">media@kilroyrobotics.us</Link> if you are interested.</span>
                                    {/* TODO: Complete Google Workspace  */}
                                    {/* <label htmlFor="name" className="sr-only">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Enter your first & last name"
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
                                        // @ts-ignore it works
                                        onChange={(e) => { e.target.value.includes("@scps.net") ? e.target.setCustomValidity("Please use a non-SCPS email.") : e.target.setCustomValidity("") }}
                                        autoComplete="email"
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                    />
                                    <label htmlFor="grade" className="sr-only">
                                        Grade
                                    </label>
                                    <select
                                        id="grade"
                                        name="grade"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                    >
                                        <option>9th Grade</option>
                                        <option>10th Grade</option>
                                        <option>11th Grade</option>
                                        <option>12th Grade</option>
                                    </select>
                                    <label htmlFor="school" className="sr-only">
                                        School
                                    </label>
                                    <select
                                        id="school"
                                        name="school"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                    >
                                        <option>North Stafford High School</option>
                                        <option>Mountain View High School</option>
                                        <option>Brooke Point High School</option>
                                        <option>Colonial Forge Stafford High School</option>
                                        <option>Stafford High School</option>
                                    </select>
                                    <label htmlFor="subteam-interest" className="sr-only">
                                        Subteam Interest
                                    </label>
                                    <textarea
                                        id="subteam-interest"
                                        name="subteam-interest"
                                        maxLength={100}
                                        required
                                        placeholder="What kind of subteams/roles are you interested in? (100 char max)"
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                    />
                                    <label htmlFor="findout" className="sr-only">
                                        How did you find out about us?
                                    </label>
                                    <textarea
                                        id="findout"
                                        name="findout"
                                        required
                                        maxLength={100}
                                        placeholder="How did you find out about us? (100 char max)"
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                                    >
                                        Submit
                                    </button> */}
                                </div>
                            </form>
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:pt-2">
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <InboxStackIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    <dt className="mt-4 font-semibold text-gray-50">Non-SCPS Emails</dt>
                                    <dd className="mt-2 leading-7 text-gray-200">
                                        Due to certain restrictions, we ask that you use a non-SCPS email.
                                    </dd>
                                </div>
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
            <div className="py-8 bg-gray-900">
                <span className="flex text-5xl font-bold justify-center text-gray-50 mb-4">Sponsors</span>
                <div className="flex flex-col gap-y-8 mx-8 lg:mx-16">
                    <p className="text-lg justify-center text-center font-bold text-gray-100">Our success quite simply depends on you!</p>
                    <p className="text-lg justify-center text-gray-50">Kilroy Robotics is continuously seeking to expand our partnerships with-in the local community. Please consider making one or more of the following contributions: </p>
                    <ul className="text-lg justify-center text-gray-50 list-disc ml-8">
                        <li>Tax deductible Monetary Contribution</li>
                        <li>Donations of materials, tools, and/or services</li>
                        <li>Mentor support</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}