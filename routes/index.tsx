import { asset } from "https://deno.land/x/fresh@1.1.0/runtime.ts";
import FooterItem from "../components/Footer/FooterItem.tsx";
import {
  SBFacebook,
  SBInstagram,
  SBPintrest,
  SBSpotify,
  SBTwitter,
  SBYoutube,
} from "../components/Icons/SbIcons.tsx";
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
        <link rel="stylesheet" href="/app.css" />
      </SeoHeader>

      <div class="w-full h-full">
        <Navbar />

        <div class="w-full 2xl:w-11/12 mx-auto">
          <div class="grid md:grid-cols-2 sm:grid-cols-1 md:gap-y-6 sm:gap-y-0 ">
            <img src={asset("./bux.jpg")} class="h-full" />
            <div class="bg-sbgreen px-24 py-12 flex items-center w-full justify-center">
              <div class="flex flex-col ">
                <h1 class="font-bold text-darkgreen text-3xl text-center mb-6 font-body">
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

            <div class="md:hidden h-6" />

            <div class="bg-deepgreen px-24 py-12 flex items-center w-full justify-center h-full">
              <div class="flex flex-col ">
                <h1 class="font-bold text-white text-3xl text-center mb-6 font-body">
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

            <div class="md:hidden h-6" />

            <img src={asset("./bux3.jpg")} class="h-full" />
            <div class="bg-deepgreen px-24 py-12 flex items-center w-full justify-center h-full">
              <div class="flex flex-col ">
                <h1 class="font-bold text-white text-3xl text-center mb-6 font-body">
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

            <div class="md:hidden h-6" />

            <div class="bg-deepgreen px-24 py-12 flex items-center w-full justify-center h-full">
              <div class="flex flex-col ">
                <h1 class="font-bold text-white text-3xl text-center mb-6 font-body">
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

            <div class="md:hidden h-6" />

            <img src={asset("./bux5.jpg")} class="h-full" />
            <div class="bg-deepgreen px-24 py-12 flex items-center w-full justify-center h-full">
              <div class="flex flex-col ">
                <h1 class="font-bold text-white text-3xl text-center mb-6 font-body">
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

          <footer>
            <div class="shadow-inner mt-8 flex p-6 flex-col">
              <div class="flex">
                <div class="flex flex-row">
                  <div>
                    <h1 class="font-semibold text-xl mb-6 text-warmpurp">
                      About Us
                    </h1>
                    <FooterItem name="Our Company" />
                    <FooterItem name="Our Coffee" />
                    <FooterItem name="Stories and News" />
                    <FooterItem name="Starbucks Archive" />
                    <FooterItem name="Investor Relations" />
                    <FooterItem name="Customer Service" />
                  </div>
                </div>

                <div class="ml-20">
                  <h1 class="font-semibold text-xl mb-6 text-warmpurp">
                    Careers
                  </h1>
                  <FooterItem name="Culture and Values" />
                  <FooterItem name="Inclusion, Diversity, and Equity" />
                  <FooterItem name="College Achievement Plan" />
                  <FooterItem name="Alumni Community" />
                  <FooterItem name="U.S. Careers" />
                  <FooterItem name="International Careers" />
                </div>

                <div class="ml-20">
                  <h1 class="font-semibold text-xl mb-6 text-warmpurp">
                    Social Impact
                  </h1>
                  <FooterItem name="People" />
                  <FooterItem name="Planet" />
                  <FooterItem name="Enviromental and Social Impact Reporting" />
                </div>

                <div class="ml-20">
                  <h1 class="font-semibold text-xl mb-6 text-warmpurp">
                    For Business Partners
                  </h1>
                  <FooterItem name="Landlord Support Center" />
                  <FooterItem name="Suppliers" />
                  <FooterItem name="Corporate Gift Card Sales" />
                  <FooterItem name="Office and Foodservice Coffee" />
                </div>

                <div class="ml-20">
                  <h1 class="font-semibold text-xl mb-6 text-warmpurp">
                    Order and Pickup
                  </h1>
                  <FooterItem name="Order on the App" />
                  <FooterItem name="Order on the Web" />
                  <FooterItem name="Delivery" />
                  <FooterItem name="Order and Pickup Options" />
                  <FooterItem name="Explore and Find Coffee for Home" />
                </div>
              </div>

              <hr />

              <div class="my-6 flex flex-row ">
                <SBSpotify />
                <SBFacebook />
                <SBPintrest />
                <SBInstagram />
                <SBYoutube />
                <SBTwitter />
              </div>

              <div>
                <a
                  href="#"
                  class="font-semibold text-warmpurp font-body hover:underline"
                >
                  Privacy Policy
                </a>
                <span href="#" class="mx-6">
                  |
                </span>
                <a
                  href="#"
                  class="font-semibold text-warmpurp font-body hover:underline"
                >
                  Terms of Use
                </a>
                <span class="mx-6">|</span>
                <a
                  href="#"
                  class="font-semibold text-warmpurp font-body hover:underline"
                >
                  CA Supply Chain Act
                </a>
                <span class="mx-6">|</span>
                <a
                  href="#"
                  class="font-semibold text-warmpurp font-body hover:underline"
                >
                  Cookie Preferences
                </a>
              </div>

              <p class="mt-6 text-sbpurp font-body">
                © 2022 Starbucks Coffee Company. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
