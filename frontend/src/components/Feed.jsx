import React, { useState } from 'react';
import karina from '../assets/karina.jpg';
import kw from '../assets/kw.jpg';
import { FiHeart } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea } from "@nextui-org/react";


const Feed = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [value, setValue] = useState("");
    const [like, setLike] = useState(false)

    const [openImage, setOpenImage] = useState(false);

    const imageOpen = () => setOpenImage(!openImage);

    const closeImage = () => setOpenImage(false);
    
    const toggleLike = () => {
        setLike(!like)
    }

    return (
        <div className="flex-grow p-4 space-y-6 w-full md:w-1/2">
            {/* Create Post */}
            <div className="p-4 rounded-lg shadow">
                <div className="flex space-x-4">
                    <img
                        src={karina}
                        alt="User"
                        className="rounded-full w-10 h-10"
                    />
                    <Button onPress={onOpen} className='w-full text-start'>What's on your mind?</Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className='md:mb-0 mb-52'>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-row gap-3 items-center">
                                        <img
                                            src={karina}
                                            alt="User"
                                            className="rounded-full w-10 h-10"
                                        />
                                        <p>Karina</p>
                                    </ModalHeader>
                                    <ModalBody>
                                        <Textarea
                                            variant="underlined"
                                            label="Description"
                                            labelPlacement="outside"
                                            placeholder="Enter your description"
                                            value={value}
                                            onValueChange={setValue}
                                        />
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Post
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>

            {/* Modal for create Post */}

            {/* Posts */}
            <div className="p-4 rounded-lg shadow">
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
                    className="w-full mt-4 rounded-lg cursor-pointer"
                    onClick={imageOpen}
                />

                {openImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        {/* Modal Content */}
                        <div className="relative">
                            <img
                                src={kw}
                                alt="Post"
                                className="w-auto h-auto max-w-xl max-h-lg rounded-lg"
                            />
                            <button
                                className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer"
                                onClick={closeImage}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Like and Comments Section */}
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

            {/* Action Buttons */}
            <div className='flex justify-between items-center h-5 rounded-md'>
                <div 
                    onClick={toggleLike}
                    className='flex items-center justify-center space-x-2 cursor-pointer hover:text-black hover:bg-gray-200 p-2 rounded-md transition-colors duration-200 w-full'>
                   {like ? <span>❤️</span> : <span>🤍</span>}
                    {/* <FiHeart size={15} /> */}
                    <span>Like</span>
                </div>
                <div className='flex items-center justify-center space-x-2 cursor-pointer hover:text-black hover:bg-gray-200 p-2 rounded-md transition-colors duration-200 w-full'>
                    <FaRegComment size={15} />
                    <span>Comment</span>
                </div>
                <div className='flex items-center justify-center space-x-2 cursor-pointer hover:text-black hover:bg-gray-200 p-2 rounded-md transition-colors duration-200 w-full'>
                    <FiHeart size={15} />
                    <span>Share</span>
                </div>
            </div>

            <hr className='border-gray-400' />

            {/* Comments Section */}
            <div>
                <div className="flex space-x-4 w-full">
                    <img
                        src={karina}
                        alt="User"
                        className="rounded-full w-10 h-10"
                    />
                    <div className=' w-1/3 rounded-xl px-3 py-1'>
                        <div className="font-bold">John Doe</div>
                        <p className="text-sm text-gray-600">Just now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
