import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Student Innovator of the Year | Ethan Nielsen",
  description:
    "AI Healthcare Diagnostics project for enhancing physical therapy efficiency through AI-powered posture analysis",
}

export default function StudentInnovatorProject() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Student Innovator of the Year</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/ptAI.png"
            alt="AI Healthcare Diagnostics Project"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Project Overview</h2>
          <p>
            As the Main Project Lead for the Student Innovator of the Year (SIOY) competition at BYU, I led the
            development of an innovative AI tool designed to enhance healthcare efficiency through advanced diagnostics.
          </p>

          <h2>Key Contributions</h2>
          <ul>
            <li>Led the development of an AI tool specifically designed to diagnose physical misalignments</li>
            <li>Created an AI system that streamlines diagnostics and improves patient care</li>
            <li>Developed a model that identifies posture issues to enhance workflow for physical therapists</li>
            <li>Integrated healthcare expertise with cutting-edge AI technology to create practical solutions</li>
          </ul>

          <h2>Technology Stack</h2>
          <p>
            This project leverages computer vision and machine learning algorithms to analyze patient posture and
            movement patterns. The system provides real-time feedback to physical therapists, allowing for more accurate
            diagnoses and personalized treatment plans.
          </p>

          <h2>Impact</h2>
          <p>
            The AI diagnostic tool has the potential to significantly reduce assessment time for physical therapists
            while improving the accuracy of diagnoses. This innovation represents a meaningful step forward in using
            technology to enhance healthcare delivery and patient outcomes.
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
