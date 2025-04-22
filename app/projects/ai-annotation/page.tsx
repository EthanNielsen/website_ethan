import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Annotation Project | Ethan Nielsen",
  description: "Experience as an AI Annotator creating and evaluating prompts for AI training and development",
}

export default function AIAnnotationProject() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Annotation Project</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29.jpg-xfA39w2gktic5NekJrEX6w7FALRDSh.jpeg"
            alt="AI Annotation and Machine Learning"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Project Overview</h2>
          <p>
            As an AI Annotator for Outlier.ai, I worked remotely as a contractor on various AI-related tasks,
            contributing to the development and refinement of artificial intelligence systems. This role, which I held
            from February 2024 to September 2024, allowed me to gain valuable insights into the field of machine
            learning and natural language processing.
          </p>

          <h2>Key Responsibilities</h2>
          <ul>
            <li>Teaching AI systems how to write by providing high-quality examples and feedback</li>
            <li>Creating powerful prompts that challenge and train AI models</li>
            <li>
              Evaluating prompts for accuracy, relevance, and overall effectiveness to ensure high-quality results
            </li>
            <li>Maintaining rigorous standards of grammar, punctuation, and writing quality in all prompt materials</li>
          </ul>

          <h2>Skills Developed</h2>
          <p>
            This project enhanced my understanding of how AI systems learn and process information. I developed
            expertise in prompt engineering, data annotation, and quality assessment for machine learning applications.
            The role required strong attention to detail, excellent writing skills, and an understanding of how
            different prompts affect AI outputs.
          </p>

          <h2>Impact</h2>
          <p>
            My work as an AI Annotator contributed to the improvement of AI systems that are used in various
            applications. By creating effective training materials and providing accurate annotations, I helped enhance
            the performance and reliability of these systems. This experience has given me valuable insights into the
            rapidly evolving field of artificial intelligence and its potential applications.
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
