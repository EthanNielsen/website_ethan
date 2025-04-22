import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technical Support Systems | Ethan Nielsen",
  description:
    "Experience developing and maintaining technical support systems for the Family Search Library Headquarters",
}

export default function TechnicalSupportProject() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Technical Support Systems</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download.jpg-CTZ4H2pRrB8SJoBr1cAX8QLmEiOGcH.jpeg"
            alt="Server Room and Technical Infrastructure"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Project Overview</h2>
          <p>
            During my paid internship as a Guest Services representative at the Family Search Library Headquarters for
            the Church of Jesus Christ of Latter-Day Saints, I was responsible for developing and maintaining technical
            support systems that served thousands of visitors and staff members.
          </p>

          <h2>Key Responsibilities</h2>
          <ul>
            <li>
              Resolved over 2,500 technical issues and inquiries, positively impacting thousands of individuals in their
              pursuit of family history
            </li>
            <li>
              Worked caringly and patiently alongside elderly visitors to support them in documenting their family
              history
            </li>
            <li>
              Proactively repaired major components throughout the library including server systems, printer
              malfunctions, physical & digital family history discovery experiences, and computer systems
            </li>
            <li>
              Collaborated effectively between 100+ volunteers and employees daily, fostering open communication to
              cultivate a positive work environment
            </li>
          </ul>

          <h2>Technical Skills Applied</h2>
          <p>
            This role required a diverse set of technical skills, including troubleshooting hardware and software
            issues, maintaining server systems, and ensuring the reliability of digital resources. I developed expertise
            in diagnosing complex technical problems and implementing effective solutions under time constraints.
          </p>

          <h2>Impact</h2>
          <p>
            My work in technical support had a direct impact on the experience of library visitors, many of whom relied
            on functioning technology to access and document their family history. By maintaining reliable systems and
            providing prompt assistance, I helped ensure that these valuable resources remained accessible to all users,
            regardless of their technical proficiency.
          </p>
        </div>

        <div className="mt-12 flex justify-between">
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
