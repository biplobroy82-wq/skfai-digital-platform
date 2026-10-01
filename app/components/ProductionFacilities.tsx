
"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Clapperboard,
  Scan,
  Camera,
  Lightbulb,
  Mic,
  MonitorPlay,
  Plane,
  Settings,
  Package,
  ArrowRight,
  Play,
  X,
  Sparkles,
  Video,
  Aperture,
} from "lucide-react";

type Facility = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  artIcon: LucideIcon;
  theme: string;
  details: string;
};

const facilities: Facility[] = [
  {
    number: "01",
    title: "Film Studio",
    description:
      "Professional indoor studio for commercials, interviews, reels and cinematic productions.",
    icon: Clapperboard,
    artIcon: Video,
    theme: "studio",
    details:
      "Indoor studio facilities for commercial advertisements, interviews, promotional videos, reels and professional film production.",
  },
  {
    number: "02",
    title: "Green Screen Studio",
    description:
      "Premium chroma setup for virtual backgrounds, VFX and creative video production.",
    icon: Scan,
    artIcon: Scan,
    theme: "green",
    details:
      "Green screen production for virtual backgrounds, product presentations, creative advertisements and visual effects.",
  },
  {
    number: "03",
    title: "4K Camera Setup",
    description:
      "Professional cameras with cinematic lenses for high-quality video production.",
    icon: Camera,
    artIcon: Aperture,
    theme: "camera",
    details:
      "Professional camera setups for brand films, product videos, corporate films, interviews and commercial shoots.",
  },
  {
    number: "04",
    title: "Professional Lighting",
    description:
      "Studio lighting setup for balanced, soft and premium cinematic visuals.",
    icon: Lightbulb,
    artIcon: Lightbulb,
    theme: "lighting",
    details:
      "Professional lighting arrangements for product shoots, interviews, indoor advertisements and cinematic visuals.",
  },
  {
    number: "05",
    title: "Audio Recording",
    description:
      "Crystal-clear voice recording with professional microphones and audio equipment.",
    icon: Mic,
    artIcon: Mic,
    theme: "audio",
    details:
      "Voice-over recording, dialogue recording, narration and audio support for advertisements and corporate videos.",
  },
  {
    number: "06",
    title: "Video Editing & VFX",
    description:
      "Creative editing, colour grading, motion graphics and cinematic visual effects.",
    icon: MonitorPlay,
    artIcon: MonitorPlay,
    theme: "editing",
    details:
      "Professional editing, colour correction, motion graphics, compositing, visual effects and final video delivery.",
  },
  {
    number: "07",
    title: "Drone Shoot",
    description:
      "Aerial photography and cinematic drone videography for events and commercial projects.",
    icon: Plane,
    artIcon: Plane,
    theme: "drone",
    details:
      "Aerial visuals for properties, events, industrial locations and commercial projects, subject to applicable permissions.",
  },
  {
    number: "08",
    title: "Creative Production",
    description:
      "Complete concept development, scripting, direction and post-production under one roof.",
    icon: Settings,
    artIcon: Clapperboard,
    theme: "creative",
    details:
      "Concept development, advertising scripts, storyboarding, production planning, direction and post-production.",
  },
  {
    number: "09",
    title: "Product Shoot",
    description:
      "Professional product photography and commercial video production.",
    icon: Package,
    artIcon: Package,
    theme: "product",
    details:
      "Product photography and promotional videos for consumer products, packaging, e-commerce and brand advertising.",
  },
];

