import { supabase } from "@/lib/supabase";
import { AboutData, defaultAboutData } from "./types";

export async function loadAbout(): Promise<AboutData> {
  const { data, error } = await supabase
    .from("about")
    .select("*")
    .eq("id", 1)
    .single();

  if (error || !data) {
    console.error(error);
    return defaultAboutData;
  }

  return {
    title: data.title || "",
    subtitle: data.subtitle || "",

    heading: data.heading || "",
    highlight_heading: data.highlight_heading || "",

    description: data.description || "",

    experience: data.experience || "",

    projects_completed: data.projects_completed || "",
    happy_clients: data.happy_clients || "",
    team_members: data.team_members || "",

    button_text: data.button_text || "",
    button_link: data.button_link || "",

    image: data.image || "",
  };
}

export async function saveAbout(about: AboutData) {
  const { error } = await supabase
    .from("about")
    .update({
      title: about.title,
      subtitle: about.subtitle,

      heading: about.heading,
      highlight_heading: about.highlight_heading,

      description: about.description,

      experience: about.experience,

      projects_completed: about.projects_completed,
      happy_clients: about.happy_clients,
      team_members: about.team_members,

      button_text: about.button_text,
      button_link: about.button_link,

      image: about.image,

      updated_at: new Date().toISOString(),
    })
    .eq("id", 1);

  if (error) {
    throw error;
  }
}