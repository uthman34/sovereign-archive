import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, ArrowLeft, Mail, Lock, User, ArrowRight, Github } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Card";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Auth({ onBack, onSuccess, initialMode = "signin" }) {
  const [mode, setMode] = React.useState(initialMode);
  const [isLoading, setIsLoading] = React.useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;

      onSuccess(loggedInUser);
    } catch (error) {
      console.error("Google sign-in failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen container-fluid p-0 bg-white">
      <div className="row g-0 min-h-screen">
        {/* Left Pane: Branding & Visuals */}
        <div className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 text-white position-relative overflow-hidden" style={{ backgroundColor: 'var(--primary-color)' }}>
          <div className="position-absolute top-0 left-0 w-100 h-100 opacity-10 pointer-events-none">
            <div className="position-absolute top-50 start-50 translate-middle border border-white rounded-circle" style={{ width: '200%', height: '200%', borderWidth: '40px' }}></div>
            <div className="position-absolute top-50 start-50 translate-middle border border-white rounded-circle" style={{ width: '150%', height: '150%', borderWidth: '20px' }}></div>
          </div>

          <button
            onClick={onBack}
            className="btn btn-link text-decoration-none text-white opacity-75 hover-opacity-100 fw-bold small text-uppercase d-flex align-items-center gap-2 p-0 z-1"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>

          <div className="z-1">
            <div className="bg-white rounded-4 d-flex align-items-center justify-content-center text-primary mb-4 shadow-lg" style={{ width: '64px', height: '64px' }}>
              <Shield size={32} />
            </div>
            <h2 className="display-4 fw-black mb-4" style={{ lineHeight: '1.1', fontWeight: 900 }}>
              SECURE YOUR <br />
              INTELLECTUAL <br />
              CAPITAL.
            </h2>
            <p className="lead opacity-75 max-w-sm">
              Join thousands of professionals who trust Sovereign Archive for their most sensitive data.
            </p>
          </div>

          <div className="z-1 d-flex align-items-center gap-3">
            <div className="d-flex">
              {[1, 2, 3].map(i => (
                <img key={i} className="rounded-circle border border-primary" style={{ width: '32px', height: '32px', marginLeft: i > 1 ? '-8px' : '0' }} src={`https://picsum.photos/seed/auth${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
              ))}
            </div>
            <small className="text-uppercase fw-bold opacity-50" style={{ fontSize: '10px', letterSpacing: '1px' }}>Joined by 400+ this week</small>
          </div>
        </div>

        {/* Right Pane: Form */}
        <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center p-4 p-md-5 position-relative">
          <button
            onClick={onBack}
            className="d-lg-none position-absolute top-0 start-0 m-4 btn btn-link text-decoration-none text-muted fw-bold small text-uppercase d-flex align-items-center gap-2"
          >
            <ArrowLeft size={18} />
            Home
          </button>

          <div className="w-100" style={{ maxWidth: '400px' }}>
            <div className="text-center text-lg-start mb-5">
              <h3 className="h2 fw-black mb-2 tracking-tight">{mode === "signin" ? "Welcome Back" : "Create Account"}</h3>
              <p className="text-muted fw-medium">
                {mode === "signin"
                  ? "Enter your credentials to access your vault."
                  : "Start your 14-day free trial today. No credit card required."}
              </p>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-6">
                <button
                  type="button"
                  onClick={signInWithGoogle}
                  disabled={isLoading}
                  className="btn btn-outline-light text-dark fw-bold small w-100 py-2 border d-flex align-items-center justify-content-center gap-2"
                >
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                  {isLoading ? "Signing in..." : "Google"}
                </button>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-outline-light text-dark fw-bold small w-100 py-2 border d-flex align-items-center justify-content-center gap-2">
                  <Github size={18} />
                  GitHub
                </button>
              </div>
            </div>

            <div className="position-relative mb-4">
              <hr className="text-muted opacity-25" />
              <div className="position-absolute top-50 start-50 translate-middle bg-white px-3">
                <small className="text-uppercase fw-bold text-muted opacity-50" style={{ fontSize: '10px' }}>Or continue with email</small>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="row g-3">
              <AnimatePresence mode="wait">
                {mode === "signup" && (
                  <motion.div
                    key="signup-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="col-12"
                  >
                    <label className="form-label text-uppercase fw-bold text-muted small ms-1" style={{ fontSize: '10px' }}>Full Name</label>
                    <div className="position-relative">
                      <User className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted opacity-50" size={18} />
                      <Input className="ps-5" placeholder="John Doe" required />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="col-12">
                <label className="form-label text-uppercase fw-bold text-muted small ms-1" style={{ fontSize: '10px' }}>Email Address</label>
                <div className="position-relative">
                  <Mail className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted opacity-50" size={18} />
                  <Input className="ps-5" type="email" placeholder="name@company.com" required />
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label text-uppercase fw-bold text-muted small ms-1 mb-0" style={{ fontSize: '10px' }}>Password</label>
                  {mode === "signin" && (
                    <button type="button" className="btn btn-link text-decoration-none p-0 text-primary fw-bold text-uppercase" style={{ fontSize: '10px' }}>Forgot Password?</button>
                  )}
                </div>
                <div className="position-relative">
                  <Lock className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted opacity-50" size={18} />
                  <Input className="ps-5" type="password" placeholder="••••••••" required />
                </div>
              </div>

              <div className="col-12 mt-4">
                <Button
                  type="submit"
                  className="w-100 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="spinner-border spinner-border-sm" role="status"></div>
                  ) : (
                    <>
                      {mode === "signin" ? "Sign In to Vault" : "Create My Archive"}
                      <ArrowRight size={18} />
                    </>
                  )}
                </Button>
              </div>
            </form>

            <p className="text-center mt-4 mb-0 small fw-medium text-muted">
              {mode === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="btn btn-link text-decoration-none p-0 text-primary fw-bold"
              >
                {mode === "signin" ? "Sign up for free" : "Sign in instead"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
