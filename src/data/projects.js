/**
 * PROJECT ARCHIVE / EXPERIMENT LOGS
 * Note: These are structured, editable project files for the LogicShift team.
 * Replace placeholders with actual hackathon/coursework project links and details.
 * No fabricated metrics (e.g., "used by 100k users") are included.
 */

export const projects = [
  {
    id: "exp-01",
    projectNumber: "EXP_01 // SEC-A",
    name: "AeroTelemetry & Mission Log",
    shortDescription: "A telemetry monitoring dashboard designed for streaming sensor data and fault identification.",
    category: "Web Systems",
    status: "PROTOTYPE // VALIDATED",
    date: "2026 // Q1",
    problem: "Real-time sensor arrays generate asynchronous bursts of telemetry that overwhelm standard web visualizers, causing frame drops and dropped warning flags.",
    solution: "Engineered a low-overhead telemetry renderer using virtualized SVG buffers and differential state batching, keeping interface render times under 16ms.",
    technologies: ["React", "WebSockets", "Inline SVG", "Vite", "Tailored CSS"],
    keyFeature: "Zero-dependency vector trace plotting with instantaneous visual warning trigger thresholds.",
    viewProjectUrl: "#", // Replace with live demo URL or route
    githubUrl: "https://github.com/logicshift-team/aerotelemetry", // Replace with actual repository
    specs: [
      { label: "LATENCY", val: "< 16ms render" },
      { label: "STREAM", val: "Simulated WebSockets" },
      { label: "STATE", val: "Immutable Circular Buffer" }
    ]
  },
  {
    id: "exp-02",
    projectNumber: "EXP_02 // SEC-B",
    name: "Campus Grid Resource Scheduler",
    shortDescription: "Algorithmic resource allocation tool for engineering laboratories and hardware bench time.",
    category: "Systems & Tools",
    status: "PROTOTYPE // ACTIVE",
    date: "2025 // Q4",
    problem: "University lab equipment and specialized hardware suffer from overlapping bookings, untracked downtime, and manual spreadsheet contention.",
    solution: "Designed an automated conflict-resolution matrix utilizing interval graph scheduling to dynamically assign bench slots and broadcast equipment health status.",
    technologies: ["Node.js", "Express", "PostgreSQL", "React", "REST API"],
    keyFeature: "Conflict-free interval graph scheduler preventing overlapping reservations and automating queue reallocation.",
    viewProjectUrl: "#",
    githubUrl: "https://github.com/logicshift-team/campus-grid-scheduler",
    specs: [
      { label: "ALGORITHM", val: "Interval Scheduling" },
      { label: "STORAGE", val: "Relational Schema" },
      { label: "CONFLICTS", val: "Zero-Collision Engine" }
    ]
  },
  {
    id: "exp-03",
    projectNumber: "EXP_03 // SEC-C",
    name: "BlockShift Audit & State Explorer",
    shortDescription: "Visual state explorer and transaction tracing interface for competition smart contracts.",
    category: "Web Systems",
    status: "DEVELOPMENT",
    date: "2026 // GDG TRACK",
    problem: "Standard blockchain scanners display opaque byte payloads and raw hashes that make real-time hackathon contract verification tedious and slow.",
    solution: "Built a specialized audit visualizer that parses contract events into an annotated timeline diagram, allowing developers to trace state transitions visually.",
    technologies: ["JavaScript", "React", "Ethers.js Client", "CSS Grid", "JSON-RPC"],
    keyFeature: "State-delta diff view highlighting variable shifts between successive block transactions.",
    viewProjectUrl: "#",
    githubUrl: "https://github.com/logicshift-team/blockshift-state-explorer",
    specs: [
      { label: "PARSER", val: "ABI Event Decoder" },
      { label: "NETWORK", val: "EVM Testnet RPC" },
      { label: "UI MODE", val: "Dark Trace Graph" }
    ]
  },
  {
    id: "exp-04",
    projectNumber: "EXP_04 // SEC-D",
    name: "Terminal CLI Command Sandbox",
    shortDescription: "A lightweight, browser-based simulated terminal environment for educational CLI instruction.",
    category: "Prototype Labs",
    status: "LAB EXPERIMENT",
    date: "2026 // OPEN SOURCE",
    problem: "New engineering students often struggle with initial command-line syntax and fear executing destructive commands on their local operating systems.",
    solution: "Implemented an isolated virtual file system in memory with a custom command interpreter that teaches core UNIX commands through interactive missions.",
    technologies: ["JavaScript", "Virtual FS", "Regex Parser", "Modern CSS"],
    keyFeature: "Client-side virtual directory tree supporting cd, ls, cat, grep, and custom challenge scripts.",
    viewProjectUrl: "#",
    githubUrl: "https://github.com/logicshift-team/cli-command-sandbox",
    specs: [
      { label: "ENGINE", val: "Client-Side In-Memory" },
      { label: "SAFETY", val: "100% Isolated Sandbox" },
      { label: "PARSER", val: "AST Tokenizer" }
    ]
  }
];

export const projectCategories = [
  "All Projects",
  "Web Systems",
  "Systems & Tools",
  "Prototype Labs"
];
