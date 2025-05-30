import React from "react";

import { useTheme } from "next-themes";

export function ThemeContext() {
  const { setTheme, themes, theme } = useTheme();

  const keys = {
    dark: "Dark Mode",
    light: "Light Mode",
    system: "System Theme",
  };

  return (
    <div className="flex items-center gap-2">
      {themes.map((item) => (
        <button
          data-state={item == theme ? "active" : "inactive"}
          className="bg-surface-100 text-typography-50 data-[state=active]:bg-primary-500 data-[state=active]:text-primary-foreground cursor-pointer rounded-md px-2 py-1 text-sm"
          type="button"
          key={item}
          onClick={() => setTheme(item)}
        >
          {keys[item as "dark"]}
        </button>
      ))}
    </div>
  );
}
