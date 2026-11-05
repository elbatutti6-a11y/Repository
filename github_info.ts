export interface GitHubFeature {
  name: string;
  description: string;
}

export const GITHUB_OVERVIEW = {
  title: "GitHub Overview",
  definition: "GitHub is a cloud platform for hosting code and collaborating using Git.",
  gitVsGitHub: "Git is the local version control software; GitHub is the cloud platform hosting it.",
  features: [
    { name: "Repos", description: "Code storage and history tracking" },
    { name: "PRs", description: "Code reviews and merging" },
    { name: "Actions", description: "Automated testing and deployment" },
    { name: "Copilot", description: "Built-in AI coding assistant" }
  ] as GitHubFeature[]
};

export function displaySummary(): void {
  console.log(`=== ${GITHUB_OVERVIEW.title} ===`);
  console.log(GITHUB_OVERVIEW.definition);
  console.log("\nKey Features:");
  GITHUB_OVERVIEW.features.forEach(f => console.log(`- ${f.name}: ${f.description}`));
  console.log(`\n${GITHUB_OVERVIEW.gitVsGitHub}`);
}
