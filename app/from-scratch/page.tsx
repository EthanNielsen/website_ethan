"use client"

import { useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
// We'll still import the styles for TypeScript/React, but also add a link tag
import "./styles.css"

export default function FromScratch() {
  useEffect(() => {
    // Function to initialize the Tableau visualization
    const initializeTableau = () => {
      const vizContainer = document.getElementById("tableauViz")
      if (!vizContainer) return

      try {
        // Clear any existing content
        while (vizContainer.firstChild) {
          vizContainer.removeChild(vizContainer.firstChild)
        }

        // Create the viz element
        const vizElement = document.createElement("object")
        vizElement.className = "tableauViz"
        vizElement.style.width = "100%"
        vizElement.style.height = "600px"
        vizElement.style.display = "block"

        // Add parameters
        const params = [
          { name: "host_url", value: "https://public.tableau.com/" },
          { name: "embed_code_version", value: "3" },
          { name: "site_root", value: "" },
          { name: "name", value: "OregonsRespiratoryVirusData/TableofContents" },
          { name: "tabs", value: "no" },
          { name: "toolbar", value: "yes" },
          { name: "animate_transition", value: "yes" },
          { name: "display_static_image", value: "yes" },
          { name: "display_spinner", value: "yes" },
          { name: "display_overlay", value: "yes" },
          { name: "display_count", value: "yes" },
          { name: "language", value: "en-US" },
        ]

        // Add parameters to the viz element
        params.forEach((param) => {
          const paramElement = document.createElement("param")
          paramElement.name = param.name
          paramElement.value = param.value
          vizElement.appendChild(paramElement)
        })

        // Add the viz element to the container
        vizContainer.appendChild(vizElement)

        // Create and add the script element
        const scriptElement = document.createElement("script")
        scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js"
        vizContainer.appendChild(scriptElement)

        console.log("Tableau visualization initialized")
      } catch (error) {
        console.error("Error initializing Tableau viz:", error)
      }
    }

    // Initialize the visualization when the component mounts
    initializeTableau()

    // Clean up function
    return () => {
      const vizContainer = document.getElementById("tableauViz")
      if (vizContainer) {
        while (vizContainer.firstChild) {
          vizContainer.removeChild(vizContainer.firstChild)
        }
      }
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/from-scratch/styles.css" />
      </Head>
      <div className="cosplay-page">
        {/* Header div for positioning */}
        <div id="top" className="container header-div">
          <h1 className="main-title">3D Printing & Cosplay</h1>
          <p className="intro-text">
            I love to create fun costumes for cosplay using what I've learned from my engineering background. One of
            which cosplays comes from a game called Pokémon where I created the tail of legendary Pokémon called
            "Zeraora".
          </p>

          {/* Navigation div for positioning */}
          <div className="navigation nav-div">
            <ul className="nav-list">
              <li>
                <a href="#process" className="nav-link">
                  Design Process
                </a>
              </li>
              <li>
                <a href="#materials" className="nav-link">
                  Materials
                </a>
              </li>
              <li>
                <a href="#gallery" className="nav-link">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#video" className="nav-link">
                  3D Printing Tutorial
                </a>
              </li>
              <li>
                <a href="#tableau" className="nav-link">
                  Data Visualization
                </a>
              </li>
              <li>
                <a href="#game" className="nav-link">
                  Snake Game
                </a>
              </li>
            </ul>
          </div>

          <section id="process" className="content-section">
            <h2 className="section-title">The Design Process</h2>
            <p className="section-text">
              Creating a 3D printed cosplay prop involves several steps, from concept to final product. Here's my
              process for creating the Zeraora tail:
            </p>

            {/* Process steps div for positioning */}
            <div className="process-steps process-div">
              <h3>Research & Reference Gathering</h3>
              <ol className="numbered-steps">
                <li>Collect reference images from multiple angles</li>
                <li>Study the character's movement and physics</li>
                <li>Determine scale and proportions</li>
              </ol>

              <h3>3D Modeling</h3>
              <ol className="numbered-steps">
                <li>Create base geometry in CAD software</li>
                <li>Add details and textures</li>
                <li>Ensure printability with proper wall thickness</li>
              </ol>

              <h3>Slicing & Printing</h3>
              <ol className="numbered-steps">
                <li>Segment model into printable parts</li>
                <li>Configure print settings for strength and detail</li>
                <li>Print each segment (often takes several days)</li>
              </ol>

              <h3>Assembly & Finishing</h3>
              <ol className="numbered-steps">
                <li>Remove support structures carefully</li>
                <li>Join segments with adhesives or mechanical fasteners</li>
                <li>Test fit and make adjustments</li>
                <li>Create mounting system for wearability</li>
              </ol>
            </div>
          </section>

          <section id="materials" className="content-section">
            <h2 className="section-title">Materials & Tools</h2>
            <div className="materials-grid">
              <div className="material-box">
                <h3 className="box-title">3D Printing Materials</h3>
                <p className="box-text">
                  For the Zeraora tail, I primarily used PLA filament due to its ease of printing and rigidity. The
                  bright yellow color was perfect for this Pokémon character, and the material holds detail well.
                </p>
              </div>
              <div className="material-box">
                <h3 className="box-title">Design Software</h3>
                <p className="box-text">
                  I used SOLIDWORKS for the initial design, leveraging my engineering background to create a
                  structurally sound model that could be worn comfortably while maintaining the character's aesthetic.
                </p>
              </div>
              <div className="material-box">
                <h3 className="box-title">Printing Equipment</h3>
                <p className="box-text">
                  The tail was printed on a smaller printer with a build volume of 16.14 x 16.14 x 18.31 inches. I had
                  to design the tail to have multiple parts that could be glued together to create the complete tail.
                </p>
              </div>
              <div className="material-box">
                <h3 className="box-title">Finishing Supplies</h3>
                <p className="box-text">
                  After printing, I focused on carefully removing the tree supports from the tail, which was an
                  interesting challenge. The natural finish of the PLA filament provided the vibrant yellow color needed
                  for the character.
                </p>
              </div>
            </div>
          </section>

          <section id="gallery" className="content-section">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-04-21_17-09-29.jpg-1z8tRmzIbfePDvULEguEVOTai7JfQN.jpeg"
                  alt="Zeraora Tail Side View"
                  className="gallery-image"
                />
                <p className="image-caption">Side view of the 3D printed Zeraora tail</p>
              </div>
              <div className="gallery-item">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-04-21_17-09-35.jpg-XZHnzmWgW3iruEZbk38lpO3uNxRXN3.jpeg"
                  alt="Zeraora Tail Rear View"
                  className="gallery-image"
                />
                <p className="image-caption">Rear view showing the attachment mechanism</p>
              </div>
            </div>
          </section>

          <section id="video" className="content-section">
            <h2 className="section-title">3D Printing Tutorial</h2>
            <div className="video-container">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/gokN9xNG94U"
                title="3D Printing Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-frame"
              ></iframe>
            </div>
            <p className="video-caption">
              This tutorial covers the basics of 3D printing for cosplay props, including material selection, printer
              settings, and post-processing techniques for achieving professional-looking results.
            </p>
          </section>

          <section id="tableau" className="content-section">
            <h2 className="section-title">Data Visualization</h2>
            <p className="tableau-intro">
              While not directly related to 3D printing, here's an interactive visualization of Oregon's Respiratory
              Virus Data:
            </p>
            <div className="tableau-container">
              <div id="tableauViz" style={{ width: "100%", height: "600px", position: "relative" }}></div>
            </div>
            <p className="tableau-caption">
              This visualization shows trends in respiratory viruses in Oregon, demonstrating how data can be presented
              interactively.
            </p>
          </section>

          <section id="game" className="content-section">
            <h2 className="section-title">Try My Snake Game</h2>
            <p className="game-intro">I've created a simple Snake game using JavaScript. Give it a try!</p>
            <div className="game-button-container">
              <Link href="/from-scratch/snake-game" className="game-button">
                Play Snake Game
              </Link>
            </div>
          </section>

          <div className="back-link-container">
            <Link href="/" className="back-link">
              Back to Professional Portfolio
            </Link>
            <a href="#top" className="back-link">
              Back to Top
            </a>
          </div>
        </div>

        {/* Fixed back to top button */}
        <a href="#top" className="back-to-top" aria-label="Back to top">
          ↑
        </a>
      </div>
    </>
  )
}
