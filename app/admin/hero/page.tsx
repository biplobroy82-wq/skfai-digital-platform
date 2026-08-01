"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import TextField from "@/app/admin/TextField";
import TextArea from "@/app/admin/TextArea";

export default function HeroCMS() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [hero, setHero] = useState({
    title: "",
    subtitle: "",

    company_name: "",
    company_tagline: "",
    badge: "",

    hero_title_line1: "",
    hero_title_line2: "",
    hero_title_line3: "",
    hero_title_line4: "",

    description: "",

    button_text: "",
    button_link: "",
    background_image: "",
  });

  useEffect(() => {
    loadHero();
  }, []);

  async function loadHero() {
    const { data, error } = await supabase
      .from("hero")
      .select("*")
      .eq("id", 1)
      .single();

    if (!error && data) {
      setHero({
        title: data.title || "",
        subtitle: data.subtitle || "",

        company_name: data.company_name || "",
        company_tagline: data.company_tagline || "",
        badge: data.badge || "",

        hero_title_line1: data.hero_title_line1 || "",
        hero_title_line2: data.hero_title_line2 || "",
        hero_title_line3: data.hero_title_line3 || "",
        hero_title_line4: data.hero_title_line4 || "",
                description: data.description || "",

        button_text: data.button_text || "",
        button_link: data.button_link || "",
        background_image: data.background_image || "",
      });
    }

    setLoading(false);
  }

  async function saveHero() {
    setSaving(true);

    const { error } = await supabase
      .from("hero")
      .update({
        title: hero.title,
        subtitle: hero.subtitle,

        company_name: hero.company_name,
        company_tagline: hero.company_tagline,
        badge: hero.badge,

        hero_title_line1: hero.hero_title_line1,
        hero_title_line2: hero.hero_title_line2,
        hero_title_line3: hero.hero_title_line3,
        hero_title_line4: hero.hero_title_line4,

        description: hero.description,

        button_text: hero.button_text,
        button_link: hero.button_link,
        background_image: hero.background_image,

        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Hero Updated Successfully");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-yellow-400 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto rounded-xl border border-yellow-500 p-8">

        <h1 className="text-3xl font-bold text-yellow-400 mb-8">
          Hero CMS
        </h1>

        <div className="space-y-5">

          <TextField
            label="Company Name"
            value={hero.company_name}
            onChange={(value) =>
              setHero({ ...hero, company_name: value })
            }
          />

          <TextField
            label="Company Tagline"
            value={hero.company_tagline}
            onChange={(value) =>
              setHero({ ...hero, company_tagline: value })
            }
          />

          <TextField
            label="Badge"
            value={hero.badge}
            onChange={(value) =>
              setHero({ ...hero, badge: value })
            }
          />

          <TextField
            label="Hero Title Line 1"
            value={hero.hero_title_line1}
            onChange={(value) =>
              setHero({ ...hero, hero_title_line1: value })
            }
          />
                    <TextField
            label="Hero Title Line 2"
            value={hero.hero_title_line2}
            onChange={(value) =>
              setHero({ ...hero, hero_title_line2: value })
            }
          />

          <TextField
            label="Hero Title Line 3"
            value={hero.hero_title_line3}
            onChange={(value) =>
              setHero({ ...hero, hero_title_line3: value })
            }
          />

          <TextField
            label="Hero Title Line 4"
            value={hero.hero_title_line4}
            onChange={(value) =>
              setHero({ ...hero, hero_title_line4: value })
            }
          />

          <TextArea
            label="Description"
            value={hero.description}
            rows={4}
            onChange={(value) =>
              setHero({ ...hero, description: value })
            }
          />

          <TextField
            label="SEO Title"
            value={hero.title}
            onChange={(value) =>
              setHero({ ...hero, title: value })
            }
          />

          <TextArea
            label="SEO Subtitle"
            value={hero.subtitle}
            rows={3}
            onChange={(value) =>
              setHero({ ...hero, subtitle: value })
            }
          />

          <TextField
            label="Button Text"
            value={hero.button_text}
            onChange={(value) =>
              setHero({ ...hero, button_text: value })
            }
          />

          <TextField
            label="Button Link"
            value={hero.button_link}
            onChange={(value) =>
              setHero({ ...hero, button_link: value })
            }
          />

          <TextField
            label="Background Image"
            value={hero.background_image}
            onChange={(value) =>
              setHero({ ...hero, background_image: value })
            }
          />

          <button
            onClick={saveHero}
            disabled={saving}
            className="w-full rounded-lg bg-yellow-500 text-black font-bold py-3 hover:bg-yellow-400 disabled:opacity-50 transition"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>
      </div>
    </main>
  );
}