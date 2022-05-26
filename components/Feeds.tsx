import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import TweetBox from './TweetBox'

const Feeds = () => {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between p-5">
        <h1 className="text-xl font-bold">Home</h1>
        <RefreshIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      <div>
        <TweetBox />
      </div>
    </div>
  )
}

export default Feeds
