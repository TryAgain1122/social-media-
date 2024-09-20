import React from 'react';
import karina from '../assets/karina.jpg'
import kw from '../assets/kw.jpg'
import { FiHeart } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";

const Feed = () => {
    return (
        <div className="flex-grow p-4 space-y-6 w-full md:w-1/2">
            {/* Create Post */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex space-x-4">
                    <img
                        src={karina}
                        alt="User"
                        className="rounded-full w-10 h-10"
                    />
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="flex-grow px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                    />
                </div>
            </div>

            {/* Posts */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex space-x-4">
                    <img
                        src={karina}
                        alt="User"
                        className="rounded-full w-10 h-10"
                    />
                    <div>
                        <div className="font-bold">Karina</div>
                        <p className="text-sm text-gray-600">Just now</p>
                    </div>
                </div>
                <p className="mt-4">
                    This is a sample post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <img
                    src={kw}
                    alt="Post"
                    className="w-full mt-4 rounded-lg"
                />
            </div>

            {/* like counts  */}
            <div className='px-4 flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                    <div className='flex items-center space-x-1'>
                        <FiHeart size={15} />
                        <AiOutlineLike size={15} />
                    </div>
                    <span>22</span>
                </div>
                <div>
                    <span>21 comments</span>
                </div>
            </div>
            <hr className='border-gray-400' />
            <div className='flex justify-between items-center h-5 rounded-md'>
                {/* Like button */}
                <div className='flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-300 p-2 rounded-md transition-colors duration-200 w-full'>
                    <FiHeart size={15} />
                    <span>Like</span>
                </div>

                {/* Comment button */}
                <div className='flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-300 p-2 rounded-md transition-colors duration-200 w-full'>
                    <FaRegComment size={15} />
                    <span>Comment</span>
                </div>

                {/* Share button */}
                <div className='flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-300 p-2 rounded-md transition-colors duration-200 w-full'>
                    <FiHeart size={15} />
                    <span>Share</span>
                </div>
            </div>
            <hr className='border-gray-400' />
            <div>
            <div className="flex space-x-4 w-full">
                    <img
                        src={karina}
                        alt="User"
                        className="rounded-full w-10 h-10"
                    />
                    <div className=' bg-gray-300 w-1/3 rounded-xl px-3 py-1'>
                        <div className="font-bold">John Doe</div>
                        <p className="text-sm text-gray-600">Just now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
