import { asset } from "https://deno.land/x/fresh@1.1.0/runtime.ts";
import { LocationPin } from "../components/Icons/HeroIcons.tsx";
import SeoHeader from "../components/Seo.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <SeoHeader
        title="Starbux Coffee Company"
        description="More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more."
        slug={window.location?.pathname}
      >
        <link
          href="//db.onlinewebfonts.com/c/d7e8a95865396cddca89b00080d2cba6?family=SoDo+Sans+SemiBold"
          rel="stylesheet"
          type="text/css"
        />
      </SeoHeader>

      <div class="w-full h-full">
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

        <div class="w-full 2xl:w-11/12 mx-auto">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-y-4 ">
            <img src={asset("./bux.jpg")} class="h-full" />
            <div class="bg-sbgreen px-24 py-12 flex items-center w-full justify-center">
              <div class="flex flex-col ">
                <h1 class="font-bold text-darkgreen text-3xl text-center mb-6 font-sodo">
                  Fall at your fingertips
                </h1>
                <p class="text-center font-semibold text-darkgreen text-lg">
                  Ordering your fall favorites is a snap with the app. Join
                  Starbucks® Rewards and tap into fall.
                </p>

                <button
                  href="#"
                  class="border-solid border-darkgreen border-1 px-3 py-1 rounded-2xl mt-6 mx-auto text-lg"
                >
                  <span class="font-semibold">Join Now</span>
                </button>
              </div>
            </div>

            <Counter start={3} />
            <Counter start={3} />
          </div>
        </div>
      </div>
    </>
  );
}
