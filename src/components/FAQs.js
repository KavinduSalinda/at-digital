import React from "react";

export default function FAQs() {
  return (
    <div>
      <div className="p-3 w-[90vw] max-w-[600px]">
        <div className="text-center text-2xl text-purple-600 pb-3">
          Frequently asked questions
        </div>
        <div
          className="flex justify-between p-3 text-purple-600"
          style={{ backgroundColor: "#FAF8FF" }}
        >
          <div>What is Webflow and why is it the best website builder?</div>
          <div>-</div>
        </div>
        <div className="text-sm text-gray-600 p-3 mb-2 pr-3" style={{ backgroundColor: "#FAF8FF" }}>
          Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
          ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien
          massa morbi risus sagittis tortor integer.
        </div>
        <div
          className="flex justify-between p-3 mb-2"
          style={{ backgroundColor: "#FAF8FF" }}
        >
          <div>What is Webflow and why is it the best website builder?</div>
          <div>+</div>
        </div>
        <div
          className="flex justify-between p-3 mb-2"
          style={{ backgroundColor: "#FAF8FF" }}
        >
          <div>What is Webflow and why is it the best website builder?</div>
          <div>+</div>
        </div>
      </div>
    </div>
  );
}
