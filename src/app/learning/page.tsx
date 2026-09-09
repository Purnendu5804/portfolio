import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { learningConfig } from '@/config/Learning';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/learning'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function LearningPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {learningConfig.title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {learningConfig.description}
          </p>
        </div>
        <Separator />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold">Completed</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Completed so far — still practicing, not mastery.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {learningConfig.completed.map((item) => (
                <Badge key={item.name} variant="default">
                  {item.name}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold">In Progress</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Currently learning — explicitly in progress.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {learningConfig.inProgress.map((item) => (
                <Badge key={item.name} variant="outline">
                  {item.name} · in progress
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
