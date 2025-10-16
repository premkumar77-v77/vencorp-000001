import { forwardRef, useState, useEffect } from "react";
import { Brain, FileText, BarChart, Zap, Target, Workflow, ChevronRight, Bot, Cpu, Network, Database, MessageSquare, TrendingUp, Shield, ArrowRight, Clock, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAutomation = forwardRef<HTMLElement>((props, ref) => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [currentYear, setCurrentYear] = useState(2024);
  const [showModal, setShowModal] = useState(false);
  const [selectedAgentDetails, setSelectedAgentDetails] = useState(null);

  const aiProducts = [
    {
      id: 1,
      icon: <Brain className="w-12 h-12" />,
      title: "Analyse Agent",
      category: "Neural Processing",
      year: "2024",
      quarter: "Q1",
      description: "Empowering businesses with advanced neural networks, the Analyse Agent deciphers complex data, predicts market trends, and automates strategic decisions with unparalleled precision and efficiency.",
      features: ["Advanced Deep Learning Algorithms", "Contextual Natural Language Processing", "Real-time Pattern Recognition", "Proactive Predictive Analytics"],
      metrics: { accuracy: "98.5%", speed: "< 100ms", efficiency: "300x faster" },
      color: "from-primary to-neon-cyan",
      bgColor: "bg-gradient-to-br from-primary/10 to-neon-cyan/10",
      status: "Active",
      milestone: "Foundation"
    },
    {
      id: 2,
      icon: <Bot className="w-12 h-12" />,
      title: "Voice Agent",
      category: "Workflow Automation",
      year: "2024",
      quarter: "Q2",
      description: "Streamline operations with AI-driven workflow automation that eliminates manual tasks, optimizes process efficiency, and scales seamlessly with your business growth.",
      features: ["AI-Powered Process Mining", "Cross-System Task Automation", "Dynamic Workflow Optimization", "Predictive Scheduling"],
      metrics: { productivity: "5x increase", accuracy: "99.2%", savings: "70% cost" },
      color: "from-neon-cyan to-neon-pink",
      bgColor: "bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10",
      status: "Active",
      milestone: "Automation"
    },
    {
      id: 3,
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Validation Agent",
      category: "Intelligent Communication",
      year: "2024",
      quarter: "Q3",
      description: "Elevate customer interactions with intelligent conversational AI that understands context, emotion, and intent—delivering natural, human-like experiences across all communication channels.",
      features: ["Advanced Sentiment Analysis", "Real-Time Multi-Language Support", "Contextual Intent Recognition", "Emotion-Adjusted Responses"],
      metrics: { satisfaction: "96%", response: "< 2 seconds", languages: "150+" },
      color: "from-neon-pink to-primary",
      bgColor: "bg-gradient-to-br from-neon-pink/10 to-primary/10",
      status: "Active",
      milestone: "Communication"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedProduct((prev) => (prev + 1) % aiProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [aiProducts.length]);

  return (
    <section ref={ref} id="automation" className="py-32 bg-background section-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Bot className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-foreground/80">Next-Gen AI Platform</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">AI Automation</span>
            <br />
            <span className="text-4xl md:text-5xl text-foreground/70">Ecosystem</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-6 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered tools designed to revolutionize 
            how you work, automate processes, and scale your business intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-futuristic group">
              <span>Explore Platform</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-primary/20 hover:border-primary">
              View Documentation
            </Button>
          </div>
        </div>

        {/* AI Products Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-foreground/80">Product Evolution Timeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our AI Products</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Journey through our AI innovation timeline - from foundational technologies to cutting-edge solutions
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-primary via-neon-cyan to-neon-pink opacity-30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {aiProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`relative flex items-center group ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  onClick={() => setSelectedProduct(index)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                      selectedProduct === index 
                        ? 'bg-primary border-primary shadow-lg shadow-primary/50 scale-125' 
                        : 'bg-background border-foreground/30 group-hover:border-primary group-hover:scale-110'
                    }`}>
                      <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                        selectedProduct === index ? 'animate-ping bg-primary/20' : ''
                      }`}></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 cursor-pointer ${
                    index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                  }`}>
                    <div className={`group-hover:scale-105 transition-all duration-500 ${
                      selectedProduct === index ? 'scale-105' : ''
                    }`}>
                      <div className={`relative p-6 rounded-2xl border border-foreground/10 glass overflow-hidden ${
                        selectedProduct === index ? 'ring-2 ring-primary/30 shadow-xl shadow-primary/10' : ''
                      }`}>
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 ${product.bgColor} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                        
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color} text-white group-hover:scale-110 transition-transform duration-500`}>
                                {product.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold gradient-text mb-1">
                                  {product.title}
                                </h3>
                                <p className="text-sm text-foreground/60">
                                  {product.category}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-mono text-primary font-bold">
                                {product.year} {product.quarter}
                              </div>
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-mono mt-1 ${
                                product.status === 'Active' 
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                  : product.status === 'Beta'
                                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              }`}>
                                {product.status}
                              </span>
                            </div>
                          </div>

                          {/* Milestone Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full mb-3">
                            <Calendar className="w-3 h-3 text-primary" />
                            <span className="text-xs font-medium text-foreground/70">
                              Milestone: {product.milestone}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-foreground/70 leading-relaxed mb-4 text-sm">
                            {product.description}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {product.features.slice(0, 3).map((feature, idx) => (
                              <span 
                                key={idx} 
                                className="px-2 py-1 bg-foreground/10 rounded text-xs font-medium text-foreground/60"
                              >
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 3 && (
                              <span className="px-2 py-1 text-xs text-primary font-medium">
                                +{product.features.length - 3} more
                              </span>
                            )}
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {Object.entries(product.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-sm font-bold text-primary">{value}</div>
                                <div className="text-xs text-foreground/60 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>

                          {/* Action Button */}
                          <Button 
                            size="sm" 
                            className="btn-ghost-futuristic group w-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedAgentDetails(product);
                              setShowModal(true);
                            }}
                          >
                            <span>Explore Details</span>
                            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Year Label (opposite side) */}
                  <div className={`w-5/12 flex ${
                    index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'
                  }`}>
                    <div className="text-center">
                      <div className="text-2xl font-bold font-mono gradient-text">
                        {product.year}
                      </div>
                      <div className="text-sm text-foreground/60 font-medium">
                        {product.quarter}
                      </div>
                      <div className="text-xs text-foreground/40 mt-1">
                        {product.milestone}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Future Timeline Extension */}
            <div className="relative flex items-center justify-center mt-12">
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 rounded-full border-2 border-dashed border-foreground/30 bg-background">
                  <div className="absolute inset-0 rounded-full animate-pulse bg-primary/20"></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold gradient-text mb-1">More to Come</div>
                <div className="text-sm text-foreground/60">Innovation Never Stops</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bento-card p-12">
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI platform to automate workflows, 
            enhance productivity, and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-futuristic group">
              <span>Start Free Trial</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Agent Details Modal */}
      {showModal && selectedAgentDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md overflow-hidden">
          <div className="relative w-full max-w-4xl mx-4 max-h-[85vh] overflow-y-auto rounded-2xl bg-background border border-foreground/10 p-8 shadow-2xl">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors z-10"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className={`p-5 rounded-xl bg-gradient-to-br ${selectedAgentDetails.color} text-white`}>
                {selectedAgentDetails.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold gradient-text mb-1">{selectedAgentDetails.title}</h2>
                <p className="text-foreground/60">{selectedAgentDetails.category}</p>
              </div>
              <div className="sm:ml-auto text-left sm:text-right mt-2 sm:mt-0">
                <div className="text-lg font-mono text-primary font-bold mb-1">
                  {selectedAgentDetails.year} {selectedAgentDetails.quarter}
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-mono ${
                  selectedAgentDetails.status === 'Active' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : selectedAgentDetails.status === 'Beta'
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {selectedAgentDetails.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-foreground/5 p-6 rounded-xl border border-foreground/10">
                <h3 className="text-xl font-bold mb-4 gradient-text">Overview</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {selectedAgentDetails.description}
                </p>

                <h3 className="text-xl font-bold mb-4 gradient-text">Key Features</h3>
                <ul className="space-y-3">
                  {selectedAgentDetails.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-foreground/5 p-6 rounded-xl border border-foreground/10">
                <h3 className="text-xl font-bold mb-4 gradient-text">Performance Metrics</h3>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {Object.entries(selectedAgentDetails.metrics).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 rounded-lg bg-background border border-foreground/10">
                      <span className="text-foreground/70 capitalize">{key}</span>
                      <span className="text-xl font-bold text-primary">{value as React.ReactNode}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4 gradient-text">Development Timeline</h3>
                <div className="p-4 rounded-lg bg-background border border-foreground/10 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground/70">Release Date</span>
                    <span className="font-bold">{selectedAgentDetails.year} {selectedAgentDetails.quarter}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Milestone</span>
                    <span className="font-bold">{selectedAgentDetails.milestone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Button className="btn-futuristic group px-8" onClick={() => setShowModal(false)}>
                <span>Close Details</span>
                <X className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

AIAutomation.displayName = "AIAutomation";

export default AIAutomation;