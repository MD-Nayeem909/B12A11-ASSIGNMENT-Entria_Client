import React from "react";
import { FAQ } from "./FAQ";

const sampleFaqs = [
  {
    index: 1,
    question: "What makes this FAQ component special?",
    answer:
      "This FAQ component features modern design with smooth animations, responsive layout, search functionality, and customizable color schemes. It's built with React and Tailwind CSS for optimal performance and beautiful aesthetics.",
  },
  {
    index: 2,
    question: "How do I customize the color scheme?",
    answer:
      "You can customize the color scheme by passing a 'colorScheme' prop with values like 'blue', 'purple', or 'green'. The component automatically applies gradients, hover effects, and accent colors based on your choice.",
  },
  {
    index: 3,
    question: "Is the component mobile-responsive?",
    answer:
      "Absolutely! The component is fully responsive and works seamlessly across all device sizes. It features adaptive typography, flexible layouts, and touch-friendly interactions for mobile devices.",
  },
];

const FaqView = () => {
  return (
    <div className="space-y-12">
      {/* Accordion View */}
      <div>
        <FAQ faqs={sampleFaqs} colorScheme="blue" searchable />
      </div>
    </div>
  );
};

export default FaqView;
