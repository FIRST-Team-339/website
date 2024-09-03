import KilroyTransparent from '@public/assets/img/kilroy_transparent.png'
import PixelatedHeart from "@public/assets/img/pixelated_heart.svg";
import Image from 'next/image'
import Link from 'next/link';
import Facebook from './logos/facebook';
import Instagram from './logos/instagram';
import Twitter from './logos/twitter';
import Github from './logos/github';
import Youtube from './logos/youtube';

const sponors = [
    {
        name: "Amazon AWS",
        href: "https://aws.amazon.com/",
        logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-mobile-en-white_48x29@2x.png",
        height: 16
    },
    {
        name: "Stafford EDA",
        href: "https://staffordeda.com/",
        logo: "https://staffordeda.com/wp-content/uploads/2021/08/EDA_new-LOGO_White-Color_550x200-01.png",
        height: 16
    },
    {
        name: "Safford Kia of Fredericksburg",
        href: "https://www.saffordkia.com/",
        logo: "https://dealerinspire-shared-assets.s3.amazonaws.com/public/logos/kia/kia-light-no-space-desktop-logo.png",
        height: 16
    },
    {
        name: "Fredericksburg PC Users Group",
        href: "https://fpcug.us/",
        logo: null,
        height: 16
    },
    {
        name: "Lockheed Martin",
        href: "https://www.lockheedmartin.com/en-us/index.html",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Lockheed_Martin_logo.svg/1280px-Lockheed_Martin_logo.svg.png",
        height: 10
    },
    {
        name: "Night Vision Machine Shop",
        href: "#",
        logo: null,
        height: 16
    },
    {
        name: "Stafford County Public Schools",
        href: "https://www.staffordschools.net/",
        logo: "https://resources.finalsite.net/images/f_auto,q_auto/v1696436122/staffordschoolsnet/dm0yb3jqwc1itmzff32b/SCPSLongLogo-x280.png",
        height: 14
    },
    {
        name: "North Stafford High School",
        href: "https://nshs.staffordschools.net/",
        logo: "https://va01818723.schoolwires.net/cms/lib/VA01818723/Centricity/Template/GlobalAssets/images///logos/NSHS%20Logo.png",
        height: 16
    },
]

export default function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="bg-orange-500">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl p-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-24">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="col-span-2 lg:col-span-1">
                        <Image alt="Kilroy Robotics" src={KilroyTransparent} className="h-24 w-auto mx-auto lg:mx-0" />
                        <p className="leading-6 text-gray-100 text-center lg:text-left">Bringing the <span className="text-yellow-300 font-medium">"Sport for the Mind"</span> to Stafford County.</p>
                        <div className="flex gap-x-4 mt-4 justify-center lg:justify-start">
                            <Link href="https://www.facebook.com/KilroyRobotics/" className="text-gray-200 hover:text-gray-300">
                                <span className="sr-only">Facebook</span>
                                <Facebook />
                            </Link>
                            <Link href="https://www.instagram.com/kilroyrobotics/" className="text-gray-200 hover:text-gray-300">
                                <span className="sr-only">Instagram</span>
                                <Instagram />
                            </Link>
                            <Link href="https://x.com/kilroyrobotics" className="text-gray-200 hover:text-gray-300">
                                <span className="sr-only">X</span>
                                <Twitter />
                            </Link>
                            <Link href="https://github.com/FIRST-Team-339" className="text-gray-200 hover:text-gray-300">
                                <span className="sr-only">GitHub</span>
                                <Github />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCCDglvLlLa5RXEN8vJfNwRA" className="text-gray-200 hover:text-gray-300">
                                <span className="sr-only">YouTube</span>
                                <Youtube />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-2 mx-auto mt-4 lg:mt-0">
                        <h3 className="flex w-full text-white text-2xl justify-center font-semibold">We <Image src={PixelatedHeart} alt="Pixelated Heart Icon" className="h-8 w-8 mx-1"/> our sponsors!</h3>
                        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8">
                            {sponors.map((sponsor) => (
                                <Link key={sponsor.name} href={sponsor.href} className="flex justify-center">
                                    {sponsor.logo ? <img alt={sponsor.name} src={sponsor.logo} className={`h-${sponsor.height} w-auto`} /> : <p className="text-white text-xl text-center">{sponsor.name}</p>}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/30 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-200 text-center lg:text-left">Kilroy Robotics • <Link href="https://firstinspires.org" className="hover:underline"><span className="italic mr-0.5">FIRST</span> Inspires</Link></p>
                </div>
            </div>
        </footer>
    )
}