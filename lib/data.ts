// ---------------------------------------------------------------------------
// Data access layer.
//
// Each getter tries Supabase first (when configured) and falls back to the
// seed content in lib/content.ts on any miss or error. This keeps the site a
// true CMS-backed app while still rendering on localhost:3000 with no database.
// ---------------------------------------------------------------------------

import { supabase } from "./supabase";
import {
  experience as seedExperience,
  pmProjects as seedPmProjects,
  aiProjects as seedAiProjects,
  certifications as seedCertifications,
  type Experience,
  type PmProject,
  type AiProject,
  type Certification,
} from "./content";

export async function getExperience(): Promise<Experience[]> {
  if (!supabase) return seedExperience;
  const { data, error } = await supabase
    .from("experience")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error || !data || data.length === 0) return seedExperience;
  return data.map((row) => ({
    logoUrl: row.logo_url,
    logoAlt: row.logo_alt,
    title: row.title,
    company: row.company,
    location: row.location,
    period: row.period,
    bullets: row.bullets,
  }));
}

export async function getPmProjects(): Promise<PmProject[]> {
  if (!supabase) return seedPmProjects;
  const { data, error } = await supabase
    .from("pm_projects")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error || !data || data.length === 0) return seedPmProjects;
  return data.map((row) => ({
    slug: row.slug,
    name: row.name,
    description: row.description,
    role: row.role,
    tools: row.tools,
    outcome: row.outcome,
  }));
}

export async function getAiProjects(): Promise<AiProject[]> {
  if (!supabase) return seedAiProjects;
  const { data, error } = await supabase
    .from("ai_projects")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error || !data || data.length === 0) return seedAiProjects;
  return data.map((row) => ({
    slug: row.slug,
    name: row.name,
    description: row.description,
    techStack: row.tech_stack,
    caseStudy: row.case_study,
  }));
}

export async function getCertifications(): Promise<Certification[]> {
  if (!supabase) return seedCertifications;
  const { data, error } = await supabase
    .from("certifications")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error || !data || data.length === 0) return seedCertifications;
  return data.map((row) => ({
    title: row.title,
    issuer: row.issuer,
    date: row.date,
    issuedBy: row.issued_by,
  }));
}
