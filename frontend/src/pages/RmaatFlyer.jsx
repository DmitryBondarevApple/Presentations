import React, { useState, useEffect, useCallback } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import {
  Download, Loader2, Clock, ArrowRight, Cpu, ShieldCheck, MessageSquareQuote,
  Plane, Briefcase, Map, Compass, Lightbulb, Building2,
} from "lucide-react";
import { flyer, REGISTER_URL } from "@/data/rmaatFlyer";
import { generateRmaatFlyerPdf } from "@/components/RmaatFlyerPdf";

const IconMap = {
  cpu: Cpu, shield: ShieldCheck, "bar-chart": MessageSquareQuote,
  plane: Plane, settings: Briefcase, briefcase: Map,
  compass: Compass, award: Lightbulb, map: Building2,
};

const IMG = `${process.env.PUBLIC_URL || ""}/images/rmaat`;
const C = {
  bg: "#0A1225", surface: "#121C36", elevated: "#1A2748",
  orange: "#F97316", accent: "#FDBA74", border: "#2A3A60",
};

/* Section eyebrow label */
const Eyebrow = ({ children }) => (
  <div className="flex items-center gap-2.5 mb-3">
    <span className="h-px w-7 bg-[#F97316]" />
    <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#FDBA74]" style={{ fontFamily: "Manrope" }}>{children}</span>
  </div>
);

