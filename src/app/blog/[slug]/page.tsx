"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

const postsDb: Record<string, { title: string; date: string; author: string; readTime: string; content: React.ReactNode }> = {
  "edge-computing-evolution": {
    title: "The Evolution of Edge Computing",
    date: "October 12, 2024",
    author: "Hyperium Engineering",
    readTime: "8 min read",
    content: (
      <>
        <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
          As enterprise applications demand lower latency and higher availability, the transition from centralized cloud architectures to distributed edge networks has accelerated. In this technical deep dive, we explore the mechanisms driving edge computing and how it enables scalable enterprise workloads.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Shift to Decentralization</h2>
        <p className="mb-6">
          Traditional cloud computing models often suffer from latency overheads when serving global user bases. By moving compute resources closer to the end user—the "edge" of the network—organizations can significantly reduce round-trip times, improve application responsiveness, and decrease bandwidth costs.
        </p>
        <p className="mb-6">
          This paradigm shift is particularly critical for real-time applications such as autonomous systems, industrial IoT, and interactive enterprise tools. The key components of modern edge architectures include:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-300">
          <li><strong>Micro-data centers:</strong> Distributed compute nodes located in high-density metropolitan areas.</li>
          <li><strong>Edge-native databases:</strong> Data stores optimized for conflict-free replication across disparate geographical regions.</li>
          <li><strong>Serverless edge functions:</strong> Lightweight execution environments running on CDN nodes.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Implementing Edge Functions</h2>
        <p className="mb-6">
          Deploying logic to the edge requires a stateless and efficient execution model. Below is an example of an edge-deployed middleware function that handles geographic routing and rate limiting, reducing the load on the origin server.
        </p>
        <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl my-8 overflow-x-auto">
          <pre className="text-blue-400 font-mono text-sm">
            <code>{`export async function edgeMiddleware(req) {
  const clientIp = req.headers.get("x-forwarded-for");
  const geoRegion = req.headers.get("x-geo-region");
  
  // Rate limiting check at the edge
  const isAllowed = await rateLimiter.check(clientIp);
  if (!isAllowed) {
    return new Response("Too Many Requests", { status: 429 });
  }

  // Route to the nearest backend node
  const backendUrl = selectOptimalBackend(geoRegion);
  return fetch(\`\${backendUrl}/api/data\`, {
    headers: req.headers
  });
}`}</code>
          </pre>
        </div>
        <p className="mb-6">
          By executing this logic at the edge, invalid requests are filtered before they ever reach the core infrastructure, optimizing resource utilization and protecting backend systems from sudden traffic spikes.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Conclusion</h2>
        <p className="mb-6">
          Edge computing is no longer a niche optimization; it is a fundamental pillar of modern, scalable enterprise architecture. As the tooling ecosystem matures, we expect to see even more complex workloads migrating from central data centers directly to the edge, further blurring the lines between the client and the cloud.
        </p>
      </>
    ),
  },
  "post-quantum-cryptography": {
    title: "Post-Quantum Cryptography in Enterprise Infrastructure",
    date: "September 28, 2024",
    author: "Alex Rivers",
    readTime: "12 min read",
    content: (
      <>
        <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
          The rapid advancement of quantum computing presents an unprecedented threat to contemporary cryptographic standards. As Shor's algorithm moves closer to practical implementation, enterprise organizations must proactively transition to post-quantum cryptography (PQC) to secure long-term data integrity.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Quantum Threat Landscape</h2>
        <p className="mb-6">
          Public-key algorithms such as RSA, ECC, and Diffie-Hellman rely on the computational difficulty of factoring large integers and computing discrete logarithms. Quantum computers, leveraging superposition and entanglement, can solve these mathematical problems exponentially faster than classical computers.
        </p>
        <p className="mb-6">
          This vulnerability affects virtually all secure communications on the internet, including TLS handshakes, digital signatures, and secure shell connections. The "store now, decrypt later" strategy employed by adversaries makes this an immediate concern, even before cryptographically relevant quantum computers (CRQCs) are fully realized.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Standardizing Post-Quantum Algorithms</h2>
        <p className="mb-6">
          Organizations like NIST have been leading the effort to standardize quantum-resistant algorithms. These algorithms generally fall into several mathematical families:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-300">
          <li><strong>Lattice-based cryptography:</strong> Utilizing the shortest vector problem (SVP) in high-dimensional lattices (e.g., CRYSTALS-Kyber, CRYSTALS-Dilithium).</li>
          <li><strong>Hash-based signatures:</strong> Relying on the security of cryptographic hash functions (e.g., SPHINCS+).</li>
          <li><strong>Multivariate cryptography:</strong> Based on the difficulty of solving systems of multivariate polynomials.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Migration Strategies for Enterprises</h2>
        <p className="mb-6">
          Transitioning to PQC requires a phased, crypto-agile approach. Hardcoding cryptographic primitives must be eliminated in favor of modular architectures. Below is a simplified example of how an enterprise might implement a hybrid key exchange mechanism, combining a classical algorithm (like ECDHE) with a post-quantum algorithm (like Kyber).
        </p>
        <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl my-8 overflow-x-auto">
          <pre className="text-blue-400 font-mono text-sm">
            <code>{`import { ecdhe, kyber768 } from "enterprise-crypto-suite";

function hybridKeyExchange(clientPublicKeyECDHE, clientPublicKeyKyber) {
  // Classical Key Exchange
  const sharedSecretClassical = ecdhe.computeSecret(clientPublicKeyECDHE);
  
  // Post-Quantum Key Encapsulation
  const { sharedSecretPQ, ciphertext } = kyber768.encapsulate(clientPublicKeyKyber);
  
  // Combine secrets using a secure KDF (Key Derivation Function)
  const finalSessionKey = kdf.derive(
    Buffer.concat([sharedSecretClassical, sharedSecretPQ])
  );
  
  return { finalSessionKey, ciphertext };
}`}</code>
          </pre>
        </div>
        <p className="mb-6">
          By utilizing a hybrid approach, systems maintain the proven security of classical algorithms while adding the quantum resistance of new standards. This mitigates the risk of unforeseen vulnerabilities in nascent PQC algorithms.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Looking Forward</h2>
        <p className="mb-6">
          The migration to post-quantum cryptography is a complex infrastructural challenge, not merely a software update. Enterprises must begin auditing their cryptographic assets now, ensuring their compliance and data protection strategies are robust enough to withstand the quantum era.
        </p>
      </>
    ),
  },
  "ai-infrastructure": {
    title: "Architecting Scalable AI Infrastructure",
    date: "September 15, 2024",
    author: "Sarah Chen",
    readTime: "10 min read",
    content: (
      <>
        <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
          Deploying machine learning models into production requires more than just a trained artifact. It necessitates a highly available, robust, and scalable infrastructure capable of handling variable inference loads, massive data pipelines, and strict compliance requirements.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Decoupling Compute and State</h2>
        <p className="mb-6">
          One of the fundamental principles of scalable AI infrastructure is the separation of compute (model inference) from state (feature stores and databases). Monolithic inference servers quickly become bottlenecks as traffic scales.
        </p>
        <p className="mb-6">
          By containerizing inference workloads and deploying them via orchestrators like Kubernetes, organizations can dynamically scale pods based on custom metrics, such as GPU utilization or request queue length.
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-300">
          <li><strong>Model Registries:</strong> Centralized repositories for versioning and managing model artifacts.</li>
          <li><strong>Feature Stores:</strong> Optimized databases serving pre-computed features at low latency for real-time inference.</li>
          <li><strong>Inference Gateways:</strong> API layers handling routing, batching, and authentication.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Dynamic Batching for High Throughput</h2>
        <p className="mb-6">
          Hardware accelerators like GPUs are most efficient when processing data in parallel. Dynamic batching is a technique where an inference server collects incoming requests over a tiny time window and processes them together, drastically improving throughput without significantly impacting latency.
        </p>
        <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl my-8 overflow-x-auto">
          <pre className="text-blue-400 font-mono text-sm">
            <code>{`class DynamicBatcher:
    def __init__(self, model, max_batch_size=16, timeout_ms=5):
        self.model = model
        self.max_batch_size = max_batch_size
        self.timeout = timeout_ms / 1000.0
        self.queue = []

    async def add_request(self, input_tensor):
        future = asyncio.Future()
        self.queue.append((input_tensor, future))
        
        if len(self.queue) >= self.max_batch_size:
            self.process_batch()
            
        return await future

    def process_batch(self):
        batch = self.queue[:self.max_batch_size]
        self.queue = self.queue[self.max_batch_size:]
        
        inputs = torch.cat([req[0] for req in batch], dim=0)
        outputs = self.model.predict(inputs)
        
        for i, (_, future) in enumerate(batch):
            future.set_result(outputs[i])`}</code>
          </pre>
        </div>
        <p className="mb-6">
          This Python pseudocode demonstrates the core concept: queuing requests until a batch size is met or a timeout occurs, ensuring the underlying model is utilized optimally.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Ensuring Enterprise Reliability</h2>
        <p className="mb-6">
          Beyond pure performance, enterprise AI infrastructure requires comprehensive observability, including data drift monitoring, latency tracking, and fallback mechanisms. Implementing multi-region deployments ensures that critical AI services remain available even during localized outages.
        </p>
      </>
    ),
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = postsDb[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-neutral-400 mb-8">
            The technical resource you are looking for has been moved or does not exist. Please check the URL or return to our engineering blog.
          </p>
          <a href="/blog" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all">
            Return to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <TracingBeam className="px-6 py-12">
      <div className="max-w-3xl mx-auto antialiased relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-4">Engineering Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-neutral-500 text-sm">{post.date} • {post.readTime}</p>
            </div>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-blue max-w-none text-neutral-300">
          {post.content}
        </div>
      </div>
    </TracingBeam>
  );
}
