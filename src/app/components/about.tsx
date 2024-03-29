import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faTelegram,
    faJava,
    faSquareJs
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
          className="rounded-lg"
          src="/img/pfp.jpg"
          width={150}
          height={150}
          alt="My profile picture"
        />
      </div>
      <h1 className="text-2xl font-bold m-5">&lt;/Index:Zero&gt;</h1>
      <h4 className="text-center mb-10">
        Someone from the internet. Frontend developer.
      </h4>
      <div className="flex flex-col md:flex-row">
        <AnimatedButton
          href="https://t.me/index_zero"
          className="mr-3 px-5 py-5 text-center"
          classText="text-white"
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
          classText="text-white"
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
          classText="text-white"
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
          classText="text-white"
        >
          Email{" "}
          <FontAwesomeIcon
            icon={faEnvelope}
            height={20}
            className="inline ml-1"
          />
        </AnimatedButton>
      </div>

      <h2 className="text-xl font-bold m-5 my-5">Things I work with:</h2>
        <h2 className="text-lg font-bold m-5 mb-8">Frontend:</h2>
      <div>
        <div className="flex flex-col lg:flex-row justify-center content-center gap-14">

            <div className="flex flex-col justify-center items-center border-2 border-neutral-700 rounded-lg p-7">
                <FontAwesomeIcon
                    icon={faSquareJs}
                    height={75}
                    width={75}
                    className="inline text-yellow-300"
                />
                <h3 className="text-lg text-center font-bold m-5">JavaScript</h3>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-neutral-700 rounded-lg p-7">
                <Image
                    className="rounded-lg"
                    src="/img/ts.svg"
                    width={75}
                    height={75}
                    alt="TypeScript"
                />
                <h3 className="text-lg text-center font-bold m-3">TypeScript</h3>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-neutral-700 rounded-lg p-7">
                <Image
                    className="rounded-lg"
                    src="/img/next.svg"
                    width={75}
                    height={75}
                    alt="Next.js"
                />
                <h3 className="text-lg text-center font-bold m-3">Next.js</h3>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-neutral-700 rounded-lg p-7">
                <Image
                    className="rounded-lg"
                    src="/img/tailwind.svg"
                    width={75}
                    height={75}
                    alt="Tailwind"
                />
                <h3 className="text-lg text-center font-bold m-3">Tailwind CSS</h3>
            </div>



        </div>
      </div>
    </div>
  );
}
