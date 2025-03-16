import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, GraduationCap, Filter } from 'lucide-react';

const FindScholarship: React.FC = () => {
  // Sample scholarship data for demonstration
  const scholarships = [
    {
      id: 1,
      title: "STEM Excellence Scholarship",
      amount: "$5,000",
      deadline: "June 30, 2024",
      category: "Engineering",
      organization: "Tech Future Foundation",
      description: "For undergraduate students pursuing degrees in Science, Technology, Engineering or Mathematics."
    },
    {
      id: 2,
      title: "Global Leadership Award",
      amount: "$3,500",
      deadline: "July 15, 2024",
      category: "Business",
      organization: "International Business Council",
      description: "Supporting students with leadership potential in business and management programs."
    },
    {
      id: 3,
      title: "Creative Arts Grant",
      amount: "$2,800",
      deadline: "August 5, 2024",
      category: "Arts",
      organization: "Creative Expression Society",
      description: "For students in visual arts, music, theater, or other creative disciplines."
    },
    {
      id: 4,
      title: "Healthcare Heroes Scholarship",
      amount: "$4,200",
      deadline: "July 25, 2024",
      category: "Medical",
      organization: "Healthcare Foundation",
      description: "Supporting future healthcare professionals in medical and nursing programs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Find Your Scholarship</h1>
            <p className="text-textgray/90 max-w-2xl">
              Discover transparent, blockchain-verified scholarships that match your academic goals and interests.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-textgray/60" />
                </div>
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  className="w-full pl-10 pr-4 py-3 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-steelgray/50 text-white"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors">
                  <Filter size={18} />
                  <span>Filters</span>
                </button>
                <button className="px-4 py-2 flex items-center gap-2 bg-steelgray hover:bg-steelgray/90 text-white rounded-md transition-colors">
                  <GraduationCap size={18} />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scholarship Listings */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {scholarships.map((scholarship) => (
              <div 
                key={scholarship.id}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 hover:border-steelgray/50 hover:shadow-lg hover:shadow-steelgray/5"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{scholarship.title}</h3>
                  <span className="text-lg font-bold text-steelgray">{scholarship.amount}</span>
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-steelgray/20 text-steelgray rounded-full">
                    {scholarship.category}
                  </span>
                </div>
                <p className="text-textgray/90 mb-4">{scholarship.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-textgray">
                    <p>Deadline: <span className="text-white">{scholarship.deadline}</span></p>
                    <p>By: <span className="text-white">{scholarship.organization}</span></p>
                  </div>
                  <button className="px-4 py-1.5 bg-steelgray/80 hover:bg-steelgray text-white text-sm rounded-md transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindScholarship;
