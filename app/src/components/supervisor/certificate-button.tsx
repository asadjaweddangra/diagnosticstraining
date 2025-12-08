"use client";

import jsPDF from "jspdf";

type Props = {
  traineeName: string;
  requirement: string;
};

export function CertificateButton({ traineeName, requirement }: Props) {
  function generate() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("SmartNurse Clinical Training", 20, 30);
    doc.setFontSize(14);
    doc.text("Certificate of Completion", 20, 45);
    doc.setFontSize(12);
    doc.text(`Awarded to: ${traineeName}`, 20, 60);
    doc.text(`Requirement: ${requirement}`, 20, 70);
    doc.text(
      "This certificate acknowledges successful completion of the competency requirement.",
      20,
      85
    );
    doc.text(
      `Date: ${new Date().toLocaleDateString()}        Supervisor: __________`,
      20,
      100
    );
    doc.save(`certificate-${traineeName || "trainee"}.pdf`);
  }

  return (
    <button
      onClick={generate}
      className="rounded-xl bg-primary-500 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-primary-600"
    >
      Generate Certificate PDF
    </button>
  );
}

