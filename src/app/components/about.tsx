import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { headers } from "next/dist/client/components/headers";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import AnimatedButton from "./animated_button";

export default async function About() {
  
  return (
    <div className="flex min-h-screen flex-col items-center p-5 content-center justify-center">
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
        Someone from the internet. Coding in Java, Python, JS/TS(NextJS, React).
      </h4>
      <div className="flex flex-col xl:flex-row">
        <AnimatedButton
          href="https://t.me/index_zero"
          className="mr-3 px-5 py-5 text-center"
          classText="text-black dark:text-white"
        >
          Telegram{" "}
          <FontAwesomeIcon
            icon={faTelegram}
            height={20}
            className="inline ml-1"
          />
        </AnimatedButton>
        <AnimatedButton
          href="https://github.com/IndexZeroZzz"
          className="mr-3 px-5 py-5 text-center"
          classText="text-black dark:text-white"
        >
          Github{" "}
          <FontAwesomeIcon
            icon={faGithub}
            height={20}
            className="inline ml-1"
          />
        </AnimatedButton>
        <AnimatedButton
          href="https://gitlab.com/indx0"
          className="mr-3 px-5 py-5 text-center"
          classText="text-black dark:text-white"
        >
          Gitlab{" "}
          <FontAwesomeIcon
            icon={faGitlab}
            height={20}
            className="inline ml-1"
          />
        </AnimatedButton>
        <AnimatedButton
          href="mailto:7k7ky5qeg@mozmail.com"
          className="mr-3 px-5 py-5 text-center"
          classText="text-black dark:text-white"
        >
          Email{" "}
          <FontAwesomeIcon
            icon={faEnvelope}
            height={20}
            className="inline ml-1"
          />
        </AnimatedButton>
      </div>
    </div>
  );
}
