import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-7 md:h-8 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="loading error"
        />
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-2 md:pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden md:inline text-white cursor-pointer md:mx-2 h-8 bg-red-400 rounded-full p-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 mr-2 md:mr-0">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-[6px] md:p-2  rounded-full">
          <Bars3Icon className="h-4 md:h-5" />
          <UserCircleIcon className="h-4 md:h-5" />
        </div>
      </div>
    </header>
  );
}

export default Header;
