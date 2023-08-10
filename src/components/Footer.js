import { Link } from "react-router-dom";
import logoDark from "../images/logo-dark.svg"
import Fc1 from "../images/footer-certificate-1.png"
import Fc2 from "../images/footer-certificate-2.jpg"
import Facebook from "../images/facebook-icon.svg"
import Linkedin from "../images/linkedin-icon.svg"
import Instagram from "../images/instagram-icon.svg";
import Github from "../images/github-icon.svg"
import Twitter from "../images/twitter-icon.svg"
const Footer=()=>{
    return(
        <div
        className="w-10/12 pb-10 pt-20 md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col lg:space-y-0 lg:space-x-4 lg:flex-row justify-between"
        >
        {/* <!-- column - 1 --> */}
        <div className="flex flex-col md:max-w-[340px] lg:max-w-[260px]">
          <img
            src={logoDark}
            loading="lazy"
            width="120px"
            height="24px"
            alt=""
          />
          <p className="text-sm text-grayText my-3 font-mullish">
            Razorpay is the only payments solution in India that allows
            businesses to accept, process and disburse payments with its product
            suite. It gives you access to all payment modes including credit
            card, debit card, netbanking, UPI and popular wallets including
            JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>
          <p className="text-sm text-grayText my-3 font-mullish">
            RazorpayX supercharges your business banking experience, bringing
            effectiveness, efficiency, and excellence to all financial
            processes. With RazorpayX, businesses can get access to
            fully-functional current accounts, supercharge their payouts and
            automate payroll compliance.
          </p>
          <p className="text-sm text-grayText my-3 font-mullish">
            Manage your marketplace, automate bank transfers, collect recurring
            payments, share invoices with customers and avail working capital
            loans - all from a single platform. Fast forward your business with
            Razorpay.
          </p>
          <p className="text-[0.625rem] text-grayText my-3 font-mullish">
            Disclaimer: The RazorpayX powered Current Account and VISA corporate
            credit card are provided by RBI licensed banks. Your RazorpayX
            powered account is provided by our partner bank, in accordance with
            RBI regulations. RazorpayX itself is not a bank and doesn't hold or
            claim to hold a banking license.
          </p>
          <p className="font-mullish uppercase font-bold text-gray2">
            Subscribe to our newsletter
          </p>
          <form className="relative bg-white w-[260px] mt-2 mb-4">
            <input
              placeholder="Your email address"
              className="pr-16 font-mullish border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2 px-4 border rounded-sm transition-all duration-200"
            />
            <button
              className="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 font-mullish text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200"
            >
              Subscribe
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="w-[14px] h-[14px] ml-3"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg>
            </button>
          </form>
          <div className="flex items-start space-x-4">
            <img
              src={Fc1}
              loading="lazy"
              width="92"
              height="40"
              className="cursor-pointer"
              alt=""
            />
            <img
              src={Fc2}
              loading="lazy"
              width="122"
              height="80"
              className="cursor-pointer"
              alt=""
            />
          </div>
        </div>
        {/* <!-- column - 2 --> */}
        <div
          className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between"
        >
          {/* <!-- sub column - 1 --> */}
          <div className="space-y-3">
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                BANKING PLUS
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >RazorpayX</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Current Accounts</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Payouts</Link >
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Payout Links</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Corporate Credit Card</Link >
                </li>
                <li>
                  <Link
                    to="#"
                    className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    View Live Demo
                    <span
                      className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                      >New</span
                    >
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                LENDING
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Razorpay Capital</Link >
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Instant Settlements</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Working Capital Loans</Link  >
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Marketplace Instant Settlements</Link >
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                RISK & FRAUD
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Thirdwatch</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    PrePay CoD
                    <span
                      className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                      >New</span
                    >
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                BECOME A PARTNER
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Refer and Earn</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Onboarding APIs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                MORE
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Route</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Invoices</Link >
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Freelancer Payments</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >International</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Flash Checkout</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >UPI</Link >
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >ePOS</Link  >
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Checkout Demo</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >RazorpayX Payroll</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- sub column - 2 --> */}
          <div className="space-y-3">
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                ACCEPT PAYMENTS
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Payment Gateway</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Payment Pages</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Payment Links</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >QR Codes</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Subscriptions</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Smart Collect
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                DEVELOPERS
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Docs</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Integrations</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >API Reference</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                RESOURCES
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Blog</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Customer Stories
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Chargeback Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Settlement Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                SOLUTIONS
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Education</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Saas
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    BFSI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                FREE TOOLS
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >GST Calculator</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Online TDS Payment</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    GST Number Search
                    <span
                      className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                      >New</span
                    >
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- sub column - 3 --> */}
          <div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                COMPANY
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >About Us</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish relative font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Careers
                    <span
                      className="text-white font-mullish bg-green-500 rounded-sm text-xs font-bold p-1"
                      >We're hiring!</span
                    >
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Terms of Use</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Privacy Policy</Link >
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Grievance Redressal</Link >
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Responsible Disclosure
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    White Papers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >
                    Corporate Information
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-3">
                HELP & SUPPORT
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Support</Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >Knowledge base</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
                FIND US ONLINE
              </p>
              <ul className="flex space-x-4 items-center mt-4">
                <li className="cursor-pointer">
                  <Link>
                    <img
                      src={Facebook}
                      width="24"
                      height="24"
                      loading="lazy"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link>
                    <img
                      src={Twitter}
                      width="24"
                      height="24"
                      loading="lazy"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link>
                    <img
                      src={Instagram}
                      width="24"
                      height="24"
                      loading="lazy"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link>
                    <img
                      src={Github}
                      width="24"
                      height="24"
                      loading="lazy"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link>
                    <img
                      src={Linkedin}
                      width="24"
                      height="24"
                      loading="lazy"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
                REGD. OFFICE ADDRESS
              </p>
              <p className="font-mullish text-sm mt-4 whitespace-nowrap">
                Razorpay Software Private Limited, <br />1st Floor, SJR Cyber,
                <br />22 Laskar Hosur Road, Adugodi, <br />Bengaluru, 560030,
                <br />Karnataka, India <br />CIN: U72200KA2013PTC097389
              </p>
              <div className="font-mullish mt-6">
                <p className="text-sm">© Razorpay 2022</p>
                <p className="text-sm">All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;