export interface ProcessStep {
  title: string;
  summary: string;
  body: string[];
  included: string[];
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discover',
    summary:
      'We map how the work is done today and find where software saves the most time.',
    body: [
      'We start with a conversation about your business and the process that is slowing you down. Then we sit with the people who do the work and map every step, including the workarounds nobody wrote down.',
      'You come away with a clear picture of what can be automated, what it would take, and what it is worth to you, before you commit to a build.',
    ],
    included: [
      'Process mapping',
      'Review of your current tools',
      'Automation opportunities',
      'Scope and timeline',
    ],
  },
  {
    title: 'Build',
    summary: 'We build in short cycles and show you working software as we go.',
    body: [
      'We build the automation or product in small increments and demo each one, so you can try it with real cases and tell us what is off while it is still cheap to change.',
      'Every piece is tested as it is built, so by the end of this phase you have a system that is robust, secure and ready for your team.',
    ],
    included: [
      'Regular demos',
      'Testing against real cases',
      'Integration with your existing tools',
    ],
  },
  {
    title: 'Launch',
    summary:
      'We deploy to AWS, move your team over and make sure nothing breaks on day one.',
    body: [
      'We deploy your system on AWS and connect it to the tools your team already uses, planning the switch-over so day-to-day work is not disrupted.',
      'Before launch we run the full workflow end to end and walk your team through it, so they can rely on it from the first day.',
    ],
    included: [
      'AWS hosting and monitoring',
      'End-to-end testing',
      'Team walkthrough',
    ],
  },
  {
    title: 'Support',
    summary: 'We stay on to fix, improve and extend what we built.',
    body: [
      'Launch is not the end of our involvement. We handle fixes and updates, keep the infrastructure healthy, and help your team when something new comes up.',
      'Once the first process is running, most clients pick the next one. Each new automation builds on what is already there.',
    ],
    included: [
      'Fixes and updates',
      'Infrastructure upkeep',
      'New features as you grow',
    ],
  },
];
