import { Body } from "./Body";
import { FaceHappy } from "./faces/FaceHappy";
import { FaceSleepy } from "./faces/FaceSleepy";

interface PetProps {
  mood: "happy" | "sleepy";
  size?: number;
}

export function Pet({ mood, size = 300 }: PetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400">
      <Body />
      {mood === "happy" && <FaceHappy />}
      {mood === "sleepy" && <FaceSleepy />}
    </svg>
  );
}
