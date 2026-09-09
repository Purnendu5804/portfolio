export interface LearningItem {
  name: string;
  category: string;
  notes: string;
}

export interface LearningStage {
  stage: 'Completed' | 'In Progress';
  description: string;
  items: LearningItem[];
}

export const learningData: LearningStage[] = [
  {
    stage: 'Completed',
    description: 'Technologies and certifications I have built practical projects with, verified through production deployments and formal certification.',
    items: [
      {
        name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
        category: 'Cloud Architecture',
        notes: 'VPC design, IAM least-privilege security, compute/storage optimization, and fault-tolerant distributed infrastructure.',
      },
      {
        name: 'Docker & Containerization',
        category: 'Containerization & Systems',
        notes: 'Container runtime isolation, resource limits (cgroups/memory caps), headless execution environments, and multi-stage container builds.',
      },
      {
        name: 'GitHub Actions & CI/CD',
        category: 'Automation & Pipelines',
        notes: 'Automated test matrices, linting automation, multi-arch build triggers, and continuous deployment workflows.',
      },
    ],
  },
  {
    stage: 'In Progress',
    description: 'My current technical focus — actively experimenting with local clusters, building observability labs, and studying core concepts.',
    items: [
      {
        name: 'Kubernetes (K8s)',
        category: 'Container Orchestration',
        notes: 'Studying cluster architecture, Pod lifecycles, Deployments, Services, ConfigMaps, Ingress, and persistent volume management.',
      },
      {
        name: 'Prometheus',
        category: 'Observability & Metrics',
        notes: 'Learning scrape targets, PromQL query syntax, time-series storage fundamentals, and custom metric exporters.',
      },
      {
        name: 'Grafana',
        category: 'Monitoring & Telemetry',
        notes: 'Designing observability dashboards, configuring automated alert thresholds, and telemetry aggregation.',
      },
      {
        name: 'Terraform',
        category: 'Infrastructure as Code (IaC)',
        notes: 'Writing declarative cloud resources, managing remote state files, handling dependencies, and modular infrastructure code.',
      },
    ],
  },
];
