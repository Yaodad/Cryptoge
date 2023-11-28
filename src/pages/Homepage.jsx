import { Navbar, Hero, Market, Why, Join, Footer } from "../components"

const Homepage = () => {
    return (
        <>  
            <div className="relative">
                <div className="fixed top-0 left-0 right-0 bg-white z-[100]">
                    <Navbar />
                </div>
            </div>
            <div className="flex justify-center items-start">
                <div className="xl:max-w-[1280px] w-full">
                    <Hero />
                </div>
            </div>

            <div className="sm:px-16 px-6 flex justify-center items-center">
                <div className="xl:max-w-[1280px] w-full">
                    <Market />
                    <Why />
                    <Join />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Homepage