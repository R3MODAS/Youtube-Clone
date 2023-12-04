import React from 'react'

const VideoCard = ({ info }) => {
    const { channelTitle, title, thumbnails } = info?.snippet;
    const { viewCount } = info?.statistics;
    const { duration } = info?.contentDetails;

    const ConvertDuration = (durationStr) => {
        // Remove the PT
        const removePT = durationStr.slice(2);

        // Split the Minutes and Seconds
        const [Minute, seconds] = removePT.split("M");

        // Removing the S in Seconds
        const Seconds = seconds.slice(0, -1);

        const resultStr = `${Minute}:${Seconds}`;
        return resultStr;
    }

    const truncateString = (str) => {
        if(str.length < 70) {
            return str;
        }
        else {
            return str.slice(0, 70) + "...";
        }
    }

    const ConvertViews = (views) => {
        if (views < 1000) {
            return Math.round(views);
        } 
        else if (views < 1000000) {
            return (Math.round(views / 1000)) + "K views";
        } 
        else if (views < 1000000000) {
            return (Math.round(views / 1000000)) + "M views";
        } 
        else {
            return (Math.round(views / 1000000000)) + "B views";
        }
    }

    return (
        <div className='w-80 cursor-pointer mb-2'>
            <div className='relative'>
                <img src={thumbnails.medium.url} alt="video" className='rounded-xl' />
                <span className='absolute bottom-1 right-1 bg-black text-xs font-medium px-1 py-[2px] rounded-lg'>{ConvertDuration(duration)}</span>
            </div>
            <div className='py-2'>
                <h2 className='font-medium leading-6'>{truncateString(title)}</h2>
                <p className='text-[#aaa] text-sm pt-1'>{channelTitle}</p>
                <span className='text-[#aaa] text-sm'>{ConvertViews(viewCount)}</span>
            </div>
        </div>
    )
}

export default VideoCard