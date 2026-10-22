// Tech News Aggregator - Sample News Dataset
// Explicitly curated sample articles across the 5 required technology categories.
// Each item includes full article content, realistic dates, sources, and metadata.

export const CATEGORIES = [
  "All",
  "Artificial Intelligence (AI)",
  "Cybersecurity",
  "Web Development",
  "Cloud Computing",
  "Technology"
];

export const SAMPLE_NEWS = [
  {
    id: "ai-reasoning-models-breakthrough",
    title: "Next-Gen Reasoning AI Models Show Unprecedented Code Verification Abilities",
    category: "Artificial Intelligence (AI)",
    shortDescription: "Researchers unveil new frontier AI models that achieve 92% accuracy on complex algorithmic synthesis and autonomous bug repair benchmarks.",
    fullContent: `Artificial intelligence research laboratories have announced a monumental shift in automated software engineering with the release of specialized reasoning models. Unlike previous predictive text generators, these systems utilize multi-step chain-of-thought verification to debug, validate, and refactor mission-critical software pipelines in real time.

In rigorous tests across competitive coding platforms and enterprise codebases, the new architecture achieved a 92% success rate on zero-shot algorithmic verification. The system breaks down complicated code into formal specifications, checks edge cases symbolically, and generates reproducible test suites before submitting patches.

Key Takeaways:
- Multi-step reasoning loops drastically reduce code hallucinations.
- Automated generation of edge-case test suites achieves 95%+ coverage.
- Enterprise adopters report a 40% reduction in production vulnerability triage times.

"We are witnessing the transition from probabilistic autocomplete to verifiable computational reasoning," noted lead AI researcher Dr. Elena Vance. "The next horizon is integrating these reasoning engines directly into distributed CI/CD pipelines to guarantee safety before deployment."`,
    source: "MIT Technology Review",
    author: "Dr. Elena Vance",
    publishedDate: "October 21, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    url: "https://technologyreview.com",
    tags: ["AI", "Machine Learning", "Software Engineering", "Reasoning"],
    isFeatured: true,
    isSample: true
  },
  {
    id: "cybersecurity-zero-trust-quantum-crypto",
    title: "NIST Finalizes Post-Quantum Encryption Standards to Secure Global Infrastructure",
    category: "Cybersecurity",
    shortDescription: "The National Institute of Standards and Technology releases final post-quantum cryptographic standards, urging immediate migration for enterprise protocols.",
    fullContent: `In what cybersecurity experts describe as a watershed moment for data protection, the National Institute of Standards and Technology (NIST) has officially ratified the final algorithmic standards for post-quantum cryptography (PQC).

With quantum computers steadily approaching cryptanalytically relevant scale, legacy RSA and elliptic curve public-key cryptography risk widespread obsolescence. The newly finalized lattice-based algorithms, including ML-KEM for key establishment and ML-DSA for digital signatures, provide mathematical security against both classical and quantum adversaries.

Security architects globally are urged to initiate cryptographic inventories to discover hidden dependencies in TLS handshakes, digital certificates, and VPN gateways. Early adopters in the financial sector have already begun deploying hybrid cryptographic schemes that combine classical and post-quantum keys to ensure seamless backward compatibility.

Key Takeaways:
- Standardized algorithms ML-KEM and ML-DSA are now recommended for all new security implementations.
- Hybrid deployment enables organizations to meet compliance without breaking existing client connections.
- Migration deadlines for government and critical infrastructure providers are set within the next 24 months.`,
    source: "Dark Reading",
    author: "Marcus Sterling",
    publishedDate: "October 20, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    url: "https://darkreading.com",
    tags: ["Cybersecurity", "Post-Quantum", "Encryption", "NIST"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "web-dev-react-server-components-ecosystem",
    title: "Web Standards Body Adopts Universal Hydration and Streaming Protocol",
    category: "Web Development",
    shortDescription: "A groundbreaking W3C proposal unifies component streaming, micro-frontends, and partial hydration across all major web browsers and modern frameworks.",
    fullContent: `Web development took another major leap forward as the W3C Web Platform Working Group published the First Public Working Draft for Native Component Streaming and Progressive Hydration.

For years, developers have navigated disparate server-side rendering (SSR) implementations across React, Vue, Svelte, and Solid. The new standard provides native browser primitives for selective hydration, allowing critical interactive elements like navigation menus and payment modals to become reactive instantly without waiting for megabytes of peripheral client JavaScript.

Early benchmarks demonstrate a 60% reduction in Largest Contentful Paint (LCP) and near-zero Total Blocking Time (TBT) on constrained mobile devices. Framework maintainers have committed to shipping standard-compliant runtimes before the end of the year.

Key Takeaways:
- Browser-native support for partial hydration eliminates hydration mismatches.
- Massive performance gains on low-end hardware and high-latency mobile networks.
- Universal component streaming bridges the gap between frontend frameworks.`,
    source: "Smashing Magazine",
    author: "Rachel Chen",
    publishedDate: "October 19, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    url: "https://smashingmagazine.com",
    tags: ["Web Dev", "Performance", "React", "W3C"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "cloud-serverless-gpu-orchestration",
    title: "Hyperscalers Unveil Sub-Second Cold Start Serverless GPU Clusters for Distributed AI",
    category: "Cloud Computing",
    shortDescription: "New hardware virtualization breakthroughs allow cloud developers to spin up GPU-backed microservices in under 800 milliseconds on demand.",
    fullContent: `Cloud computing providers have solved one of the most frustrating bottlenecks in modern artificial intelligence deployment: GPU provisioning latency. 

Historically, spinning up high-performance compute instances for inference required minutes of image pulling and hardware handshakes, forcing companies to maintain expensive idle capacity. The newly engineered microVM architecture enables GPU kernel snapshots and memory hot-plugging, achieving cold start latencies of under 800 milliseconds.

This breakthrough allows development teams to run complex diffusion and language inference pipelines under a pure pay-per-millisecond serverless pricing model, cutting cloud infrastructure bills by up to 70% for sporadic workloads.

Key Takeaways:
- Cold start times reduced from 120 seconds to under 800 milliseconds.
- MicroVM kernel snapshotting eliminates idle GPU operating costs.
- Native Kubernetes integration permits seamless scaling from zero to hundreds of compute units.`,
    source: "Cloud Native Computing News",
    author: "Julian Reynolds",
    publishedDate: "October 18, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    url: "https://cloudcomputing.org",
    tags: ["Cloud", "Serverless", "Kubernetes", "GPU"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "tech-optical-computing-chips",
    title: "Silicon Photonics Breakthrough: Light-Based Processors Shatter Energy Efficiency Records",
    category: "Technology",
    shortDescription: "Engineers demonstrate silicon photonic chips executing matrix multiplications at 100x lower power consumption than traditional copper circuits.",
    fullContent: `In an era where data centers consume an escalating share of global electricity, optical computing has crossed from theoretical laboratory curiosity to commercially viable silicon.

Researchers have successfully fabricated an integrated electro-photonic accelerator capable of performing tensor math using modulated light beams rather than electronic transistor switches. Because photons travel without heat dissipation from electrical resistance, the chip sustains immense throughput at room temperature with passive cooling.

The breakthrough paves the way for ultra-compact edge devices, autonomous vehicle sensors, and greener hyperscale data centers that can operate within sustainable power envelopes.

Key Takeaways:
- Photonic tensor cores operate at room temperature with negligible resistive heat.
- Energy consumption is reduced by two orders of magnitude compared to traditional silicon.
- Standard CMOS fabrication facilities can produce these optical dies without retooling.`,
    source: "Ars Technica",
    author: "Dr. Tariq Al-Mansoor",
    publishedDate: "October 17, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    url: "https://arstechnica.com",
    tags: ["Technology", "Hardware", "Photonics", "Semiconductors"],
    isFeatured: true,
    isSample: true
  },
  {
    id: "ai-robotics-multimodal-embodied-intelligence",
    title: "Embodied AI Breakthrough: Humanoid Robots Master Complex Kitchen Tasks Through One-Shot Video",
    category: "Artificial Intelligence (AI)",
    shortDescription: "New vision-language-action (VLA) models allow bipedal and dexterous robots to learn delicate manual manipulations directly from single human demonstration videos.",
    fullContent: `Robotics engineers have revealed an embodied artificial intelligence model that bridges high-level semantic reasoning with fine-motor physical control. By training on thousands of hours of multimodal sensory feeds, the VLA model enables robots to interpret natural human actions—such as cracking eggs, peeling vegetables, and folding towels—and mirror them immediately in physical reality.

The neural architecture dynamically translates visual prompts into real-time spatial trajectories, compensating on the fly for unexpected obstacles, slippery surfaces, and variable weights.

Industrial and healthcare facilities are preparing pilot programs to deploy these assistants for elderly care and surgical tray assembly.

Key Takeaways:
- One-shot visual learning reduces physical robot programming from weeks to seconds.
- Integrated tactile sensors prevent over-gripping and accidental breakage.
- Edge tensor processing units allow the robot to function safely even when disconnected from the cloud.`,
    source: "The Verge",
    author: "Sophia Martinez",
    publishedDate: "October 16, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    url: "https://theverge.com",
    tags: ["AI", "Robotics", "Computer Vision", "Embodied AI"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "cybersecurity-ai-phishing-defense-mesh",
    title: "Autonomous Defensive AI Swarms Successfully Mitigate Coordinated Deepfake Cyberattacks",
    category: "Cybersecurity",
    shortDescription: "Enterprises deploy collaborative defensive AI agents that intercept synthesized audio and biometric impersonation attempts in real-time video conferences.",
    fullContent: `As generative audio and video synthesis tools reach photorealistic fidelity, threat actors have escalated attacks using real-time executive voice clones and synthetic video feeds to bypass corporate approval processes.

In response, leading cybersecurity consortia have deployed autonomous defensive AI meshes. These lightweight security monitors inspect video packet streams for microscopic artifact anomalies, unnatural blood flow fluctuations (photoplethysmography), and acoustic frequency irregularities that humans cannot detect.

During a recent simulated enterprise attack against a Fortune 500 company, the defensive swarm isolated three simultaneous executive impersonation attempts within 140 milliseconds, automatically revoking compromised credentials without human intervention.

Key Takeaways:
- Real-time deepfake detection prevents multimillion-dollar wire fraud scams.
- Biometric verification uses physiological pulse and micro-expression cues.
- Swarm architecture shares threat intelligence across peer networks instantly.`,
    source: "Wired",
    author: "Nathaniel Frost",
    publishedDate: "October 15, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    url: "https://wired.com",
    tags: ["Cybersecurity", "Deepfakes", "Zero Trust", "Defensive AI"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "web-dev-webassembly-full-stack",
    title: "WebAssembly 3.0 Standard Finalized: Native Threads and Direct DOM Manipulation Arrive",
    category: "Web Development",
    shortDescription: "WebAssembly introduces zero-cost DOM bindings and garbage collection integration, enabling C++, Rust, and Go apps to run natively at near-bare-metal speed.",
    fullContent: `The World Wide Web Consortium (W3C) has finalized the WebAssembly 3.0 specification, bringing the long-anticipated native direct DOM access and full garbage collection interop into browser engines.

Developers no longer need bridge wrappers or glue JavaScript code to mutate DOM nodes or dispatch events from compiled languages. Applications written in Rust, Go, or Swift can now render interactive UI hierarchies with virtually zero translation overhead.

Creative software companies, CAD platforms, and 3D game engines have reported frame-rate stability jumps of over 45% when porting high-intensity client applications directly to the modern browser canvas.

Key Takeaways:
- Direct DOM bindings eliminate JavaScript glue code overhead.
- Native multithreading enables true parallel compute in browser tabs.
- High-performance desktop software can transition to web-native delivery seamlessly.`,
    source: "Hacker News Digest",
    author: "Leo Lindqvist",
    publishedDate: "October 14, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    url: "https://webassembly.org",
    tags: ["Web Dev", "WebAssembly", "Rust", "Browser Tech"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "cloud-multi-region-active-active-edge",
    title: "Global Distributed Databases Reach Zero-Latency Edge Consensus with CRDT 2.0",
    category: "Cloud Computing",
    shortDescription: "Novel conflict-free replicated data types allow global applications to execute concurrent state mutations without database lock contention.",
    fullContent: `Maintaining consistent application state across global cloud regions has historically meant choosing between high latency roundtrips or eventual consistency conflicts.

A breakthrough in Conflict-Free Replicated Data Types (CRDTs), dubbed CRDT 2.0, has solved this dilemma for modern distributed applications. By embedding causal graph clocks and compact delta-state replication directly into edge CDN nodes, global reads and writes now resolve concurrently with zero locking latency.

Global e-commerce platforms and multiplayer collaborative editing suites have demonstrated seamless multi-region active-active deployments across AWS, Google Cloud, and Azure simultaneously without encountering split-brain anomalies.

Key Takeaways:
- Eliminates cross-oceanic network roundtrips for distributed database writes.
- Deterministic conflict resolution guarantees eventual consistency with zero locks.
- True multi-cloud resilience: survive complete regional outages without downtime.`,
    source: "InfoWorld",
    author: "Priya Sundaram",
    publishedDate: "October 13, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    url: "https://infoworld.com",
    tags: ["Cloud", "Distributed Systems", "Databases", "Edge Computing"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "tech-solid-state-battery-breakthrough",
    title: "Solid-State Lithium Batteries Enter Mass Production, Doubling Electric Vehicle and Device Range",
    category: "Technology",
    shortDescription: "Automotive and consumer tech manufacturers commence commercial shipments of solid-electrolyte batteries promising 10-minute ultra-fast charging.",
    fullContent: `After more than a decade of intensive laboratory research, solid-state battery technology has officially commenced commercial manufacturing lines in Japan and Germany.

By replacing volatile liquid electrolytes with non-flammable ceramic separators, the new cells achieve an energy density of 480 Wh/kg—nearly double that of conventional lithium-ion batteries. In addition to drastically eliminating thermal runaway fire risks, the cells retain 90% health even after 1,500 continuous 10-minute fast-charging cycles.

Next-generation smartphones and laptops powered by solid-state cells will deliver up to three days of heavy usage on a single charge while weighing 30% less than current models.

Key Takeaways:
- 480 Wh/kg energy density doubles battery runtime in mobile devices and EVs.
- Solid ceramic electrolyte prevents thermal runaway fire hazards.
- 10-minute charging to 80% capacity with negligible battery degradation over time.`,
    source: "TechCrunch",
    author: "Hiroshi Tanaka",
    publishedDate: "October 12, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    url: "https://techcrunch.com",
    tags: ["Technology", "Batteries", "Clean Energy", "Hardware"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "ai-medical-diagnostic-protein-synthesis",
    title: "AI Discovers Universal Broad-Spectrum Enzyme Capable of Neutralizing Viral Mutations",
    category: "Artificial Intelligence (AI)",
    shortDescription: "Generative molecular AI models synthesize an artificial protein that binds to invariant viral surface regions, promising broad immunity.",
    fullContent: `Computational biology has reached a historic milestone as an AI-designed molecular enzyme showed complete neutralization against multiple rapidly mutating viral strains in pre-clinical trials.

Rather than targeting variable outer spike proteins that constantly evolve, the AI model mapped invariant physical geometry deep inside viral fusion mechanisms. Within hours, the generative diffusion model designed an artificial synthetic protein from scratch that fits the invariant pocket with sub-angstrom precision.

Biotechnology firms are now fast-tracking clinical safety trials for the synthetic enzyme, which can be manufactured via standard microbial fermentation at low cost.

Key Takeaways:
- De novo protein design targeted invariant viral mechanics inaccessible to conventional drugs.
- The entire molecular design sequence was calculated in under 36 hours.
- High-yield microbial synthesis enables rapid, low-cost global distribution.`,
    source: "Nature Biotechnology",
    author: "Dr. Alistair Finch",
    publishedDate: "October 11, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    url: "https://nature.com",
    tags: ["AI", "Biotech", "Healthcare", "Deep Learning"],
    isFeatured: false,
    isSample: true
  },
  {
    id: "cybersecurity-satellite-mesh-encryption",
    title: "Space-Based Mesh Networks Introduce Laser-Encrypted Inter-Satellite Links",
    category: "Cybersecurity",
    shortDescription: "Low-Earth orbit satellite constellations deploy optical cross-links with quantum random number generation, shielding global data transit from terrestrial tapping.",
    fullContent: `Global communication carriers are rapidly moving core internet backbone transit off terrestrial undersea cables and onto low-Earth orbit satellite constellations equipped with optical laser cross-links.

Because laser beams travel through vacuum at the speed of light—roughly 40% faster than photons through glass fiber—latency between continents is significantly curtailed. Crucially, the space laser mesh is fortified with quantum random number generators on board each satellite, ensuring that optical transit streams are physically immune to undersea fiber tapping and terrestrial interception.

The space network guarantees authenticated, tamper-evident routing for financial institutions, critical infrastructure, and diplomatic missions worldwide.

Key Takeaways:
- Optical satellite cross-links reduce transcontinental network latency by up to 35%.
- Quantum random number generators generate truly unpredictable cryptographic seeds.
- Physical immunity from deep-sea cable cutting and terrestrial surveillance choke points.`,
    source: "SpaceTech & Defense Review",
    author: "Cassandra Wright",
    publishedDate: "October 10, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
    url: "https://spacetechreview.com",
    tags: ["Cybersecurity", "Space", "Satellites", "Encryption"],
    isFeatured: false,
    isSample: true
  }
];
