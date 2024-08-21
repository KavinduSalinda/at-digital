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
      <main>
        <header>
          <img src={homeImage} alt="Home banner" className="md:h-[90vh] w-full"/>
          <div className="relative">
            <div className="md:h-[10hv] lg:left-[5vw] bottom-[100px] bg-gradient-to-br from-cyan-400 to-green-400 lg:absolute w-[100vw] lg:w-[45vw] z-10">
              <div className="text-white text-5xl p-6">
                <b>
                  We crush your competitors, goals, and sales records - without
                  the B.S.
                </b>
              </div>
              <div className="p-6">
                <Button text="GET FREE CONSULTATION" />
              </div>
            </div>
          </div>
        </header>

        <section className="flex items-center flex-col text-center md:text-left">
          <article className="md:grid grid-cols-5 w-[80vw] justify-center items-center pb-8 md:pb-0">
            <div className="col-span-2 flex justify-center md:block">
              <img src={laptopImage} alt="Laptop" />
            </div>
            <div className="col-span-3 lg:py-[100px] md:py-[50px] md:pl-[50px] lg:pl-[100px] flex flex-col">
              <h2 className="text-primary text-2xl">
                <b>Web & Mobile App Development</b>
              </h2>
              <p className="py-4">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <div className="flex justify-center md:block">
                <Button text="Learn More" />
              </div>
            </div>
          </article>

          <article className="md:grid grid-cols-5 w-[80vw] justify-center items-center">
            <div className="col-span-3 lg:py-[100px] md:py-[50px] md:pr-[50px] lg:pr-[100px] flex flex-col">
              <h2 className="text-primary text-2xl">
                <b>Digital Strategy Consulting</b>
              </h2>
              <p className="py-4">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <div className="flex justify-center md:block">
                <Button text="Learn More" />
              </div>
            </div>
            <div className="col-span-2 flex justify-center md:block">
              <img src={handLens} alt="Hand lens" />
            </div>
          </article>

          <footer className="lg:py-[100px] py-[50px]">
            <FAQs />
          </footer>
        </section>
      </main>
    </Layout>
  );
}
