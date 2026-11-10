// Prefix a public file with the deployment base path (the repository name on GitHub Pages).
export function asset(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
