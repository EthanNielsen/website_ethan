import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FIRST Robotics Competition | Ethan Nielsen",
  description:
    "Experience as Chief Engineer and Mentor for FIRST Robotics international competitions, leading teams in designing and building competitive robots",
}

export default function RoboticsProject() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">FIRST Robotics Competition</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src="/images/robotics.png" alt="FIRST Robotics Competition" fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Project Overview</h2>
          <p>
            As Chief Engineer and Mentor for FIRST Robotics, I played a pivotal role in training and leading teams to
            design, build, and compete with industrial-sized robots in international competitions. This experience
            spanned from August 2015 to August 2019 and was instrumental in developing my leadership and technical
            skills.
          </p>

          <h2>Key Contributions</h2>
          <ul>
            <li>
              Trained a dynamic robotics team, optimizing limited time and resources to design, wire, and construct
              industrial-sized robots for international competitive field games
            </li>
            <li>
              Took on multiple leadership roles including programmer (using Java and Python), pit crew mentor, and chief
              engineer
            </li>
            <li>Trained students to maintain and control over $10,000+ in components</li>
            <li>
              Fostered STEM interest through community outreach, from mentoring students to inspiring youth through
              elementary & middle school STEM festivals
            </li>
            <li>
              Operated as the team's main driver for competition weekends, ensuring pit crew safety and improving driver
              control
            </li>
          </ul>

          <h2>Technical Skills Developed</h2>
          <p>
            This experience honed my abilities in robotics design, programming, electrical engineering, and mechanical
            systems. I became proficient in Java and Python programming specifically for robotics applications, and
            gained hands-on experience with sensors, motors, and control systems.
          </p>

          <h2>Impact</h2>
          <p>
            Beyond the technical achievements, my work with FIRST Robotics had a significant impact on promoting STEM
            education in the community. By mentoring younger students and participating in outreach events, I helped
            inspire the next generation of engineers and innovators.
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
