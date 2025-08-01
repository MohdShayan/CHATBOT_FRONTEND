import './index.css';

const capabilities = [
  { name: "Reasoning", description: "GeekBot uses Gemini to provide step-by-step solutions in coding, math, and logic." },
  { name: "Vision", description: "It can interpret images and screenshots by leveraging Gemini’s multimodal features." },
  { name: "Tool Integration", description: "Connect GeekBot to external APIs and automate tasks using your Gemini-powered backend." },
  { name: "Structured Output", description: "Get clean outputs like JSON, tables, or Markdown formatted by Gemini." },
  { name: "Image Generation", description: "Use Gemini’s image generation APIs to turn prompts into visuals." },
  { name: "Live Search", description: "With Gemini’s real-time capabilities, GeekBot can fetch current information when enabled." }
];

const models = [
  {
    name: "GeekBot Standard",
    description: "Powered by Gemini Pro for general tasks like coding, Q&A, summarization, and logic.",
    contextWindow: "Up to 1M tokens (Gemini Pro)",
    textInput: "Based on Gemini pricing",
    imageInput: "Supported",
    output: "Text, Markdown, JSON"
  },
  {
    name: "GeekBot Vision",
    description: "Uses Gemini's multimodal capabilities for interpreting charts, screenshots, PDFs, and more.",
    contextWindow: "Up to 32K tokens",
    textInput: "Based on Gemini pricing",
    imageInput: "Yes",
    output: "Visual + Textual Outputs"
  }
];

const updates = [
  { title: "Gemini Integration Improved", date: "July 28, 2025", description: "GeekBot now supports the latest Gemini Pro 1.5 APIs with enhanced vision and longer context." },
  { title: "Quickstart Scripts", date: "July 10, 2025", description: "Easily bootstrap your Gemini-based chatbot using the GeekBot wrapper CLI." },
  { title: "v1.0 Release", date: "June 12, 2025", description: "GeekBot is out of beta. Integrate with your Gemini key and start building instantly." }
];

function Header() {
  return (
    <header className="py-6 px-4 bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#00C853] tracking-wide">GeekBot</h1>
        <nav className="space-x-4 text-sm font-medium">
          <a href="#" className="text-gray-300 hover:text-white transition-all">Docs</a>
          <a href="#" className="text-gray-300 hover:text-white transition-all">Start Building</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-20 px-4 text-center bg-gray-900">
      <h2 className="text-5xl font-bold mb-4 text-[#00C853]">Supercharge Your Ideas with GeekBot</h2>
      <p className="text-xl text-gray-300 mb-8">A smart chatbot wrapper powered by Gemini, built for developers and creators.</p>
      <a
        href="#"
        className="bg-[#00C853] hover:bg-[#00b74f] transition-all text-white font-semibold py-2 px-6 rounded shadow-lg"
      >
        Try GeekBot Free
      </a>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center text-white">What GeekBot Can Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[#00C853]">{cap.name}</h4>
              <p className="text-gray-300">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quickstart() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Quickstart</h3>
        <p className="text-xl text-gray-300 mb-8">Set up your Gemini API key and start chatting through GeekBot instantly.</p>
        <div className="bg-gray-800 p-6 rounded-lg inline-block">
          <p className="text-gray-300 mb-4">Install the GeekBot Wrapper</p>
          <code className="block mb-2 bg-black p-2 rounded">npm install geekbot</code>
          <a href="#" className="mt-4 inline-block bg-[#00C853] hover:bg-[#00b74f] text-white font-bold py-2 px-4 rounded">Start Building</a>
        </div>
      </div>
    </section>
  );
}



function Updates() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Latest Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">{update.title}</h4>
              <p className="text-gray-400 mb-2">{update.date}</p>
              <p className="text-gray-300">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 px-4 bg-gray-900 text-center">
      <p className="text-gray-300">&copy; {new Date().getFullYear()} GeekBot. All rights reserved.</p>
      <a href="#" className="text-blue-400 hover:underline">Built by Shayan</a>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <Hero />
      <Capabilities />
      <Quickstart />
      
      <Updates />
      <Footer />
    </div>
  );
}

export default App;
