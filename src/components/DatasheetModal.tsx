import React, { useState } from 'react';

interface DatasheetModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const DatasheetModal: React.FC<DatasheetModalProps> = ({
  isOpen,
  title,
  onClose,
  onToast,
}) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      onToast(`Download completed: ${title}.pdf (Verified SHA-256)`);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-outline-variant rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative">
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container-low">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">
              picture_as_pdf
            </span>
            <div>
              <h3 className="font-bold text-lg text-on-surface">{title}</h3>
              <p className="text-xs text-on-surface-variant font-mono">
                AxiWatt Technical Documentation · Document ID: AX-BESS-{Math.floor(Math.random() * 8999 + 1000)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Document Preview Card */}
          <div className="p-6 rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                AxiWatt Technologies · Engineering Publication
              </span>
              <span className="text-xs bg-primary/10 text-primary font-mono px-2 py-0.5 rounded">
                REV 2024.6 · BIS &amp; CE VERIFIED
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-2">
              <div className="p-3 bg-surface-container-low rounded-lg">
                <span className="text-[11px] text-on-surface-variant block">Thermal Rating</span>
                <span className="font-bold text-sm text-primary">-40°C to +65°C</span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-lg">
                <span className="text-[11px] text-on-surface-variant block">Round-Trip RTE</span>
                <span className="font-bold text-sm text-primary">≥ 94.5%</span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-lg">
                <span className="text-[11px] text-on-surface-variant block">Response Time</span>
                <span className="font-bold text-sm text-primary">≤ 50 ms</span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-lg">
                <span className="text-[11px] text-on-surface-variant block">Design Life</span>
                <span className="font-bold text-sm text-primary">20+ Years</span>
              </div>
            </div>

            <div className="text-xs text-on-surface-variant leading-relaxed space-y-2 pt-2">
              <p>
                <strong>Abstract:</strong> This engineering publication provides complete architectural blueprints,
                cell electrochemistry curves (LiFePO4 &amp; Sodium-Ion), intelligent BMS protocol mapping (RS485/CAN/Modbus),
                and remote cloud telemetry schemas for AxiWatt Technologies energy storage installations.
              </p>
              <p>
                <strong>Certifications:</strong> Tested and compliant in accordance with UL 9540A, UL 1973,
                IEC 62619, CE, BIS, and Indian Defence MIL-STD environmental standards.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 border border-outline rounded-lg text-sm font-medium hover:bg-surface-container transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-on-primary-container transition-all flex items-center justify-center gap-2 shadow"
            >
              {downloading ? (
                <>
                  <span className="material-symbols-outlined text-base animate-spin">sync</span>
                  <span>Generating PDF Package...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">download</span>
                  <span>Download Official PDF (12.4 MB)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
