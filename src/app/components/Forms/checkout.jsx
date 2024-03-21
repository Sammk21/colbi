"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

const Checkout = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const router = useRouter();

  return (
    <>
      <div className="lg:grid flex flex-col-reverse grid-cols-3 sm:mt-[8rem] mt-[5.5rem] px-6">
        <div className=" border-gray-900/10 pb-12 col-span-2 px-3">
          <h2 className="flex justify-center lg:text-4xl text-3xl font-medium text-black py-2 border-b">
            Personal Information
          </h2>
          <p className="mt-1 text-xs font-semibold leading-6 text-gray-600">
            Use a proper address where you can receive order.
          </p>
          <form action="">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className=" block  text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className=" block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className=" block  text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className=" block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className=" block  text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className=" block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className=" block  text-sm font-medium leading-6 text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    className=" block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className=" block  text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className=" block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className=" block  text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className=" block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex  items-center gap-x-2 text-sm font-medium py-3 text-black">
                {isLoggedin ? (
                  <>
                    <p>Save your address for next time</p>
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-black focus:black mt-0.5"
                    />
                  </>
                ) : (
                  <p>
                    <Link className="text-blue-700 underline" href="#">
                      Login here
                    </Link>{" "}
                    to save your address for next time
                  </p>
                )}
              </div>
            </div>

            <div className="border-b mt-4 border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Notifications
              </h2>
              <p className="mt-1  leading-6 text-gray-600 text-xs font-medium">
                Keep yourself updated about new stocks and re-stocking
              </p>

              <div className=" space-y-10">
                <fieldset>
                  <div className="flex items-center gap-x-2">
                    <div className="mt-1">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-balck focus:black"
                      />
                    </div>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      By Email
                    </legend>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="mt-1">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:black"
                      />
                    </div>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      By SMS
                    </legend>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="flex flex-col w-full my-7 ">
              <button
                href="/checkout"
                className=" capitalize text-sm hover:bg-gray-700 bg-black text-white p-4 rounded-full"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1 lg:px-3 ">
          <div className="flex justify-center lg:text-4xl text-3xl font-medium text-black py-2 border-b ">
            <h2>Purchase overview</h2>
          </div>
          <div className="text-[.60rem] font-semibold my-4 cursor-pointer text-blue-500 underline uppercase tracking-wide gap-x-7">
            <span onClick={() => router.push("/cart")}>Edit your order?</span>
          </div>
          <div className="pb-4 border-b">
            <div className="flex justify-between items-center font-semibold py-1.5 text-black">
              <div className="product flex gap-x-2 ">
                <div className="relative image h-16 w-16  aspect-square ">
                  <img
                    className="object-cover w-full h-full rounded-xl"
                    src="https://fereclaurus.com/uploads/large_IMG_8122_023f753d2e.webp"
                    alt=""
                  />
                  <span className="h-5 w-5 rounded-full absolute -top-1 text-sm -right-1 bg-gray-600 text-white text-center">
                    2
                  </span>
                </div>
                <div className="flex flex-col  ">
                  <p>blue jeans</p>
                  <div className="text-xs text-gray-600 uppercase tracking-wide gap-x-7">
                    <span>M</span>/<span>black</span>
                  </div>
                </div>
              </div>
              <div className="price">$99</div>
            </div>
            <div className="flex  justify-between items-center font-semibold py-1.5 text-black">
              <div className="product flex gap-x-2 ">
                <div className="relative image h-16 w-16  aspect-square ">
                  <img
                    className="object-cover w-full h-full rounded-xl"
                    src="https://fereclaurus.com/uploads/large_IMG_8122_023f753d2e.webp"
                    alt=""
                  />
                  <span className="h-5 w-5 rounded-full absolute -top-1 text-sm -right-1 bg-gray-600 text-white text-center">
                    2
                  </span>
                </div>
                <div className="flex flex-col  ">
                  <p>blue jeans</p>
                  <div className="text-xs text-gray-600 uppercase tracking-wide gap-x-7">
                    <span>M</span>/<span>black</span>
                  </div>
                </div>
              </div>
              <div className="price">$99</div>
            </div>
          </div>
          <div className="lg:p-0 text-black mt-4">
            <h1 className="text-sm font-medium ">Do you have a promo code?</h1>
            <input
              type="text"
              id="default-input"
              className=" border border-gray-300 text-black uppercase text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
            />
            <div className="py-5 capitalize border-b">
              <div className="grid grid-cols-3 text-sm my-1">
                <div className="col-span-2 flex items-center ">
                  Subtotal <span></span>
                </div>
                <div className="flex justify-end">$112.00</div>
              </div>
              <div className="grid grid-cols-3 text-sm my-1">
                <div className="col-span-2 flex items-center ">
                  Estimated shipping and & handling{" "}
                </div>
                <div className="flex justify-end items-center">$112.00</div>
              </div>
              <div className="grid grid-cols-3 text-sm my-1">
                <div className="col-span-2 flex items-center ">
                  Estimated tax <span className="cursor-pointer"></span>
                </div>
                <div className="flex justify-end">$112.00</div>
              </div>
              <div className="grid grid-cols-3 text-sm my-1 font-medium ">
                <div className="col-span-2 flex items-center ">Promo code</div>
                <div className="flex justify-end text-red-600">-$112.00</div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 my-1 font-bold uppercase py-2 border-b">
                <div className="col-span-2 flex items-center ">total </div>
                <div className="flex justify-end">$112.00</div>
              </div>
            </div>
            <div className="flex flex-col w-full my-7 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
