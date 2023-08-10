import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://unpkg.com/tailwindcss@1.0.4/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <div className="font-sans bg-white flex flex-col min-h-screen w-full">
    <div>
      <div className="bg-gray-200 px-4 py-4">
        <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
          <div>
            <a
              href="#"
              className="inline-block py-2 text-gray-800 text-2xl font-bold"
            >
              Stats.
            </a>
          </div>
          <div>
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
              >
                How it Works
              </a>
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >
                Solutions
              </a>
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >
                Pricing
              </a>
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >
                Desktop
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
            >
              Login
            </a>
            <a
              href="#"
              className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
            >
              Start a free trial
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 md:overflow-hidden">
        <div className="px-4 py-16">
          <div className="relative w-full md:max-w-2xl md:mx-auto text-center">
            <h1 className="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
              A simple and smart tool that will help grow your business
            </h1>
            <p className="text-gray-600 md:text-xl md:px-18">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
            </p>
            <div className="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48" />
            <div className="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32" />
          </div>
        </div>
        <svg
          className="fill-current bg-gray-200 text-white hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fillOpacity={1}
            d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
      <div
        className="max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block"
        style={{ marginTop: "-320px", borderRadius: 20 }}
      >
        <div
          className="h-20 w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10"
          style={{ zIndex: -1 }}
        />
        <div
          className="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12"
          style={{ zIndex: -1 }}
        />
        <div className="h-10 bg-white rounded-t-lg border-b border-gray-100" />
        <div className="flex" style={{ height: 550 }}>
          <div className="w-32 bg-gray-200 p-6 overflow-hidden rounded-bl-lg">
            <div className="text-center mb-10">
              <div className="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto" />
              <div className="h-2 rounded-full bg-blue-800" />
            </div>
            <div className="text-center mb-10">
              <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto" />
              <div className="h-2 rounded-full bg-gray-300" />
            </div>
            <div className="text-center mb-10">
              <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto" />
              <div className="h-2 rounded-full bg-gray-300" />
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto" />
              <div className="h-2 rounded-full bg-gray-300" />
            </div>
          </div>
          <div className="flex-1 py-6 px-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-2/3 px-4">
                <div className="flex flex-wrap -mx-4 mb-10">
                  <div className="w-1/4 px-4">
                    <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                      <div className="w-10 h-10 rounded-full bg-green-600 mb-4 mx-auto" />
                      <div className="h-2 rounded-full bg-gray-200" />
                    </div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                      <div className="w-10 h-10 rounded-full bg-blue-600 mb-4 mx-auto" />
                      <div className="h-2 rounded-full bg-gray-200" />
                    </div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                      <div className="w-10 h-10 rounded-full bg-orange-400 mb-4 mx-auto" />
                      <div className="h-2 rounded-full bg-gray-200" />
                    </div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                      <div className="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto" />
                      <div className="h-2 rounded-full bg-gray-200" />
                    </div>
                  </div>
                </div>
                <div className="h-32 percentage mb-10 pt-2">
                  <div className="h-4 bg-gray-200 w-64 mb-4 block" />
                  <div className="h-4 bg-gray-200 w-32 mb-4 block" />
                  <div className="h-4 bg-gray-200 w-40 mb-4 block" />
                  <div className="h-4 bg-gray-200 w-20 mb-4 block" />
                </div>
                <div className="w-full flex flex-wrap mb-6">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 mr-4" />
                      <div>
                        <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                        <div className="h-2 w-10 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 mr-4" />
                      <div>
                        <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                        <div className="h-2 w-10 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 mr-4" />
                      <div>
                        <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                        <div className="h-2 w-10 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 mr-4" />
                      <div>
                        <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                        <div className="h-2 w-10 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-4">
                <div className="rounded-lg shadow-lg p-6">
                  <div className="block w-12 h-2 rounded-full bg-gray-200 mb-6" />
                  <svg
                    height={150}
                    width={150}
                    viewBox="0 0 20 20"
                    className="mx-auto mb-12"
                  >
                    <circle r={10} cx={10} cy={10} fill="#4299e1" />
                    <circle
                      r={5}
                      cx={10}
                      cy={10}
                      fill="transparent"
                      stroke="#2b6cb0"
                      strokeWidth={10}
                      strokeDasharray="11 31.4"
                      transform="rotate(-90) translate(-20)"
                    />
                  </svg>
                  <div className="flex flex-wrap -mx-2 mb-10">
                    <div className="w-1/3 px-2">
                      <div className="block h-2 rounded-full bg-gray-200" />
                    </div>
                    <div className="w-1/3 px-2">
                      <div className="block h-2 rounded-full bg-gray-200" />
                    </div>
                    <div className="w-1/3 px-2">
                      <div className="block h-2 rounded-full bg-gray-200" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-10">
                  <div>
                    <div className="h-2 w-10 bg-gray-300 rounded-full mb-2" />
                    <div className="h-2 w-16 bg-gray-300 rounded-full mb-2" />
                    <div className="h-2 w-8 bg-gray-300 rounded-full" />
                  </div>
                  <div>
                    <div className="ml-auto h-2 w-5 bg-gray-300 rounded-full mb-2" />
                    <div className="ml-auto h-2 w-6 bg-gray-300 rounded-full mb-2" />
                    <div className="ml-auto h-2 w-8 bg-gray-300 rounded-full" />
                  </div>
                </div>
                <div className="text-right flex justify-end">
                  <div className="rounded-lg h-8 w-20 px-4 bg-gray-200 mr-2" />
                  <div className="rounded-lg h-8 w-20 px-4 bg-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:hidden">
        <div
          className="-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20"
          style={{ borderRadius: 20 }}
        >
          <div className="h-10 bg-white rounded-t-lg border-b border-gray-100" />
          <div className="flex" style={{ height: 340 }}>
            <div className="w-16 bg-gray-200 px-2 py-6 overflow-hidden rounded-bl-lg">
              <div className="text-center mb-6">
                <div className="w-4 h-4 rounded-full bg-blue-800 mb-2 mx-auto" />
                <div className="h-2 w-8 mx-auto rounded-full bg-blue-800" />
              </div>
              <div className="text-center mb-6">
                <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto" />
                <div className="h-2 w-8 mx-auto rounded-full bg-gray-300" />
              </div>
              <div className="text-center mb-6">
                <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto" />
                <div className="h-2 w-8 mx-auto rounded-full bg-gray-300" />
              </div>
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto" />
                <div className="h-2 w-8 mx-auto rounded-full bg-gray-300" />
              </div>
            </div>
            <div className="flex-1 py-6 px-4">
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/3 px-2">
                  <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                    <div className="w-4 h-4 rounded-full bg-green-600 mb-2 mx-auto" />
                    <div className="h-2 w-8 mx-auto rounded-full bg-gray-200" />
                  </div>
                </div>
                <div className="w-1/3 px-2">
                  <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                    <div className="w-4 h-4 rounded-full bg-blue-600 mb-2 mx-auto" />
                    <div className="h-2 w-8 mx-auto rounded-full bg-gray-200" />
                  </div>
                </div>
                <div className="w-1/3 px-2">
                  <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                    <div className="w-4 h-4 rounded-full bg-orange-600 mb-2 mx-auto" />
                    <div className="h-2 w-8 mx-auto rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-6">
                <div className="w-1/2 px-2">
                  <div className="shadow h-24 p-2 rounded-lg">
                    <div className="h-20 percentage pt-2">
                      <div className="h-2 bg-gray-200 w-24 mb-2 block" />
                      <div className="h-2 bg-gray-200 w-12 mb-2 block" />
                      <div className="h-2 bg-gray-200 w-20 mb-2 block" />
                      <div className="h-2 bg-gray-200 w-8 mb-2 block" />
                    </div>
                  </div>
                </div>
                <div className="w-1/2 px-2">
                  <div className="rounded-lg shadow px-2 py-2">
                    <div className="block w-8 h-2 rounded-full bg-gray-200 mb-2" />
                    <div className="mb-2">
                      <svg
                        height={50}
                        width={50}
                        viewBox="0 0 20 20"
                        className="mx-auto"
                      >
                        <circle r={10} cx={10} cy={10} fill="#ddd" />
                        <circle
                          r={5}
                          cx={10}
                          cy={10}
                          fill="transparent"
                          stroke="#eee"
                          strokeWidth={10}
                          strokeDasharray="11 31.4"
                          transform="rotate(-90) translate(-20)"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-1/3 px-2">
                        <div className="block h-2 rounded-full bg-gray-200" />
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="block h-2 rounded-full bg-gray-200" />
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="block h-2 rounded-full bg-gray-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap mb-2">
                <div className="w-1/2">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-gray-200 mr-4" />
                    <div>
                      <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                      <div className="h-2 w-6 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-gray-200 mr-4" />
                    <div>
                      <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                      <div className="h-2 w-6 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap mb-6">
                <div className="w-1/2">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-gray-200 mr-4" />
                    <div>
                      <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                      <div className="h-2 w-6 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-gray-200 mr-4" />
                    <div>
                      <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                      <div className="h-2 w-6 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right flex justify-end">
                <div className="rounded-lg h-6 w-16 px-4 bg-gray-200 mr-2" />
                <div className="rounded-lg h-6 w-16 px-4 bg-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center p-4 text-gray-600 mt-10">
        Created by
        <a
          className="border-b text-blue-500"
          href="https://twitter.com/mithicher"
          target="_blank"
        >
          @mithicher
        </a>
        . Inspired by dribble shot
        <a
          href="https://dribbble.com/shots/8807920-Quickpay-Hero-section/attachments/1015863"
          target="_blank"
          className="border-b text-blue-500"
        >
          https://dribbble.com/vadimdrut
        </a>
      </p>
    </div>
  </div>
</>
		</DefaultLayout>
	);
}