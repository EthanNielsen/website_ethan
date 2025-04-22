import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Hello, I'm <span className="text-blue-600">Ethan Nielsen</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            An aspiring entrepreneur with a strong engineering background, passionate about innovation and
            problem-solving.
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/resume">View Resume</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/images/ethan_profile.png"
              alt="Ethan Nielsen"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Student Innovator of the Year</CardTitle>
              <CardDescription>AI Healthcare Diagnostics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full mb-4">
                <Image src="/images/ptAI.png" alt="AI Healthcare Project" fill className="object-cover rounded-md" />
              </div>
              <p className="text-gray-600">
                Leading the development of an AI tool to diagnose physical misalignments and enhance healthcare
                efficiency.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/projects/student-innovator">View Project</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Formula E Team</CardTitle>
              <CardDescription>Suspension Specialist</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full mb-4">
                <Image src="/images/racecar.jpeg" alt="Formula E Racing" fill className="object-cover rounded-md" />
              </div>
              <p className="text-gray-600">
                Designing and analyzing suspension systems for BYU's electric race car using advanced engineering
                software.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/projects/formula-e">View Project</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>FIRST Robotics</CardTitle>
              <CardDescription>Chief Engineer & Mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full mb-4">
                <Image src="/images/robotics.png" alt="Robotics Competition" fill className="object-cover rounded-md" />
              </div>
              <p className="text-gray-600">
                Training robotics teams and leading as chief engineer in international robotics competitions.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/projects/robotics">View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-slate-50 -mx-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "CAD (SOLIDWORKS, Onshape)",
              "Technical Support",
              "Machining",
              "Office Software",
              "Race Software",
              "Python Programming",
              "Leadership",
              "Problem Solving",
            ].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow text-center">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Check Out My From-Scratch Page</h2>
        <p className="text-center text-lg mb-6">
          I've created a page from scratch to showcase my 3D printing and cosplay projects.
        </p>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/from-scratch">View From-Scratch Page</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
