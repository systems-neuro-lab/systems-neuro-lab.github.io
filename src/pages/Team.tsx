
import { useState } from "react";
import { TeamMember } from "@/types/team";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { TeamMemberDialog } from "@/components/team/TeamMemberDialog";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Petra",
    fullName: "Petra Vértes",
    position: "Group Lead",
    bio: "I lead a talented, interdisciplinary team at the intersection of psychiatry, neuroscience, and applied mathematics. Our research integrates computational modeling, network science, and large-scale data analysis to uncover the biological principles underlying brain organization and dysfunction. We are particularly interested in the mechanisms of neurodevelopmental disorders across scales, from genes and cells to brain networks and behavior.\n\nI hold an MSci in Theoretical Physics and a PhD in Computational Neuroscience from the University of Cambridge, UK. I have held faculty positions in both Mathematics (Queen Mary University of London) and Psychiatry (University of Cambridge). I am a co-founder and organizer of the Cambridge Networks Network, a forum for academics across disciplines with a shared interest in network science.\n\nI also consult for MedTech companies to help translate research into real-world applications. Outside of work, I spend most of my time with family—closely observing neurodevelopment in action.",
    image: "/lovable-uploads/2abb72de-d16f-4be1-8827-68830a24c0e3.png",
    email: "pv226[at]cam.ac.uk"
  },
  {
    id: 2,
    name: "Ben",
    fullName: "Ben Chidiac",
    position: "PhD Student",
    bio: "Researching transdiagnostic imaging markers in psychiatry",
    image: "/lovable-uploads/1a5cc28e-77bc-4623-84ae-dd6c76ff8d14.png"
  },
  {
    id: 3,
    name: "Maddie",
    fullName: "Madeline Garvey",
    position: "PhD Student",
    bio: "I am a combined MD/PhD student in the National Institutes of Health – Cambridge Scholars program. I hold a B.Sc. in Neuroscience from The College of William & Mary in the USA and will return to Georgetown University School of Medicine to finish my MD upon completion of my PhD.\n\nI split my time between the SNL at Cambridge and the Clinical and Translational Neuroscience Branch at the National Institute of Mental Health in Bethesda, Maryland, USA, where I have a joint collaboration with Dr. Karen Berman to study rare genetic disorders involving copy number variations (CNVs) at chromosome 7q11.23, including Williams syndrome and 7q11.23 Duplication syndrome. I hope to uncover connections between genetic alterations and brain phenotypes by synthesizing data from individuals with 7q11.23 CNVs at both micro (genetic/transcriptomics) and macro (brain structure and function) scales using a network neuroscience approach. I hope to create new discoveries about gene-brain-behavior links and how to better develop personalized treatments for individuals with neurodevelopmental disorders.",
    image: "/lovable-uploads/619e5417-6edf-464b-b238-7502e36d7e72.png",
    email: "madeline.garvey[at]nih.gov"
  },
  {
    id: 4,
    name: "Ricky",
    fullName: "Richard Dear",
    position: "PhD Student",
    bio: "Gates Scholar, integrating ALL data to understand brain development in health and disease.",
    image: "/lovable-uploads/3ae98ff0-7708-4c0a-ac50-06195bb57a78.png"
  },
  {
    id: 5,
    name: "Rachel",
    fullName: "Rachel Smith",
    position: "PhD Student",
    bio: "I am a PhD candidate in the National Institutes of Health – Cambridge Scholars program (expected summer 2025). I'm supervised by Professors Petra Vértes and Ed Bullmore in the University of Cambridge Department of Psychiatry, as well as Drs Francis McMahon and Armin Raznahan in the Human Genetics Branch of the National Institute of Mental Health. Previously, I graduated in 2019 from the College of William and Mary with a BS in Neuroscience and minor in Arabic Language and Literature, then completed my post-baccalaureate fellowship in the vascular physiology lab of Dr. Hans Ackerman at the National Institute of Allergy and Infectious Disease.\n\nIn my PhD, I've studied the developmental sensitivity of psychopathology using complementary, network-based approaches. In one project, I characterized the normative development of rat structural brain networks and the impact of early life stress on adult network structure, offering a reference for cross-species comparisons and mechanistic insights into brain architecture. In a parallel project, I applied a multivariate regression technique to human post-mortem transcriptomic data, identifying a robust association between gene expression and schizophrenia that was linked to schizophrenia risk genes. Ultimately, I hope to enhance our understanding of the neurodevelopmental origins of psychiatric disorders across biological scales.",
    image: "/lovable-uploads/25bb1ae2-674d-4aed-9fc3-137d353be601.png"
  },
  {
    id: 6,
    name: "Will",
    fullName: "Will Snyder",
    position: "PhD Student",
    bio: "NIH OxCam Scholar investigating how and why the brain's sulcal patterns form",
    image: "/lovable-uploads/e8c6130e-ee3a-4171-acf4-4c3e8549caa8.png"
  },
  {
    id: 7,
    name: "Sofia",
    fullName: "Sofia Orellana",
    position: "PhD Student",
    bio: "Studying brain development and the impact of early life stress",
    image: "/lovable-uploads/fa89d6e8-1210-430a-b752-d31313173f94.png"
  },
  {
    id: 8,
    name: "Lidia",
    fullName: "Lidia Ripoll-Sanchez",
    position: "Postdoc",
    bio: "Investigating the wired and wireless connectomes of C. elegans to understand principles of neural communication",
    image: "/lovable-uploads/a610c6d6-3830-42a9-9bcd-9547ed192372.png"
  },
  {
    id: 9,
    name: "Iva",
    fullName: "Iva Ilioska",
    position: "Postdoc",
    bio: "Blending reservoir computing and neuroimaging to understand the brain's (dys)functions",
    image: "/lovable-uploads/3663a4ee-0bf5-47e4-8d14-9e68afc71c25.png"
  },
  {
    id: 10,
    name: "Robert",
    fullName: "Robert Crossen",
    position: "MPhil Student",
    bio: "Studying the impact of axonal delays on computation in spiking neural networks",
    image: "/lovable-uploads/154601ef-b5fa-454c-a166-ec15ff755389.png"
  }
];

