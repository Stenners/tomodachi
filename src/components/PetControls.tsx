interface PetControlsProps {
  hunger: number;
  isSleeping: boolean;
  onFeed: () => void;
  onSleep: () => void;
  onWake: () => void;
}

export function PetControls({ hunger, isSleeping, onFeed, onSleep, onWake }: PetControlsProps) {
  return (
    <div style={{ marginLeft: 24, textAlign: "left" }}>
      <div>Hunger: {hunger}/10</div>
      <div>Status: {isSleeping ? "Sleeping" : "Awake"}</div>
      <button onClick={onFeed} disabled={isSleeping}>Feed</button>
      {isSleeping ? (
        <button onClick={onWake}>Wake Up</button>
      ) : (
        <button onClick={onSleep}>Sleep</button>
      )}
    </div>
  );
} 