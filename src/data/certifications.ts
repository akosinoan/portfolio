import type { Certification, ComptiaBadge } from "../types";

/** Credly badge images shown in the About section. */
export const comptiaBadges: ComptiaBadge[] = [
  {
    name: "CompTIA A+ ce",
    label: "A+",
    img: "https://images.credly.com/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/blob",
    url: "https://www.credly.com/badges/d3bea4a9-9ce7-49d2-8f10-f822c4f42304/public_url",
  },
  {
    name: "CompTIA Network+ ce",
    label: "Network+",
    img: "https://images.credly.com/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/blob",
    url: "https://www.credly.com/badges/9533f8ac-1789-4add-9b2c-f1cc45558f99/public_url",
  },
  {
    name: "CompTIA Security+ ce",
    label: "Security+",
    img: "https://images.credly.com/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
    url: "https://www.credly.com/badges/0418e0a4-6a58-499d-a8f5-6e7636ea3135/public_url",
  },
  {
    name: "CompTIA CySA+ ce",
    label: "CySA+",
    img: "https://images.credly.com/images/dcd99b5b-da24-40a6-9364-62126d590c37/blob",
    url: "https://www.credly.com/badges/8b581ab1-aad9-4b40-930a-e868064b74ef/public_url",
  },
  {
    name: "CompTIA IT Operations Specialist – CIOS",
    label: "CIOS",
    img: "https://images.credly.com/images/7f7657b9-4d1b-4b8d-b5ee-5fdf6d7ccd71/04294_CompTIA_Cert_Badges_Specialist_-_CIOS.png",
    url: "https://www.credly.com/badges/d08afa7c-27e6-4a86-9c65-235d7d3ed135/public_url",
  },
  {
    name: "CompTIA Secure Infrastructure Specialist – CSIS",
    label: "CSIS",
    img: "https://images.credly.com/images/8090280a-311f-425f-a1cd-a32770b5a444/CompTIA_CSIS.png",
    url: "https://www.credly.com/badges/7a0b7da8-41db-4da5-b01f-eb5ea81c4a8e/public_url",
  },
];

/** Certification cards shown in the Education section. */
export const certifications: Certification[] = [
  {
    name: "CompTIA Certifications",
    issuer: "CompTIA",
    icon: "https://cdn.simpleicons.org/comptia/C8202F",
    gradient: "from-red-700 via-red-500 to-orange-400",
    items: [
      {
        name: "A+ ce",
        date: "Apr 2026",
        credentialUrl:
          "https://www.credly.com/badges/d3bea4a9-9ce7-49d2-8f10-f822c4f42304/public_url",
      },
      {
        name: "Network+ ce",
        date: "May 2026",
        credentialUrl:
          "https://www.credly.com/badges/9533f8ac-1789-4add-9b2c-f1cc45558f99/public_url",
      },
      {
        name: "Security+ ce",
        date: "May 2026",
        credentialUrl:
          "https://www.credly.com/badges/0418e0a4-6a58-499d-a8f5-6e7636ea3135/public_url",
      },
      {
        name: "IT Operations Specialist – CIOS",
        date: "May 2026",
        credentialUrl:
          "https://www.credly.com/badges/d08afa7c-27e6-4a86-9c65-235d7d3ed135/public_url",
      },
      {
        name: "Secure Infrastructure Specialist – CSIS",
        date: "May 2026",
        credentialUrl:
          "https://www.credly.com/badges/7a0b7da8-41db-4da5-b01f-eb5ea81c4a8e/public_url",
      },
      {
        name: "CySA+",
        date: "Jun 2026",
        credentialUrl:
          "https://www.credly.com/badges/8b581ab1-aad9-4b40-930a-e868064b74ef/public_url",
      },
    ],
  },
  {
    name: "Database Design and Basic SQL in PostgreSQL",
    issuer: "University of Michigan",
    date: "Feb 2026",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/99BFAVQ5U0FT",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    gradient: "from-blue-700 via-sky-500 to-cyan-400",
  },
  {
    name: "Rust Fundamentals",
    issuer: "Duke University",
    date: "Feb 2026",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/GN3IDSPE4RXG",
    icon: "https://cdn.simpleicons.org/rust/000000",
    gradient: "from-orange-700 via-amber-600 to-yellow-500",
  },
];
