// Page data for Digital Twins for Healthy Built Environments.
// Edit titles, subtitle, and source notes here; the page text itself is in
// src/components/projects/. Each video lists its files under public/projects/.
export interface ProjectClip { id: string; project: string; assetProject?: string; assetId?: string; mediaVersion?: string; duration: number; title: string; caption: string; description: string; sourceFile?: string; sourceLabel?: string; sourceUrl?: string; sourceRange: string; audioNote: string; processingNote?: string; captions?: boolean; loop?: boolean; }

export const clipSourceBase = "https://github.com/DreamXLab/DreamXLab.github.io/blob/c4a06d081f7f22f9966cbc5248b7ceb61de8c842";

export const labProjects = [{
  "slug": "digitaltwin_healthybuilding",
  "title": "Digital Twins for Healthy Built Environments",
  "shortTitle": "Healthy Built Environments",
  "topic": "Digital twins · Indoor health · Social robotics",
  "subtitle": "Connecting environmental intelligence, predictive modeling, and human-centered interaction.",
  "description": "Digital twins, environmental sensing, and social robotics for healthier, more responsive built environments.",
  "source": "",
  "credit": "",
  "image": "building-model.jpg",
  "imageWidth": 1280,
  "imageHeight": 720,
  "imageAlt": "An overhead digital building model with rooms, furniture, and layered services.",
  "question": "How can buildings anticipate health risks and respond to human needs?",
  "abstract": "We connect spatial models, changing indoor conditions, and human needs to study exposure, anticipate change, and compare responses.",
  "heroClips": [],
  "demoClips": [
    "healthy-indoor-transport",
    "healthy-building-layers"
  ],
  "sourceNotes": [
    "Page copy follows the supplied text, Digital Twins for Healthy Built Environments (November 2026).",
    "Research Presentation, slide 3: the environmental and exposure modeling framework. Building, slides 3–4: office geometry, spatial network, and recorded indoor model animations. These do not demonstrate a live sensor-connected prediction service.",
    "Building Immunology 1, slide 3: the human–robot interaction photograph, with the face redacted. It illustrates the social-robotics direction and does not measure a health outcome.",
    "The framework diagram is an explanatory schematic. Social-robot interaction describes a research direction, not a deployed capability."
  ]
}];

export const projectClips: ProjectClip[] = [
  {
    "id": "healthy-indoor-transport",
    "project": "digitaltwin_healthybuilding",
    "assetProject": "building-digital-twin",
    "duration": 9.067,
    "title": "Indoor transport in a building model",
    "caption": "A room-scale view of simulated transport.",
    "description": "A camera moves through a digital building with desks, chairs, partitions, and overhead services. Green particle-like traces appear around rooms and passages. The view reveals how spatial boundaries and transport are represented in the animation. The colors are visual layers, not a numerical risk scale. This is a recorded model visualization rather than a live forecast.",
    "sourceLabel": "Building, slide 4, embedded image24.gif",
    "sourceRange": "complete animation",
    "audioNote": "Silent source animation, converted to a video with native controls.",
    "assetId": "indoor-transport"
  },
  {
    "id": "healthy-building-layers",
    "project": "digitaltwin_healthybuilding",
    "assetProject": "building-digital-twin",
    "duration": 4.734,
    "title": "Building layers from above",
    "caption": "A complementary view across rooms and model layers.",
    "description": "An overhead camera moves across the same indoor model. Furniture, room boundaries, overhead elements, and colored overlays become visible from above. This recorded model view complements the room-scale animation. The source does not supply a risk legend for these overlays, so their colors should not be interpreted as infection-risk categories.",
    "sourceLabel": "Building, slide 4, embedded image25.gif",
    "sourceRange": "complete animation",
    "audioNote": "Silent source animation, converted to a video with native controls.",
    "assetId": "building-layers"
  }
];
