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
    </div>
  </div>
</>
		</DefaultLayout>
	);
}