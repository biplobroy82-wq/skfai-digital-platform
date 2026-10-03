export interface AboutData {
  title: string;
  subtitle: string;

  heading: string;
  highlight_heading: string;

  description: string;

  experience: string;

  projects_completed: string;
  happy_clients: string;
  team_members: string;

  button_text: string;
  button_link: string;

  image: string;
}

export const defaultAboutData: AboutData = {
  title: "",
  subtitle: "",

  heading: "",
  highlight_heading: "",

  description: "",

  experience: "",

  projects_completed: "",
  happy_clients: "",
  team_members: "",

  button_text: "",
  button_link: "",

  image: "",
};