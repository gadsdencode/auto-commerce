import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";


export default function IndexPage() {
	return (
		<DefaultLayout>
    <>
        {/* Container for demo purpose */}
        <div className="container my-24 mx-auto md:px-6 bg-gray-900 text-gray-300">
            {/* Section: Design Block */}
            <section className="mb-32">
                <h2 className="mb-12 text-center text-3xl font-bold">Heaters & Controls</h2>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
                    {/* Each card is represented by a div */}
                    {['Products', 'Advanced', 'Enterprise'].map((type, idx) => (
                        <div key={idx} className="mb-6 lg:mb-0">
                            <div className="block h-full rounded-lg bg-gray-800 shadow-lg dark:bg-gray-700">
                                <div className="border-b-2 border-gray-700 p-6 text-center">
                                    <p className="mb-4 text-sm uppercase">
                                        <strong>{type}</strong>
                                    </p>
                                    <h3 className="mb-6 text-3xl">
                                        <strong>${129 * (idx + 1)}</strong>
                                        <small className="text-base text-gray-500 dark:text-gray-400">
                                            /year
                                        </small>
                                    </h3>
                                    <button
                                        type="button"
                                        className="inline-block w-full rounded bg-blue-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-900"
                                    >
                                        Buy
                                    </button>
                                </div>
                                <div className="p-6">
                                    <ol className="list-inside">
                                        {['Unlimited updates', 'Git repository', 'npm installation', 'Code examples', 'Premium snippets', 'Premium support', 'Drag&Drop builder'].map((feature, fIdx) => (
                                            fIdx < 3 + idx && (
                                                <li key={fIdx} className="mb-4 flex">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="mr-3 h-5 w-5 text-blue-400 dark:text-blue-500"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 12.75l6 6 9-13.5"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            )
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
    </>
</DefaultLayout>

	);
}