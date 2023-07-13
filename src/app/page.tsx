import Image from 'next/image'
import About from './components/about'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <About />
    </main>
  )
}
