"use client";

import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Direct Mail Marketing",
    body: "Build highly targeted marijuana consumer mailing lists for postcards, letters, catalogs, and promotional campaigns.",
  },
  {
    id: 2,
    title: "Permission Based Email Marketing",
    body: "Activate opt-in cannabis email audiences to nurture leads, promote offers, and grow customer relationships.",
  },
  {
    id: 3,
    title: "Digital Audience Targeting",
    body: "Reach cannabis consumers across digital channels with matched, modeled, and interest-based audience segments.",
  },
  {
    id: 4,
    title: "Audience Modeling & Profiling",
    body: "Use cannabis consumer insights and profiling to refine targeting, improve ROI, and expand lookalike audiences.",
  },
];

export function Solutions() {
  const [active, setActive] = useState(1);
  const current = steps.find((step) => step.id === active) ?? steps[0];

  return (
    <section className="bg-blue text-frost">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-5 py-16 md:gap-[72px] md:px-10 md:py-20">
        <h2 className="text-[36px] md:text-[48px]">
          <span className="block font-light leading-[1.2] text-glow md:leading-[65px]">
            Solutions For Every
          </span>
          <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] md:leading-[69px]">
            Cannabis Marketing Campaign
          </span>
        </h2>

        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full items-center">
            {steps.map((step, index) => {
              const isActive = step.id === active;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.id} className={`flex items-center ${isLast ? "" : "flex-1"}`}>
                  <button
                    type="button"
                    onClick={() => setActive(step.id)}
                    aria-pressed={isActive}
                    className={`grid size-10 shrink-0 place-items-center rounded-full text-base transition ${
                      isActive
                        ? "bg-frost text-foreground"
                        : "border border-frost bg-transparent text-frost"
                    }`}
                  >
                    {step.id}
                  </button>
                  {!isLast && <div className="mx-0 h-px flex-1 bg-frost/70" />}
                </div>
              );
            })}
          </div>

          <div className="max-w-[545px]">
            <h3 className="mb-2 text-2xl font-bold uppercase md:text-[32px]">{current.title}</h3>
            <p className="text-base leading-6">{current.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
