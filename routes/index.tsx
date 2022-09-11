import { asset } from "https://deno.land/x/fresh@1.1.0/runtime.ts";
import Navbar from "../components/Navbar.tsx";
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
        <Navbar />

        <div class="w-full 2xl:w-11/12 mx-auto">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-y-6 ">
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

            <div class="bg-deepgreen px-24 py-12 flex items-center w-full justify-center h-full">
              <div class="flex flex-col ">
                <h1 class="font-bold text-white text-3xl text-center mb-6 font-sodo">
                  Layers of baked apple yum
                </h1>
                <p class="text-center font-semibold text-white text-lg">
                  Try the Apple Crisp Oatmilk Macchiato, now nondairy and with
                  Starbucks® Blonde Espresso.
                </p>

                <button
                  href="#"
                  class="border-solid border-white border-1 px-3 py-1 rounded-2xl mt-6 mx-auto text-lg"
                >
                  <span class="font-semibold text-white">Learn more</span>
                </button>
              </div>
            </div>
            <img src={asset("./bux2.jpg")} class="h-full" />

            <img src={asset("./bux3.jpg")} class="h-full" />
            <div class="bg-deepgreen px-24 py-12 flex items-center w-full justify-center h-full">
              <div class="flex flex-col ">
                <h1 class="font-bold text-white text-3xl text-center mb-6 font-sodo">
                  Welcome home, pumpkin
                </h1>
                <p class="text-center font-semibold text-white text-lg">
                  Fall favorites return with the blissful Pumpkin Spice Latte
                  and smooth Pumpkin Cream Cold Brew.
                </p>

                <button
                  href="#"
                  class="border-solid border-white border-1 px-3 py-1 rounded-2xl mt-6 mx-auto text-lg"
                >
                  <span class="font-semibold text-white">Learn more</span>
                </button>
              </div>
            </div>

            <div class="bg-deepgreen px-24 py-12 flex items-center w-full justify-center h-full">
              <div class="flex flex-col ">
                <h1 class="font-bold text-white text-3xl text-center mb-6 font-sodo">
                  Picks of the patch
                </h1>
                <p class="text-center font-semibold text-white text-lg">
                  Choose a comforting classic: Pumpkin Cream Cheese Muffin,
                  Pumpkin & Pepita Loaf or Pumpkin Scone.
                </p>

                <button
                  href="#"
                  class="border-solid border-white border-1 px-3 py-1 rounded-2xl mt-6 mx-auto text-lg"
                >
                  <span class="font-semibold text-white">Learn more</span>
                </button>
              </div>
            </div>
            <img src={asset("./bux4.jpg")} class="h-full" />

            <img src={asset("./bux5.jpg")} class="h-full" />
            <div class="bg-deepgreen px-24 py-12 flex items-center w-full justify-center h-full">
              <div class="flex flex-col ">
                <h1 class="font-bold text-white text-3xl text-center mb-6 font-sodo">
                  It’s back—and oh, so lovely
                </h1>
                <p class="text-center font-semibold text-white text-lg">
                  Fill your cup with Guatemala Casi Cielo®, a medium roast
                  coffee with notes of Meyer lemon and cocoa nibs.
                </p>

                <button
                  href="#"
                  class="border-solid border-white border-1 px-3 py-1 rounded-2xl mt-6 mx-auto text-lg"
                >
                  <span class="font-semibold text-white">Learn more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
