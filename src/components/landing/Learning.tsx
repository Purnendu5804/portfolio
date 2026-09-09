import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { learningConfig } from '@/config/Learning';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export default function Learning() {
  return (
    <Container className="mt-10">
      <SectionHeading
        subHeading={learningConfig.subHeading}
        heading={learningConfig.title}
      />
      <p className="text-muted-foreground mt-4 text-sm">
        {learningConfig.description}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="text-base font-semibold">Completed</h3>
          <p className="text-muted-foreground mt-1 text-xs">
            Done so far — still practicing.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {learningConfig.completed.map((item) => (
              <Badge key={item.name} variant="default">
                {item.name}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="text-base font-semibold">In Progress</h3>
          <p className="text-muted-foreground mt-1 text-xs">
            Currently learning — not completed.
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
    </Container>
  );
}
