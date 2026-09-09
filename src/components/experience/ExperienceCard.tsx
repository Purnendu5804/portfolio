'use client';

import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import Skill from '../common/Skill';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';
import { Badge } from '../ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = experience.description.length > 1;

  const visibleDescriptions = expanded
    ? experience.description
    : experience.description.slice(0, 1);

  return (
    <div className="flex flex-col gap-4">
      {/* Company Header — click to expand full role detail */}
      <button
        type="button"
        onClick={() => hasMore && setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className={cn(
          'flex flex-col gap-2 text-left md:flex-row md:justify-between',
          hasMore && 'cursor-pointer',
        )}
      >
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Image
            src={experience.image}
            alt={experience.company}
            width={100}
            height={100}
            className="size-12 rounded-md"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3
                className={cn(
                  'text-lg font-bold',
                  experience.isBlur ? 'blur-[5px]' : 'blur-none',
                )}
              >
                {experience.company}
              </h3>
              {experience.website && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="size-4 text-neutral-500"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.x && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.x}
                      target="_blank"
                      className="size-4 text-neutral-500"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <X />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Follow on X</TooltipContent>
                </Tooltip>
              )}
              {experience.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.linkedin}
                      target="_blank"
                      className="size-4 text-neutral-500"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.github}
                      target="_blank"
                      className="size-4 text-neutral-500"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>View GitHub</TooltipContent>
                </Tooltip>
              )}
              {experience.isCurrent && (
                <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                  <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                  Working
                </div>
              )}
              {hasMore && (
                <span className="text-muted-foreground flex items-center gap-1 text-xs">
                  <ChevronDown
                    className={cn(
                      'size-4 transition-transform duration-300',
                      expanded && 'rotate-180',
                    )}
                  />
                  {expanded ? 'Show less' : 'Show more'}
                </span>
              )}
            </div>
            <p>{experience.position}</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="text-secondary flex flex-col md:text-right">
          <p>
            {experience.startDate} -{' '}
            {experience.isCurrent ? 'Present' : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </button>

      {/* Technologies (icon badges) — only when icons exist */}
      {experience.technologies.length > 0 && (
        <div>
          <h4 className="text-md mt-4 mb-2 font-semibold">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((technology, techIndex: number) => (
              <Skill
                key={techIndex}
                name={technology.name}
                href={technology.href}
              >
                {technology.icon}
              </Skill>
            ))}
          </div>
        </div>
      )}

      {/* Tech stack (plain-text names from resume) */}
      {expanded && experience.techStack && experience.techStack.length > 0 && (
        <div>
          <h4 className="text-md mt-2 mb-2 font-semibold">Tech used</h4>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="text-secondary flex flex-col">
        {visibleDescriptions.map((description: string, descIndex: number) => (
          <p
            key={descIndex}
            dangerouslySetInnerHTML={{
              __html: `• ${parseDescription(description)}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
