import AboutCodeBlock from "@/components/CodeBlock";

const AboutMe = () => {
  return (
    <div>
        <div className="md:flex items-center gap-16 md:py-20">
        <div className="py-4 sm:pb-0">
            <h2 className="text-3xl sm:text-4xl font-semibold my-2">About Me</h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              I build responsive, user-focused web experiences with a strong emphasis on performance and accessibility. At Higher Logic, I collaborate with cross-functional teams to deliver high-quality digital solutions for a global client base.
            </p>
        </div>
        <AboutCodeBlock />
      </div>
    </div>
  );
};

export default AboutMe;
