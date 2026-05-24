export interface Project {
  slug: string;
  title: string;
  location: string;
  clientType: string;
  serviceProvided: string;
  duration: string;
  mainImage: string;
  overviewHtml: string;
  scopeIntroHtml: string;
  scopeSteps: { title: string; description: string }[];
  scopeImages: string[];
  resultsIntroHtml: string;
  resultsSteps: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    slug: "hillside-ridge-roof-upgrade",
    title: "Hillside Ridge Roof Upgrade",
    location: "Greystone Valley",
    clientType: "Real Estate Developer",
    serviceProvided: "Partial Roof Replacement",
    duration: "4 Days",
    mainImage: "/images/project-roof-upgrade.jpg",
    overviewHtml: "The <strong>Hillside Ridge Roof Upgrade</strong> was commissioned by a <strong>real estate developer</strong> managing multiple housing units in <strong>Greystone Valley</strong>. One of the units had developed structural vulnerabilities and weather damage along the rear slope of the roof. Our task was to provide a targeted solution—replacing and reinforcing the affected sections while preserving the integrity and appearance of the rest of the roofing system.",
    scopeIntroHtml: "The Hillside Ridge project focused on a <strong>partial roof replacement and reinforcement</strong> for a mid-sized residential duplex. The service was completed within <strong>4 days</strong>, minimizing disruption to ongoing tenant occupancy while restoring the building envelope to peak condition.",
    scopeSteps: [
      {
        title: "Selective tear-off and deck exposure",
        description: "We carefully removed the damaged rear slope of the roof while protecting the front and ridge portions that remained structurally sound."
      },
      {
        title: "Deck replacement and structural reinforcement",
        description: "Water-compromised decking boards were replaced with pressure-treated wood and reinforced to support the new shingle installation."
      },
      {
        title: "Advanced waterproof underlayment",
        description: "We installed a moisture-resistant underlayment across the repaired section to guard against leaks and enhance longevity."
      },
      {
        title: "Shingle matching and seamless integration",
        description: "Architectural shingles identical to the existing ones were installed, ensuring a seamless visual blend between old and new roofing."
      }
    ],
    scopeImages: [
      "/images/about-roofing.jpg",
      "/images/about-roof-tiling.jpg"
    ],
    resultsIntroHtml: "The <strong>Hillside Ridge Roof Upgrade</strong> successfully restored the structural safety and aesthetic value of the unit, delivering a durable solution for the developer with no need for a full replacement.",
    resultsSteps: [
      {
        title: "Prevented future water intrusion",
        description: "The upgraded section now offers excellent water shedding and protection against seasonal storms."
      },
      {
        title: "Cost-effective improvement",
        description: "By replacing only the affected areas, the client saved significantly on materials and labor without compromising quality."
      },
      {
        title: "Enhanced property readiness",
        description: "With the roof restored, the developer was able to prepare the unit for immediate listing and occupancy—backed by a service warranty and visual cohesion."
      }
    ]
  },
  {
    slug: "summit-view-roofing",
    title: "Summit View Roofing",
    location: "Maplewood Estate",
    clientType: "Property Management Firm",
    serviceProvided: "TPO Flat Roof Membrane Installation",
    duration: "10 Days",
    mainImage: "/images/project-summit-view.jpg",
    overviewHtml: "The <strong>Summit View Roofing</strong> project was commissioned by a <strong>property management firm</strong> responsible for the community clubhouse at <strong>Maplewood Estate</strong>. The flat roof had experienced severe ponding and membrane deterioration, threatening the ceiling structure. We were contracted to deliver a long-term water-shedding solution.",
    scopeIntroHtml: "Our team executed a complete flat roof replacement using advanced <strong>TPO membrane sheeting</strong>. The process took <strong>10 days</strong> and involved sloping corrections, custom flashing, and new drainage vents to secure the facility from all weather elements.",
    scopeSteps: [
      {
        title: "Ponding analysis and clearing",
        description: "We cleared the stagnant water and removed the degraded aggregate surfacing down to the concrete deck."
      },
      {
        title: "Tapered insulation layout",
        description: "To fix the zero-slope ponding, we installed a tapered insulation board system to direct water to the outer scuppers."
      },
      {
        title: "Heat-welded TPO installation",
        description: "A high-performance white TPO membrane was laid down and heat-welded at the seams for a watertight, UV-reflective seal."
      },
      {
        title: "Drainage and flashing refit",
        description: "Replaced all edge coping, installed heavy-duty commercial scuppers, and wrapped all pipes with dynamic expansion flashing."
      }
    ],
    scopeImages: [
      "/images/about-wiring.jpg",
      "/images/client-consultation.jpg"
    ],
    resultsIntroHtml: "The <strong>Summit View Roofing</strong> project resolved all standing water problems and significantly upgraded the clubhouse's thermal performance.",
    resultsSteps: [
      {
        title: "100% dry interior",
        description: "No interior leaks or ponding issues have occurred since project handover, even after heavy rains."
      },
      {
        title: "Reduced utility bills",
        description: "The white reflective TPO membrane reduced the clubhouse's summer cooling loads by approximately 18%."
      },
      {
        title: "Warranty assurance",
        description: "Delivered a 20-year manufacturer warranty, giving the management firm peace of mind and fixed maintenance costs."
      }
    ]
  },
  {
    slug: "cedar-pines-roof-replacement",
    title: "Cedar Pines Roof Replacement",
    location: "Cedar Pines Hillside",
    clientType: "Homeowners Association (HOA)",
    serviceProvided: "Multi-Family Roof Replacement",
    duration: "14 Days",
    mainImage: "/images/project-pipe-repair.jpg",
    overviewHtml: "The <strong>Cedar Pines Roof Replacement</strong> was coordinated with the <strong>homeowners association</strong> to replace aging roofs across eight residential blocks in the hillside community. Chronic ice-damming during heavy winters had weakened the eaves, necessitating a complete structural refresh.",
    scopeIntroHtml: "We performed a complete asphalt shingle replacement and ventilation overhaul across all eight multi-family buildings. The project was completed in <strong>14 days</strong> using high-wind architectural shingles and custom ice-shield membranes.",
    scopeSteps: [
      {
        title: "Asphalt shingle tear-off",
        description: "We stripped the old layers of shingles and inspected the underlying decking boards for signs of dry rot."
      },
      {
        title: "Ice and water shield application",
        description: "Installed self-adhering membrane underlayment along the eaves and valleys to prevent future ice-dam backups."
      },
      {
        title: "Architectural shingle laying",
        description: "Laid premium high-wind architectural shingles designed to withstand mountain gusts and severe snow loads."
      },
      {
        title: "Ventilation optimization",
        description: "Fitted new continuous ridge vents and soffit intake vents to ensure optimal attic temperature regulation year-round."
      }
    ],
    scopeImages: [
      "/images/hero-worker.jpg",
      "/images/industries-workers.jpg"
    ],
    resultsIntroHtml: "The <strong>Cedar Pines Roof Replacement</strong> modernizes the community's exterior look while building a defense against harsh alpine winters.",
    resultsSteps: [
      {
        title: "Complete ice-dam elimination",
        description: "Optimized thermal flow in the attics has prevented winter ice-dam buildups entirely."
      },
      {
        title: "Enhanced neighborhood aesthetics",
        description: "The uniform, rich charcoal architectural shingles instantly boosted property curb appeal."
      },
      {
        title: "Coordinated resident safety",
        description: "The project was executed with zero safety incidents and minimal disruption to the hillside residents."
      }
    ]
  },
  {
    slug: "willow-creek-emergency",
    title: "Willow Creek Emergency",
    location: "Willow Creek",
    clientType: "Private Homeowner",
    serviceProvided: "Emergency Storm Damage Restoration",
    duration: "3 Days",
    mainImage: "/images/project-plumbing-emergency.jpg",
    overviewHtml: "The <strong>Willow Creek Emergency</strong> restoration was launched immediately after a severe storm knocked a heavy oak tree limb onto a residential roof deck. The impact breached the attic, posing an immediate threat of water damage to the living space below.",
    scopeIntroHtml: "Our emergency crew stabilized the home within hours of the call, then spent <strong>3 days</strong> rebuilding the fractured framing, deck, and matching the surrounding asphalt shingles to restore safety.",
    scopeSteps: [
      {
        title: "Immediate storm tarping",
        description: "Secured the breach with heavy-duty tarps in active storm conditions to stop water intrusion."
      },
      {
        title: "Rafter sistering and repair",
        description: "Replaced and sistered three cracked structural rafters in the attic to restore load capacity."
      },
      {
        title: "Plywood decking deck refit",
        description: "Removed the punctured sheathing and installed new CDX plywood deck panels flush with the original roof."
      },
      {
        title: "Shingle blending",
        description: "Matched and integrated new architectural shingles with the surrounding roof for a seamless aesthetic blend."
      }
    ],
    scopeImages: [
      "/images/worker-handshake.jpg",
      "/images/client-testimonial.jpg"
    ],
    resultsIntroHtml: "The <strong>Willow Creek Emergency</strong> project successfully protected the home interior and restored the roof's structural integrity under tight constraints.",
    resultsSteps: [
      {
        title: "Zero water damage",
        description: "Our rapid-response tarping prevented secondary interior water damage, saving thousands in drywall repairs."
      },
      {
        title: "Insurance coordination",
        description: "Supplied complete documentation, photo evidence, and structural reports directly to the homeowner’s insurance adjuster."
      },
      {
        title: "Fast structural sign-off",
        description: "The repairs were certified safe by local building inspectors within 72 hours of the tree limb impact."
      }
    ]
  },
  {
    slug: "oaklane-estate-roofing",
    title: "Oaklane Estate Roofing",
    location: "Oaklane Gated Community",
    clientType: "Custom Home Builder",
    serviceProvided: "Standing Seam Metal Roof Installation",
    duration: "7 Days",
    mainImage: "/images/project-estate-roofing.jpg",
    overviewHtml: "The <strong>Oaklane Estate Roofing</strong> installation was designed in collaboration with a <strong>custom home builder</strong> for a luxury modern home. The architect specified a standing seam metal system to achieve clean lines and a maintenance-free lifetime shell.",
    scopeIntroHtml: "We custom-fabricated and installed a standing seam steel roof system. Over <strong>7 days</strong>, our sheet metal craftsmen formed the panels on-site and installed them using concealed fasteners for a modern, sleek appearance.",
    scopeSteps: [
      {
        title: "High-temp underlayment",
        description: "Applied a premium, high-temperature self-adhering underlayment suitable for metal roof thermal movements."
      },
      {
        title: "On-site metal roll-forming",
        description: "Used our mobile roll-former to fabricate custom-length 24-gauge steel panels on the building site."
      },
      {
        title: "Concealed fastener installation",
        description: "Secured the panels using heavy-duty clips and screws that are completely hidden, eliminating exposed penetrations."
      },
      {
        title: "Trim and flashing detail",
        description: "Custom-bent ridge caps, valleys, and sidewall flashings to match the minimalist architectural aesthetic."
      }
    ],
    scopeImages: [
      "/images/about-roofing.jpg",
      "/images/about-roof-tiling.jpg"
    ],
    resultsIntroHtml: "The <strong>Oaklane Estate Roofing</strong> project delivered a high-end, contemporary finish with extreme longevity and wind resistance.",
    resultsSteps: [
      {
        title: "Striking modern curb appeal",
        description: "The charcoal standing seam metal panels perfectly complement the modern design of the estate."
      },
      {
        title: "Zero penetration durability",
        description: "The concealed fastener layout guarantees no screw leaks over the lifetime of the metal."
      },
      {
        title: "Class-A fire and wind rating",
        description: "Fully certified for maximum fire safety and rated to withstand wind uplift forces up to 130 mph."
      }
    ]
  }
];
