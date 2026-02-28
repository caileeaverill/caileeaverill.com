import CaseStudyGrid from "@/components/CaseStudyGrid";

const HomeCaseStudies = () => {
  return (
    <div>
        <h2 className="text-3xl font-semibold sm:text-4xl dark:text-white">Case Studies</h2>
        <p className="mt-3 text-muted-foreground dark:text-neutral-300">
            Not just “Hello World.” Enterprise-grade systems built for organizations like Hewlett Packard, Rockwell Automation, and Reltio — exploring architecture choices, trade-offs, and continuous improvement.
        </p>
      <CaseStudyGrid limit={3} />
    </div>
  )
}

export default HomeCaseStudies