import React from "react";

export default function FAQs() {
  return (
    <div>
      <div className="border-dashed border-purple-600 border-2 p-3 w-[600px] h-[335px] rounded-lg">
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
