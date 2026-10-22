import React from "react";
import { Check } from "lucide-react";
import { useNews } from "../context/NewsContext";

const Toast = () => {
  const { toastMessage } = useNews();
  if (!toastMessage) return null;

  return (
    <aside className="toast-container" role="status" aria-live="polite">
      <Check size={18} color="#10b981" />
      <span>{toastMessage}</span>
    </aside>
  );
};

export default Toast;
