import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">Ethan Nielsen</h2>
          <p>Draper, UT 84070 USA</p>
          <p>
            +1 (385) 209 4225 |{" "}
            <a href="mailto:gethannielsen@gmail.com" className="text-blue-600 hover:underline">
              gethannielsen@gmail.com
            </a>
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Employment / Experience</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                Paid Internship – Guest Services (Family Search Library Headquarters)
              </h3>
              <p className="text-gray-600">Church of Jesus Christ of Latter-Day Saints Employee</p>
              <p className="text-gray-500">May 2023 — Apr 2024</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Demonstrated exceptional problem-solving skills by resolving over 2,500 technical issues and inquiries
                  at the Family Search Building, positively impacting thousands of individuals in their pursuit of
                  family history.
                </li>
                <li>
                  Worked caringly & patiently alongside the Elderly to help support them in documenting their family
                  history.
                </li>
                <li>
                  Proactively repaired major components throughout the library such as server systems, printer
                  malfunctions, physical & digital family history discovery experiences, and computer systems.
                </li>
                <li>
                  Collaborated effectively between 100+ volunteers and employees daily, fostering open communication to
                  cultivate a positive work environment.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">AI Annotator (Contractor)</h3>
              <p className="text-gray-600">Outlier.ai, remote</p>
              <p className="text-gray-500">Feb 2024 — Sep 2024</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Working as a remote contractor on various AI-related tasks like the following:</li>
                <li>Teaching AI systems how to write.</li>
                <li>Creating powerful prompts that challenge and train AI.</li>
                <li>
                  Evaluating prompts for accuracy, relevance, and overall effectiveness, ensuring high-quality results.
                </li>
                <li>
                  Maintained rigorous standards of grammar, punctuation, and writing quality in all prompt materials.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Suspension Specialist</h3>
              <p className="text-gray-600">Formula E Team (BYU)</p>
              <p className="text-gray-500">Jul 2023 — Sep 2024</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Connected with race engineering companies AFCO & TannerMB to acquire specifications for Quarter midget
                  shocks.
                </li>
                <li>Sorted through data to analyze and plan which shocks to best use for the electric race car.</li>
                <li>
                  Utilized online software to design different types of suspensions using Vsup, Onshape, and Solidworks.
                </li>
                <li>
                  Educated team members on suspension principles and progress through weekly accountability reports.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Full-Time Representative (Missionary)</h3>
              <p className="text-gray-600">The Church of Jesus Christ of Latter-Day Saints</p>
              <p className="text-gray-500">May 2019 — Aug 2022</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Dedicated over 2 years to a proselyting mission in Guatemala, later reassigned to Georgia due to the
                  COVID-19 pandemic.
                </li>
                <li>Studied Spanish daily, mastering the importance of polite, humble communication.</li>
                <li>
                  Managed a strict daily schedule (6:30 AM – 9 PM), coordinating meetings, lessons, and service projects
                  for community outreach.
                </li>
                <li>
                  Appointed as Language Captain for the Georgia Atlanta North Mission, overseeing language studies for
                  500+ missionaries across multiple languages, including Filipino and Spanish.
                </li>
                <li>
                  Led and mentored teams of 6-30 volunteers, fostering collaboration and motivation to achieve our
                  mission's goal of inviting others to come unto Christ.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Chief Engineer/Mentor</h3>
              <p className="text-gray-600">FIRST Robotics – International Robotics Competition</p>
              <p className="text-gray-500">Aug 2015 — Aug 2019</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Trained a dynamic robotics team, optimizing limited time and resources to design, wire, and construct
                  industrial-sized robots for international competitive field games.
                </li>
                <li>
                  Took on multiple leadership roles such as programmer using Java and Python, pit crew mentor, and chief
                  engineer training students to maintain and control over $10,000+ components.
                </li>
                <li>
                  Fostered STEM interest through community outreach, from mentoring students in creating their own
                  robots to inspiring youth through elementary & middle school STEM festivals.
                </li>
                <li>
                  Operated as the team's main driver for competition weekends by ensuring pit crew safety, verifying
                  correct vehicle connections, improving driver control through tuning robot settings for each game, and
                  leading by example.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Science: Pre-Business (Entrepreneurship Track, Intended)
            </h3>
            <p className="text-gray-600">Brigham Young University</p>
            <p className="text-gray-500">Aug 2022 — Aug 2027</p>
            <p className="font-medium">GPA: 3.5</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                <strong>Engineering Background:</strong> Completed core coursework in Mechanical Engineering, including
                Computational Methods, Materials Science, Dynamics, and Technical Communication. Developed strong
                analytical and design skills through hands-on projects and CAD-based prototyping.
              </li>
              <li>
                <strong>Entrepreneurship Focus:</strong> Currently completing foundational business courses in
                preparation for applying to the Entrepreneurship program. Passionate about leveraging engineering and
                design experience to create innovative solutions and launch impactful products.
              </li>
              <li>
                <strong>Club Involvement:</strong> Student Innovator of The Year, Crocker Innovation Fellowship, BYU
                Creators, Big Brother/sister program (ACCESS), BYU Aeronautics, Racing Formula E
              </li>
              <li>
                <strong>Awards:</strong> Received Renewable Dominion Energy Educational Equity scholarship due to high
                academic performance and community involvement.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Projects / Research</h2>
          <div>
            <h3 className="text-xl font-semibold">Main Project Lead</h3>
            <p className="text-gray-600">Student Innovator Of the Year (BYU)</p>
            <p className="text-gray-500">Jul 2024 — Feb 2025</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Participated in the SIOY competition with a project that enhances healthcare efficiency through AI.
              </li>
              <li>Lead the development of an AI tool to diagnose physical misalignments.</li>
              <li>Designed an AI system to streamline diagnostics and improve patient care.</li>
              <li>Created a model that identifies posture issues to enhance workflow for physical therapists.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>High CAD Proficiency — SOLIDWORKS, Onshape</li>
                  <li>
                    Technical Support — Hardware and Software Support, Technical Assistance, System Maintenance,
                    Mechanical Inspection
                  </li>
                  <li>Machining — Manual mill, Manual lathe, Bandsaw, Iron Bending Manual Plate</li>
                  <li>
                    Office Software — Microsoft Excel, Project Data Visualization, Microsoft Word, Project Documentation
                  </li>
                  <li>Race Software — VSup, Onshape</li>
                  <li>Python Programming</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Certifications/Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Finish First — Scott Hamilton (Book)</li>
                  <li>Atomic Habits — James Clear (Book)</li>
                  <li>
                    How to Be Both Assertive and Likable — American Negotiation Institute and Kwame Christian (Online
                    Course Certificate)
                  </li>
                  <li>Business Management — Naomi Simson (Online Course Certificate)</li>
                  <li>Robotics Wiring — FIRST Robotics experience & Electrical Engineering</li>
                  <li>FIRST Robotics Lead Driver & Competition Success</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Statement</h2>
          <p className="italic">
            Bring success to the team through proactive action, service, and a team player attitude.
          </p>
        </section>
      </div>
    </div>
  )
}
