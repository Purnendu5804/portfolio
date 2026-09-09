import { type MarqueeSkill, about, marqueeSkills } from '@/config/About';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

function SkillPill({ skill }: { skill: MarqueeSkill }) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <div className="bg-card flex shrink-0 items-center gap-3 rounded-full border px-4 py-2 shadow-sm transition-transform duration-300 hover:scale-105">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={skill.iconUrl}
            alt={`${skill.name} logo`}
            loading="lazy"
            className={cn(
              'size-8 object-contain',
              skill.invertOnDark && 'dark:invert',
            )}
          />
          <span className="text-sm font-medium whitespace-nowrap">
            {skill.name}
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{skill.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src="/profile/purnendu-placeholder.svg"
          alt="Purnendu — TODO: replace with actual profile photo"
          width={100}
          height={100}
          className="border-secondary size-60 rounded-md border-2 bg-blue-300 dark:bg-yellow-300"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary mt-2 text-sm">{about.personal}</p>
        </div>
      </div>

      {/* Skills marquee */}
      <p className="text-secondary mt-10 font-bold">Skills</p>
      <div className="skills-marquee skills-marquee-mask mt-4 overflow-hidden">
        <div className="skills-marquee-track flex w-max gap-4 pr-4">
          {marqueeSkills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
          {marqueeSkills.map((skill) => (
            <span
              key={`dup-${skill.name}`}
              aria-hidden="true"
              className="contents"
            >
              <SkillPill skill={skill} />
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}
