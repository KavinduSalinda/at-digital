import React, { useState } from "react";

const QuestionsArray = [
  {
    question: "What digital services does your company offer?",
    answer: "We offer a range of digital services including web and mobile app development, digital marketing, SEO, content creation, and IT consulting to help businesses grow and succeed online.",
  },
  {
    question: "How can your digital marketing services benefit my business?",
    answer: "Our digital marketing services are designed to increase your online visibility, drive traffic to your website, and convert visitors into customers. We use data-driven strategies and industry best practices to ensure your business achieves its goals.",
  },
  {
    question: "What is your approach to web development?",
    answer: "We follow a user-centered design approach, ensuring that every website we create is not only visually appealing but also functional, responsive, and optimized for the best user experience. We focus on clean, maintainable code and best practices in SEO and accessibility.",
  },
  {
    question: "How do you ensure the security of the web and mobile apps you develop?",
    answer: "We prioritize security at every stage of development by implementing best practices in coding, conducting regular security audits, and staying updated with the latest cybersecurity trends. Our goal is to protect your business and users from potential threats.",
  },
  {
    question: "Can you customize digital services to meet my specific needs?",
    answer: "Yes, we understand that every business is unique. We work closely with you to understand your specific requirements and tailor our digital services to meet your goals. Our solutions are flexible and scalable to adapt to your business's growth.",
  },
];


const Questions = ({ array = [] }) => {
  const [openQ, setOpenQ] = useState([]);

  const toggleButton = (value) => {
    setOpenQ(
      (prevOpenQ) =>
        prevOpenQ.includes(value)
          ? prevOpenQ.filter((item) => item !== value) // Remove the item if it is already in the array
          : [...prevOpenQ, value] // Add the item if it is not in the array
    );
  };

  return (
    <article className="flex flex-col">
      {array.map((item, index) => (
        <button className="mb-2 text-left" onClick={() => toggleButton(index)}>
          <div
            className={`flex justify-between p-3  bg-custom_Ash ${
              openQ.includes(index) ? "text-primary" : ""
            }`}
          >
            <p>{item.question}</p>
            <div >
              {openQ.includes(index) ? "-" : "+"}
            </div>
          </div>
          {openQ.includes(index) && (
            <p className="text-sm p-3 mb-2 pr-3 bg-custom_Ash text-textSecondary">
              {item.answer}
            </p>
          )}
        </button>
      ))}
    </article>
  );
};

export default function FAQs() {
  return (
    <div className="p-3 w-[90vw] max-w-[600px] mx-auto">
      <div className="text-center text-2xl text-primary pb-3">
        <b>Frequently asked questions</b>
      </div>

      <Questions array={QuestionsArray} />
    </div>
  );
}
