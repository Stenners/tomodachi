// src/services/petStateService.ts
export interface PetState {
  hunger: number; // 0 = full, 10 = starving
  isSleeping: boolean;
  lastUpdated: number; // timestamp
}

const STORAGE_KEY = 'petState';
const HUNGER_INTERVAL_MINUTES = 5;
const HUNGER_INCREASE_PER_INTERVAL = 1;
const MAX_HUNGER = 10;

export function loadPetState(): PetState {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return { hunger: 0, isSleeping: false, lastUpdated: Date.now() };
  }
  const { hunger, isSleeping, lastUpdated } = JSON.parse(saved);
  // Calculate elapsed time
  const now = Date.now();
  const elapsedMinutes = Math.floor((now - lastUpdated) / (1000 * 60));
  const hungerIncrease = Math.floor(elapsedMinutes / HUNGER_INTERVAL_MINUTES) * HUNGER_INCREASE_PER_INTERVAL;
  return {
    hunger: Math.min(MAX_HUNGER, hunger + hungerIncrease),
    isSleeping,
    lastUpdated: now,
  };
}

export function savePetState(state: PetState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function feedPet(state: PetState): PetState {
  return {
    ...state,
    hunger: Math.max(0, state.hunger - 3),
    lastUpdated: Date.now(),
  };
}

export function setSleeping(state: PetState, isSleeping: boolean): PetState {
  return {
    ...state,
    isSleeping,
    lastUpdated: Date.now(),
  };
}

export function updateHunger(state: PetState): PetState {
  // Call this periodically to increase hunger if not sleeping
  if (state.isSleeping) return state;
  return {
    ...state,
    hunger: Math.min(MAX_HUNGER, state.hunger + 1),
    lastUpdated: Date.now(),
  };
}

export function getPetMood(state: PetState): "happy" | "sleepy" {
  if (state.isSleeping) return "sleepy";
  // If you add a 'hungry' mood to Pet, you can return it here:
  // if (state.hunger > 6) return "hungry";
  return "happy";
} 