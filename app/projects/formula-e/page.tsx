import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Formula E Racing | Ethan Nielsen",
  description:
    "Suspension design and analysis for BYU's electric race car, including collaboration with racing engineering companies",
}

export default function FormulaEProject() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Formula E Racing</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src="/images/racecar.jpeg" alt="Formula E Racing Car" fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Project Overview</h2>
          <p>
            As a Suspension Specialist for BYU's Formula E Team, I was responsible for designing and analyzing
            suspension systems for the university's electric race car. This role combined my engineering background with
            my passion for automotive innovation.
          </p>

          <h2>Key Contributions</h2>
          <ul>
            <li>
              Connected with race engineering companies AFCO & TannerMB to acquire specifications for Quarter midget
              shocks
            </li>
            <li>Analyzed data to determine optimal shock configurations for the electric race car</li>
            <li>
              Utilized specialized software including VSup, Onshape, and SOLIDWORKS to design various suspension
              components
            </li>
            <li>Educated team members on suspension principles through weekly accountability reports</li>
          </ul>

          <h2>Technical Approach</h2>
          <p>
            The suspension design process involved careful consideration of weight distribution, aerodynamics, and
            performance characteristics unique to electric vehicles. By leveraging advanced CAD tools and simulation
            software, I was able to optimize the suspension geometry for maximum performance on the track.
          </p>

          <h2>Impact</h2>
          <p>
            My work on the suspension system contributed to the overall performance and handling of BYU's electric race
            car. The experience provided valuable insights into automotive engineering and reinforced my ability to
            apply theoretical knowledge to practical challenges.
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
