import { asset } from "https://deno.land/x/fresh@1.1.0/runtime.ts";
import { LocationPin, BarsIcon } from "../Icons/HeroIcons.tsx";
import { StarbucksLogo } from "../Icons/SbIcons.tsx";
import NavbarItem from "./NavbarItem.tsx";

export default function NavBar() {
  return (
    <>
      <div class="flex flex-row justify-between items-center shadow-md mb-8 py-6 px-20 md:flex sm:hidden">
        <div class="flex flex-row items-center">
          <StarbucksLogo />
          <NavbarItem title="MENU" />
          <NavbarItem title="REWARDS" />
          <NavbarItem title="GIFT CARDS" />
        </div>

        <div class="flex flex-row items-center">
          <span className="flex font-semibold group hover:text-sbgreenalt cursor-pointer ">
            <LocationPin />
            Find a store
          </span>

          <button class="border-1 border-black px-3 py-1 rounded-2xl ml-6 font-semibold hover:bg-greyish">
            Sign in
          </button>

          <button class="bg-black text-white px-3 py-1 rounded-2xl ml-4 font-semibold hover:bg-warmblack">
            Join Now
          </button>
        </div>
      </div>

      <div class="flex flex-row justify-between items-center shadow-md mb-8 py-6 px-10 md:hidden sm:flex">
        <StarbucksLogo />
        <BarsIcon />
      </div>
    </>
  );
}
