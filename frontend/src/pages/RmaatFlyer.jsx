import React, { useState, useEffect, useCallback } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import {
  Download, Loader2, Clock, ArrowRight, Cpu, ShieldCheck, BarChart3,
  Plane, Settings, Briefcase, Compass, Award, Map,
} from "lucide-react";
import { flyer, REGISTER_URL } from "@/data/rmaatFlyer";
import { generateRmaatFlyerPdf } from "@/components/RmaatFlyerPdf";

const IconMap = {
  cpu: Cpu, shield: ShieldCheck, "bar-chart": BarChart3,
  plane: Plane, settings: Settings, briefcase: Briefcase,
  compass: Compass, award: Award, map: Map,
};

const IMG = `${process.env.PUBLIC_URL || ""}/images/rmaat`;

export default function RmaatFlyer() {
  const [pdfLoading, setPdfLoading] = useState(false);
  const [qr, setQr] = useState("");

  useEffect(() => {
    document.title = "АНО «РМААТ» × AX 10 — Флайер";
    QRCode.toDataURL(REGISTER_URL, {
      margin: 1, width: 320, errorCorrectionLevel: "M",
      color: { dark: "#0a1838", light: "#ffffff" },
    }).then(setQr);
  }, []);

  const handlePdf = useCallback(async () => {
    setPdfLoading(true);
    try { await generateRmaatFlyerPdf(); } catch (e) { console.error(e); }
    setPdfLoading(false);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-[#050b1a] flex flex-col items-center py-6 px-3" data-testid="rmaat-flyer-page">
      {/* Download bar */}
      <div className="w-full max-w-[760px] flex justify-end mb-4">
        <Button onClick={handlePdf} disabled={pdfLoading} data-testid="rmaat-pdf-btn"
          className="bg-[#FF7A1A] hover:bg-[#ff8c3a] text-white font-semibold rounded-full px-5 gap-2">
          {pdfLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          Скачать PDF
        </Button>
      </div>

      {/* FLYER — A4 portrait ratio */}
      <div className="w-full max-w-[760px] bg-[#0a1838] text-white rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        data-testid="rmaat-flyer">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 py-3.5 bg-[#061026] border-b border-white/10">
          <span className="text-sm sm:text-base font-bold tracking-wide text-white">{flyer.org}</span>
          <span className="text-[#FF7A1A] text-lg font-light">×</span>
          <img src={`${process.env.PUBLIC_URL || ""}/images/ax10/logo-ax10.png`} alt="AX10" className="h-5 sm:h-6" data-testid="rmaat-logo" />
        </div>

        {/* HERO */}
        <div className="relative">
          <img src={`${IMG}/plane-hero.jpg`} alt="Малая авиация" className="w-full h-44 sm:h-56 object-cover" data-testid="rmaat-hero-img" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1838] via-[#0a1838]/70 to-[#0a1838]/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
            <p className="text-[#FF7A1A] text-xs sm:text-sm font-bold tracking-[0.2em] mb-1">{flyer.hero.kickerLight}</p>
            <h1 className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight max-w-[90%]">{flyer.hero.headline}</h1>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-5">
          <p className="text-sm text-slate-300 leading-relaxed">{flyer.hero.subtitle}</p>

          {/* Time block */}
          <div className="flex items-start gap-3 bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 rounded-xl p-4" data-testid="rmaat-time">
            <Clock className="h-6 w-6 text-[#FF7A1A] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-[#FF7A1A]">{flyer.time.title}</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{flyer.time.text}</p>
            </div>
          </div>

          {/* About */}
          <div className="bg-[#061026] rounded-xl p-5 border border-white/10" data-testid="rmaat-about">
            <h2 className="text-base font-bold text-white mb-2">{flyer.about.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">{flyer.about.intro}</p>
            <ul className="space-y-2">
              {flyer.about.points.map((p, i) => (
                <li key={i} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <span className="text-[#FF7A1A] font-bold shrink-0">›</span>{p}
                </li>
              ))}
            </ul>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" data-testid="rmaat-features">
            {flyer.features.map((f, i) => {
              const Icon = IconMap[f.icon];
              return (
                <div key={i} className="bg-[#102348] rounded-xl p-4 border border-white/5">
                  <Icon className="h-6 w-6 text-[#FF7A1A] mb-2" />
                  <p className="text-xs font-bold text-white tracking-wide mb-1">{f.title}</p>
                  <p className="text-[11px] text-slate-400 leading-snug">{f.text}</p>
                </div>
              );
            })}
          </div>

          {/* CTA + QR */}
          <div className="bg-[#FF7A1A] rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4" data-testid="rmaat-cta">
            <div className="flex-1">
              <ArrowRight className="h-6 w-6 text-white mb-2 hidden sm:block" />
              <p className="text-sm sm:text-base font-extrabold text-white leading-snug">{flyer.cta.title}</p>
              <p className="text-[11px] text-white/80 mt-2">{flyer.cta.label}</p>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-1 bg-white text-[#0a1838] text-xs font-semibold rounded-md px-3 py-1.5 break-all"
                data-testid="rmaat-cta-link">{REGISTER_URL}</a>
            </div>
            {qr && <img src={qr} alt="QR-код регистрации" className="w-28 h-28 rounded-lg bg-white p-1.5 shrink-0" data-testid="rmaat-qr" />}
          </div>

          {/* Audience */}
          <div data-testid="rmaat-audience">
            <h2 className="text-base font-bold text-white mb-3">{flyer.audience.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {flyer.audience.items.map((a, i) => {
                const Icon = IconMap[a.icon];
                return (
                  <div key={i} className="flex gap-3 items-start bg-[#061026] rounded-lg p-3 border border-white/5">
                    <div className="bg-[#FF7A1A]/15 rounded-lg p-2 shrink-0">
                      <Icon className="h-5 w-5 text-[#FF7A1A]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">{a.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{a.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#061026] border-t border-[#FF7A1A]/30 px-5 py-4 text-center">
          <p className="text-sm font-bold text-white leading-snug">{flyer.footer}</p>
        </div>
      </div>
    </div>
  );
}
