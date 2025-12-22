import React from "react";
import { FAQ } from "./FAQ";

const sampleFaqs = [
  {
    index: 1,
    question: "What is this platform about?",
    answer:
      "This platform allows users to participate in online contests across various categories such as Design, Writing, Business, Gaming, and Photography. Contest creators can host competitions, and participants can submit their work to win prize money.",
  },
  {
    index: 2,
    question: "Is it free to join contests?",
    answer:
      "Some contests are free, while others may require a small entry fee. The entry fee (if any) will be clearly shown on the contest details page before you participate.",
  },
  {
    index: 3,
    question: "How are winners selected?",
    answer:
      "Winners are selected by the contest creator based on the quality and relevance of submissions. Once a winner is chosen, the contest status is marked as Completed, and the winner is announced.",
  },
  {
    index: 4,
    question: "When and how will I receive the prize money?",
    answer:
      "Winners are selected by the contest creator based on the quality and relevance of submissions. Once a winner is chosen, the contest status is marked as Completed, and the winner is announced.",
  },
  {
    index: 5,
    question: "Can I participate in multiple contests at the same time?",
    answer:
      "Yes! You can participate in multiple contests simultaneously as long as each submission meets the contest rules and deadlines.",
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
