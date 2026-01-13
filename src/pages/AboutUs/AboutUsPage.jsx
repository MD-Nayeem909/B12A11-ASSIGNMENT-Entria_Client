import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users, Award, ShieldCheck, Zap } from "lucide-react";

const AboutUsPage = () => {
  const stats = [
    { label: "Active Users", value: "50K+", icon: <Users size={24} /> },
    { label: "Contests Held", value: "1.2K+", icon: <Zap size={24} /> },
    { label: "Prizes Awarded", value: "$500K+", icon: <Award size={24} /> },
    { label: "Success Rate", value: "99%", icon: <ShieldCheck size={24} /> },
  ];

  return (
    <div className="bg-base-100 min-h-screen pt-10 pb-20">
      {/* 1. Header Section */}
      <section className="container mx-auto px-4 text-center mb-20">
        <motion.h4 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4"
        >
          Who We Are
        </motion.h4>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter"
        >
          We Empower <span className="text-primary">Creativity.</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-6 text-base-content/60 leading-relaxed">
          আমরা শুধু একটি কন্টেস্ট প্ল্যাটফর্ম নই; আমরা একটি বৈশ্বিক সম্প্রদায় যেখানে প্রতিভা এবং পরিশ্রমের সঠিক মূল্যায়ন করা হয়। আমাদের লক্ষ্য হলো বিশ্বের প্রতিটি সৃজনশীল মানুষকে একটি বড় মঞ্চে নিয়ে আসা।
        </p>
      </section>

      {/* 2. Mission & Vision Cards */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <div className="bg-base-200/50 p-10 rounded-[3rem] border border-base-content/5 relative overflow-hidden group">
          <Target className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-2xl font-black uppercase italic mb-4 text-primary">Our Mission</h3>
          <p className="text-base-content/70 leading-relaxed">
            প্রতিটি সৃজনশীল মানুষের জন্য এমন একটি পরিবেশ তৈরি করা যেখানে তারা তাদের দক্ষতা প্রদর্শন করতে পারে এবং স্বচ্ছ ও প্রতিযোগিতামূলক মাধ্যমে বিজয়ী হয়ে নিজের ক্যারিয়ার গড়তে পারে।
          </p>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full"></div>
        </div>

        <div className="bg-primary p-10 rounded-[3rem] text-primary-content relative overflow-hidden group">
          <Eye className="text-white mb-6 group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-2xl font-black uppercase italic mb-4">Our Vision</h3>
          <p className="opacity-80 leading-relaxed">
            বিশ্বের বৃহত্তম এবং সবচেয়ে বিশ্বস্ত কন্টেস্ট নেটওয়ার্ক হয়ে ওঠা, যেখানে আর্ট, কোডিং, ফটোগ্রাফি এবং অন্যান্য সৃজনশীল ফিল্ডের প্রতিভাগুলো নিয়মিত স্বীকৃতি পাবে।
          </p>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="bg-base-200 py-20 mb-32">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-primary mb-4 italic opacity-50">{stat.icon}</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic mb-2">{stat.value}</h2>
              <p className="text-[10px] font-black uppercase opacity-40 tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="container mx-auto px-4 mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-16">
          Why People <span className="text-primary">Trust Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Transparency", desc: "আমাদের প্রতিটি কন্টেস্টের ফলাফল এবং সিলেকশন প্রসেস সম্পূর্ণ স্বচ্ছ ও নিরপেক্ষ।" },
            { title: "Community First", desc: "আমরা আমাদের ইউজারদের মতামতকে সর্বোচ্চ গুরুত্ব দেই এবং নিয়মিত প্ল্যাটফর্ম আপডেট করি।" },
            { title: "Secure Payments", desc: "বিজয়ীদের পুরস্কারের টাকা অত্যন্ত দ্রুত এবং সুরক্ষিতভাবে পৌঁছে দেওয়ার নিশ্চয়তা দেই।" },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-1 bg-primary mx-auto"></div>
              <h4 className="text-xl font-bold uppercase italic tracking-tight">{item.title}</h4>
              <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary/20 text-base-content p-12 md:p-20 rounded-[4rem] text-center">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-8 leading-tight">
            Ready to show your <span className="text-primary italic">talent</span> to the world?
          </h2>
          <button className="btn btn-primary rounded-full px-10 btn-lg font-black uppercase tracking-widest text-xs italic">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;