import React from "react";
import NewsSidebar from "../components/NewsSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome!
              </h1>
              <p className="text-base text-gray-700 mb-6 text-justify">
                We are an interdisciplinary research group at the{" "}
                <a
                  href="https://www.cam.ac.uk/"
                  className="text-primary hover:text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Cambridge
                </a>
                , interested in understanding structure-function relationships in the brain in both health and disease. We are particularly interested in disorders with a neurodevelopmental origin including depression, schziophrenia, autism spectrum disorders and Rett Syndrome. We seek to find mechanistic links connecting our understanding across scales, from genes to cells, circuits, tissues, to the whole brain and all the way to behaviour.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Key questions that motivate our work include:
              </h2>
              <ul className="list-disc pl-8 space-y-2 text-base text-gray-700 mb-6">
                <li className="ml-4">How does the structure of the brain underpin its many functions and (dys)functions, across scales and species?</li>
                <li className="ml-4">What is the biological basis of complex psychiatric and neurodevelopmental disorders such as schizophrenia and depression?</li>
                <li className="ml-4">How can we move from genomic insights to therapeutic progress for these disorders?</li>
              </ul>

              <p className="text-base text-gray-700 mb-4 text-justify">
                Our work draws on a wide range of methods and datasets, across different species/model systems. In particular, most of our projects lie at the intersection of Psychiatry, Applied Maths and Data Science, and Basic Neuroscience.
              </p>
              
              <div className="relative w-full max-w-2xl mx-auto mb-6">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src="/lovable-uploads/b866f816-e532-425a-92c9-a9a96640aab8.png"
                    alt="Lab Venn Diagram showing intersection of Psychiatry, Applied Maths & Data Science, and Basic Neuroscience, featuring brain imaging, computer, and DNA illustrations"
                    className="object-contain w-full h-full"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <p className="text-base text-gray-700 mb-4 text-justify">
                We have strong collaborative ties across the world, and across many departments and institutes in Cambridge.
              </p>

              <div className="relative w-full">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src="/lovable-uploads/88367c10-704f-4209-ba32-c1acb0db5f12.png"
                    alt="Map showing global research collaborations with various institutions including Cambridge, Stanford, NIH, and other leading universities, along with departmental collaborations"
                    className="object-contain w-full h-full"
                    width={1200}
                    height={800}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <NewsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;