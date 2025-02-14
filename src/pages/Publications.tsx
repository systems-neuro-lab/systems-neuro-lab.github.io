import React from 'react';

const Publications = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Publications</h1>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Primary research papers:</h2>
        <ul className="list-none space-y-4 text-base text-gray-700 ml-6 mb-8">
          <li>
            <span className="font-bold">Three transcriptional axes underpin anatomy, development, and disorders of the human cortex</span><br />
            Dear R, Seidlitz J, Markello RD, Arnatkeviciute A, ..., and Vértes PE<br />
            <a href="https://www.nature.com/articles/s41593-024-01624-4" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature Neuroscience (2024)</a>
          </li>

          <li>
            <span className="font-bold">A bimodal taxonomy of adult human brain sulcal morphology related to timing of fetal sulcation and trans-sulcal gene expression gradients</span><br />
            Snyder WE, Vértes PE, Kyriakopoulou V, Wagstyl K, Williams LZJ, Moraczewski D, ..., and Bullmore ET<br />
            <a href="https://doi.org/10.1016/j.neuron.2024.07.023" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Neuron (2024)</a>
          </li>

          <li>
            <span className="font-bold">Connectome-based reservoir computing with the conn2res toolbox</span><br />
            Suárez LE, Mihalik A, Milisav F, Marshall K, Li M, Vértes PE, Lajoie G, Misic B<br />
            <a href="https://www.nature.com/articles/s41467-024-44900-4" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature Communications (2024)</a>
          </li>

          <li>
            <span className="font-bold">Childhood maltreatment influences adult brain structure through its effects on immune, metabolic, and psychosocial factors</span><br />
            Orellana SC, Bethlehem RAI, Simpson-Kent IL, van Harmelen AL*, Vértes PE*, Bullmore ET*<br />
            <a href="https://www.pnas.org/doi/full/10.1073/pnas.2304704121" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2024)</a>
          </li>
          
          <li>
            <span className="font-bold">The neuropeptidergic connectome of C. elegans</span><br />
            Ripoll Sanchez L, Watteyne J, Sun H, Fernandez R, ..., Vértes PE* and Schafer WR*<br />
            <a href="https://www.cell.com/neuron/pdf/S0896-6273(23)00756-0.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Neuron (2023)</a>
          </li>
          
          <li>
            <span className="font-bold">Molecular and network-level mechanisms explaining individual differences in autism spectrum disorder</span><br />
            Buch A, Vértes PE, Seidlitz J, Kim SH, Grosenick L and Liston C<br />
            <a href="https://www.nature.com/articles/s41593-023-01259-x" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature Neuroscience (2023)</a>
          </li>
          
          <li>
            <span className="font-bold">System-wide mapping of peptide-GPCR interactions in C. elegans</span><br />
            Beets I, ..., Vértes PE, Mirabeau O, Schoofs L<br />
            <a href="https://www.cell.com/cell-reports/pdf/S2211-1247(23)01069-0.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Cell Reports (2023)</a>
          </li>
          
          <li>
            <span className="font-bold">Transcriptional cartography integrates multiscale biology of the human cortex</span><br />
            Wagstyl K, Adler S, Seidlitz J, Vandekar S, Mallard TT, ..., Vértes PE, ..., and Raznahan A<br />
            <a href="https://elifesciences.org/articles/86933.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">eLife (2023)</a>
          </li>
          
          <li>
            <span className="font-bold">Early adversity changes the economic conditions of structural brain network organisation</span><br />
            Carozza S, Holmes J, Vértes PE, Bullmore ET, Arefin T, ..., and Astle D<br />
            <a href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/dev.22405" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Developmental Psychobiology (2023)</a>
          </li>
          
          <li>
            <span className="font-bold">Semantic speech networks linked to formal thought disorder in early psychosis</span><br />
            Nettekoven C, Diederen K, ..., Vértes PE, ..., Morgan SE* and McGuire P*<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10031728/pdf/sbac056.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Schizophrenia Bulletin (2023)</a>
          </li>
          
          <li>
            <span className="font-bold">Regional gene expression signatures are associated with sex-specific functional connectivity changes in depression</span><br />
            Talishinsky A, Downar J, RAI, Vértes PE, ..., Liston C<br />
            <a href="https://www.nature.com/articles/s41467-022-32617-1" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature Communications (2022)</a>
          </li>
          
          <li>
            <span className="font-bold">Sexually divergent adolescent brain network development is co-located with imaging and transcriptomic phenotypes of depression</span><br />
            Dorfschmidt L, Bethlehem RAI, Vása F, Romero-Garcia R, ..., Vértes PE* and Bullmore ET*<br />
            <a href="https://www.science.org/doi/full/10.1126/sciadv.abm7825" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Science Advances (2022)</a>
          </li>
          
          <li>
            <span className="font-bold">Brain charts for the human lifespan</span><br />
            Bethlehem RAI, Seidlitz J, White SR, Vogel JW, Anderson KM, ... Vértes PE, ..., and Alexander-Bloch AF<br />
            <a href="https://www.nature.com/articles/s41586-022-04554-y" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature (2022)</a>
          </li>
          
          <li>
            <span className="font-bold">Multi-centre Epilepsy Lesion Detection (MELD) Project: Predictors of lesion location and postsurgical seizure freedom in focal cortical dysplasia</span><br />
            Wagstyl K, Whitaker KJ, Raznahan A, Seidlitz J, Vértes PE, ..., and Adler S<br />
            <a href="https://www.medrxiv.org/content/10.1101/2021.02.01.21250734v1.full" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Epilepsia (2022)</a>
          </li>
          
          <li>
            <span className="font-bold">A generative network model of neurodevelopmental diversity in structural brain organization</span><br />
            Akarca D, Vértes PE, Bullmore ET and Astle D<br />
            <a href="https://www.nature.com/articles/s41467-021-24430-z" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature Communications (2021)</a>
          </li>
          
          <li>
            <span className="font-bold">Natural Language Processing markers in first episode psychosis and people at clinical high-risk</span><br />
            Morgan SE, Diederen K, Vértes PE, ..., and McGuire P<br />
            <a href="https://www.nature.com/articles/s41398-021-01722-y" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Translational Psychiatry (2021)</a>
          </li>
          
          <li>
            <span className="font-bold">Dysconnectivity of a brain functional network was associated with blood inflammatory markers in depression</span><br />
            Aruldass AR, Kitzbichler M, Morgan SE, Lynall M-E, Turner L, Vértes PE, ..., and Bullmore ET<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/34450247/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Brain, Behavior, and Immunity (2021)</a>
          </li>
          
          <li>
            <span className="font-bold">Conservative and disruptive modes of adolescent change in human brain functional connectivity</span><br />
            Vása F, Romero-Garcia R, Kitzbichler MG, Seiflitz J, ..., Vértes PE* and Bullmore ET*<br />
            <a href="https://www.pnas.org/doi/10.1073/pnas.1906144117" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2020)</a>
          </li>
          
          <li>
            <span className="font-bold">Schizotypy-related magnetization of cortex in healthy adolescence is colocated with expression of schizophrenia-related genes</span><br />
            Romero-Garcia, Seidlitz J, Whitaker KJ, ..., Vértes PE* and Bullmore ET*<br />
            <a href="https://europepmc.org/article/med/32029217" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Biological Psychiatry (2020)</a>
          </li>
          
          <li>
            <span className="font-bold">Transcriptomic and cellular decoding of regional brain vulnerability to neurodevelopmental disorders</span><br />
            Seidlitz J, Nadig A, Liu S, Bethlehem RAI, Vértes PE, ..., and Raznahan A<br />
            <a href="https://www.nature.com/articles/s41467-020-17051-5.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature Communications (2020)</a>
          </li>
          
          <li>
            <span className="font-bold">Compulsivity is linked to reduced adolescent development of goal-directed control and frontostriatal functional connectivity</span><br />
            Vaghi M, Moutoussis M, Vása F, Kievit RA, Hauser TU, Vértes PE, ..., and Dolan RJ, and NSPN Consortium<br />
            <a href="https://www.pnas.org/content/pnas/117/41/25911.full.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2020)</a>
          </li>
          
          <li>
            <span className="font-bold">Major depressive disorder is associated with differential expression of innate immune and neutrophil-related gene networks in peripheral blood: A quantitative review of whole genome transcriptional data from case-control studies</span><br />
            Wittenberg GM, Greene J, Vértes PE, Drevets WC and Bullmore ET<br />
            <a href="https://www.biologicalpsychiatryjournal.com/article/S0006-3223(20)31591-2/abstract" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Biological Psychiatry (2020)</a>
          </li>
          
          <li>
            <span className="font-bold">Multi-subject stochastic blockmodels for adaptive analysis of individual differences in human brain network cluster structure</span><br />
            Pavlovic DM, Guillaume BRL, Towlson EK, ..., Vértes PE, ..., and Nichols T<br />
            <a href="https://europepmc.org/article/med/32058004" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">NeuroImage (2020)</a>
          </li>
          
          <li>
            <span className="font-bold">Reinforcement learning as an intermediate phenotype in psychosis? Deficits sensitive to illness stage but not associated with polygenic risk of schizophrenia in the general population</span><br />
            Montagnese M, Knolle F, Haarsma J, ..., Vértes PE, ..., Murray GK and NSPN Consortium<br />
            <a href="https://europepmc.org/article/MED/32389614" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Schizophrenia Research (2020)</a>
          </li>
          
          <li>
            <span className="font-bold">Using fMRI connectivity to define a treatment-resistant form of post-traumatic stress disorder</span><br />
            Etkin A*, Fonzo G*, Wu W*, Huemer J*, Patenaude B*, Vértes PE*, ..., and O'Hara R<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6980337/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Science Translational Medicine (2019)</a>
          </li>
          
          <li>
            <span className="font-bold">Cortical patterning of abnormal morphometric similarity in psychosis is associated with brain expression of schizophrenia-related genes</span><br />
            Morgan SE, Seidlitz J, Whitaker KJ, ..., Vértes PE* and Bullmore ET*<br />
            <a href="https://www.pnas.org/content/pnas/116/19/9604.full.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2019)</a>
          </li>
          
          <li>
            <span className="font-bold">Brain networks reveal the effects of antipsychotic drugs on schizophrenia patients and controls</span><br />
            Towlson EK, Vértes PE, Muller U and Ahnert SE<br />
            <a href="https://www.frontiersin.org/articles/10.3389/fpsyt.2019.00611/full" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Frontiers in Psychiatry (2019)</a>
          </li>
          
          <li>
            <span className="font-bold">Brain-behaviour modes of covariation in healthy and clinically depressed young people</span><br />
            Mihalik A, Ferreira FS, Rosa MJ, Moutoussis M, Ziegler G, ..., Vértes PE, ..., and Mourao-Miranda J<br />
            <a href="https://www.nature.com/articles/s41598-019-47277-3" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Scientific Reports (2019)</a>
          </li>
          
          <li>
            <span className="font-bold">A moment of change: shifts in myeloarchitecture characterise adolescent development of cortical gradients</span><br />
            Paquola C, Bethlehem RAI, Seidlitz J, Wagstyl K, ..., Vértes PE, ..., Bullmore ET and NSPN Consortium<br />
            <a href="https://elifesciences.org/articles/50482" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">eLife (2019)</a>
          </li>
          
          <li>
            <span className="font-bold">Waves of maturation and senescence in micro-structural MRI markers of human cortical myelination over the lifespan</span><br />
            Grydeland H, Vértes PE, Vása F, Romero-Garcia R, Whitaker KJ, ..., and Bullmore ET<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373687/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Cerebral Cortex (2019)</a>
          </li>
          
          <li>
            <span className="font-bold">Multimodal imaging of brain connectivity reveals predictors of individual strategy in statistical learning</span><br />
            Karlaftis VM, Giorgio J, Vértes PE, Wang R, Shend Y, Tino P, Welchman A and Kourtzi Z<br />
            <a href="https://www.nature.com/articles/s41562-018-0503-4" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature Human Behaviour (2019)</a>
          </li>
          
          <li>
            <span className="font-bold">Caenorhabditis elegans and the network control framework-FAQs</span><br />
            Towlson EK, Vértes PE, Yan G, Chew YL, Walker DS, Schafer WR and Barabasi A-L<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6158218/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Philosophical Transactions B (2018)</a>
          </li>
          
          <li>
            <span className="font-bold">Structural covariance networks are coupled to expression of genes enriched in supragranular layers of the human cortex</span><br />
            Romero-Garcia R, Whitaker KJ, Vása F, Rubinov M, Steidlitz J, Shinn M, Fonagy P, Dolan RJ, Jones PB, Goodyear IM, the NSPN Consortium, Vértes PE* and Bullmore ET*<br />
            <a href="https://www.sciencedirect.com/science/article/pii/S1053811917310844" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">NeuroImage (2018)</a>
          </li>
          
          <li>
            <span className="font-bold">Replicable and coupled changes in innate and adaptive immune gene expression in two case-control studies of blood microarrays in major depressive disorder</span><br />
            Leday G*, Vértes PE*, Richardson S, Greene JR, Khan S, Henderson R, Freeman TC, Regan T, Pariante CM, Harrison NA, MRC Immunopsychiatry Consortium, Perry HV, Drevets WC, Wittenberg GM and Bullmore ET<br />
            <a href="http://www.biologicalpsychiatryjournal.com/article/S0006-3223(17)31617-7/fulltext" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Biological Psychiatry (2018)</a>
          </li>
          
          <li>
            <span className="font-bold">Morphometric similarity networks detect microscale cortical organisation and predict inter-individual cognitive variation</span><br />
            Seidlitz J, Vása F, Shinn M, Romero-Garcia R, Whitaker KJ, Vértes PE, ..., Bullmore ET and the NSPN Consortium<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/29276055/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Neuron (2018)</a>
          </li>
          
          <li>
            <span className="font-bold">Low dimensional morphospace of topological motifs in human fMRI brain networks</span><br />
            Morgan S, Achard S, Termenon M, Bullmore ET and Vértes PE<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6130546/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Network Neuroscience (2018)</a>
          </li>
          
          <li>
            <span className="font-bold">Network control principles predict neuron function in the <i>Caenorhabditis elegans</i> connectome</span><br />
            Yan G*, Vértes PE*, Towlson EK*, Chew YL, Walker DS, Schafer WR and Barabasi A-L<br />
            <a href="https://www.nature.com/articles/nature24056" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Nature (2017)</a>
          </li>
          
          <li>
            <span className="font-bold">Recordings of Caenorhabditis elegans locomotor behaviour following targeted ablation of single motorneurons</span><br />
            Chew YL, Walker DS, Towlson EK, Vértes PE, Yan G, Barabasi A-L and Schafer WR<br />
            <a href="https://www.nature.com/articles/sdata2017156" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Scientific Data (2017)</a>
          </li>
          
          <li>
            <span className="font-bold">Adolescent tuning of association cortex in human structural brain networks</span><br />
            Vása F, Seidlitz J, Romero-Garcia R, Whitaker KJ, Rosenthal G, Vértes PE, ..., Bullmore ET and the NSPN Consortium<br />
            <a href="https://academic.oup.com/cercor/article/28/1/281/4566607" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Cerebral Cortex (2017)</a>
          </li>
          
          <li>
            <span className="font-bold">Versatility of nodal affiliation to communities</span><br />
            Shinn M, Romero-Garcia R, Seidlitz J, Vása F, Vértes PE and Bullmore ET<br />
            <a href="https://www.nature.com/articles/s41598-017-03394-5" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Scientific Reports (2017)</a>
          </li>
          
          <li>
            <span className="font-bold">Specific fronto-striatal circuits for impaired cognitive flexibility and goal-directed planning in Obsessive-Compulsive Disorder: Evidence from resting-state functional connectivity</span><br />
            Vaghi M, Vértes PE, Kitzbichler MG, Apergis-Schoute AM, van der Flier FE, Fineberg NA, Sule A, Zaman R, Voon V, Kundu P, Bullmore ET and Robbins TW<br />
            <a href="http://www.sciencedirect.com/science/article/pii/S0006322316326701" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Biological Psychiatry (2017)</a>
          </li>
          
          <li>
            <span className="font-bold">Adolescence is associated with transcriptionally patterned consolidation of the hubs of the human brain connectome</span><br />
            Whitaker KJ*, Vértes PE*, Romero-Garcia R, Vá ̆sa F, Moutoussis M, Prabhu G, Weiskopf N, Callaghan MF, Wagstyl KS, Rittman T, Tait R, Ooi C, Suckling J, Inkster B, Fonagy P, Dolan RJ, Jones PB, Goodyer IM, the NSPN Consortium and Bullmore ET<br />
            <a href="http://www.pnas.org/content/113/32/9105.short" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2016)</a>
          </li>
          
          <li>
            <span className="font-bold">Gene transcription profiles associated with intra-modular and inter-modular hubs in human fMRI networks</span><br />
            Vértes PE, Rittman T, Whitaker KJ, Romero-Garcia R, Vása F, Kitzbichler MG, Fonagy P, Dolan RJ, Jones PB, Goodyer IM, the NSPN Consortium and Bullmore ET<br />
            <a href="http://rstb.royalsocietypublishing.org/content/371/1705/20150362" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Philosophical Transactions B (2016)</a>
          </li>
          
          <li>
            <span className="font-bold">The multilayer connectome of Caenorhabditis elegans</span><br />
            Bentley B, Branicky R, Barnes CL, Chew YL, Yemini E, Bullmore ET, Vértes PE* and Schafer WR*<br />
            <a href="http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005283" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PLoS Computational Biology (2016)</a>
          </li>
          
          <li>
            <span className="font-bold">Peripheral immune cell populations associated with cognitive deficits and negative symptoms of chronic schizophrenia</span><br />
            Fernandez-Egea E*, Vértes PE*, Flint SM*, Turner L, Mustafa S, Hatton A, Smith K, Lyons PA, Bulllmore ET<br />
            <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0155631" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PLoS ONE (2016)</a>
          </li>
          
          <li>
            <span className="font-bold">Regional expression of the MAPT gene predicts loss of functional hub connections and cognitive dysfunction in Parkinson's disease and Progressive Supranuclear Palsy</span><br />
            RittmanT, Rubinov M, Vértes PE, Patel AX, Ghosh BCP, Barker RA, Spillantini MG, Bullmore ET and Rowe JB<br />
            <a href="http://www.neurobiologyofaging.org/article/S0197-4580(16)30206-8/abstract" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Neurobiology of Ageing (2016)</a>
          </li>
          
          <li>
            <span className="font-bold">Generative models of the human connectome</span><br />
            Betzel RF, Avena-Koenigsberger A, Goñi J, He Y, de Reus MA, Griffa A, Vértes PE, Misic B, Thiran J-P, Hagmann P, van den Heuvel M, Zuo X-N, Bullmore ET, Sporns O<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4655950/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">NeuroImage (2015)</a>
          </li>
          
          <li>
            <span className="font-bold">Large-scale functional brain network reorganization during Taoist meditation</span><br />
            Jao T, Lee C-W, Vértes PE, Wu C, Liou C-H, Chen J-H and Bullmore ET<br />
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/26165867" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Brain Connectivity (2015)</a>
          </li>
          
          <li>
            <span className="font-bold">Generative models of rich clubs in Hebbian neuronal networks and large-scale human brain networks</span><br />
            Vértes PE, Alexander-Bloch A and Bullmore ET<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4150306/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Philosophical Transactions B (2014)</a>
          </li>
          
          <li>
            <span className="font-bold">A unifying framework for measuring weighte rich clubs</span><br />
            Alstott J, Panzarasa P, Rubinov M, Bullmore ET and Vértes PE<br />
            <a href="http://www.nature.com/articles/srep07258" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Scientific Reports (2014)</a>
          </li>
          
          <li>
            <span className="font-bold">A wavelet method for modeling and despiking motion artifacts from resting-state fMRI time series</span><br />
            Patel AX, Kundu P, Rubinov M, Jones S, Vértes PE, Ersche KD, Suckling J and Bullmore ET<br />
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/24657353" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">NeuroImage (2014)</a>
          </li>
          
          <li>
            <span className="font-bold">Stochastic blockmodeling of the modules and core of the Caenorhabditis elegans connectome</span><br />
            Pavlovic DM, Vértes PE, Bullmore ET, Schafer WR, Nichols TE<br />
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/24988196" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PLoS ONE (2014)</a>
          </li>
          
          <li>
            <span className="font-bold">Phase transition in the economically modeled growth of a cellular nervous system</span><br />
            Nicosia V*, Vértes PE*, Schafer WR, Latora V, Bullmore ET<br />
            <a href="http://www.pnas.org/content/early/2013/04/19/1300753110.abstract" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2013)</a>
          </li>
          
          <li>
            <span className="font-bold">Integrated strategy for improving functional connectivity mapping using multiecho fMRI</span><br />
            Kundu P, Brenowitz N, Voon V, Roopcharansigh V, Worbe Y, Vértes PE, Saad Z, Inati S, Bullmore ET and Bandettini P<br />
            <a href="http://www.pnas.org/content/110/40/16187.short" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2013)</a>
          </li>
          
          <li>
            <span className="font-bold">Cognitive relevance of the community structure of the human brain functional coactivation network</span><br />
            Crossley NA, Mechelli A, Vértes PE, Winton-Brown TT, Patel AX, Ginestet CE, McGuire P and Bullmore ET<br />
            <a href="http://www.pnas.org/content/early/2013/06/20/1220826110.abstract" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2013)</a>
          </li>
          
          <li>
            <span className="font-bold">The rich club of the C. elegans neuronal connectome</span><br />
            Towlson EK, Vértes PE, Schafer WR, Ahnert S and Bullmore ET<br />
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/23575836" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">The Journal of Neuroscience (2013)</a>
          </li>
          
          <li>
            <span className="font-bold">Volitional eye-opening perturbs brain dynamics and functional connectivity regardless of visual input</span><br />
            Jao T, Vértes PE, Alexander-Bloch A, Tang I-N, Yu Y-C, Chen J-H and Bullmore ET<br />
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/23266698" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">NeuroImage (2013)</a>
          </li>
          
          <li>
            <span className="font-bold">Simple models of human brain functional networks</span><br />
            Vértes PE, Alexander-Bloch A, Gogtay N, Giedd J, Rapoport J, and Bullmore ET<br />
            <a href="http://www.pnas.org/content/109/15/5868.short" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2012)</a>
          </li>
          
          <li>
            <span className="font-bold">Hubs of brain functional networks are radically reorganized in comatose patients</span><br />
            Achard S, Delon-Martin C, Vértes PE, Renard F, Schenck M, Namer JI, Mutschler V, Froehlig P, Schneider F, Kremer S and Bullmore ET<br />
            <a href="http://www.pnas.org/content/early/2012/11/21/1208933109.abstract" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">PNAS (2012)</a>
          </li>
          
          <li>
            <span className="font-bold">The anatomical distance of functional connections predicts brain network topology in health and schizophrenia</span><br />
            Alexander-Bloch A, Vértes PE, Stidd R, Lalonde F, Clasen L, Rapoport J, Giedd J, Bullmore ET, Gogtay N<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/22275481/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Cerebral Cortex (2012)</a>
          </li>
          
          <li>
            <span className="font-bold">GluA1 phosphorylation alters evoked firing pattern in vivo</span><br />
            Barkóczi B, Juhász G, Averkin R, Vörös I, Vértes PE, Penke B, Szegedi V<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3337492/pdf/NP2012-286215.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Neural Plasticity (2012)</a>
          </li>
          
          <li>
            <span className="font-bold">Topological isomorphisms of human brain and financial market networks</span><br />
            Vértes PE, Nicol R, Chapman S, Watkins N, Robertson D and Bullmore ET<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3173712/pdf/fnsys-05-00075.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Frontiers in Systems Neuroscience (2011)</a>
          </li>
          
          <li>
            <span className="font-bold">Fast reconfiguration of high frequency brain networks in response to acoustically deviant tones</span><br />
            Nicol R, Chapman S, Vértes PE, Nathan P, Smith ML, Bullmore ET<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/22170972/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Journal of Neurophysiology (2011)</a>
          </li>
          
          <li>
            <span className="font-bold">Effect of network topology on temporal encoding in networks of spiking neurons</span><br />
            Vértes PE, Duke T<br />
            <a href="http://www.tandfonline.com/doi/pdf/10.2976/1.3386761" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">HFSP Journal (2010)</a>
          </li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Book chapters:</h2>
        <ul className="list-none space-y-4 text-base text-gray-700 ml-6 mb-8">
          <li>
            <span className="font-bold">Connectomes, generative models, and their implications for cognition.</span><br />
            Vértes PE<br />
            <a href="https://direct.mit.edu/books/edited-volume/5456/The-Cognitive-Neurosciences" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">The Cognitive Neurosciences, 6/e. Edited by Gazzaniga, Mangun and Poeppel (MIT Press, 2020)</a>
          </li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Review papers and invited commentaries:</h2>
        <ul className="list-none space-y-4 text-base text-gray-700 ml-6">
          <li>
            <span className="font-bold">Computational models of typical and atypical brain network development</span><br />
            Vértes PE<br />
            <a href="https://www.biologicalpsychiatryjournal.com/article/S0006-3223(22)01771-1/fulltext" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Biological Psychiatry (2022)</a>
          </li>
          
          <li>
            <span className="font-bold">Organizing principles of the C. elegans contactome</span><br />
            Betzel R and Vértes PE<br />
            <a href="https://www.nature.com/articles/s41467-021-24430-z" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Cell Systems (2021)</a>
          </li>
          
          <li>
            <span className="font-bold">Towards a natural history of schizophrenia</span><br />
            Vértes PE and Seidlitz J<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/31789366/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Brain (2019)</a>
          </li>
          
          <li>
            <span className="font-bold">A network neuroscience approach to typical and atypical brain development</span><br />
            Morgan S, White SR, Bullmore ET and Vértes PE<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6986924/" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Biological Psychiatry: Cognitive Neuroscience and Neuroimaging (2018)</a>
          </li>
          
          <li>
            <span className="font-bold">Annual Research Review: Growth connectomics - the organization and reorganization of brain networks during normal and abnormal development</span><br />
            Vértes PE and Bullmore ET<br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4359009/pdf/jcpp0056-0299.pdf" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">Journal of Child Psychology and Psychiatry (2015)</a>
          </li>
          
          <li>
            <span className="font-bold">From Lichtheim to rich club: brain networks and psychiatry</span><br />
            Bullmore ET and Vértes PE<br />
            <a href="http://jamanetwork.com/journals/jamapsychiatry/article-abstract/1695603" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">JAMA Psychiatry (2013)</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Publications;
