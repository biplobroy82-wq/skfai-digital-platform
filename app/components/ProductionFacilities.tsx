
"use client";

import { useState } from "react";
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
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Film Studio",
    description:
      "Professional indoor studio for commercials, interviews, reels and cinematic productions.",
    theme: "studio",
    details:
      "Indoor studio facilities for commercial advertisements, interviews, promotional videos, reels and professional film production.",
  },
  {
    number: "02",
    title: "Green Screen Studio",
    description:
      "Premium chroma setup for virtual backgrounds, VFX and creative video production.",
    theme: "green",
    details:
      "Green screen production for virtual backgrounds, product presentations, creative advertisements and visual effects.",
  },
  {
    number: "03",
    title: "4K Camera Setup",
    description:
      "Professional cameras with cinematic lenses for high-quality video production.",
    theme: "camera",
    details:
      "Professional camera setups for brand films, product videos, corporate films, interviews and commercial shoots.",
  },
  {
    number: "04",
    title: "Professional Lighting",
    description:
      "Studio lighting setup for balanced, soft and premium cinematic visuals.",
    theme: "lighting",
    details:
      "Professional lighting arrangements for product shoots, interviews, indoor advertisements and cinematic visuals.",
  },
  {
    number: "05",
    title: "Audio Recording",
    description:
      "Crystal-clear voice recording with professional microphones and audio equipment.",
    theme: "audio",
    details:
      "Voice-over recording, dialogue recording, narration and audio support for advertisements and corporate videos.",
  },
  {
    number: "06",
    title: "Video Editing & VFX",
    description:
      "Creative editing, colour grading, motion graphics and cinematic visual effects.",
    theme: "editing",
    details:
      "Professional editing, colour correction, motion graphics, compositing, visual effects and final video delivery.",
  },
  {
    number: "07",
    title: "Drone Shoot",
    description:
      "Aerial photography and cinematic drone videography for events and commercial projects.",
    theme: "drone",
    details:
      "Aerial visuals for properties, events, industrial locations and commercial projects, subject to applicable permissions.",
  },
  {
    number: "08",
    title: "Creative Production",
    description:
      "Complete concept development, scripting, direction and post-production under one roof.",
    theme: "creative",
    details:
      "Concept development, advertising scripts, storyboarding, production planning, direction and post-production.",
  },
  {
    number: "09",
    title: "Product Shoot",
    description:
      "Professional product photography and commercial video production.",
    theme: "product",
    details:
      "Product photography and promotional videos for consumer products, packaging, e-commerce and brand advertising.",
  },
];

const whatsappLink =
  "https://wa.me/916204731481?text=" +
  encodeURIComponent(
    "Hello Sri Krishna Films, I would like to discuss a production project."
  );

