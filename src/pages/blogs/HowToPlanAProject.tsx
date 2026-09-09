import React from 'react';
import BlogLayoutContainer from '../../components/blogs/BlogLayoutContainer';
import {
  BlogTitle,
  BlogHeader,
  BlogDesc,
  BlogParagraph,
  BlogTip,
  BlogWarn,
  BlogTerminal,
  BlogCodeBlock,
  BlogUnorderedList,
  WhiteBoldHighlight,
  NormalHighlight,
  BlogAuthor,
} from '../../components/blogs/components';

export const HowToPlanAProject: React.FC = () => {
  return (
    <div className="page-container">
      <BlogLayoutContainer>
        <BlogTitle>Architecting Scalable Cloud &amp; Distributed Systems</BlogTitle>
        <BlogDesc>
          Notes on decoupling system state, enforcing sandboxed container execution, and designing resilient queue pipelines.
        </BlogDesc>

        <BlogParagraph>
          Building systems that execute untrusted code or manage real-time multi-tenant traffic requires strict separation of concerns. In my work on both the <WhiteBoldHighlight>RCE Engine</WhiteBoldHighlight> and the <NormalHighlight>sdcHouse</NormalHighlight> platform, the primary architectural bottleneck was state contention and isolation.
        </BlogParagraph>

        <BlogHeader>1. Isolating Untrusted Execution</BlogHeader>
        <BlogParagraph>
          When executing user submissions in remote environments, relying solely on language-level sandboxing is dangerous. Enforcing boundary controls via Docker with strict cgroups and network disabling is mandatory:
        </BlogParagraph>

        <BlogCodeBlock
          filename="docker-run.sh"
          language="Bash"
          code={`# Run untrusted container with 128MB memory cap and no network
docker run --rm \\
  --network none \\
  --memory 128m \\
  --pids-limit 64 \\
  -v /tmp/sub-1234:/app:ro \\
  sandbox-runner:latest`}
        />

        <BlogTip title="Pro Tip: Fork Bomb Defense">
          Always cap PID limits (<WhiteBoldHighlight>--pids-limit 64</WhiteBoldHighlight>) to prevent recursive sub-process allocation attacks from crashing the parent daemon.
        </BlogTip>

        <BlogHeader>2. Decoupling Intake from Processing with BullMQ</BlogHeader>
        <BlogParagraph>
          A synchronous HTTP request should never wait on an isolated container boot. Instead, return a UUID token immediately and process submissions asynchronously:
        </BlogParagraph>

        <BlogTerminal
          title="Pipeline Flow"
          commands={[
            'POST /submit -> { submissionId: "uuid-4192", status: "queued" }',
            'Worker picked up job from Redis BullMQ queue',
            'Spawning throwaway Docker container with 128MB cap...',
            'Execution finished in 34ms. Emitted status: "completed"',
          ]}
        />

        <BlogWarn title="Handling Worker Failures">
          Ensure worker threads maintain a heartbeat monitor. If a container hangs past the hard execution timeout, forcefully send SIGKILL and release the lock back to Redis.
        </BlogWarn>

        <BlogHeader>3. Key Principles for Resilient Systems</BlogHeader>
        <BlogUnorderedList
          items={[
            'Design stateful services to fail gracefully and self-heal.',
            'Keep compute units stateless; offload persistence to dedicated databases like PostgreSQL.',
            'Benchmark network roundtrips and keep local synchronization latency under 10ms for live sessions.',
          ]}
        />

        <BlogAuthor name="Purnendu">
          CS student, AWS Certified Solutions Architect, and Software Development Intern at FOSSEE, IIT Bombay.
        </BlogAuthor>
      </BlogLayoutContainer>
    </div>
  );
};

export default HowToPlanAProject;
