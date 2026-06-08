export const SITE_NAME = "Sylva Auris";

export const NAV_LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Care", href: "#care" },
  { label: "Craft", href: "#craft" },
  { label: "Contact", href: "#contact" },
] as const;

export const COLLECTION_ITEMS = [
  {
    name: "Verdant Atrium",
    description:
      "A cathedral of moss and fern, sealed in hand-blown glass for quiet contemplation.",
    tag: "Signature",
  },
  {
    name: "Nocturne Grove",
    description:
      "Deep emerald foliage with subtle bioluminescent accents for evening spaces.",
    tag: "Limited",
  },
  {
    name: "Aurum Terrarium",
    description:
      "Brass-framed vessel with curated succulents and sculptural stone formations.",
    tag: "Edition",
  },
] as const;

export const WHY_FEATURES = [
  {
    title: "Living Sculpture",
    description:
      "Each piece is composed as a permanent installation—balanced, intentional, and alive.",
  },
  {
    title: "Curated Ecology",
    description:
      "Plant selections are chosen for harmony, longevity, and the rhythm of your interior.",
  },
  {
    title: "Quiet Presence",
    description:
      "Designed to soften a room without demanding attention—a calm anchor in modern life.",
  },
] as const;

export const CARE_FEATURES = [
  {
    title: "Seasonal Guidance",
    description:
      "Personalized care notes delivered with every commission, adapted to your climate.",
  },
  {
    title: "Restoration Visits",
    description:
      "Optional studio visits to refresh substrate, prune growth, and preserve balance.",
  },
  {
    title: "Lifetime Support",
    description:
      "A dedicated channel for questions, adjustments, and long-term stewardship.",
  },
] as const;

export const CRAFTSMANSHIP_STEPS = [
  {
    step: "01",
    title: "Sourcing",
    description:
      "Rare botanicals and mineral elements selected from trusted growers and quarries.",
  },
  {
    step: "02",
    title: "Composition",
    description:
      "Layered substrates and structural forms built for drainage, depth, and visual rhythm.",
  },
  {
    step: "03",
    title: "Sealing",
    description:
      "Precision-closed environments tested for humidity equilibrium and lasting clarity.",
  },
] as const;

export const BUILT_FOR_AUDIENCES = [
  {
    title: "Design Studios",
    description:
      "Statement pieces that complement architectural lines and curated material palettes.",
  },
  {
    title: "Private Residences",
    description:
      "Bespoke terrariums scaled for entryways, libraries, and intimate living spaces.",
  },
  {
    title: "Hospitality",
    description:
      "Enduring green installations for lobbies, suites, and signature dining rooms.",
  },
] as const;
