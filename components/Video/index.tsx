"use client";

import Image from "next/image";
import { useState } from "react";


const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="about" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <section className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4 dark:text-white text-black">About BLVCK SAPPHIRE</h1>
          <p className="text-lg dark:text-gray-400  white mb-3">
            BLVCK SAPPHIRE is a company that develops leading software, AI/ML technologies, and cybersecurity solutions. We are developing cutting-edge technologies aimed at revolutionizing various industries by leveraging advanced artificial intelligence and machine learning algorithms and developing cybersecurity solutions for data protection.
          </p>
        </section>

        <section className="my-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/innovation.webp"
              alt="Innovation"
              width={600}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">Creating a Positive Change</h2>
              <p className="mt-2">
                We’re committed to creating positive change in Africa and ensuring we act as responsible business leaders by adopting a shared blueprint to help achieve SDG goals 8, 9, and 11.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/sus.webp"
              alt="Sustainability"
              width={600}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">Sustainability</h2>
              <p className="mt-2">
                We help our clients advance their environmental, social, and governance goals by connecting sustainability to their transformations; operate our business with a strong commitment to the environment, ethics, and human rights; and work to create value in communities around the world.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/ai.webp"
              alt="Responsible AI"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">Responsible AI</h2>
              <p className="mt-2">
                Powerful AI tools like generative AI bring unprecedented opportunities as well as new risks. We help clients to take intentional actions to design, deploy, and use AI to create value and build trust.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/i&d.jpg"
              alt="Inclusion & Diversity"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">Inclusion & Diversity</h2>
              <p className="mt-2">
                We hire and develop people who have different backgrounds, different perspectives, and different lived experiences. These differences ensure that we have and attract the cognitive diversity to deliver a variety of perspectives, observations, and insights which are essential to drive the innovation needed to grow.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url('/images/video/shape.svg')] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
