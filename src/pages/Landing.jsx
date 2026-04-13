import * as React from "react";
import { motion } from "motion/react";
import { Shield, Lock, Globe, Zap, ArrowRight, ChevronRight, Star } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Landing({ onGetStarted, onSignIn }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top px-4" style={{ height: '80px' }}>
        <div className="container-fluid">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '40px', height: '40px' }}>
              <Shield size={24} />
            </div>
            <div>
              <h1 className="h5 fw-bold mb-0 text-uppercase">Sovereign</h1>
              <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '10px', letterSpacing: '1px' }}>Archive</small>
            </div>
          </div>
          
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-4">
              {["Features", "Security", "Pricing", "Enterprise"].map((item) => (
                <li key={item} className="nav-item">
                  <a href={`#${item.toLowerCase()}`} className="nav-link fw-bold text-muted text-uppercase small" style={{ letterSpacing: '1px' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button 
              onClick={onSignIn}
              className="btn btn-link text-decoration-none fw-bold text-muted small px-3"
            >
              Sign In
            </button>
            <Button onClick={onGetStarted} className="rounded-pill px-4">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-5 pb-5 mt-5 overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold text-uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '1px' }}>
                  <Zap size={14} className="me-1" />
                  Now with AI-Powered Indexing
                </span>
                <h2 className="display-1 fw-black tracking-tighter mb-4" style={{ lineHeight: '0.9', fontWeight: 900 }}>
                  THE DIGITAL <br />
                  <span className="text-primary">VAULT</span> FOR <br />
                  IDEAS.
                </h2>
                <p className="lead text-muted mb-5 fw-medium">
                  Sovereign Archive is the high-end document management system designed for intellectual capital. Secure, encrypted, and beautifully organized.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="d-flex flex-column flex-sm-row gap-3"
              >
                <Button size="lg" className="px-5 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2 shadow-lg" onClick={onGetStarted}>
                  Create Your Vault
                  <ArrowRight size={20} />
                </Button>
                <button className="btn btn-link text-decoration-none fw-bold text-muted d-flex align-items-center justify-content-center gap-2 group">
                  Watch the Film
                  <div className="rounded-circle border d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                    <ChevronRight size={16} />
                  </div>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-5 pt-5 border-top d-flex align-items-center gap-4"
              >
                <div className="d-flex">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i} 
                      className="rounded-circle border border-white" 
                      style={{ width: '40px', height: '40px', marginLeft: i > 1 ? '-12px' : '0' }}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-primary mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="mb-0 text-uppercase fw-bold text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>Trusted by 10k+ Archivers</p>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="position-relative"
              >
                <div className="bg-light rounded-5 p-3 shadow-lg border">
                  <img 
                    src="https://picsum.photos/seed/dashboard/800/1000" 
                    alt="App Interface" 
                    className="rounded-4 w-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="position-absolute top-0 end-0 bg-white p-3 rounded-4 shadow border mt-n4 me-n4"
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-info bg-opacity-10 text-info d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <Lock size={20} />
                    </div>
                    <div>
                      <p className="mb-0 text-uppercase fw-bold text-muted" style={{ fontSize: '8px' }}>Encryption</p>
                      <p className="mb-0 fw-bold">AES-256</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="position-absolute bottom-0 start-0 bg-white p-3 rounded-4 shadow border mb-n4 ms-n4"
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="mb-0 text-uppercase fw-bold text-muted" style={{ fontSize: '8px' }}>Availability</p>
                      <p className="mb-0 fw-bold">99.99%</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center max-w-3xl mx-auto mb-5">
            <h3 className="h2 fw-bold mb-4">Engineered for Excellence</h3>
            <p className="text-muted fw-medium">We've combined military-grade security with a world-class user experience to create the ultimate home for your data.</p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <FeatureCard 
                icon={Shield} 
                title="End-to-End Encryption" 
                desc="Your data is encrypted before it even leaves your device. We never have access to your keys."
                color="primary"
              />
            </div>
            <div className="col-md-4">
              <FeatureCard 
                icon={Zap} 
                title="Instant Indexing" 
                desc="Our AI-powered engine indexes your documents in real-time for lightning-fast retrieval."
                color="info"
              />
            </div>
            <div className="col-md-4">
              <FeatureCard 
                icon={Globe} 
                title="Global Sync" 
                desc="Access your vault from anywhere in the world with seamless, high-speed synchronization."
                color="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 border-top">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-2">
                <div className="bg-primary rounded-2 d-flex align-items-center justify-content-center text-white" style={{ width: '32px', height: '32px' }}>
                  <Shield size={18} />
                </div>
                <h1 className="h6 fw-bold mb-0 text-uppercase">Sovereign</h1>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="d-flex justify-content-center gap-4">
                <a href="#" className="text-decoration-none text-muted small fw-bold text-uppercase">Privacy</a>
                <a href="#" className="text-decoration-none text-muted small fw-bold text-uppercase">Terms</a>
                <a href="#" className="text-decoration-none text-muted small fw-bold text-uppercase">Security</a>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <p className="mb-0 text-muted small fw-bold text-uppercase opacity-50">© 2024 Sovereign Archive. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, color }) {
  return (
    <div className="p-5 rounded-5 bg-white border h-100 transition-all shadow-hover">
      <div className={`rounded-4 bg-${color} bg-opacity-10 text-${color} d-flex align-items-center justify-content-center mb-4`} style={{ width: '64px', height: '64px' }}>
        <Icon size={32} />
      </div>
      <h4 className="h4 fw-bold mb-3">{title}</h4>
      <p className="text-muted mb-0 fw-medium">{desc}</p>
    </div>
  );
}
