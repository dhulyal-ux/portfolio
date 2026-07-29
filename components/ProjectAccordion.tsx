"use client";

import { useState } from "react";
import type { PmProject } from "@/lib/content";
import { ChevronIcon } from "./Icons";

// PM case-study card: tap "View Case Study" to expand Role / Tools / Outcome
// inline (no separate page). Gentle hover lift; soft, calm expansion.
export default function ProjectAccordion({ project }: { project: PmProject }) {
  const [open, setOpen] = useState(false);
  const panelId = `pm-${project.slug}`;

  return (
    <article
      className="group rounded-card border border-charcoal/5 bg-paper p-6 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-paper-lift sm:p-7"
    >
      <h3 className="font-serif text-xl text-olive sm:text-2xl">{project.name}</h3>
      <p className="mt-3 text-[0.975rem] text-charcoal/75">{project.description}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition-colors hover:text-ember-dark"
      >
        {open ? "Hide Case Study" : "View Case Study"}
        <ChevronIcon
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <dl className="space-y-4 border-t border-charcoal/10 pt-5">
            <Detail label="Role" value={project.role} />
            <Detail label="Tools" value={project.tools} />
            <Detail label="Outcome" value={project.outcome} />
          </dl>
        </div>
      </div>
    </article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow mb-1 text-clay">{label}</dt>
      <dd className="text-[0.95rem] text-charcoal/80">{value}</dd>
    </div>
  );
}
