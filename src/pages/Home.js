import React from "react";
import Layout from "../Layout/Layout";
import FAQs from "../components/FAQs";
import homeImage from "../assets/homeImage.jpeg";
import laptopImage from "../assets/laptopImage.png";
import handLens from "../assets/handlens.png";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      <div>
        <img src={homeImage} alt="placeholder" className="" />
        <div class="w-[600px] h-[300px] left-[60px] top-[600px] bg-gradient-to-br from-cyan-400 to-green-400 absolute">
          <div className="text-white text-5xl p-6">
            <b>
              We crush your competitors, goals, and sales records - without the
              B.S.
            </b>
          </div>
          <div className="px-6">
            <Button text="GET FREE CONSULTATION" />
          </div>
        </div>

        <div className="flex py-[60px] px-[200px] items-center">
          <img src={laptopImage} alt="placeholder" className="" />
          <div className="py-[100px] pl-[100px] flex flex-col">
            <div className="text-purple-700 text-2xl">
              Web & Mobile App Development
            </div>
            <div className="py-4">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </div>
            <Button text="Learn More" />
          </div>
        </div>

        <div className="flex py-[60px] px-[200px] items-center">
          <div className="py-[100px] pr-[100px] flex flex-col">
            <div className="text-purple-700 text-2xl">
              Digital Strategy Consulting
            </div>
            <div className="py-4">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </div>
            <Button text="Learn More" />
          </div>
          <img src={handLens} alt="placeholder" className="" />
        </div>

        <div className="flex justify-center py-[100px]">
          <FAQs />
        </div>
      </div>
    </Layout>
  );
}
