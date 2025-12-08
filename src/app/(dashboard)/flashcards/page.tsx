import { FlashcardDeck } from "@/components/quiz/flashcard-deck";
import { flashcards } from "@/data/flashcards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const decks = [
  { key: "ultrasound", label: "Ultrasound Physics" },
  { key: "anatomy", label: "Core Anatomy" },
  { key: "echo", label: "Echo Views" },
  { key: "ekg", label: "EKG Leads" },
  { key: "safety", label: "Safety & Workflow" },
];

export default function FlashcardsPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Flashcards</h1>
        <p className="text-sm text-slate-600">
          Rapid recall for physics, anatomy, echo views, EKG placement, and safety—tap to flip, use
          next/prev for spaced repetition.
        </p>
      </div>

      <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
        <Tabs defaultValue="ultrasound">
          <TabsList className="grid w-full grid-cols-5">
            {decks.map((d) => (
              <TabsTrigger key={d.key} value={d.key}>
                {d.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {decks.map((d) => (
            <TabsContent key={d.key} value={d.key} className="pt-4">
              <FlashcardDeck cards={flashcards[d.key as keyof typeof flashcards]} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

