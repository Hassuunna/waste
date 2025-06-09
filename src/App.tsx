import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SkipConfirmModal from "./components/SkipConfirmModal";
import SkipList from "./components/SkipList";
import { useSkips } from "./hooks/useSkips";
import type { ISkip } from "./types";

function App() {
  const { data: skips, loading, error } = useSkips("NR32", "Lowestoft");
  const [selectedSkip, setSelectedSkip] = useState<ISkip | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleSelect = (skip: ISkip) => setSelectedSkip(skip);
  const handleClose = () => setSelectedSkip(null);
  const handleConfirm = () => {
    setConfirmed(true);
    setSelectedSkip(null);
    // TODO: Move to next page or handle confirmation logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Choose Your Skip
        </h1>
        {loading && <div className="text-center">Loading skips...</div>}
        {error && <div className="text-center text-red-600">{error}</div>}
        {!loading && !error && (
          <SkipList skips={skips} onSelect={handleSelect} />
        )}
        <SkipConfirmModal
          skip={selectedSkip}
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
        {confirmed && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow">
            Skip confirmed! (Next page logic goes here)
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
