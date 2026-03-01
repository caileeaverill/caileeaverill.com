import AboutMe from '@/components/pages/sections/home/AboutMe'
import Hero from '@/components/pages/sections/home/Hero'
import HomeCaseStudies from '@/components/pages/sections/home/HomeCaseStudies'


const page = () => {
  return (
    <div className="relative w-full">
      <Hero />
      <div className="pb-32">
        <AboutMe />
      </div>
      <div>
        <HomeCaseStudies />
      </div>
    </div>
  )
}

export default page