const alumniMembers: TeamMember[] = [
  {
    id: 11,
    name: "Lena",
    fullName: "Lena Dorfschmidt",
    position: "Former PhD Student",
    bio: 'Went on to a Postdoc at <a href="https://www.upenn.edu/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">University of Pennsylvania</a>, USA',
    image: "/lovable-uploads/df4a093d-e82d-41b4-9a9a-6baa36309cbf.png"
  },
  {
    id: 12,
    name: "Agoston",
    fullName: "Agoston Mihalik",
    position: "Former Postdoc",
    bio: 'Went on to Senior Computational Scientist role at <a href="https://turbine.ai/reengineered/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Turbine</a>',
    image: "/lovable-uploads/1a7e76f4-f3b3-4235-a474-e81a302c67e8.png"
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Team</h1>
          <p className="text-base text-gray-700 mb-8 text-justify">
            Our team brings together diverse backgrounds and expertise - from physics, computer science and biochemistry to medicine, psychology and more. 
            We're excited to study the most interesting complex network there is: the brain. 
            We're also committed to making the lab a fun, collaborative and productive environment for each team member to achieve their goals. 
            If you're a student or postdoc interested in joining us, get in touch!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {teamMembers.map((member) => (
            <div className="max-w-[250px] mx-auto w-full" key={member.id}>
              <TeamMemberCard 
                member={member}
                onClick={setSelectedMember}
                showBioInCard={false}
              />
            </div>
          ))}
        </div>

        {alumniMembers.length > 0 && (
          <>
            <div className="mt-16 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Alumni</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
              {alumniMembers.map((member) => (
                <div className="max-w-[250px] mx-auto w-full" key={member.id}>
                  <TeamMemberCard 
                    member={member}
                    onClick={() => {}} // Empty function for alumni as we show bio on card
                    showBioInCard={true}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <TeamMemberDialog 
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      </div>
    </div>
  );
};

export default Team;
