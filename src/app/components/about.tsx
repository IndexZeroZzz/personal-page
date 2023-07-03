import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import AnimatedButton from './animatedbutton'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { headers } from 'next/dist/client/components/headers'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center p-0 content-center justify-center">
      <div className='flex justify-center flex-col items-center content-center'>
        <Image
            className='rounded-full'
            src='/img/pfp.jpg'
            width={150}
            height={150}
            alt="My profile picture"
        />
        <h1 className='text-2xl font-bold m-5'>&lt;/Index:Zero&gt;</h1>
        <h4 className='text-center mb-10'>Someone from the internet. Coding in Java, Python. Currently learning JS/TS, React and Next.js.</h4>
        <div className="flex flex-col xl:flex-row">
          <AnimatedButton link='https://t.me/index_zero'>Telegram <FontAwesomeIcon icon={faTelegram} height={20} className='inline ml-1'/></AnimatedButton>
          <AnimatedButton link='https://github.com/IndexZeroZzz'>Github <FontAwesomeIcon icon={faGithub} height={20} className='inline ml-1'/></AnimatedButton>
          <AnimatedButton link='https://gitlab.com/indx0'>Gitlab <FontAwesomeIcon icon={faGitlab} height={20} className='inline ml-1'/></AnimatedButton>
          <AnimatedButton link='https://m.vk.com/irindx'>VK <FontAwesomeIcon icon={faVk} height={20} className='inline ml-1'/></AnimatedButton>
          <AnimatedButton link='mailto:7k7ky5qeg@mozmail.com'>Email <FontAwesomeIcon icon={faEnvelope} height={20} className='inline ml-1'/></AnimatedButton>
        </div>

        <div className="flex flex-col xl:flex-row mt-5">
        <a href="https://www.donationalerts.com/r/SalmonBtw" className='group mr-3 rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-flex'>
          <p className='text-red-500 inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none ml-1'>Donate <FontAwesomeIcon icon={faHeart} height={20} className='inline ml-1'/></p>
        </a>
        </div>
      </div>
    </div>
  )
}
