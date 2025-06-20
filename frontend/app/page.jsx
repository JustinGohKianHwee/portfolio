import Photo from "@/components/photo"
import Socials from "@/components/socials"
import TypingAnimation from "@/components/TypingAnimation"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              <span className="text-accent">Justin Goh</span>
            </h1>
            <div>
              <TypingAnimation />
            </div>
            <p className="max-w-[500px] mb-9 text-white/80">I’m passionate about Machine Learning Engineering and love building innovative software solutions and driving research forward. I’m always eager to tackle new challenges and am open to exciting opportunities.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant= "outline" size = "lg" className= "uppercase flex items-center gap-2">
                <span> Download CV </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                containerStyles={"flex gap-6"} 
                iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home