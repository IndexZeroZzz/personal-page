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
        Someone from the internet. Beginner developer.
      </h4>
      <div className="flex flex-col xl:flex-row">
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

      <h2 className="text-xl font-bold m-5 my-14">Things I work with:</h2>
      <div>

        <div className="flex flex-col xl:flex-row justify-center content-center items-center gap-14">
            <div className="flex flex-col justify-center items-center border-2 border-neutral-700 rounded-lg p-7">
                <FontAwesomeIcon
                    icon={faSquareJs}
                    height={75}
                    width={75}
                    className="inline text-yellow-300"
                />
                <h3 className="text-lg text-center font-bold m-5">JS</h3>
                <p className="text-center">JS, TS, Tailwind and NextJS.</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-neutral-700 rounded-lg p-7">
                <div className="flex flex-row gap-20 justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <FontAwesomeIcon
                            icon={faJava}
                            height={75}
                            width={75}
                            className="inline text-orange-400"
                        />
                        <h3 className="text-lg text-center font-bold m-5">Java</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            className="rounded-none"
                            src="/img/kotlin.svg"
                            width={75}
                            height={75}
                            alt="My profile picture"
                        />
                        <h3 className="text-lg text-center font-bold m-5">Kotlin</h3>
                    </div>
                </div>
                <p className="text-center">Beginner Android dev. Planning to learn Spring Framework.</p>
            </div>


        </div>
      </div>
    </div>
  );
}