function VectorArtwork({ theme }: { theme: string }) {
  return (
    <div className={`facility-art art-${theme}`} aria-hidden="true">
      <div className="art-grid" />

      {theme === "studio" && (
        <div className="studio-scene">
          <div className="studio-ceiling" />
          <div className="studio-softbox softbox-left" />
          <div className="studio-softbox softbox-right" />
          <div className="studio-camera">
            <div className="studio-camera-lens" />
            <div className="studio-camera-top" />
            <div className="studio-camera-leg leg-left" />
            <div className="studio-camera-leg leg-right" />
          </div>
          <div className="studio-chair">
            <div />
          </div>
          <div className="studio-floor" />
        </div>
      )}

      {theme === "green" && (
        <div className="green-scene">
          <div className="green-ceiling" />
          <div className="green-backdrop" />
          <div className="green-floor" />
          <div className="green-light green-light-left" />
          <div className="green-light green-light-right" />
          <div className="green-camera">
            <div className="green-camera-lens" />
            <div className="green-tripod" />
          </div>
        </div>
      )}

      {theme === "camera" && (
        <div className="camera-scene">
          <div className="camera-glow" />
          <div className="cinema-camera">
            <div className="cinema-top-handle" />
            <div className="cinema-top-screen" />
            <div className="cinema-body" />
            <div className="cinema-lens-ring">
              <div className="cinema-lens-inner" />
            </div>
            <div className="cinema-focus-ring" />
            <div className="cinema-side-screen" />
            <div className="cinema-support" />
          </div>
        </div>
      )}

      {theme === "lighting" && (
        <div className="lighting-scene">
          <div className="lighting-floor" />
          <div className="light-stand stand-left">
            <div className="light-panel panel-left" />
            <div className="light-leg" />
          </div>
          <div className="light-stand stand-right">
            <div className="light-panel panel-right" />
            <div className="light-leg" />
          </div>
          <div className="lighting-reflector" />
          <div className="lighting-glow" />
        </div>
      )}

      {theme === "audio" && (
        <div className="audio-scene">
          <div className="audio-acoustic acoustic-one" />
          <div className="audio-acoustic acoustic-two" />
          <div className="audio-acoustic acoustic-three" />
          <div className="audio-microphone">
            <div className="audio-grille" />
            <div className="audio-mic-band" />
            <div className="audio-mic-neck" />
            <div className="audio-mic-base" />
          </div>
          <div className="audio-pop-filter" />
          <div className="audio-pop-arm" />
          <div className="audio-waveform">
            {Array.from({ length: 13 }, (_, i) => (
              <span
                key={i}
                style={{
                  height: `${12 + ((i * 17 + 13) % 37)}px`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {theme === "editing" && (
        <div className="editing-scene">
          <div className="edit-monitor monitor-left">
            <div className="edit-topbar" />
            <div className="edit-preview-image">
              <div className="edit-preview-sun" />
              <div className="edit-preview-mountain" />
            </div>
            <div className="edit-mini-timeline">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="edit-monitor monitor-right">
            <div className="edit-topbar" />
            <div className="edit-colour-grid">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="edit-wave-line" />
          </div>

          <div className="edit-keyboard" />
          <div className="edit-desk" />
        </div>
      )}

      {theme === "drone" && (
        <div className="drone-scene">
          <div className="drone-sun" />
          <div className="drone-cloud cloud-one" />
          <div className="drone-cloud cloud-two" />
          <div className="drone-mountain mountain-back" />
          <div className="drone-mountain mountain-front" />
          <div className="drone-city-building building-one" />
          <div className="drone-city-building building-two" />
          <div className="drone-city-building building-three" />

          <div className="drone-body">
            <div className="drone-arm arm-one" />
            <div className="drone-arm arm-two" />
            <div className="drone-rotor rotor-one" />
            <div className="drone-rotor rotor-two" />
            <div className="drone-rotor rotor-three" />
            <div className="drone-rotor rotor-four" />
            <div className="drone-camera" />
          </div>
        </div>
      )}

      {theme === "creative" && (
        <div className="creative-scene">
          <div className="creative-light creative-light-left" />
          <div className="creative-light creative-light-right" />
          <div className="creative-clapper">
            <div className="clapper-stripe-row">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="clapper-content">
              <div className="clapper-heading">PRODUCTION</div>
              <div className="clapper-columns">
                <span>SCENE</span>
                <span>TAKE</span>
                <span>ROLL</span>
              </div>
              <div className="clapper-rule" />
              <div className="clapper-small-rule" />
            </div>
          </div>
          <div className="creative-floor" />
        </div>
      )}

      {theme === "product" && (
        <div className="product-scene">
          <div className="product-backlight" />
          <div className="product-softbox product-softbox-left" />
          <div className="product-softbox product-softbox-right" />
          <div className="product-platform">
            <div className="product-platform-top" />
          </div>
          <div className="product-container">
            <div className="product-cap" />
            <div className="product-neck" />
            <div className="product-bottle-body">
              <div className="product-label">
                <div />
                <span>BRAND</span>
                <div />
              </div>
            </div>
          </div>
          <div className="product-reflection" />
        </div>
      )}

      <div className="art-corner-glow" />
    </div>
  );
}

export default function ProductionFacilities() {
  const [selectedFacility, setSelectedFacility] =
    useState<(typeof facilities)[number] | null>(null);

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
        <header className="production-header">
          <span className="production-badge">
            PRODUCTION FACILITIES
          </span>

          <h2>
            Professional Studio <span>Infrastructure</span>
          </h2>

          <div className="heading-underline" />

          <p>
            From pre-production to final delivery, Sri Krishna Films
            &amp; Advertisement Industry offers complete filmmaking,
            photography, editing and digital production services with
            modern equipment and experienced professionals.
          </p>
        </header>

        <div className="facility-grid">
          {facilities.map((facility) => {
            const Icon =
              facility.theme === "studio"
                ? Clapperboard
                : facility.theme === "green"
                  ? Scan
                  : facility.theme === "camera"
                    ? Camera
                    : facility.theme === "lighting"
                      ? Lightbulb
                      : facility.theme === "audio"
                        ? Mic
                        : facility.theme === "editing"
                          ? MonitorPlay
                          : facility.theme === "drone"
                            ? Plane
                            : facility.theme === "creative"
                              ? Settings
                              : Package;

            return (
              <article
                className="facility-card"
                key={facility.number}
              >
                <div className="facility-copy">
                  <div className="facility-card-heading">
                    <div className="facility-icon">
                      <Icon size={27} strokeWidth={1.8} />
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
                  >
                    PREVIEW
                  </button>
                </div>

                <VectorArtwork theme={facility.theme} />

                <button
                  className="facility-arrow"
                  onClick={() => setSelectedFacility(facility)}
                  aria-label={`View ${facility.title} details`}
                >
                  <ArrowRight size={22} />
                </button>
              </article>
            );
          })}
        </div>

        <div className="production-cta">
          <div className="cta-title-group">
            <div className="cta-play">
              <Play size={24} fill="currentColor" />
            </div>

            <div>
              <span className="cta-eyebrow">
                COMPLETE PRODUCTION SUPPORT
              </span>
              <h3>
                Everything You Need <span>Under One Roof</span>
              </h3>
            </div>
          </div>

          <p className="cta-description">
            Whether you need a TV commercial, corporate film,
            product shoot, music video, AI advertisement, drone
            shoot or complete digital marketing campaign, our
            team delivers creative solutions for your business.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="production-cta-button"
          >
            DISCUSS YOUR PROJECT <ArrowRight size={19} />
          </a>
        </div>
      </div>

      {selectedFacility && (
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
              ENQUIRE ON WHATSAPP <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .production-section {
          overflow: hidden;
          padding: 66px 22px 55px;
          background: #050505;
          color: #f5f5f5;
        }

        .production-container {
          width: 100%;
          max-width: 1600px;
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
          min-height: 245px;
          overflow: hidden;
          border: 1px solid #ff6500;
          border-radius: 10px;
          background: #080808;
          box-shadow: 0 0 13px #ff650022;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .facility-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 22px #ff650039;
        }

        .facility-copy {
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          padding: 18px 15px 14px;
          background: #080808;
        }

        .facility-card-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 15px;
        }

        .facility-icon {
          display: flex;
          width: 47px;
          height: 47px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid #ff6500;
          border-radius: 7px;
          color: #ff700b;
          background: #ff650010;
        }

        .facility-number {
          color: #ff6500;
          font-size: 24px;
          font-weight: 850;
        }

        .facility-copy h3 {
          margin: 0 0 9px;
          font-size: clamp(16px, 1.3vw, 20px);
          font-weight: 750;
          line-height: 1.25;
        }

        .facility-copy p {
          margin: 0 0 15px;
          color: #d0d0d0;
          font-size: 13px;
          line-height: 1.55;
        }

        .facility-preview {
          margin-top: auto;
          padding: 9px 13px;
          border: 1px solid #444;
          border-radius: 4px;
          background: #101010;
          color: #f5f5f5;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.7px;
          cursor: pointer;
        }

        .facility-preview:hover {
          border-color: #ff6500;
          color: #ff760e;
        }

        /* Artwork base */
        .facility-art {
          position: relative;
          min-width: 0;
          min-height: 245px;
          overflow: hidden;
          isolation: isolate;
        }

        .art-grid {
          position: absolute;
          inset: 0;
          z-index: -2;
          opacity: 0.35;
          background-image:
            linear-gradient(#a5bac31b 1px, transparent 1px),
            linear-gradient(90deg, #a5bac31b 1px, transparent 1px);
          background-size: 23px 23px;
        }

        .art-corner-glow {
          position: absolute;
          right: -40px;
          bottom: -55px;
          z-index: -1;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: #ff650020;
          filter: blur(30px);
        }

        /* 01 — Film studio: camera, stands and director chair */
        .art-studio {
          background: linear-gradient(145deg, #15324c, #0b1725 58%, #43210f);
        }

        .studio-scene {
          position: absolute;
          inset: 0;
        }

        .studio-ceiling {
          position: absolute;
          inset: 0 0 auto;
          height: 17%;
          border-bottom: 2px solid #344454;
          background: repeating-linear-gradient(
            90deg,
            #12283c 0 24px,
            #1a354b 25px 27px
          );
        }

        .studio-softbox {
          position: absolute;
          top: 13%;
          width: 29px;
          height: 42px;
          border: 2px solid #fff0bd;
          background: #fff1c7;
          box-shadow: 0 0 22px #ffba52;
        }

        .softbox-left {
          left: 13%;
          transform: rotate(15deg);
        }

        .softbox-right {
          right: 13%;
          transform: rotate(-15deg);
        }

        .studio-camera {
          position: absolute;
          top: 34%;
          left: 50%;
          width: 72px;
          height: 49px;
          border: 2px solid #ff7900;
          border-radius: 5px;
          background: #102334;
          transform: translateX(-50%);
        }

        .studio-camera-lens {
          position: absolute;
          top: 10px;
          left: 23px;
          width: 23px;
          height: 23px;
          border: 3px solid #ff7900;
          border-radius: 50%;
          background: #09111b;
        }

        .studio-camera-top {
          position: absolute;
          top: -12px;
          left: 22px;
          width: 26px;
          height: 11px;
          border: 2px solid #263b4c;
          background: #152c3d;
        }

        .studio-camera-leg {
          position: absolute;
          top: 47px;
          width: 3px;
          height: 75px;
          background: #14232d;
        }

        .leg-left {
          left: 12px;
          transform: rotate(20deg);
        }

        .leg-right {
          right: 12px;
          transform: rotate(-20deg);
        }

        .studio-chair {
          position: absolute;
          bottom: 20%;
          left: 50%;
          width: 37px;
          height: 24px;
          border: 3px solid #111c25;
          border-bottom-width: 5px;
          transform: translateX(-50%);
        }

        .studio-chair div {
          position: absolute;
          top: 21px;
          left: 14px;
          height: 27px;
          border-left: 3px solid #111c25;
        }

        .studio-floor {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 10%;
          background: linear-gradient(#452a1c, #0b1720);
        }

        /* 02 — Green screen: chroma backdrop and camera */
        .art-green {
          background: linear-gradient(140deg, #112d35, #07151a);
        }

        .green-scene {
          position: absolute;
          inset: 0;
        }

        .green-ceiling {
          position: absolute;
          inset: 0 0 auto;
          height: 15%;
          background: repeating-linear-gradient(
            90deg,
            #102c34 0 18px,
            #24403d 19px 21px
          );
        }

        .green-backdrop {
          position: absolute;
          inset: 18% 13% 15%;
          border: 4px solid #172d34;
          background: linear-gradient(135deg, #10d36a, #00a84b);
          box-shadow: 0 0 25px #00ff7028;
        }

        .green-floor {
          position: absolute;
          right: 12%;
          bottom: 14%;
          left: 12%;
          height: 5%;
          background: #08a951;
          transform: perspective(80px) rotateX(10deg);
        }

        .green-light {
          position: absolute;
          top: 15%;
          width: 22px;
          height: 31px;
          background: #fff1c7;
          box-shadow: 0 0 16px #ffcf76;
        }

        .green-light-left {
          left: 7%;
          transform: rotate(25deg);
        }

        .green-light-right {
          right: 7%;
          transform: rotate(-25deg);
        }

        .green-camera {
          position: absolute;
          right: 15%;
          bottom: 28%;
          width: 37px;
          height: 26px;
          border: 2px solid #ff7900;
          background: #102331;
        }

        .green-camera-lens {
          position: absolute;
          top: 5px;
          left: -9px;
          width: 15px;
          height: 15px;
          border: 3px solid #203c4c;
          border-radius: 50%;
          background: #07121a;
        }

        .green-tripod {
          position: absolute;
          top: 24px;
          left: 17px;
          width: 3px;
          height: 90px;
          background: #101f27;
        }

        /* 03 — 4K camera: distinct cinema camera assembly */
        .art-camera {
          background: linear-gradient(145deg, #17314a, #07111f 64%, #47220d);
        }

        .camera-scene {
          position: absolute;
          inset: 0;
        }

        .camera-glow {
          position: absolute;
          top: 18%;
          right: 12%;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #ff710015;
          filter: blur(25px);
        }

        .cinema-camera {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140px;
          height: 125px;
          transform: translate(-50%, -50%) rotate(-5deg);
        }

        .cinema-body {
          position: absolute;
          top: 23px;
          right: 7px;
          width: 94px;
          height: 75px;
          border: 2px solid #ff7900;
          border-radius: 7px;
          background: linear-gradient(145deg, #1b3447, #07111c);
          box-shadow: 0 0 17px #ff790018;
        }

        .cinema-lens-ring {
          position: absolute;
          top: 34px;
          left: 0;
          z-index: 2;
          display: grid;
          width: 58px;
          height: 58px;
          place-items: center;
          border: 5px solid #263f51;
          border-radius: 50%;
          background: #07101b;
          box-shadow: 0 0 0 2px #ff7900;
        }

        .cinema-lens-inner {
          width: 29px;
          height: 29px;
          border: 3px solid #8b5b2a;
          border-radius: 50%;
          background: radial-gradient(circle, #ffac42, #142c40 45%, #050a10);
        }

        .cinema-focus-ring {
          position: absolute;
          top: 40px;
          left: -7px;
          width: 70px;
          height: 45px;
          border: 2px solid #526b7b;
          border-radius: 50%;
          transform: rotate(90deg);
        }

        .cinema-top-handle {
          position: absolute;
          top: 5px;
          left: 54px;
          width: 43px;
          height: 17px;
          border: 3px solid #ff7900;
          background: #142c3d;
        }

        .cinema-top-screen {
          position: absolute;
          top: 0;
          left: 60px;
          width: 32px;
          height: 7px;
          background: #263e4d;
        }

        .cinema-side-screen {
          position: absolute;
          top: 42px;
          right: -5px;
          width: 14px;
          height: 35px;
          border: 2px solid #ff7900;
          background: #162c3d;
        }

        .cinema-support {
          position: absolute;
          bottom: 0;
          left: 70px;
          height: 25px;
          border-left: 4px solid #15232d;
        }

        /* 04 — Lighting: two softboxes and stands */
        .art-lighting {
          background: linear-gradient(145deg, #49301c, #18151a 65%, #101b27);
        }

        .lighting-scene {
          position: absolute;
          inset: 0;
        }

        .lighting-floor {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 16%;
          background: linear-gradient(#492c1d, #101923);
        }

        .light-stand {
          position: absolute;
          top: 22%;
          width: 3px;
          height: 65%;
          background: #192630;
        }

        .stand-left {
          left: 27%;
        }

        .stand-right {
          right: 25%;
          top: 34%;
        }

        .light-panel {
          position: absolute;
          top: -8px;
          left: -18px;
          width: 36px;
          height: 49px;
          border: 3px solid #fff0c3;
          background: linear-gradient(145deg, #fffde9, #ffc66e);
          box-shadow: 0 0 24px #ffb94e9c;
        }

        .panel-left {
          transform: rotate(12deg);
        }

        .panel-right {
          transform: rotate(-13deg);
        }

        .light-leg {
          position: absolute;
          bottom: 0;
          left: -17px;
          width: 36px;
          height: 2px;
          background: #192630;
          transform: rotate(-22deg);
        }

        .lighting-reflector {
          position: absolute;
          right: 7%;
          bottom: 18%;
          width: 25px;
          height: 38px;
          border: 2px solid #c8b28c;
          background: #e7d7ad;
          transform: rotate(14deg);
        }

        .lighting-glow {
          position: absolute;
          top: 23%;
          left: 22%;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #ffb94e24;
          filter: blur(18px);
        }

        /* 05 — Audio: microphone, pop filter and sound panels */
        .art-audio {
          background: linear-gradient(140deg, #182a3c, #09111c 55%, #40200f);
        }

        .audio-scene {
          position: absolute;
          inset: 0;
        }

        .audio-acoustic {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 13px;
          background: repeating-linear-gradient(
            180deg,
            #26384a 0 12px,
            #101d2b 12px 20px
          );
        }

        .acoustic-one {
          left: 9%;
        }

        .acoustic-two {
          left: 17%;
        }

        .acoustic-three {
          right: 10%;
        }

        .audio-microphone {
          position: absolute;
          top: 23%;
          left: 43%;
          width: 40px;
          height: 72px;
          border: 3px solid #c99c67;
          border-radius: 20px;
          background: linear-gradient(90deg, #152736, #536675, #132330);
          box-shadow: 0 0 14px #ff8c282b;
        }

        .audio-grille {
          position: absolute;
          inset: 7px 5px;
          border-radius: 15px;
          background: repeating-linear-gradient(
            0deg,
            #a8b6bd 0 2px,
            #314758 2px 4px
          );
        }

        .audio-mic-band {
          position: absolute;
          right: -3px;
          bottom: 15px;
          left: -3px;
          height: 4px;
          background: #ff7900;
        }

        .audio-mic-neck {
          position: absolute;
          bottom: -17px;
          left: 15px;
          width: 5px;
          height: 18px;
          background: #263b4b;
        }

        .audio-mic-base {
          position: absolute;
          bottom: -20px;
          left: 6px;
          width: 22px;
          height: 4px;
          background: #263b4b;
        }

        .audio-pop-filter {
          position: absolute;
          top: 35%;
          right: 12%;
          width: 40px;
          height: 62px;
          border: 3px solid #ff7900;
          border-radius: 50%;
          background: #101a25aa;
          transform: rotate(15deg);
        }

        .audio-pop-arm {
          position: absolute;
          top: 61%;
          right: 19%;
          width: 36px;
          height: 2px;
          background: #ff7900;
          transform: rotate(35deg);
        }

        .audio-waveform {
          position: absolute;
          right: 12%;
          bottom: 13%;
          left: 12%;
          display: flex;
          height: 42px;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .audio-waveform span {
          width: 3px;
          border-radius: 3px;
          background: #ff7900;
          opacity: 0.8;
        }

        /* 06 — Editing: two different monitors and timeline */
        .art-editing {
          background: linear-gradient(145deg, #152e45, #09121e 68%, #152b3a);
        }

        .editing-scene {
          position: absolute;
          inset: 0;
        }

        .edit-monitor {
          position: absolute;
          top: 17%;
          width: 42%;
          height: 44%;
          padding: 7px;
          border: 2px solid #35536a;
          border-radius: 4px;
          background: #07121d;
          box-shadow: 0 0 10px #0a8de01a;
        }

        .monitor-left {
          left: 7%;
        }

        .monitor-right {
          right: 7%;
          top: 23%;
          border-color: #ff7900;
        }

        .edit-topbar {
          height: 6px;
          margin-bottom: 6px;
          background: linear-gradient(
            90deg,
            #ff7900 0 24%,
            #0e91d2 24% 54%,
            #233b4e 54%
          );
        }

        .edit-preview-image {
          position: relative;
          height: 53%;
          overflow: hidden;
          background: linear-gradient(#f1a44f, #d96b37 55%, #203c56 56%);
        }

        .edit-preview-sun {
          position: absolute;
          top: 15%;
          right: 17%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffe0a1;
        }

        .edit-preview-mountain {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 55%;
          background: #0e2538;
          clip-path: polygon(0 75%, 35% 5%, 57% 66%, 75% 23%, 100% 75%, 100% 100%, 0 100%);
        }

        .edit-mini-timeline {
          display: flex;
          gap: 3px;
          margin-top: 5px;
        }

        .edit-mini-timeline span {
          flex: 1;
          height: 7px;
          background: #087fb7;
        }

        .edit-mini-timeline span:nth-child(2) {
          background: #ff7900;
        }

        .edit-colour-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          height: 55%;
        }

        .edit-colour-grid span {
          border-radius: 2px;
          background: linear-gradient(135deg, #e98230, #17384f);
        }

        .edit-colour-grid span:nth-child(2n) {
          background: linear-gradient(135deg, #1599c4, #193047);
        }

        .edit-wave-line {
          height: 9px;
          margin-top: 6px;
          background: repeating-linear-gradient(
            90deg,
            #0d91d4 0 7px,
            #ff7900 7px 12px,
            #1c3447 12px 16px
          );
        }

        .edit-desk {
          position: absolute;
          right: 5%;
          bottom: 19%;
          left: 5%;
          height: 5px;
          background: #294254;
          box-shadow: 0 9px 0 -1px #142636;
        }

        .edit-keyboard {
          position: absolute;
          bottom: 13%;
          left: 35%;
          width: 35%;
          height: 7px;
          border: 1px solid #526d80;
          background: repeating-linear-gradient(
            90deg,
            #304a5e 0 5px,
            #102133 5px 7px
          );
        }

        /* 07 — Drone: aerial scene and four rotors */
        .art-drone {
          background: linear-gradient(180deg, #f6b65e 0%, #d76e3c 48%, #18334b 100%);
        }

        .drone-scene {
          position: absolute;
          inset: 0;
        }

        .drone-sun {
          position: absolute;
          top: 14%;
          right: 18%;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffe3a3;
          box-shadow: 0 0 25px #ffd48a;
        }

        .drone-cloud {
          position: absolute;
          width: 48px;
          height: 12px;
          border-radius: 20px;
          background: #ffdfad;
          opacity: 0.8;
        }

        .cloud-one {
          top: 27%;
          left: 10%;
        }

        .cloud-two {
          top: 36%;
          right: 8%;
          transform: scale(0.7);
        }

        .drone-mountain {
          position: absolute;
          right: -5%;
          bottom: 13%;
          left: -5%;
          height: 45%;
          clip-path: polygon(0 73%, 22% 17%, 43% 74%, 66% 12%, 100% 72%, 100% 100%, 0 100%);
        }

        .mountain-back {
          background: #263e57;
        }

        .mountain-front {
          bottom: 8%;
          height: 34%;
          background: #11283d;
          clip-path: polygon(0 50%, 26% 12%, 49% 70%, 73% 22%, 100% 60%, 100% 100%, 0 100%);
        }

        .drone-city-building {
          position: absolute;
          z-index: 1;
          bottom: 0;
          background: #091a2a;
        }

        .building-one {
          left: 12%;
          width: 22px;
          height: 34%;
        }

        .building-two {
          left: 35%;
          width: 32px;
          height: 23%;
        }

        .building-three {
          right: 11%;
          width: 25px;
          height: 39%;
        }

        .drone-body {
          position: absolute;
          top: 37%;
          left: 50%;
          z-index: 2;
          width: 58px;
          height: 25px;
          border: 2px solid #ff7900;
          border-radius: 12px;
          background: #132a3b;
          transform: translateX(-50%);
        }

        .drone-arm {
          position: absolute;
          top: 8px;
          width: 98px;
          height: 4px;
          background: #142c3e;
        }

        .arm-one {
          left: -22px;
        }

        .arm-two {
          left: -22px;
          transform: rotate(25deg);
        }

        .drone-rotor {
          position: absolute;
          top: -9px;
          width: 28px;
          height: 5px;
          border-radius: 50%;
          background: #102638;
          border: 1px solid #ff7900;
        }

        .rotor-one {
          left: -24px;
        }

        .rotor-two {
          right: -24px;
        }

        .rotor-three {
          top: 27px;
          left: -19px;
        }

        .rotor-four {
          top: 27px;
          right: -19px;
        }

        .drone-camera {
          position: absolute;
          bottom: -14px;
          left: 22px;
          width: 14px;
          height: 15px;
          border: 2px solid #ff7900;
          border-radius: 3px;
          background: #08131e;
        }

        /* 08 — Creative production: clapperboard */
        .art-creative {
          background: linear-gradient(145deg, #4a2919, #11131a 65%, #19334b);
        }

        .creative-scene {
          position: absolute;
          inset: 0;
        }

        .creative-light {
          position: absolute;
          top: 13%;
          width: 20px;
          height: 31px;
          border: 2px solid #fff0c1;
          background: #fff0c1;
          box-shadow: 0 0 19px #ffad43;
        }

        .creative-light-left {
          left: 8%;
          transform: rotate(15deg);
        }

        .creative-light-right {
          right: 8%;
          transform: rotate(-12deg);
        }

        .creative-clapper {
          position: absolute;
          top: 27%;
          left: 50%;
          width: 142px;
          transform: translateX(-50%) rotate(-4deg);
        }

        .clapper-stripe-row {
          display: flex;
          height: 24px;
          overflow: hidden;
          border: 2px solid #1a222a;
          background: #f0e9da;
        }

        .clapper-stripe-row span {
          flex: 1;
          background: #17232e;
          transform: skew(-25deg);
        }

        .clapper-content {
          padding: 10px;
          border: 2px solid #8a9aa3;
          background: linear-gradient(145deg, #182e40, #070d15);
          box-shadow: 0 0 16px #ff790020;
        }

        .clapper-heading {
          padding-bottom: 7px;
          border-bottom: 1px solid #687b89;
          color: #ff8a27;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }

        .clapper-columns {
          display: flex;
          justify-content: space-between;
          margin-top: 9px;
          color: #e7edf0;
          font-size: 8px;
        }

        .clapper-rule {
          height: 3px;
          margin-top: 12px;
          background: #ff7900;
        }

        .clapper-small-rule {
          width: 58%;
          height: 3px;
          margin-top: 7px;
          background: #617789;
        }

        .creative-floor {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 12%;
          background: #152b3d;
        }

        /* 09 — Product photography: bottle and softboxes */
        .art-product {
          background: linear-gradient(145deg, #7c431e, #3c241b 52%, #151923);
        }

        .product-scene {
          position: absolute;
          inset: 0;
        }

        .product-backlight {
          position: absolute;
          top: 15%;
          left: 50%;
          width: 125px;
          height: 125px;
          border-radius: 50%;
          background: #ffc66a30;
          filter: blur(18px);
          transform: translateX(-50%);
        }

        .product-softbox {
          position: absolute;
          top: 18%;
          width: 27px;
          height: 42px;
          border: 2px solid #fff0c5;
          background: #fff0c5;
          box-shadow: 0 0 20px #ffc05c;
        }

        .product-softbox-left {
          left: 10%;
          transform: rotate(13deg);
        }

        .product-softbox-right {
          right: 10%;
          transform: rotate(-13deg);
        }

        .product-platform {
          position: absolute;
          bottom: 21%;
          left: 50%;
          width: 138px;
          height: 29px;
          border: 2px solid #f4c783;
          border-radius: 50%;
          background: linear-gradient(#ffe2a6, #b77938);
          box-shadow: 0 0 18px #ffb84d45;
          transform: translateX(-50%);
        }

        .product-platform-top {
          position: absolute;
          inset: -5px 8px 8px;
          border-radius: 50%;
          background: #ffe6b3;
        }

        .product-container {
          position: absolute;
          bottom: 32%;
          left: 50%;
          width: 43px;
          height: 78px;
          transform: translateX(-50%);
        }

        .product-cap {
          position: absolute;
          top: 0;
          left: 12px;
          width: 19px;
          height: 10px;
          border: 1px solid #c5a36c;
          border-radius: 2px;
          background: #17212a;
        }

        .product-neck {
          position: absolute;
          top: 9px;
          left: 9px;
          width: 25px;
          height: 10px;
          border: 1px solid #b78c56;
          background: #202c34;
        }

        .product-bottle-body {
          position: absolute;
          top: 17px;
          width: 43px;
          height: 61px;
          overflow: hidden;
          border: 2px solid #bd925c;
          border-radius: 5px 5px 8px 8px;
          background: linear-gradient(90deg, #10191f, #36434b, #111920);
          box-shadow: 0 0 15px #ffb84d22;
        }

        .product-label {
          position: absolute;
          top: 20px;
          right: 3px;
          left: 3px;
          padding: 5px 0;
          background: #d3ae78;
          text-align: center;
        }

        .product-label div {
          width: 13px;
          height: 2px;
          margin: 0 auto 3px;
          background: #3b3022;
        }

        .product-label span {
          color: #282016;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        .product-reflection {
          position: absolute;
          bottom: 13%;
          left: 50%;
          width: 90px;
          height: 8px;
          border-radius: 50%;
          background: #ffcb78;
          opacity: 0.3;
          filter: blur(7px);
          transform: translateX(-50%);
        }

        /* Arrow button */
        .facility-arrow {
          position: absolute;
          right: 12px;
          bottom: 12px;
          z-index: 5;
          display: flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border: 3px solid #ff6500;
          border-radius: 50%;
          background: #080808;
          color: #ff7000;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .facility-arrow:hover {
          background: #ff6500;
          color: #050505;
          transform: translateX(3px);
        }

        /* Bottom CTA */
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
        }

        .cta-eyebrow {
          color: #ff7600;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .production-cta h3 {
          margin: 8px 0 0;
          font-size: clamp(19px, 2vw, 27px);
          font-weight: 850;
          line-height: 1.3;
        }

        .cta-description {
          margin: 0;
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

        /* Service details modal */
        .facility-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #000000dc;
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

        .modal-number {
          color: #ff7200;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .facility-modal h3 {
          margin: 12px 0;
          font-size: 27px;
          font-weight: 800;
        }

        .facility-modal p {
          margin: 0 0 24px;
          color: #c9c9c9;
          font-size: 15px;
          line-height: 1.7;
        }

        /* Tablet */
        @media (max-width: 1100px) {
          .facility-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
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
            padding: 45px 13px;
          }

          .production-header {
            margin-bottom: 26px;
          }

          .production-badge {
            padding: 8px 14px;
            font-size: 10px;
            letter-spacing: 2.5px;
          }

          .production-header h2 {
            font-size: 31px;
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
            grid-template-columns: 1fr 0.9fr;
            min-height: 225px;
          }

          .facility-art {
            min-height: 225px;
          }

          .facility-copy {
            padding: 15px 11px;
          }

          .facility-card-heading {
            gap: 10px;
            margin-bottom: 12px;
          }

          .facility-icon {
            width: 39px;
            height: 39px;
          }

          .facility-number {
            font-size: 21px;
          }

          .facility-copy h3 {
            font-size: 16px;
          }

          .facility-copy p {
            font-size: 12px;
            line-height: 1.5;
          }

          .facility-arrow {
            right: 8px;
            bottom: 8px;
            width: 39px;
            height: 39px;
          }

          .production-cta {
            grid-template-columns: 1fr;
            gap: 19px;
            padding: 19px 15px;
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
            letter-spacing: 1.3px;
          }

          .production-cta h3 {
            font-size: 20px;
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
          .facility-card,
          .facility-arrow {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
