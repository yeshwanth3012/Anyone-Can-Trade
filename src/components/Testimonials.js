import React from "react";

const testimonials = [
  {
    name: "Saiteja G",
    profession: "Full-Time Trader",
    description:
      "Before joining Trading Masters India, I was stuck in a cycle without any real-world results. This institute changed everything. Their hands-on approach isn't just a claim—it's a reality. I didn't just learn what to do; I practiced how to do it. Now, I'm not just a student; I'm a confident trader seeing consistent returns. I have grown my capital from 8 lakhs to 10 lakhs in 3 months. This is the only place in India that teaches trading the right way.",
    initials: "RS",
    anonymous: false,
    age: 32,
  },
  {
    name: "Karan V",
    profession: "Pharmacist and Part-Time Trader",
    description:
      "I started with zero knowledge about the stock market, and honestly, the sheer volume of information online was overwhelming. The curriculum at Trading Masters India was a lifesaver. It broke down complex topics into simple, actionable strategies. The best part? The live market sessions. Seeing the instructors apply their strategies in real-time built my confidence. Now, I'm not just a spectator; I'm an active and profitable participant in the market.",
    initials: "KV",
    anonymous: false,
    age: 27,
  },
  {
    name: "Arjun P",
    profession: "Banker",
    description:
      "As I approached retirement, I knew I needed to take control of my finances, but I didn't want to rely solely on traditional investments. The in-depth courses at Trading Masters India on fundamental and technical analysis gave me the tools to build a strong portfolio. The instructors’ years of experience and their practical insights are invaluable. This is more than just a course; it's a foundation for a secure and prosperous future.",
    initials: "AP",
    anonymous: false,
    age: 59,
  },
  {
    name: "Divyansh K",
    profession: "",
    description:
      "The best decision I ever made was enrolling in Trading Masters India. I was tired of hearing about market opportunities without understanding them. The instructors' practical, no-nonsense approach and the personalized support were exactly what I needed. They helped me create a trading plan that fits my busy schedule as a professional. Now, I feel confident and in control of my financial future, rather than just passively investing.",
    initials: "DK",
    anonymous: false,
    age: 44,
  },
  {
    name: "Anita S",
    profession: "",
    description:
      "After taking a career break to raise my kids, I wanted to find a way to contribute financially without being tied to a 9-to-5 job. Trading Masters India was the perfect solution. The course material is incredibly well-structured, and the flexible learning options made it easy to study at my own pace. The community support from fellow students and mentors is what truly sets this institute apart. I am now confidently trading and managing our family's portfolio. Thank you for empowering me with this valuable skill!",
    initials: "AS",
    anonymous: false,
    age: 44,
  },
  {
    name: "Ankit Patel",
    profession: "Software Engineer & Part-Time Trader",
    description:
      "I was sceptical at first, but Trading Masters India delivered on every promise. The practical, step-by-step training made the market feel less intimidating and more manageable. The best part? They didn't just give me a strategy; they gave me the confidence to execute it. I started earning consistent returns a few months in, and it's all thanks to their unique, practical teaching style.",
    initials: "AP",
    anonymous: false,
    age: 29,
  },
  {
    name: "Rajesh M",
    profession: "",
    description:
      "I've always been interested in the stock market, but I never knew where to begin. The thought of trading seemed complicated and risky. Trading Masters India demystified it for me. The instructors are not only experts but also excellent teachers who break down complex concepts into simple steps. They taught me a systematic approach to trading, focusing on long-term growth and safety. This has given me a new, exciting passion and a way to secure my retirement.",
    initials: "RM",
    anonymous: false,
    age: 58,
  },
  {
    name: "Rohan P",
    profession: "",
    description:
      "I came to Trading Masters India with a fresh mindset and a desire to learn how to make my money work for me. The 'ACT Mastery' course was phenomenal. Rahul sir doesn’t just teach you strategies; he teaches you how to think like a trader. He focuses heavily on discipline and mindset, which I now realize is the most important part. I've already made back my course fee and am well on my way to building a consistent income stream from trading.",
    initials: "RP",
    anonymous: false,
    age: 22,
  },
  {
    name: "Pooja R",
    profession: "Home maker and Full-Time Trader",
    description:
      "After my kids were a bit older, I was looking for a way to contribute to our family's income while having the flexibility to be at home. I was hesitant about trading, but the support I received from Trading Masters India was incredible. The structured courses and the patient instructors made learning enjoyable. They taught me how to read charts, manage risk, and make smart decisions. I've now found a fulfilling way to earn, and I'm so proud of what I've accomplished.",
    initials: "PR",
    anonymous: false,
    age: 46,
  },
  {
    name: "Ananya S",
    profession: "Dentist and Part-Time Trader",
    description:
      "I was an experienced professional but a novice trader, and I was losing money on emotional decisions. Trading Masters India taught me that trading is a skill, not a gamble. The focus on risk management and trading psychology was a complete game-changer. The personalized mentorship (ACT Yodha) helped me identify my weak spots and build a disciplined trading plan. My profits are now consistent, and my stress levels are down.",
    initials: "AS",
    anonymous: false,
    age: 34,
  },
  // Add more if needed
];

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-2 mt-5 mb-5 px-4 relative">
      <h2 className="text-4xl font-[500] mb-2">Testimonials</h2>
      <h3 className="text-xl font-[500] mb-4">Our Trading Masters</h3>
      <div className="w-full py-4 overflow-x-scroll md:overflow-hidden group">
        <div className="inline-flex animate-marquee items-start space-x-8 group-hover:[animation-play-state:paused]">
          {testimonials.concat(testimonials).map((t, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[21rem] min-h-[14rem] transition-all duration-300 z-0 group/card"
            >
              {/* Background card for shadow effect */}
              <div className="absolute top-[-0.5rem] left-[-0.5rem] w-[22rem] min-h-[15rem] rounded-xl bg-gray-100 shadow-lg z-0 transition-all duration-300 group-hover/card:min-h-[21rem]"></div>

              {/* Main card content */}
              <div className="relative z-10 w-full h-full bg-white rounded-xl shadow-lg px-4 py-4 hover:scale-105 hover:min-h-[20rem] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <p className="text-[1rem] italic text-[#474747] mt-4 line-clamp-5 group-hover/card:line-clamp-none transition-all duration-300">
                  "{t.description}"
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#DBEAFE] text-[#4885D7] rounded-full flex items-center justify-center font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <div className="flex items-center gap-1">
                        <p className="text-xs text-gray-500">
                          {t.profession}
                          {t.profession && ","}
                        </p>
                        <p className="text-xs text-gray-500">Age:{t.age}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

