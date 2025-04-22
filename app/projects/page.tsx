import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Ethan Nielsen",
  description: "Explore Ethan Nielsen's portfolio of projects in engineering, AI, robotics, and more",
}

const projects = [
  {
    id: 1,
    title: "Student Innovator of the Year",
    description: "AI tool to diagnose physical misalignments and enhance healthcare efficiency.",
    image: "/images/ptAI.png",
    tags: ["AI", "Healthcare", "Diagnostics", "Innovation"],
    detailUrl: "/projects/student-innovator",
  },
  {
    id: 2,
    title: "Formula E Racing",
    description: "Suspension design and analysis for BYU's electric race car.",
    image: "/images/racecar.jpeg",
    tags: ["Engineering", "CAD", "Suspension Design", "Racing"],
    detailUrl: "/projects/formula-e",
  },
  {
    id: 3,
    title: "FIRST Robotics Competition",
    description: "Leading as chief engineer in international robotics competitions.",
    image: "/images/robotics.png",
    tags: ["Robotics", "Engineering", "Leadership", "Programming"],
    detailUrl: "/projects/robotics",
  },
  {
    id: 4,
    title: "3D Printed Cosplay Props",
    description: "Creating detailed cosplay props using 3D printing technology.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-04-21_17-09-35.jpg-IBPaA4ZBToVOOOUCnO1LOZ131ATv9T.jpeg",
    tags: ["3D Printing", "Cosplay", "Design", "Engineering"],
    detailUrl: "/projects/cosplay",
  },
  {
    id: 5,
    title: "Technical Support Systems",
    description: "Developing and maintaining technical support systems for Family Search Library.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download.jpg-CTZ4H2pRrB8SJoBr1cAX8QLmEiOGcH.jpeg",
    tags: ["IT Support", "Troubleshooting", "System Maintenance"],
    detailUrl: "/projects/technical-support",
  },
  {
    id: 6,
    title: "AI Annotation Project",
    description: "Creating and evaluating prompts for AI training and development.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29.jpg-xfA39w2gktic5NekJrEX6w7FALRDSh.jpeg",
    tags: ["AI", "Machine Learning", "Data Annotation", "NLP"],
    detailUrl: "/projects/ai-annotation",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center">My Projects</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">Here are some of the projects I've worked on</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href={project.detailUrl}>View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
        <p className="text-gray-600 mb-6">
          Check out my from-scratch page to see my 3D printing and cosplay projects, including a fun Snake game!
        </p>
        <Button asChild>
          <Link href="/from-scratch">View From-Scratch Page</Link>
        </Button>
      </div>
    </div>
  )
}
