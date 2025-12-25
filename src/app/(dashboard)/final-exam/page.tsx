"use client";

import { finalExam } from "@/data/final-exam";
import { QuizEngine } from "@/components/quiz/quiz-engine";
import { ShieldCheck, Timer } from "lucide-react";

export default function FinalExamPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-primary-500" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Final Exam</h1>
            <p className="text-sm text-gray-600">30-50 questions across Ultrasound, Echo, and EKG. Pass 80% to earn certificate.</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-3 text-xs text-gray-600">
          <Timer size={14} />
          <span>Time limit: {finalExam.time_limit} minutes</span>
          <span>Attempts: {finalExam.max_attempts ?? 2}</span>
        </div>
      </div>

      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4">
        <QuizEngine quiz={finalExam} />
      </div>
    </div>
  );
}