export default function ProductionFacilities() {
  const [selectedFacility, setSelectedFacility] =
    useState<Facility | null>(null);

  const ModalIcon = selectedFacility?.icon;

  const whatsappLink =
    "https://wa.me/916204731481?text=" +
    encodeURIComponent(
      "Hello Sri Krishna Films, I would like to discuss a production project."
    );

  const enquiryLink = (title: string) =>
    "https://wa.me/916204731481?text=" +
    encodeURIComponent(
      `Hello Sri Krishna Films, I am interested in your ${title} service. Please share the details.`
    );

  return (
    <section
      id="production-facilities"
      className="production-section"
    >
      <div className="production-container">
        {/* SECTION HEADER */}
        <header className="production-header">
          <span className="production-badge">
            PRODUCTION FACILITIES
          </span>

          <h2>
            Professional Studio{" "}
            <span>Infrastructure</span>
          </h2>

          <div className="heading-underline" />

          <p>
            From pre-production to final delivery, Sri Krishna Films
            &amp; Advertisement Industry offers complete filmmaking,
            photography, editing and digital production services with
            modern equipment and experienced professionals.
          </p>
        </header>

        {/* FACILITY CARDS */}
        <div className="facility-grid">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            const ArtIcon = facility.artIcon;

            return (
              <article
                className="facility-card"
                key={facility.number}
              >
                <div className="facility-copy">
                  <div className="facility-card-heading">
                    <div className="facility-icon">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <span className="facility-number">
                      {facility.number}
                    </span>
                  </div>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>

                  <button
                    className="facility-preview"
                    onClick={() => setSelectedFacility(facility)}
                    aria-label={`Preview ${facility.title}`}
                  >
                    PREVIEW
                  </button>
                </div>

                {/* CSS-GENERATED VECTOR ART */}
                <div
                  className={`facility-art art-${facility.theme}`}
                  aria-hidden="true"
                >
                  <div className="art-grid" />
                  <div className="art-glow" />

                  <div className="art-orbit orbit-one" />
                  <div className="art-orbit orbit-two" />

                  {facility.theme === "studio" && (
                    <>
                      <div className="studio-light light-left" />
                      <div className="studio-light light-right" />
                      <div className="studio-tripod tripod-left" />
                      <div className="studio-tripod tripod-right" />
                      <div className="studio-chair" />
                    </>
                  )}

                  {facility.theme === "green" && (
                    <>
                      <div className="green-screen-panel" />
                      <div className="green-light green-light-left" />
                      <div className="green-light green-light-right" />
                      <div className="green-tripod" />
                    </>
                  )}

                  {facility.theme === "camera" && (
                    <>
                      <div className="camera-body" />
                      <div className="camera-lens" />
                      <div className="camera-top" />
                      <div className="camera-handle" />
                      <div className="camera-leg camera-leg-one" />
                      <div className="camera-leg camera-leg-two" />
                    </>
                  )}

                  {facility.theme === "lighting" && (
                    <>
                      <div className="softbox softbox-one" />
                      <div className="softbox softbox-two" />
                      <div className="softbox-stand stand-one" />
                      <div className="softbox-stand stand-two" />
                    </>
                  )}

                  {facility.theme === "audio" && (
                    <>
                      <div className="audio-mic">
                        <div className="mic-grille" />
                      </div>
                      <div className="mic-stand" />
                      <div className="audio-pop-filter" />
                      <div className="audio-wave wave-one" />
                      <div className="audio-wave wave-two" />
                    </>
                  )}

                  {facility.theme === "editing" && (
                    <>
                      <div className="editing-monitor monitor-one">
                        <div className="monitor-toolbar" />
                        <div className="monitor-timeline" />
                        <div className="monitor-chart" />
                      </div>
                      <div className="editing-monitor monitor-two">
                        <div className="monitor-toolbar" />
                        <div className="monitor-timeline" />
                      </div>
                      <div className="editing-desk" />
                    </>
                  )}

                  {facility.theme === "drone" && (
                    <>
                      <div className="drone-sun" />
                      <div className="drone-horizon" />
                      <div className="drone-city city-one" />
                      <div className="drone-city city-two" />
                      <div className="drone-city city-three" />
                      <div className="drone-machine">
                        <div className="drone-arm" />
                        <div className="drone-prop prop-one" />
                        <div className="drone-prop prop-two" />
                        <div className="drone-camera" />
                      </div>
                    </>
                  )}

                  {facility.theme === "creative" && (
                    <>
                      <div className="clapper-top">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="clapper-board">
                        <div className="clapper-title">
                          PRODUCTION
                        </div>
                        <div className="clapper-lines">
                          <span>SCENE</span>
                          <span>TAKE</span>
                          <span>ROLL</span>
                        </div>
                        <div className="clapper-bottom-line" />
                      </div>
                      <div className="creative-light" />
                    </>
                  )}

                  {facility.theme === "product" && (
                    <>
                      <div className="product-light product-light-left" />
                      <div className="product-light product-light-right" />
                      <div className="product-platform" />
                      <div className="product-bottle">
                        <div className="bottle-cap" />
                        <div className="bottle-label">BRAND</div>
                      </div>
                    </>
                  )}

                  <div className="art-main-icon">
                    <ArtIcon size={48} strokeWidth={1.35} />
                  </div>

                  <button
                    className="facility-arrow"
                    onClick={() => setSelectedFacility(facility)}
                    aria-label={`View ${facility.title} details`}
                  >
                    <ArrowRight size={23} strokeWidth={2.5} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="production-cta">
          <div className="cta-title-group">
            <div className="cta-play">
              <Play size={25} fill="currentColor" />
            </div>

            <div>
              <span className="cta-eyebrow">
                COMPLETE PRODUCTION SUPPORT
              </span>
              <h3>
                Everything You Need{" "}
                <span>Under One Roof</span>
              </h3>
            </div>
          </div>

          <div className="cta-description">
            Whether you need a TV commercial, corporate film,
            product shoot, music video, AI advertisement, drone
            shoot or complete digital marketing campaign, our
            team delivers creative solutions for your business.
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="production-cta-button"
          >
            DISCUSS YOUR PROJECT
            <ArrowRight size={19} />
          </a>
        </div>
      </div>

      {/* SERVICE DETAILS MODAL */}
      {selectedFacility && ModalIcon && (
        <div
          className="facility-modal-backdrop"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="facility-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="facility-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedFacility(null)}
              aria-label="Close details"
            >
              <X size={21} />
            </button>

            <div className="modal-icon">
              <ModalIcon size={35} />
            </div>

            <span className="modal-number">
              FACILITY {selectedFacility.number}
            </span>

            <h3 id="facility-modal-title">
              {selectedFacility.title}
            </h3>

            <p>{selectedFacility.details}</p>

            <a
              href={enquiryLink(selectedFacility.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-enquiry-button"
            >
              ENQUIRE ON WHATSAPP
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .production-section {
          position: relative;
          overflow: hidden;
          padding: 72px 22px 64px;
          background: #050505;
          color: #f5f5f5;
        }

        .production-container {
          width: 100%;
          max-width: 1580px;
          margin: 0 auto;
        }

        .production-header {
          max-width: 900px;
          margin: 0 auto 36px;
          text-align: center;
        }

        .production-badge {
          display: inline-block;
          padding: 9px 22px;
          border: 1px solid #ff6500;
          border-radius: 30px;
          color: #ff720e;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 4px;
          box-shadow: 0 0 16px #ff650025;
        }

        .production-header h2 {
          margin: 22px 0 12px;
          font-size: clamp(32px, 4.5vw, 56px);
          line-height: 1.13;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .production-header h2 span,
        .production-cta h3 span {
          color: #ff6500;
        }

        .heading-underline {
          width: 94px;
          height: 5px;
          margin: 0 auto 15px;
          border-radius: 5px;
          background: #ff6500;
        }

        .production-header p {
          max-width: 760px;
          margin: 0 auto;
          color: #c7c7c7;
          font-size: 16px;
          line-height: 1.55;
        }

        .facility-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .facility-card {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          min-width: 0;
          min-height: 205px;
          overflow: hidden;
          border: 1px solid #ff6500;
          border-radius: 10px;
          background: #080808;
          box-shadow: 0 0 13px #ff650022;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .facility-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 0 12px #ff650055,
            0 0 28px #ff65001c;
        }

        .facility-copy {
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 18px 15px 14px;
          background: linear-gradient(120deg, #090909, #070707);
        }

        .facility-card-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 15px;
        }

        .facility-icon {
          display: flex;
          width: 45px;
          height: 45px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid #ff6500;
          border-radius: 7px;
          color: #ff700b;
          background: #ff650010;
          box-shadow: 0 0 10px #ff650018;
        }

        .facility-number {
          color: #ff6500;
          font-size: 24px;
          font-weight: 850;
        }

        .facility-copy h3 {
          margin: 0 0 9px;
          font-size: clamp(17px, 1.35vw, 21px);
          font-weight: 750;
          line-height: 1.2;
        }

        .facility-copy p {
          margin: 0 0 14px;
          color: #d0d0d0;
          font-size: 13px;
          line-height: 1.5;
        }

        .facility-preview {
          margin-top: auto;
          padding: 8px 13px;
          border: 1px solid #444;
          border-radius: 4px;
          background: #101010;
          color: #f5f5f5;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.7px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .facility-preview:hover {
          border-color: #ff6500;
          color: #ff760e;
        }

        /* Vector-art panels: built with CSS and Lucide icons */
        .facility-art {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 205px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          isolation: isolate;
          background: linear-gradient(140deg, #142b40, #07111e 65%, #241407);
        }

        .art-grid {
          position: absolute;
          inset: 0;
          z-index: -2;
          opacity: 0.27;
          background-image:
            linear-gradient(#8296a51c 1px, transparent 1px),
            linear-gradient(90deg, #8296a51c 1px, transparent 1px);
          background-size: 22px 22px;
        }

        .art-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: #ff65004a;
          filter: blur(36px);
          animation: art-pulse 4s ease-in-out infinite alternate;
        }

        .art-orbit {
          position: absolute;
          width: 175px;
          height: 95px;
          border: 1px solid #ff9a4538;
          border-radius: 50%;
          transform: rotate(-25deg);
        }

        .orbit-two {
          width: 130px;
          height: 160px;
          transform: rotate(32deg);
        }

        .art-main-icon {
          position: relative;
          z-index: 2;
          display: flex;
          width: 105px;
          height: 105px;
          align-items: center;
          justify-content: center;
          border: 1px solid #ff8a3b88;
          border-radius: 22px;
          background: linear-gradient(145deg, #172b3b, #080c12);
          color: #ff790e;
          filter: drop-shadow(0 0 13px #ff650040);
          transform: rotate(-4deg);
          transition: transform 0.3s ease;
        }

        .facility-card:hover .art-main-icon {
          transform: rotate(0deg) scale(1.07);
        }

        .facility-arrow {
          position: absolute;
          z-index: 5;
          right: 12px;
          bottom: 12px;
          display: flex;
          width: 47px;
          height: 47px;
          align-items: center;
          justify-content: center;
          border: 3px solid #ff6500;
          border-radius: 50%;
          background: #090909;
          color: #ff7000;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .facility-arrow:hover {
          background: #ff6500;
          color: #050505;
          transform: translateX(3px);
        }

        /* 01 — Studio */
        .art-studio {
          background: linear-gradient(145deg, #183651, #07101b 58%, #54250e);
        }

        .studio-light {
          position: absolute;
          top: 18%;
          width: 29px;
          height: 38px;
          border: 2px solid #fff1b8;
          background: #fff0c2;
          box-shadow: 0 0 23px #ffad3d;
          transform: rotate(15deg);
        }

        .light-left {
          left: 12%;
        }

        .light-right {
          right: 14%;
          transform: rotate(-15deg);
        }

        .studio-tripod {
          position: absolute;
          bottom: 0;
          width: 2px;
          height: 42%;
          background: #1c2b32;
        }

        .studio-tripod::before,
        .studio-tripod::after {
          position: absolute;
          bottom: 0;
          left: -12px;
          width: 2px;
          height: 38px;
          background: #1c2b32;
          content: "";
          transform: rotate(24deg);
        }

        .studio-tripod::after {
          left: 12px;
          transform: rotate(-24deg);
        }

        .tripod-left {
          left: 20%;
        }

        .tripod-right {
          right: 22%;
        }

        .studio-chair {
          position: absolute;
          bottom: 18%;
          left: 41%;
          width: 34px;
          height: 25px;
          border: 3px solid #19252b;
          border-bottom-width: 5px;
        }

        /* 02 — Green screen */
        .art-green {
          background: linear-gradient(145deg, #102a35, #06121a 70%);
        }

        .green-screen-panel {
          position: absolute;
          inset: 18% 17% 14%;
          border: 3px solid #152a32;
          background: linear-gradient(135deg, #08c965, #00a94d);
          box-shadow: 0 0 30px #00e66b30;
        }

        .green-light {
          position: absolute;
          top: 17%;
          width: 22px;
          height: 32px;
          background: #fff0c0;
          box-shadow: 0 0 17px #ffce73;
        }

        .green-light-left {
          left: 9%;
          transform: rotate(25deg);
        }

        .green-light-right {
          right: 8%;
          transform: rotate(-25deg);
        }

        .green-tripod {
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 50%;
          width: 4px;
          height: 39%;
          background: #08131a;
        }

        /* 03 — Camera */
        .art-camera {
          background: linear-gradient(135deg, #132d46, #060c15 65%, #51250d);
        }

        .camera-body {
          position: absolute;
          z-index: 1;
          width: 120px;
          height: 68px;
          border: 3px solid #ff760e;
          border-radius: 9px;
          background: linear-gradient(135deg, #182b39, #060b10);
          box-shadow: 0 0 18px #ff650030;
          transform: rotate(-7deg);
        }

        .camera-lens {
          position: absolute;
          z-index: 3;
          left: 20%;
          width: 56px;
          height: 56px;
          border: 7px solid #1e3544;
          border-radius: 50%;
          background: radial-gradient(circle, #ff8a24 0%, #0b1a2a 35%, #030609 70%);
          box-shadow: 0 0 0 2px #ff7900;
        }

        .camera-top {
          position: absolute;
          top: 29%;
          width: 45px;
          height: 13px;
          border: 2px solid #ff760e;
          background: #172d3e;
          transform: translateY(-28px);
        }

        .camera-handle {
          position: absolute;
          top: 28%;
          width: 35px;
          height: 13px;
          border: 3px solid #172b3a;
          border-bottom: 0;
          transform: translateY(-34px);
        }

        .camera-leg {
          position: absolute;
          bottom: 0;
          z-index: -1;
          width: 4px;
          height: 36%;
          background: #101d26;
          transform: rotate(15deg);
        }

        .camera-leg-one {
          left: 45%;
        }

        .camera-leg-two {
          right: 30%;
          transform: rotate(-15deg);
        }

        /* 04 — Lighting */
        .art-lighting {
          background: linear-gradient(135deg, #4a2b18, #0c1118 60%, #171b22);
        }

        .softbox {
          position: absolute;
          top: 19%;
          width: 36px;
          height: 48px;
          border: 3px solid #fff0c2;
          background: linear-gradient(135deg, #fffde8, #ffc568);
          box-shadow: 0 0 24px #ffb84b;
          transform: rotate(12deg);
        }

        .softbox-one {
          left: 19%;
        }

        .softbox-two {
          right: 18%;
          top: 29%;
          transform: rotate(-12deg);
        }

        .softbox-stand {
          position: absolute;
          top: 43%;
          width: 2px;
          height: 57%;
          background: #172029;
        }

        .stand-one {
          left: 27%;
        }

        .stand-two {
          right: 25%;
        }

        /* 05 — Audio */
        .art-audio {
          background: linear-gradient(135deg, #1a2939, #080d17 60%, #49200d);
        }

        .audio-mic {
          position: absolute;
          z-index: 2;
          top: 20%;
          width: 43px;
          height: 72px;
          border: 3px solid #d5a46c;
          border-radius: 22px;
          background: linear-gradient(90deg, #182d3b, #405d70, #0a1119);
          box-shadow: 0 0 17px #ff8b2740;
        }

        .mic-grille {
          position: absolute;
          inset: 7px 5px;
          border-radius: 15px;
          background: repeating-linear-gradient(
            0deg,
            #8aa0aa 0 2px,
            #263a49 2px 4px
          );
        }

        .mic-stand {
          position: absolute;
          top: 54%;
          width: 4px;
          height: 36%;
          background: #182733;
        }

        .audio-pop-filter {
          position: absolute;
          top: 34%;
          right: 17%;
          width: 42px;
          height: 64px;
          border: 3px solid #ff7a0b;
          border-radius: 50%;
          background: #080d14a8;
          transform: rotate(18deg);
        }

        .audio-wave {
          position: absolute;
          left: 8%;
          width: 20px;
          height: 65px;
          border-right: 2px solid #ff7b19;
          border-radius: 50%;
        }

        .wave-one {
          transform: rotate(15deg);
        }

        .wave-two {
          left: 13%;
          transform: rotate(-15deg);
        }

        /* 06 — Editing */
        .art-editing {
          background: linear-gradient(135deg, #13283c, #070d16);
        }

        .editing-monitor {
          position: absolute;
          width: 75px;
          height: 65px;
          padding: 7px;
          border: 2px solid #314c60;
          border-radius: 4px;
          background: #07121e;
          box-shadow: 0 0 14px #0b84ff1a;
        }

        .monitor-one {
          top: 17%;
          left: 10%;
        }

        .monitor-two {
          top: 23%;
          right: 9%;
          border-color: #ff7900;
        }

        .monitor-toolbar {
          height: 7px;
          margin-bottom: 8px;
          background: linear-gradient(90deg, #ff7900 0 25%, #0b8dd8 25% 55%, #223c52 55%);
        }

        .monitor-timeline {
          height: 13px;
          margin-top: 5px;
          background: repeating-linear-gradient(
            90deg,
            #0d91d4 0 10px,
            #ff6c14 10px 18px,
            #192e43 18px 23px
          );
        }

        .monitor-chart {
          height: 13px;
          border-bottom: 2px solid #ff7600;
          background: linear-gradient(160deg, transparent 42%, #00a8f4 43% 47%, transparent 48%);
        }

        .editing-desk {
          position: absolute;
          right: 9%;
          bottom: 13%;
          left: 9%;
          height: 5px;
          background: #1b3447;
          box-shadow: 0 10px 0 -1px #132331;
        }

        /* 07 — Drone */
        .art-drone {
          background: linear-gradient(180deg, #f2a34e 0%, #b65d35 38%, #142a42 72%);
        }

        .drone-sun {
          position: absolute;
          top: 16%;
          right: 22%;
          width: 43px;
          height: 43px;
          border-radius: 50%;
          background: #ffd38b;
          box-shadow: 0 0 25px #ffcf80;
        }

        .drone-horizon {
          position: absolute;
          right: -5%;
          bottom: 22%;
          left: -5%;
          height: 42%;
          background: linear-gradient(145deg, #283f58, #071522);
          clip-path: polygon(0 70%, 22% 15%, 40% 68%, 63% 10%, 100% 65%, 100% 100%, 0 100%);
        }

        .drone-city {
          position: absolute;
          z-index: 1;
          bottom: 0;
          width: 25px;
          background: #0a1927;
        }

        .city-one {
          left: 10%;
          height: 34%;
        }

        .city-two {
          left: 32%;
          height: 22%;
          width: 33px;
        }

        .city-three {
          right: 10%;
          height: 38%;
        }

        .drone-machine {
          position: absolute;
          z-index: 2;
          top: 39%;
          left: 50%;
          width: 92px;
          height: 30px;
          border: 2px solid #ff8b25;
          border-radius: 12px;
          background: #142c3d;
          transform: translateX(-50%);
        }

        .drone-arm {
          position: absolute;
          top: 9px;
          left: -20px;
          width: 128px;
          height: 4px;
          background: #102536;
        }

        .drone-prop {
          position: absolute;
          top: -7px;
          width: 35px;
          height: 5px;
          border-radius: 50%;
          background: #172c3b;
        }

        .prop-one {
          left: -20px;
        }

        .prop-two {
          right: -20px;
        }

        .drone-camera {
          position: absolute;
          bottom: -15px;
          left: 38px;
          width: 17px;
          height: 16px;
          border: 2px solid #ff7800;
          border-radius: 4px;
          background: #08121c;
        }

        /* 08 — Creative */
        .art-creative {
          background: linear-gradient(145deg, #472616, #10131b 65%, #213146);
        }

        .clapper-top {
          position: absolute;
          top: 22%;
          width: 135px;
          height: 23px;
          display: flex;
          overflow: hidden;
          border: 2px solid #121a22;
          background: #e6e6e6;
          transform: rotate(-10deg);
        }

        .clapper-top span {
          flex: 1;
          background: #101820;
          transform: skew(-25deg);
        }

        .clapper-board {
          position: absolute;
          top: 34%;
          width: 137px;
          height: 78px;
          padding: 10px;
          border: 2px solid #6e7d87;
          background: linear-gradient(145deg, #132333, #050a10);
          box-shadow: 0 0 20px #ff650030;
        }

        .clapper-title {
          padding-bottom: 6px;
          border-bottom: 1px solid #647583;
          color: #ff8a24;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .clapper-lines {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          color: #f2f2f2;
          font-size: 8px;
        }

        .clapper-bottom-line {
          height: 3px;
          margin-top: 10px;
          background: #ff6500;
        }

        .creative-light {
          position: absolute;
          top: 13%;
          right: 12%;
          width: 19px;
          height: 29px;
          background: #fff0c1;
          box-shadow: 0 0 23px #ffac45;
        }

        /* 09 — Product */
        .art-product {
          background: linear-gradient(145deg, #7a431e, #15151a 55%, #332014);
        }

        .product-light {
          position: absolute;
          top: 18%;
          width: 27px;
          height: 42px;
          border: 2px solid #fff1c8;
          background: #fff1c8;
          box-shadow: 0 0 23px #ffc05d;
        }

        .product-light-left {
          left: 12%;
          transform: rotate(12deg);
        }

        .product-light-right {
          right: 12%;
          transform: rotate(-12deg);
        }

        .product-platform {
          position: absolute;
          bottom: 19%;
          width: 130px;
          height: 28px;
          border: 2px solid #f5bc72;
          border-radius: 50%;
          background: linear-gradient(180deg, #ffe5ae, #9d602d);
          box-shadow: 0 0 20px #ffb54b3b;
        }

        .product-bottle {
          position: absolute;
          z-index: 2;
          bottom: 30%;
          width: 35px;
          height: 67px;
          border: 2px solid #d4a16a;
          border-radius: 5px 5px 8px 8px;
          background: linear-gradient(90deg, #151d23, #38414a, #11161b);
          box-shadow: 0 0 15px #ff9b3b35;
        }

        .bottle-cap {
          position: absolute;
          top: -10px;
          left: 8px;
          width: 15px;
          height: 10px;
          border: 1px solid #c3a16c;
          background: #17212a;
        }

        .bottle-label {
          position: absolute;
          top: 27px;
          left: 3px;
          right: 3px;
          padding: 4px 0;
          background: #d8b17a;
          color: #171717;
          font-size: 5px;
          font-weight: 900;
          text-align: center;
        }

        /* CTA */
        .production-cta {
          display: grid;
          grid-template-columns: 1.15fr 1fr auto;
          gap: 24px;
          align-items: center;
          margin-top: 22px;
          padding: 24px;
          border: 1px solid #ff6500;
          border-radius: 10px;
          background: linear-gradient(110deg, #0c0c0c, #080808);
          box-shadow: 0 0 17px #ff650025;
        }

        .cta-title-group {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .cta-play {
          display: flex;
          width: 61px;
          height: 61px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 3px solid #ff6500;
          border-radius: 50%;
          color: #ff6500;
          box-shadow: 0 0 13px #ff65002b;
        }

        .cta-eyebrow {
          color: #ff7600;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .production-cta h3 {
          margin: 8px 0 0;
          font-size: clamp(19px, 2vw, 27px);
          font-weight: 850;
          line-height: 1.25;
        }

        .cta-description {
          padding-left: 22px;
          border-left: 2px solid #ff6500;
          color: #c9c9c9;
          font-size: 13px;
          line-height: 1.65;
        }

        .production-cta-button,
        .modal-enquiry-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 15px 18px;
          border: 1px solid #ff6500;
          border-radius: 5px;
          background: #ff6500;
          color: #080808;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .production-cta-button:hover,
        .modal-enquiry-button:hover {
          background: #ff7d24;
          box-shadow: 0 0 18px #ff650055;
        }

        /* Modal */
        .facility-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #000000d9;
          backdrop-filter: blur(7px);
        }

        .facility-modal {
          position: relative;
          width: 100%;
          max-width: 470px;
          padding: 34px;
          border: 1px solid #ff6500;
          border-radius: 12px;
          background: #0b0b0b;
          box-shadow: 0 0 35px #ff650026;
        }

        .modal-close {
          position: absolute;
          top: 13px;
          right: 13px;
          display: flex;
          width: 35px;
          height: 35px;
          align-items: center;
          justify-content: center;
          border: 1px solid #383838;
          border-radius: 50%;
          background: #111;
          color: white;
          cursor: pointer;
        }

        .modal-icon {
          display: flex;
          width: 60px;
          height: 60px;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border: 1px solid #ff6500;
          border-radius: 10px;
          background: #ff650012;
          color: #ff7200;
        }

        .modal-number {
          color: #ff7200;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .facility-modal h3 {
          margin: 9px 0 12px;
          font-size: 27px;
          font-weight: 800;
        }

        .facility-modal p {
          margin: 0 0 24px;
          color: #c9c9c9;
          font-size: 15px;
          line-height: 1.7;
        }

        @keyframes art-pulse {
          from {
            opacity: 0.55;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        /* Tablet */
        @media (max-width: 1100px) {
          .facility-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .facility-card {
            min-height: 220px;
          }

          .facility-art {
            min-height: 220px;
          }

          .production-cta {
            grid-template-columns: 1fr 1fr;
          }

          .production-cta-button {
            grid-column: 1 / -1;
            justify-self: end;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .production-section {
            padding: 48px 14px;
          }

          .production-header {
            margin-bottom: 28px;
          }

          .production-badge {
            padding: 8px 14px;
            font-size: 10px;
            letter-spacing: 2.5px;
          }

          .production-header h2 {
            margin-top: 19px;
            font-size: 32px;
            letter-spacing: -0.7px;
          }

          .production-header p {
            font-size: 14px;
          }

          .facility-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .facility-card {
            grid-template-columns: 1fr 0.88fr;
            min-height: 205px;
          }

          .facility-art {
            min-height: 205px;
          }

          .facility-copy {
            padding: 15px 12px;
          }

          .facility-card-heading {
            gap: 10px;
            margin-bottom: 12px;
          }

          .facility-icon {
            width: 38px;
            height: 38px;
          }

          .facility-number {
            font-size: 21px;
          }

          .facility-copy h3 {
            font-size: 17px;
          }

          .facility-copy p {
            font-size: 12px;
            line-height: 1.45;
          }

          .art-main-icon {
            width: 75px;
            height: 75px;
          }

          .art-main-icon :global(svg) {
            width: 37px;
            height: 37px;
          }

          .facility-arrow {
            right: 8px;
            bottom: 8px;
            width: 38px;
            height: 38px;
          }

          .production-cta {
            grid-template-columns: 1fr;
            gap: 19px;
            padding: 20px 16px;
          }

          .cta-title-group {
            align-items: flex-start;
            gap: 12px;
          }

          .cta-play {
            width: 46px;
            height: 46px;
          }

          .cta-eyebrow {
            font-size: 9px;
            letter-spacing: 1.5px;
          }

          .production-cta h3 {
            font-size: 21px;
          }

          .cta-description {
            padding: 0;
            border-left: 0;
            font-size: 13px;
          }

          .production-cta-button {
            grid-column: auto;
            justify-self: stretch;
            width: 100%;
            white-space: normal;
          }

          .facility-modal {
            padding: 28px 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .art-glow {
            animation: none;
          }

          .facility-card,
          .art-main-icon,
          .facility-arrow {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
