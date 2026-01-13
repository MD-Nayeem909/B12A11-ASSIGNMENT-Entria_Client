import React from "react";
import { Search, MessageCircle, FileText, LifeBuoy } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const SupportPage = () => {
  return (
    <div className="min-h-screen pt-16 pb-20 font-sans text-base-content">
      <div className="container mx-auto px-6">
        {/* Search Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            How can we help?
          </h1>
          <div className="relative group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral group-focus-within:text-primary transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for articles, guides..."
              className="w-full bg-base-200 border border-base-300 rounded-2xl py-5 pl-14 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/80 transition-all"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-base-200 p-10 rounded-3xl shadow-sm border border-base-300 hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Documentation</h3>
            <p className="text-neutral text-sm leading-relaxed">
              কন্টেস্টে জয়েন করা থেকে শুরু করে প্রাইজ তোলা পর্যন্ত সবকিছুর
              বিস্তারিত গাইড এখানে পাবেন।
            </p>
          </div>
          <div className="bg-base-200 p-10 rounded-3xl shadow-sm border border-base-300 hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Forum</h3>
            <p className="text-neutral text-sm leading-relaxed">
              অন্যান্য ক্রিয়েটরদের সাথে কথা বলুন এবং আপনার অভিজ্ঞতা শেয়ার করুন
              আমাদের ফোরামে।
            </p>
          </div>
          <div className="bg-base-200 p-10 rounded-3xl shadow-sm border border-base-300 hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-success/20 text-success rounded-2xl flex items-center justify-center mx-auto mb-6">
              <LifeBuoy size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Direct Support</h3>
            <p className="text-neutral text-sm leading-relaxed">
              যদি কোনো গাইড কাজ না করে, তবে আমাদের সাপোর্ট টিমকে সরাসরি মেসেজ
              দিন।
            </p>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-4xl mx-auto bg-base-100 rounded-[2.5rem] p-10 md:p-16 border border-base-300">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Popular Questions
          </h2>
          <div className="space-y-6">
            {[
              "কিভাবে আমার প্রথম কন্টেস্টে সাবমিট করবো?",
              "উইনারদের প্রাইজ মানি কত দিনের মধ্যে দেওয়া হয়?",
              "আমি কি একই সাথে একাধিক কন্টেস্টে অংশ নিতে পারি?",
              "আমার একাউন্ট সিকিউরিটি কিভাবে বাড়াবো?",
            ].map((q, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-4 border-b border-base-300 cursor-pointer group"
              >
                <span className="font-medium text-neutral group-hover:text-base-content transition-colors">
                  {q}
                </span>
                <span className="text-neutral group-hover:text-base-content transition-all">
                  <FaArrowRight />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
