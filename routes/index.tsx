import { asset } from "https://deno.land/x/fresh@1.1.0/runtime.ts";
import HomeFooter from "../components/Footer/Footer.tsx";
import GridContainer from "../components/Grid/GridContainer.tsx";
import GridRow from "../components/Grid/GridRow.tsx";
import MobileSeperator from "../components/Grid/MobileSeperator.tsx";
import Navbar from "../components/Navbar/Navbar.tsx";
import SeoHeader from "../components/Seo.tsx";

export default function Home() {
  return (
    <>
      <SeoHeader
        title="Starbux Coffee Company"
        description="More than just great coffee. Explore the menu, sign up for StarbucksĀ® Rewards, manage your gift card and more."
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

        <div class="w-full 2xl:w-5/6 mx-auto">
          <GridContainer>
            <img src={asset("./bux.jpg")} class="h-full" />
            <div class="bg-sbgreen px-24 py-12 flex items-center w-full justify-center">
              <div class="flex flex-col ">
                <h1 class="font-bold text-darkgreen text-3xl text-center mb-6 font-body">
                  Fall at your fingertips
                </h1>
                <p class="text-center font-semibold text-darkgreen text-lg">
                  Ordering your fall favorites is a snap with the app. Join
                  StarbucksĀ® Rewards and tap into fall.
                </p>

                <button
                  href="#"
                  class="border-solid border-darkgreen border-1 px-3 py-1 rounded-2xl mt-6 mx-auto text-lg"
                >
                  <span class="font-semibold">Join Now</span>
                </button>
              </div>
            </div>

            <MobileSeperator />
            <GridRow
              header="Layers of baked apple yum"
              body="Try the Apple Crisp Oatmilk Macchiato, now nondairy and with
                  StarbucksĀ® Blonde Espresso."
              imagePath="./bux2.jpg"
              buttonText="Learn More"
              feat="right"
            />

            <MobileSeperator />
            <GridRow
              header="Welcome home, pumpkin"
              body="Fall favorites return with the blissful Pumpkin Spice Latte
                  and smooth Pumpkin Cream Cold Brew."
              buttonText="Learn more"
              imagePath="./bux3.jpg"
            />

            <MobileSeperator />
            <GridRow
              header="Picks of the patch"
              body="Choose a comforting classic: Pumpkin Cream Cheese Muffin,
                  Pumpkin & Pepita Loaf or Pumpkin Scone."
              imagePath="./bux4.jpg"
              buttonText="Learn more"
              feat="right"
            />

            <MobileSeperator />
            <GridRow
              header="Itās backāand oh, so lovely"
              body="Fill your cup with Guatemala Casi CieloĀ®, a medium roast
                  coffee with notes of Meyer lemon and cocoa nibs."
              imagePath="./bux5.jpg"
              buttonText="Learn more"
              headerStyle="text-xl"
            />
          </GridContainer>

          <HomeFooter />
        </div>
      </div>
    </>
  );
}
