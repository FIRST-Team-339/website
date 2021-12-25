import Image from "next/image"
import Link from "next/link";

export default function Example() {
  return (
    <footer className="bg-gray-800 absolute flex items-center justify-between vh-footer w-screen">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          <Image
            className="hidden lg:hidden hover:cursor-pointer"
            src="/logoWide.png"
            width={256}
            height={96}
            alt="Kilroy Wide Logo"
          />
        </div>
      </div>
    </footer>
  );
}
