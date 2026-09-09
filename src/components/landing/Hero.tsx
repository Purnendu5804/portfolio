import { heroConfig, socialLinks } from '@/config/Hero';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import { TrackedLink } from '../common/TrackedLink';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, avatar, buttons } = heroConfig;

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Image */}
      <Image
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        className="size-24 rounded-full bg-blue-300 dark:bg-yellow-300"
      />

      {/* Text Area */}
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m {name} — <span className="text-secondary">{title}</span>
        </h1>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as 'outline' | 'default'}
              className={cn(
                button.variant === 'outline' && 'inset-shadow-indigo-500',
                button.variant === 'default' && 'inset-shadow-indigo-500',
              )}
              track={{
                name: 'button_click',
                data: { buttonId: button.text, section: 'hero' },
              }}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <TrackedLink
                href={link.href}
                key={link.name}
                className="text-secondary flex items-center gap-2"
                track={{
                  name: 'external_link_click',
                  data: {
                    url: link.href,
                    text: link.name,
                    location: 'hero_social',
                  },
                }}
              >
                <span className="size-6">{link.icon}</span>
              </TrackedLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
