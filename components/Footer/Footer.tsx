import {
  SBFacebook,
  SBInstagram,
  SBPintrest,
  SBSpotify,
  SBTwitter,
  SBYoutube,
} from "../Icons/SbIcons.tsx";
import FooterItem from "./FooterItem.tsx";

export default function HomeFooter() {
  return (
    <footer>
      <div class="shadow-inner mt-8 flex p-6 flex-col sm:hidden md:flex">
        <div class="flex">
          <div class="flex flex-row">
            <div>
              <h1 class="font-semibold text-xl mb-6 text-warmpurp">About Us</h1>
              <FooterItem name="Our Company" />
              <FooterItem name="Our Coffee" />
              <FooterItem name="Stories and News" />
              <FooterItem name="Starbucks Archive" />
              <FooterItem name="Investor Relations" />
              <FooterItem name="Customer Service" />
            </div>
          </div>

          <div class="ml-20">
            <h1 class="font-semibold text-xl mb-6 text-warmpurp">Careers</h1>
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

      <div class="shadow-inner mt-8 flex p-6 flex-col sm:visible md:hidden">
        <h1>HELLO MOBILE</h1>
      </div>
    </footer>
  );
}
