import { useState, useEffect } from "react";
import { Pet } from "./components/Pet";
import { PetControls } from "./components/PetControls";
import {
  loadPetState,
  savePetState,
  feedPet,
  setSleeping,
  updateHunger,
  updateSleepiness,
  getPetMood,
} from "./services/petStateService";
import type { PetState } from "./services/petStateService";
import "./App.css";

export function App() {
  const [petState, setPetState] = useState<PetState>(() => loadPetState());

  // Save state on change
  useEffect(() => {
    savePetState(petState);
  }, [petState]);

  // Periodically update hunger
  useEffect(() => {
    const interval = setInterval(() => {
      setPetState((state) => updateHunger(state));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Periodically update sleepiness
  useEffect(() => {
    const interval = setInterval(() => {
      setPetState((state) => updateSleepiness(state));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Feed action
  const handleFeed = () => setPetState((state) => feedPet(state));
  // Sleep/wake actions
  const handleSleep = () => setPetState((state) => setSleeping(state, true));
  const handleWake = () => setPetState((state) => setSleeping(state, false));

  // Mood logic
  const mood = getPetMood(petState);

  return (
    <>
      <div className="pet-container">
        <Pet mood={mood} />
        <PetControls
          hunger={petState.hunger}
          sleepiness={petState.sleepiness}
          isSleeping={petState.isSleeping}
          onFeed={handleFeed}
          onSleep={handleSleep}
          onWake={handleWake}
        />
      </div>
    </>
  );
}
