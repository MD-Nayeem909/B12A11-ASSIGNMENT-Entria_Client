const AboutSection = () => {
  return (
    <section className="bg-base-100">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black border-l-4 border-primary pl-6 mb-6">Our mission</h2>
          <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
            আমরা এমন একটি প্ল্যাটফর্ম তৈরি করতে চাই যেখানে সৃজনশীলতা কোনো সীমানা
            মানবে না। আমাদের লক্ষ্য হলো বিশ্বের প্রতিটি প্রান্তের প্রতিভাকে একটি
            মঞ্চ দেওয়া।
          </p>
          <p className="text-base-content/60">
            যেকোনো জায়গা থেকে অংশ নিন, শিখুন এবং নিজেকে ছাড়িয়ে যান। আমাদের সাথে
            যুক্ত হয়ে আপনার দক্ষতাকে নতুন উচ্চতায় নিয়ে যান।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col border-l-4 border-primary pl-6">
            <span className="text-4xl font-black">44 million</span>
            <span className="text-base-content/60 mt-2">
              Daily interactions on platform
            </span>
          </div>
          <div className="flex flex-col border-l-4 border-primary pl-6">
            <span className="text-4xl font-black">$119 trillion</span>
            <span className="text-base-content/60 mt-2">
              Worth of opportunities created
            </span>
          </div>
          <div className="flex flex-col border-l-4 border-primary pl-6">
            <span className="text-4xl font-black">46,000</span>
            <span className="text-base-content/60 mt-2">
              New creators annually
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
