// Image data: file, size, alternative text, long description, and source.
// Files live in public/projects/<project>/.
export interface LabFigure { project: string; file: string; preview?: string; width: number; height: number; title: string; alt: string; description: string; source: string; }

export const labFigures: Record<string, LabFigure> = {
  "twin-framework": {
    "project": "building-digital-twin",
    "file": "modeling-framework.webp",
    "width": 1589,
    "height": 990,
    "title": "Connect geometry, people, and transport.",
    "alt": "Building modeling, occupant sensing, and pathogen information feed indoor risk and airflow visualizations.",
    "description": "The diagram has three input groups: building geometry, HVAC systems, space function and materials; occupant sensing of indoor conditions and activity; and human–pathogen information. Modeling, sensing, and bioinformatics connect these inputs to an indoor infection-risk distribution and a three-dimensional airflow and pathogen-transport model. The risk map has a labeled high-to-low legend. It is an illustrative framework, not a current measurement for a specific building.",
    "source": "Research Presentation, slide 3."
  },
  "occupant-interaction": {
    "project": "building-immunology",
    "file": "occupant-interaction-redacted.webp",
    "width": 1280,
    "height": 720,
    "title": "Include the person in the building’s response.",
    "alt": "A seated person, with their face pixelated for privacy, faces a white humanoid robot with a chest-mounted screen.",
    "description": "A white humanoid robot stands beside a seated person in front of folding room dividers. The person’s face is pixelated for privacy. The robot’s chest-mounted screen shows a line drawing. This still image accompanies the presentation’s building-immunology research vision. The photograph illustrates human–robot interaction; it does not establish a particular sensing capability, recognized preference, or measured health outcome.",
    "source": "Building Immunology 1, slide 3; embedded image2.png, with a privacy mosaic applied to the person’s face."
  }
};
