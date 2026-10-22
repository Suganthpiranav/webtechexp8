import React from "react";
import { Cpu, Shield, Code, Cloud, Layers } from "lucide-react";

/**
 * Utility helper to determine category icon and badge styling class
 * @param {string} category 
 * @returns {{ className: string, icon: JSX.Element, label: string }}
 */
export const getCategoryMeta = (category) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("artificial") || cat.includes("ai")) {
    return {
      className: "ai",
      icon: <Cpu size={13} />,
      label: "AI & ML"
    };
  }
  if (cat.includes("cyber") || cat.includes("security")) {
    return {
      className: "cybersecurity",
      icon: <Shield size={13} />,
      label: "Cybersecurity"
    };
  }
  if (cat.includes("web") || cat.includes("dev")) {
    return {
      className: "web-development",
      icon: <Code size={13} />,
      label: "Web Dev"
    };
  }
  if (cat.includes("cloud")) {
    return {
      className: "cloud-computing",
      icon: <Cloud size={13} />,
      label: "Cloud"
    };
  }
  return {
    className: "technology",
    icon: <Layers size={13} />,
    label: "Technology"
  };
};
