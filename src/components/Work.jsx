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
                            <h2 className="font-semibold">Blogger(Inprogress)</h2>
                            <p className="text-sm text-gray-700">React JS, Next JS, MongoDB, Tailwind CSS</p>
                        </div>
                        <a href="https://blog-application-psi-sepia.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Calculator</h2>
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
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
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
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
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
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
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
                        </div>
                        <a href="https://music-player-one-flame.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-10.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">Netflix Clone</h2>
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
                        </div>
                        <a href="https://movieflix-pied.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="aspect-square bg-[url('./assets/work-11.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">LinkedIn Clone</h2>
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
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
                            <h2 className="font-semibold">Facebook Clone</h2>
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
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
                            <h2 className="font-semibold">Airbnb Clone</h2>
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
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
                            <h2 className="font-semibold">YouTube Clone</h2>
                            <p className="text-sm text-gray-700">HTML, CSS, JavaScript</p>
                        </div>
                        <a href="https://vid-tube-vert.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src={send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </a>
                    </div>
                </div>
{/**                <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">UI/UX designing</h2>
                            <p className="text-sm text-gray-700">UI/UX Design</p>
                        </div>
                        <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                            <img src={send_icon} alt="" className="w-5" />
                        </div>
                    </div>
                </div>
*/}                
            </div>
{/** 
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover">Show more
                <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
                <img src={right_arrow_blod_dark} alt="" className="w-4 hidden dark:block" />
            </a>
*/}
        </div>
    )
}

export default Work
