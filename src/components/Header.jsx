import NavLink from './NavLink'

const Header = () =>{
    return (
        <header>
            <nav className="flex justify-between items-center bg-red-950 text-white">
                
                <h1 className="px-5 w-40">LOGO</h1>

                <ul className="flex items-center cursor-pointer ">
                    
                    <NavLink name="About" />
                    <NavLink name="Projects" />
                    <NavLink name="Work History" />
                    <NavLink name="Contact" />
                </ul>
                
            </nav>

            <div className="relative bg-yosimite bg-no-repeat bg-cover bg-center bg-fixed py-8 bg-red-950 ">
            
                <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                        <div className="rounded-full border-8 border-primary shadow-xl">
                        <img src="./portfolio_files/blog-author.jpg" className="h-48 rounded-full sm:h-56" alt="author" />
                        </div>
                        <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                        <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                            Hello I'm Christy Smith!
                        </h1>
                        <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                            <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                            <p className="font-body text-lg uppercase text-white">Let's connect</p>
                            <div className="hidden sm:block">
                                <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                            </div>
                            </div>
                            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                            <a href="https://atom.redpixelthemes.com/">
                                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                            </a>
                            <a href="https://atom.redpixelthemes.com/" className="pl-4">
                                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                            </a>
                            <a href="https://atom.redpixelthemes.com/" className="pl-4">
                                <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                            </a>
                            <a href="https://atom.redpixelthemes.com/" className="pl-4">
                                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                            </a>
                            <a href="https://atom.redpixelthemes.com/" className="pl-4">
                                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </header>
    )
}

export default Header