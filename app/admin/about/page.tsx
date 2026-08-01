"use client";

import { useEffect, useState } from "react";

import TextField from "./TextField";
import TextArea from "./TextArea";
import SaveButton from "./SaveButton";

import {
  AboutData,
  defaultAboutData,
} from "./types";

import {
  loadAbout,
  saveAbout,
} from "./aboutService";

export default function AboutCMS() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [about, setAbout] =
    useState<AboutData>(defaultAboutData);

  useEffect(() => {
    async function fetchData() {
      const result = await loadAbout();

      setAbout(result);

      setLoading(false);
    }

    fetchData();
  }, []);

  async function handleSave() {
    try {
      setSaving(true);

      await saveAbout(about);

      alert("About Updated Successfully");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-400 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto rounded-xl border border-yellow-500 p-8">

        <h1 className="text-3xl font-bold text-yellow-400 mb-8">
          About CMS
        </h1>

        <div className="space-y-5">
                    <TextField
            label="Title"
            value={about.title}
            onChange={(value) =>
              setAbout({ ...about, title: value })
            }
          />

          <TextField
            label="Subtitle"
            value={about.subtitle}
            onChange={(value) =>
              setAbout({ ...about, subtitle: value })
            }
          />

          <TextField
            label="Heading"
            value={about.heading}
            onChange={(value) =>
              setAbout({ ...about, heading: value })
            }
          />

          <TextField
            label="Highlight Heading"
            value={about.highlight_heading}
            onChange={(value) =>
              setAbout({
                ...about,
                highlight_heading: value,
              })
            }
          />

          <TextArea
            label="Description"
            rows={5}
            value={about.description}
            onChange={(value) =>
              setAbout({
                ...about,
                description: value,
              })
            }
          />

          <TextField
            label="Experience"
            value={about.experience}
            onChange={(value) =>
              setAbout({
                ...about,
                experience: value,
              })
            }
          />

          <TextField
            label="Projects Completed"
            value={about.projects_completed}
            onChange={(value) =>
              setAbout({
                ...about,
                projects_completed: value,
              })
            }
          />
                    <TextField
            label="Happy Clients"
            value={about.happy_clients}
            onChange={(value) =>
              setAbout({
                ...about,
                happy_clients: value,
              })
            }
          />

          <TextField
            label="Team Members"
            value={about.team_members}
            onChange={(value) =>
              setAbout({
                ...about,
                team_members: value,
              })
            }
          />

          <TextField
            label="Button Text"
            value={about.button_text}
            onChange={(value) =>
              setAbout({
                ...about,
                button_text: value,
              })
            }
          />

          <TextField
            label="Button Link"
            value={about.button_link}
            onChange={(value) =>
              setAbout({
                ...about,
                button_link: value,
              })
            }
          />

          <TextField
            label="Image"
            value={about.image}
            onChange={(value) =>
              setAbout({
                ...about,
                image: value,
              })
            }
          />

          <SaveButton
            loading={saving}
            onClick={handleSave}
          />

        </div>
      </div>
    </main>
  );
}