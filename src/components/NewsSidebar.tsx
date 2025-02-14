import React from "react";
import { Link } from "react-router-dom";

export const newsItems = [
  {
    date: "30 January 2025",
    content: <>Ricky is presenting his work at the <a href="https://festivalofgenomics.com/london/en/page/2025-homepage" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Festival of Genomics and Biodata</a> in London. Look out for his talk: "Imaging genetics of brain structure change in adolescence are underpinned by transcriptional programmes of neurodevelopment".</>,
  },
  {
    date: "23 January 2025",
    content: <>We are excited to re-launch the Making Connections Seminar Series with a great line-up of speakers. Over 80 participants tuned in today for Dr Aaron Alexander-Bloch's talk. Don't miss the next one! More details <a href="https://talks.cam.ac.uk/show/index/128590" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">here</a>.</>,
  },
  {
    date: "23 December 2024",
    content: "Petra is elected to the Board of the Network Science Society.",
  },
  {
    date: "12 December 2024",
    content: "Congratulations to Rachel and Maddie for presenting their work at ACNP.",
  },
  {
    date: "6 December 2024",
    content: <>Check out this interesting <a href="https://iu.mediaspace.kaltura.com/media/t/1_zb04rqjs?st=35" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">panel</a> on Network Neuroscience featuring Fabrizio De Vico Fallani (moderator), Dani Bassett, Petra Vértes, Linda Douw and Bratislav Misic.</>,
  },
  {
    date: "16 November 2024",
    content: <>Huge congratulations to Lidia for passing her viva without corrections after "a lovely 3h discussion"! What's more, she was awarded the <a href="https://www2.mrc-lmb.cam.ac.uk/achievements/lmb-student-prize/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Perutz Student Prize</a> for her thesis work.</>,
  },
  {
    date: "10 November 2024",
    content: "Robert will join the group for his MPhil Thesis. Welcome Robert!",
  },
  {
    date: "22 August 2024",
    content: <>Will's beautiful paper on the brain's sulcal morphology is out now in Neuron - take a look <a href="https://www.cell.com/neuron/fulltext/S0896-6273%2824%2900568-3#%20" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">here</a>!</>,
  },
];

const NewsSidebar = () => {
  return (
    <div className="bg-primary/10 p-6 rounded-lg h-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">News</h2>
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200/50 pb-4 last:border-b-0">
            <p className="text-sm font-semibold text-primary mb-2">{item.date}</p>
            <p className="text-gray-800">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="/news" className="text-primary hover:text-secondary font-medium">
          View all news →
        </Link>
      </div>
    </div>
  );
};

export default NewsSidebar;