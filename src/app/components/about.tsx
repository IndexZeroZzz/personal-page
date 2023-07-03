import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { headers } from "next/dist/client/components/headers";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center p-0 content-center justify-center">
      <div className="flex justify-center flex-col items-center content-center">
        <Image
          className="rounded-full"
          src="/img/pfp.jpg"
          width={150}
          height={150}
          alt="My profile picture"
        />
      </div>
      <h1 className="text-2xl font-bold m-5">&lt;/Index:Zero&gt;</h1>
      <h4 className="text-center mb-10">
        Someone from the internet. Coding in Java, Python. Currently learning
        JS/TS, React and Next.js.
      </h4>
      <div className="flex flex-col xl:flex-row">
        <a
          href="https://t.me/index_zero"
          className="group mr-3 rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-flex"
        >
          <p className="text-black dark:text-white inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none ml-1">
            Telegram{" "}
            <FontAwesomeIcon
              icon={faTelegram}
              height={20}
              className="inline ml-1"
            />
          </p>
        </a>
        <a
          href="https://github.com/IndexZeroZzz"
          className="group mr-3 rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-flex"
        >
          <p className="text-black dark:text-white inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none ml-1">
            Github{" "}
            <FontAwesomeIcon
              icon={faGithub}
              height={20}
              className="inline ml-1"
            />
          </p>
        </a>
        <a
          href="https://gitlab.com/indx0"
          className="group mr-3 rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-flex"
        >
          <p className="text-black dark:text-white inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none ml-1">
            Gitlab{" "}
            <FontAwesomeIcon
              icon={faGitlab}
              height={20}
              className="inline ml-1"
            />
          </p>
        </a>
        <a
          href="https://m.vk.com/irindx"
          className="group mr-3 rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-flex"
        >
          <p className="text-black dark:text-white inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none ml-1">
            VK{" "}
            <FontAwesomeIcon icon={faVk} height={20} className="inline ml-1" />
          </p>
        </a>
        <a
          href="mailto:7k7ky5qeg@mozmail.com"
          className="group mr-3 text-center rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-flex"
        >
          <p className="text-black dark:text-white inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none ml-1">
            Email{" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              height={20}
              className="inline ml-1"
            />
          </p>
        </a>
        <a
          href="https://www.donationalerts.com/r/SalmonBtw"
          className="group mr-3 rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-flex"
        >
          <p className="text-red-500 inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none ml-1">
            Donate{" "}
            <FontAwesomeIcon
              icon={faHeart}
              height={20}
              className="inline ml-1"
            />
          </p>
        </a>
      </div>
    </div>
  );
}
