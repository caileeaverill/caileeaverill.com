import AboutMe from '@/components/pages/sections/home/AboutMe'
import Hero from '@/components/pages/sections/home/Hero'
import HomeCaseStudies from '@/components/pages/sections/home/HomeCaseStudies'


const page = () => {
  return (
    <div className="relative w-full">
      <Hero />
      <AboutMe />
      <HomeCaseStudies />
    </div>
  )
}

export default page