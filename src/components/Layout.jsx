import * as React from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { motion, AnimatePresence } from "motion/react";

export function Layout({ children, currentTab, onTabChange }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleTabChange = (tab) => {
    onTabChange(tab);
    setIsSidebarOpen(false);
  };

  return (
    <div className="container-fluid p-0">
      <Sidebar
        currentTab={currentTab}
        onTabChange={handleTabChange}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      {isSidebarOpen && (
        <button
          className="sidebar-overlay d-lg-none border-0"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation menu"
        />
      )}
      <div className="main-content">
        <TopBar
          onTabChange={handleTabChange}
          onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
        />
        <div className="container-fluid py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
