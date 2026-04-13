import * as React from "react";
import { Search, Bell, History, CloudUpload, Menu } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Card";

export function TopBar({ onTabChange, onMenuClick }) {
  return (
    <header className="top-bar justify-content-between">
      <button
        className="btn btn-light rounded-circle p-2 text-secondary mobile-menu-btn"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <Menu size={18} />
      </button>

      <div className="d-flex align-items-center flex-grow-1 search-wrap" style={{ maxWidth: '400px' }}>
        <div className="position-relative w-100">
          <Search className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted" size={16} />
          <Input
            className="ps-5 rounded-pill"
            placeholder="Search archive..."
          />
        </div>
      </div>

      <nav className="d-none d-md-flex align-items-center gap-4 mx-4">
        {["Recent", "Favorites", "Shared"].map((item) => (
          <button
            key={item}
            className="btn btn-link text-decoration-none text-secondary fw-medium p-0"
            style={{ fontSize: '14px' }}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="d-flex align-items-center gap-3 actions-wrap">
        <div className="d-flex align-items-center gap-1 me-1 me-md-2">
          <button className="btn btn-light rounded-circle p-2 text-secondary">
            <Bell size={18} />
          </button>
          <button className="btn btn-light rounded-circle p-2 text-secondary d-none d-sm-inline-flex">
            <History size={18} />
          </button>
        </div>
        <Button
          size="sm"
          className="d-flex align-items-center gap-2"
          onClick={() => onTabChange("upload")}
        >
          <CloudUpload size={16} />
          <span className="d-none d-sm-inline">Upload</span>
        </Button>
      </div>
    </header>
  );
}
