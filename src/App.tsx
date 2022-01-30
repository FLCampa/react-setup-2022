import { useState } from 'react'
import { Tweet } from './components/Tweet'

import './App.css'
import { AppRoutes } from './Routes'

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ])

  const createTweet = () => {
    setTweets([...tweets, 'Tweet 4'])
  }

  return (
    <>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}

      <button
        style={{
          backgroundColor: '#8257e6',
          border: 0,
          borderRadius: '0.25rem',
          padding: '0.5rem 1rem',
          color: '#FFF'
        }}
        onClick={createTweet}
      >
        Adicionar tweet
      </button>

      <AppRoutes />
    </>
  )
}

export default App
