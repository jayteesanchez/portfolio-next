import Image from "next/image";
import { WiDayThunderstorm } from "react-icons/wi";

export default function Projects() {
  return (
    <div className="xl:mt-68 lg:mt-40 mt-24 w-full space-y-4">
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                Projects
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400"></p>
            <ul className="my-4 space-y-3">
                <li className="hover:motion-safe:animate-pulse">
                    <a href="http://wegotustoday.com.s3-website-us-west-2.amazonaws.com/" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3">
                                    <b className="text-white-500 underline">We Got Us Today</b>
                                    <p className="text-xs my-2 font-normal">Platform to celebrate graduating students during the Covid pandemic.</p>
                                    <p className="italic text-xs font-normal">Tech: AWS - S3, Route 53 and Cloudflare, Javascript, jQuery HTML, CSS, Bootstrap CSS</p>
                        </span>
                    </a>
                </li>
                <li className="hover:motion-safe:animate-pulse">
                    <a href="http://mapeengineering.s3-website-us-west-2.amazonaws.com/" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white ">
                        <span className="flex-1 ms-3">
                                    <b className="text-white-500 underline">Mape Engineering</b>
                                    <p className="text-xs my-2 font-normal">Website for a Supplier and Manufacturer for Space & Defense.</p>
                                    <p className="italic text-xs font-normal">Tech: AWS - S3, Route 53 and Cloudflare, Javascript, jQuery HTML, CSS, Bootstrap CSS</p>
                        </span>
                    </a>
                </li>
                <li className="hover:motion-safe:animate-pulse">
                    <a href="https://gaggiuino.github.io/#/" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3">
                                    <b className="text-white-500 underline">Gaggiuino project</b>
                                    <p className="text-xs my-2 font-normal">Fun side project combining microcontrollers and espresso machines.</p>
                                    <p className="italic text-xs font-normal">Skills: Javascript, HTML, CSS, microcontroller programming, electronics, and circuit design</p>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
};