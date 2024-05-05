"use client"



import Link from "next/link";

function Footer() {
    return (


        <footer className="bg-white text-black  dark:text-white p-3  dark:bg-[#212121] shadow shadow-slate-500">

            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <div>
                    <div className="text-2xl font-bold ">
                    font classic
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold ">Tools</h3>
                    <ul className="space-y-1 text-slate-400 font-semibold">
                        <li>
                            <Link href="/captions" >
                                Captions
                            </Link>
                        </li>
                        <li>
                            <Link href="/font" >
                                Font Generator
                            </Link></li>
                        <li>
                            <Link href="/bio" >
                                Instagram bio
                            </Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold ">Website</h3>
                    <ul className="space-y-1 text-slate-400 font-semibold">
                        <li>
                            <Link href="/privacypolicy" >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutus" >
                                Aboutus
                            </Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold ">Contactus</h3>
                    <p className="text-base text-slate-400 font-semibold">You can contactus on this gmail onlysgym@gmail.com
                    </p>

                </div>
            </div>
            <div className="border-t border-gray-700 mt-2 pt-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
                    <span>© 2024 font classic, All Rights Reserved</span>

                </div>
            </div>

        </footer>


    )
}

export default Footer