export default function RmaatFlyer() {
  const [pdfLoading, setPdfLoading] = useState(false);
  const [qr, setQr] = useState("");

  useEffect(() => {
    document.title = "АНО «РМААТ» × AX 10 — Флайер";
    // Override global overflow:hidden so this page can scroll
    const els = [document.documentElement, document.body, document.getElementById("root")];
    const prev = els.map((e) => e && e.style.overflow);
    els.forEach((e) => { if (e) { e.style.overflow = "auto"; e.style.height = "auto"; } });
    QRCode.toDataURL(REGISTER_URL, {
      margin: 1, width: 360, errorCorrectionLevel: "M",
      color: { dark: "#0A1225", light: "#ffffff" },
    }).then(setQr);
    return () => { els.forEach((e, i) => { if (e) { e.style.overflow = prev[i] || ""; e.style.height = ""; } }); };
  }, []);

  const handlePdf = useCallback(async () => {
    setPdfLoading(true);
    try { await generateRmaatFlyerPdf(); } catch (e) { console.error(e); }
    setPdfLoading(false);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full py-8 px-3 sm:px-4 flex flex-col items-center"
      style={{ fontFamily: "Manrope", background: `radial-gradient(1200px 600px at 50% -5%, #16234a 0%, ${C.bg} 55%)` }}
      data-testid="rmaat-flyer-page">

      {/* Download bar */}
      <div className="w-full max-w-[820px] flex justify-end mb-4">
        <Button onClick={handlePdf} disabled={pdfLoading} data-testid="rmaat-pdf-btn"
          className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-full px-6 h-11 gap-2 shadow-lg shadow-orange-500/20 transition-colors">
          {pdfLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          Скачать PDF
        </Button>
      </div>

      {/* FLYER */}
      <div className="w-full max-w-[820px] bg-[#0A1225] text-white rounded-[20px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
        data-testid="rmaat-flyer">

        {/* HERO */}
        <div className="relative h-[300px] sm:h-[340px]">
          <img src={`${IMG}/hero2.jpg`} alt="Малая авиация" className="absolute inset-0 w-full h-full object-cover" data-testid="rmaat-hero-img" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,18,37,0.78) 0%, rgba(10,18,37,0.55) 40%, rgba(10,18,37,0.95) 100%)" }} />

          {/* Co-brand header */}
          <div className="relative flex items-center justify-between px-6 sm:px-8 pt-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-extrabold tracking-wide text-white" style={{ fontFamily: "Montserrat" }}>{flyer.org}</span>
              <span className="text-[#F97316] text-lg font-light">×</span>
              <img src={`${process.env.PUBLIC_URL || ""}/images/ax10/logo-ax10.png`} alt="AX10" className="h-5 sm:h-6" data-testid="rmaat-logo" />
            </div>
            <span className="hidden sm:inline text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Исследование · 2026</span>
          </div>

          {/* Hero copy */}
          <div className="absolute inset-x-0 bottom-0 px-6 sm:px-8 pb-7">
            <Eyebrow>{flyer.hero.kickerLight}</Eyebrow>
            <h1 className="text-[26px] leading-[1.05] sm:text-[34px] sm:leading-[1.05] font-black tracking-tight text-white max-w-[95%]"
              style={{ fontFamily: "Montserrat" }}>{flyer.hero.headline}</h1>
          </div>
        </div>

        {/* BODY */}
        <div className="px-6 sm:px-8 py-7 space-y-7">

          <p className="text-[15px] text-slate-300 leading-relaxed max-w-[92%]">{flyer.hero.subtitle}</p>

          {/* 30 seconds block */}
          <div className="flex items-start gap-4 rounded-xl p-5 border-l-4 border-[#F97316] bg-[#F97316]/10" data-testid="rmaat-time">
            <div className="bg-[#F97316] rounded-xl p-2.5 shrink-0">
              <Clock className="h-6 w-6 text-[#0A1225]" />
            </div>
            <div>
              <p className="text-base font-extrabold text-white" style={{ fontFamily: "Montserrat" }}>{flyer.time.title}</p>
              <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">{flyer.time.text}</p>
            </div>
          </div>

          {/* About */}
          <div data-testid="rmaat-about">
            <Eyebrow>О чём это исследование</Eyebrow>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">{flyer.about.intro}</p>
            <div className="space-y-2.5">
              {flyer.about.points.map((p, i) => (
                <div key={i} className="flex gap-3 items-start rounded-lg bg-[#121C36] border border-[#2A3A60] p-3.5">
                  <span className="text-[#F97316] font-black text-base leading-none mt-0.5" style={{ fontFamily: "Montserrat" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-slate-200 leading-snug">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5" data-testid="rmaat-features">
            {flyer.features.map((f, i) => {
              const Icon = IconMap[f.icon];
              return (
                <div key={i} className="bg-[#121C36] rounded-xl p-5 border border-[#2A3A60] hover:border-[#F97316] transition-colors">
                  <div className="bg-[#F97316]/15 rounded-lg w-11 h-11 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-[#F97316]" />
                  </div>
                  <p className="text-[13px] font-extrabold text-white tracking-wide mb-1.5" style={{ fontFamily: "Montserrat" }}>{f.title}</p>
                  <p className="text-xs text-slate-400 leading-snug">{f.text}</p>
                </div>
              );
            })}
          </div>

          {/* CTA + QR */}
          <div className="bg-[#F97316] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 shadow-lg shadow-orange-500/20" data-testid="rmaat-cta">
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-6 w-6 text-[#0A1225]" />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#0A1225]/70" style={{ fontFamily: "Montserrat" }}>Регистрация на интервью</span>
              </div>
              <p className="text-lg sm:text-xl font-black text-[#0A1225] leading-tight" style={{ fontFamily: "Montserrat" }}>{flyer.cta.title}</p>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 bg-[#0A1225] text-white text-sm font-semibold rounded-lg px-4 py-2 break-all hover:bg-[#121C36] transition-colors"
                data-testid="rmaat-cta-link">{REGISTER_URL}</a>
            </div>
            {qr && <div className="bg-white rounded-xl p-2.5 shrink-0"><img src={qr} alt="QR-код регистрации" className="w-32 h-32" data-testid="rmaat-qr" /></div>}
          </div>

          {/* Audience */}
          <div data-testid="rmaat-audience">
            <Eyebrow>{flyer.audience.title}</Eyebrow>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {flyer.audience.items.map((a, i) => {
                const Icon = IconMap[a.icon];
                return (
                  <div key={i} className="flex gap-3.5 items-start bg-[#1A2748] rounded-xl p-4 border-t-2 border-transparent hover:border-[#F97316] transition-colors">
                    <div className="bg-[#0A1225] ring-1 ring-[#2A3A60] rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white leading-tight" style={{ fontFamily: "Montserrat" }}>{a.title}</p>
                      <p className="text-xs text-slate-400 mt-1 leading-snug">{a.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative bg-[#060C1B] border-t border-[#F97316]/30 px-6 sm:px-8 py-6 text-center">
          <p className="text-base sm:text-lg font-extrabold text-white leading-snug" style={{ fontFamily: "Montserrat" }}>{flyer.footer}</p>
          <p className="text-[11px] text-slate-500 mt-2 tracking-wide">{flyer.org} × AX 10</p>
        </div>
      </div>
    </div>
  );
}
