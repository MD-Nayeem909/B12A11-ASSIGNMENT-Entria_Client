import React from "react";
import NoContestFound from "./NoContestFound";
import PopularContestsSection from "./PopularContestsSection";

let contestData = [
  {
    _id: "c1",
    name: "Creative Logo Design Challenge",
    image: "https://i.ibb.co/PtQh1nZ/logo-contest.jpg",
    participants: 128,
    description:
      "Create a modern, minimal, and brand-focused logo design for a fictional startup called NovaSphere...",
    category: "Design",
    deadline: "2025-01-28",
  },
  {
    _id: "c2",
    name: "AI Article Writing Contest",
    image: "https://i.ibb.co/QN8pTXT/article-writing.jpg",
    participants: 89,
    description:
      "Write a high-quality article on how AI will shape the future of modern education...",
    category: "Writing",
    deadline: "2025-02-10",
  },
  {
    _id: "c3",
    name: "Business Startup Pitch Contest",
    image: "https://i.ibb.co/yY1H8FQ/business-pitch.jpg",
    participants: 203,
    description:
      "Pitch your innovative business startup idea with a short business plan, revenue model, and target audience...",
    category: "Business",
    deadline: "2025-01-31",
  },
  {
    _id: "c4",
    name: "Gaming Review Showdown",
    image: "https://i.ibb.co/F0F7kVF/gaming-review.jpg",
    participants: 156,
    description:
      "Write a detailed, honest, and engaging review of your favorite video game released in the past three years...",
    category: "Gaming",
    deadline: "2025-03-05",
  },
  {
    _id: "c5",
    name: "Photography Nature Contest",
    image: "https://i.ibb.co/x5GhDXg/nature-photo.jpg",
    participants: 178,
    description:
      "Capture the beauty of nature through your camera lens — landscapes, wildlife, forests, or oceans...",
    category: "Photography",
    deadline: "2025-02-22",
  },
  {
    _id: "c6",
    name: "UI/UX Mobile App Redesign",
    image: "https://i.ibb.co/2y3z9bW/uiux-redesign.jpg",
    participants: 94,
    description:
      "Redesign a modern UI/UX for an existing mobile app and provide an improved user flow with visuals...",
    category: "Design",
    deadline: "2025-03-18",
  },
  {
    _id: "c7",
    name: "Short Story Fiction Contest",
    image: "https://i.ibb.co/yNXtqD5/story-contest.jpg",
    participants: 111,
    description:
      "Write a short fiction story filled with emotion, creativity, and a surprising twist ending...",
    category: "Writing",
    deadline: "2025-04-01",
  },
  {
    _id: "c8",
    name: "Marketing Strategy Challenge",
    image: "https://i.ibb.co/F36ZfFz/marketing.jpg",
    participants: 67,
    description:
      "Build a complete marketing strategy to promote a digital product including social media ads, funnels, and KPIs...",
    category: "Business",
    deadline: "2025-03-12",
  },
];

const FeaturedContests = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 text-center my-20 px-4">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
          Featured Creative Contests
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Showcase your creativity and compete with talented creators worldwide.
          Win prizes and recognition.
        </p>
      </div>
      {contestData.length === 0 ? (
        <div className="flex justify-center">
          <NoContestFound />
        </div>
      ) : (
        <div>
          <PopularContestsSection user={true} contests={contestData} />
        </div>
      )}
    </div>
  );
};

export default FeaturedContests;
