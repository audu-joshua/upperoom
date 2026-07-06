"use client";

import { useEffect, useId, useRef, useState } from "react";

export type CustomSelectOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: CustomSelectOption[];
  label?: string;
  placeholder?: string;
  className?: string;
};

export function CustomSelect({
  value,
  onChange,
  options,
  label,
  placeholder = "Select…",
  className = "",
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      {label && (
        <span className="mb-2 block text-label-md text-on-surface-variant">{label}</span>
      )}

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
        className="flex min-w-[220px] cursor-pointer items-center justify-between gap-3 rounded-lg border border-white/10 bg-surface-container/80 px-4 py-2.5 text-left text-body-md text-on-surface shadow-sm backdrop-blur-md transition-all duration-300 hover:border-secondary/30 hover:bg-surface-container focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
      >
        <span className={selected ? "text-on-surface" : "text-on-surface-variant"}>
          {selected?.label ?? placeholder}
        </span>
        <span
          className={`material-symbols-outlined text-secondary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          expand_more
        </span>
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={label ?? "Options"}
          className="absolute top-[calc(100%+0.5rem)] right-0 z-40 min-w-full overflow-hidden rounded-lg border border-white/10 bg-surface-container-high/95 py-1 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-secondary/10 text-secondary"
                      : "text-on-surface hover:bg-white/5"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <span className="material-symbols-outlined text-base">check</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
