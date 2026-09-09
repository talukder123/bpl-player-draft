const Footer = () => {
    return (
        <div>


            <footer className="mt-16 bg-gray-950 text-gray-300">

                {/* Main Footer */}
                <div className="container mx-auto px-5 py-12 sm:px-8 lg:px-10">

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <h2 className="text-2xl font-extrabold tracking-tight text-white">
                                BPL<span className="text-primary">Draft</span>
                            </h2>

                            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                                Build your dream cricket team, choose your favorite
                                players, and manage your budget like a real team manager.
                            </p>

                            <div className="mt-5 flex gap-3">
                                <a
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-primary hover:text-white"
                                >
                                    f
                                </a>

                                <a
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-primary hover:text-white"
                                >
                                    X
                                </a>

                                <a
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-primary hover:text-white"
                                >
                                    in
                                </a>

                                <a
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-primary hover:text-white"
                                >
                                    GH
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="mb-4 font-semibold text-white">
                                Quick Links
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="#" className="transition hover:text-white">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:text-white">
                                        Available Players
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:text-white">
                                        Selected Players
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:text-white">
                                        My Team
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="mb-4 font-semibold text-white">
                                Features
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li>Player Selection</li>
                                <li>Coin Management</li>
                                <li>Team Building</li>
                                <li>Player Statistics</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="mb-4 font-semibold text-white">
                                About
                            </h3>

                            <p className="text-sm leading-6 text-gray-400">
                                A modern BPL-inspired player draft application built
                                with React and TypeScript.
                            </p>

                            <div className="mt-4">
                                <p className="text-sm text-gray-500">
                                    Bangladesh Premier League
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="my-8 border-t border-gray-800"></div>

                    {/* Bottom */}
                    <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 sm:flex-row sm:text-left">

                        <p>
                            © {new Date().getFullYear()} BPLDraft. All rights reserved.
                        </p>

                        <p>
                            Developed by Abdus Salam Talukder
                        </p>

                    </div>

                </div>
            </footer>



        </div>
    );
};

export default Footer;