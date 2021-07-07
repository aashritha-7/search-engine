import Head from 'next/head'
import Avatar from '../components/Avatar';
import { MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline'
import { ViewGridIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer';
import { useRef } from "react"
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter();

  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);

  };

  return (
    <div className='flex flex-col items-center  justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel="icon" href="https://www.freepngimg.com/thumb/google/67060-play-photos-search-google-account-png-file-hd.png" />
      </Head>
      <header className='flex w-full p-3 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
          <Avatar url='https://lh3.googleusercontent.com/ogw/ADea4I5Oum87-iz0EBPeQ6fgiSgWcGAs8jNFKSfJgodA=s32-c-mo' />
        </div>
      </header>

      <form className='flex flex-col items-center justify-center  flex-grow w-4/5'>
        <Image
          src="https://google-next-js-clone.vercel.app/_next/image?url=https%3A%2F%2Fwww.google.co.uk%2Fimages%2Fbranding%2Fgooglelogo%2F2x%2Fgooglelogo_color_272x92dp.png&w=384&q=75"
          height={90}
          width={270}
        />
        <div className="flex
         w-full 
         mt-5 
         hover:shadow-lg 
         focus-within:shadow-lg 
         max-w-md 
         rounded-full 
         border border-gray-300
         px-5
         py-3
         items-center
         sm:max-w-xl
         lg:max-w-2xl
         ">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} placeholder="Search Google or type a URL" type='text' className='focus:outline-none flex-grow ' />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
