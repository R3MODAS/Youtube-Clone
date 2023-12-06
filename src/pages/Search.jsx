import React from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
  const SearchResults = useSelector((store) => store.youtube.results);

  return (
    <div className='absolute left-[50%] -translate-x-1/2 top-14 min-h-screen pt-3'>
      {
        SearchResults?.map((result) => (
          <div key={result?.etag} className='flex justify-start items-start gap-3 w-4/5 mb-10 cursor-pointer'>
            {console.log(result?.snippet)}
            {
              (result?.snippet?.thumbnails?.medium?.width && result?.snippet?.thumbnails?.medium?.height) ?
                <>
                  <img src={result?.snippet?.thumbnails?.medium?.url} alt="img" className='rounded-[10px]' />

                  <div>
                    <h3 className='text-base'>{result?.snippet?.title}</h3>
                    <div className='text-xs text-[#aaa]'>{result?.snippet?.channelTitle}</div>
                    <p className='text-xs text-[#aaa]'>{result?.snippet?.description}</p>
                  </div>

                </> : <></>
            }

          </div>
        ))
      }
    </div>
  )
}

export default Search