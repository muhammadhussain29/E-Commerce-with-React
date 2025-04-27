import React, { useState } from "react";

const FAQ = ({ heading , subheading , faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="roboto py-12 md:px-16 px-8 max-w-[1000px] mx-auto">
      <h2 className="md:text-4xl text-3xl capitalize font-bold text-orange-500 text-center">{heading}</h2>
      <p className='md:text-lg text-base text-zinc-700 text-center md:mb-12'>{subheading}</p>
      <div className="space-y-4 mt-10">
        {/* Faqs mapping */}
        {faqs.map((faq, index) => (
          <div key={index} className="shadow-xl rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-zinc-700 border-l-2">{faq.answer}</div>
            )}
          </div>
        ))}
        {/* Faqs mapping */}
      </div>
    </section>
  );
};

export default FAQ;
