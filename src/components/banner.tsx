import Image from "next/image";
import FIRSTLogo from "@public/assets/img/FIRST.png";

interface BannerProps {
    blueBanner?: boolean;
    specialText?: string;
    text: string;
}

export default function Banner({ blueBanner, specialText, text }: BannerProps) {
    return (
        <span className={`m-0 p-0 box-border leading-[1.2] text-center text-sm align-top inline-block w-[120px] pb-1 relative ${blueBanner ? "bg-[#0f4bcb]" : "bg-orange-500"} text-gray-50 p-[10px] whitespace-normal after:absolute after:block after:border-[60px] after:border-solid ${blueBanner ? "after:border-[#0f4bcb]" : "after:border-orange-500"} after:border-t-[5px] after:border-b-[20px] after:border-b-transparent after:top-full after:left-0 drop-shadow-2xl`}>
            <Image src={FIRSTLogo} alt="FIRST™️ Logo" className="w-full mb-[5px] p-2 pb-0" />
            {specialText && <span className="flex flex-col font-bold text-base pb-2">{specialText}</span>}
            {text}
        </span>
    )
}