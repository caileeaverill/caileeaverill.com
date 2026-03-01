import TextFlip from "@/components/pages/sections/contact/TextFlip"
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <TextFlip />
      <div>
        <div className="flex gap-6 justify-center my-6">
          {contactMethods.map((method) => (
            <Link
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {method.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const contactMethods = [
  {
    title: "Email",
    icon: <IconMailFilled />,
    href: "mailto:caileeaverill@gmail.com"
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedinFilled />,
    href: "https://www.linkedin.com/in/cailee-averill/"
  },
  {
    title: "GitHub",
    icon: <IconBrandGithubFilled />,
  href: "https://github.com/caileeaverill",
  }
]

export default page