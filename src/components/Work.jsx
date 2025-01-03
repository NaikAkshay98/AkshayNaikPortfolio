import React from 'react'
import send_icon from '../assets/send-icon.png'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'

const Work = () => {
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">

                <div className="aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Food Delivery</h2>
                            <p className="text-sm text-gray-700">React JS, Vite, HTML, CSS, JavaScript</p>
                        </div>
                        <a href="https://tomato-gilt.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-6.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Real Estate</h2>
                            <p className="text-sm text-gray-700">React JS, Vite, Tailwind CSS</p>
                        </div>
                        <a href="https://real-estate-lovat-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>


                <div className="aspect-square bg-[url('./assets/work-8.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">BG Remover</h2>
                            <p className="text-sm text-gray-700">React JS, MERN, MongoDB, Vite, Tailwind CSS, Clerk Webhooks, ClipDrop, RazorPay, Stripe</p>
                        </div>
                        <a href="https://bg-removal-55ur.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-9.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Blogger</h2>
                            <p className="text-sm text-gray-700">React JS, Next JS, MongoDB, Tailwind CSS</p>
                        </div>
                        <a href="https://blog-appn.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-16.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Prescripto</h2>
                            <p className="text-sm text-gray-700">React JS, Node JS, Stripe, Cloudinary API, MongoDB, Tailwind CSS</p>
                        </div>
                        <a href="https://prescripto-yzvq.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>


                <div className="aspect-square bg-[url('./assets/work-15.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Cryptoplace</h2>
                            <p className="text-sm text-gray-700">React JS, CoinGecko API MongoDB, Tailwind CSS</p>
                        </div>
                        <a href="https://cryptoplace-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            

            <h3 className="text-center mb-2 text-lg font-Ovo">JS - HTML - CSS - Mini Projects</h3>
            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Calculator</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://calculator-livid-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>

                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Drag & Drop</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://drag-drop-teal-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Daily Quote</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://daily-quote-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-5.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Music Player</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://music-player-one-flame.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-19.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Crypto Page</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://crypto-webpage-pink.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-20.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Digital Clock</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://digital-clock-roan-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="aspect-square bg-[url('./assets/work-21.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Image Search Engine</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://image-search-flame-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-22.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">New Year popup</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://newyear-popup.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-23.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Stopwatch</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://stopwatch-sage-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-24.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">QR Code Generator</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://qr-code-generator-nine-bice.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-25.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Age Calculator</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://age-calculator-eight-liard.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-26.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Calendar</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://mini-calendar-rho.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-27.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Text to Speech</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://text-to-speech-snowy-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-28.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Quiz Game</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://quiz-app-six-ashen.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-29.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Notes App</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://notes-app-alpha-murex.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-30.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">To-Do List</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://to-do-list-six-wine.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-31.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Weather App</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://weather-app-eta-blush.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

    

            </div>

            <h4 className="text-center mb-2 text-lg font-Ovo">JS - HTML - CSS - Clone Websites</h4>
            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {/**
                <div className="aspect-square bg-[url('./assets/work-10.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Netflix</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://movieflix-pied.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>
                 */}

                <div className="aspect-square bg-[url('./assets/work-11.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">LinkedIn</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://connect-in-gilt.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-12.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Facebook</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://social-book-orcin.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>


                <div className="aspect-square bg-[url('./assets/work-13.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Airbnb</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://staybnb-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-14.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">YouTube</h2>
                            <p className="text-sm text-gray-700"></p>
                        </div>
                        <a href="https://vid-tube-vert.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Work
