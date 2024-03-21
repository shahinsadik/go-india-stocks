"use client"
import { useState } from 'react';
// import components 
import RecipeReviewCard from "@/components/Card";
import DisscussFormCard from "@/components/DisscussionFormCard";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('discussion'); 

  return (
    <div className="container   mx-auto ">
      <div className="lg:flex gap-5">

        {/* For large devices */}
        <div className="hidden lg:flex flex-1 lg:ml-2">
          
          <DisscussFormCard />
        </div>
        <div className="hidden lg:block">
          <RecipeReviewCard />
        </div>
        
        {/* For small devices */}
        <div className="lg:hidden flex-1 flex flex-col">
          
          <div className="mb-4">
            <button
              className={`px-4 py-2 w-1/2 ${
                activeTab === 'discussion' ? 'bg-[#142341] border-b-2 border-b-red-800 text-white' : 'bg-[#1e375f] text-white'
              }`}
              onClick={() => setActiveTab('discussion')}
            >
              Discussion
            </button>
            <button
              className={`px-4 py-2 w-1/2   ${
                activeTab === 'recipes' ? 'bg-[#142341] border-b-2 border-b-red-800 text-white' : 'bg-[#1e375f] text-white'
              }`}
              onClick={() => setActiveTab('recipes')}
            >
              Recipes
            </button>
          </div>
          
          {activeTab === 'discussion' && <DisscussFormCard />}
          {activeTab === 'recipes' && <RecipeReviewCard />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
