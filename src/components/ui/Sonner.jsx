"use client";
import { Toaster as Sonner } from "sonner";

import {
  IconAlertOctagon,
  IconAlertSquareRounded,
  IconInfoSquareRounded,
  IconLoader3,
  IconSquareRoundedCheck,
  IconSquareRoundedX,
} from "@tabler/icons-react";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      position="top-center"
      richColors={true}
      toastOptions={{
        className: "rounded-lg shadow-lg",
      }}
      expanded={true}
      expand={true}
      visibleToasts={1}
      className="toaster group"
      icons={{
        success: <IconSquareRoundedCheck size={12} />,
        info: <IconInfoSquareRounded size={12} />,
        warning: <IconAlertSquareRounded size={12} />,
        error: <IconAlertOctagon size={12} />,
        loading: <IconLoader3 size={12} />,
        close: <IconSquareRoundedX size={12} />,
      }}
      style={{
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      }}
      {...props}
    />
  );
};

export { Toaster };
