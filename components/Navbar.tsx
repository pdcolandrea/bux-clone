import { asset } from "https://deno.land/x/fresh@1.1.0/runtime.ts";
import { LocationPin } from "./Icons/HeroIcons.tsx";

export default function NavBar() {
  return (
    <div class="flex flex-row justify-between items-center shadow-md mb-8 py-6 px-20">
      <div class="flex flex-row items-center">
        <img
          src={asset("./bux_logo.png")}
          href="#"
          class="h-16 w-16 mr-6 cursor-pointer"
        />
        <ul class="pr-5 font-bold text-sbbrown hover:text-sbgreenalt cursor-pointer">
          MENU
        </ul>
        <ul class="pr-5 font-bold text-sbbrown hover:text-sbgreenalt cursor-pointer">
          REWARDS
        </ul>
        <ul class="pr-5 font-bold text-sbbrown hover:text-sbgreenalt cursor-pointer">
          GIFT CARDS
        </ul>
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
  );
}
