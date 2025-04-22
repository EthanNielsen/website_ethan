import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "3D Printed Cosplay Props | Ethan Nielsen",
  description: "Creating detailed cosplay props using 3D printing technology, including the Zeraora tail from Pokémon",
}

export default function CosplayProject() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">3D Printed Cosplay Props</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-04-21_17-09-35.jpg-IBPaA4ZBToVOOOUCnO1LOZ131ATv9T.jpeg"
            alt="3D Printed Zeraora Tail"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Project Overview</h2>
          <p>
            Combining my engineering background with my creative interests, I design and create detailed cosplay props
            using 3D printing technology. One of my notable projects is the Zeraora tail from Pokémon, which showcases
            my ability to translate digital designs into functional physical objects.
          </p>

          <h2>Design Process</h2>
          <ul>
            <li>
              Research & Reference Gathering: Collected reference images from multiple angles, studied the character's
              movement and physics, and determined scale and proportions
            </li>
            <li>
              3D Modeling: Created base geometry in CAD software (SOLIDWORKS), added details and textures, and ensured
              printability with proper wall thickness
            </li>
            <li>
              Slicing & Printing: Segmented model into printable parts, configured print settings for strength and
              detail, and printed each segment
            </li>
            <li>
              Assembly & Finishing: Removed support structures, joined segments with adhesives, and created a mounting
              system for wearability
            </li>
          </ul>

          <h2>Technical Challenges</h2>
          <p>
            Creating the Zeraora tail presented several technical challenges, including designing for both aesthetics
            and structural integrity. The tail needed to be lightweight enough to wear comfortably while maintaining the
            distinctive shape and appearance of the character. I used PLA filament for its rigidity and bright yellow
            color, which was perfect for this Pokémon character.
          </p>

          <h2>Skills Applied</h2>
          <p>
            This project demonstrates my proficiency in CAD design, 3D printing technology, and problem-solving. It also
            showcases my ability to apply engineering principles to creative projects, bridging the gap between
            technical knowledge and artistic expression.
          </p>

          <div className="mt-6">
            <Link href="/from-scratch" className="text-blue-600 hover:underline">
              See more details about this project on my From-Scratch page
            </Link>
          </div>
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
