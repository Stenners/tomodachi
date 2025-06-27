import { Body } from "./Body";
import { FaceHappy } from "./faces/FaceHappy";
import { FaceSleepy } from "./faces/FaceSleepy";

interface PetProps {
  mood: "happy" | "sleepy";
  hasBow?: boolean;
}

export function Pet({ mood }: PetProps) {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400">
      <Body />
      {mood === "happy" && <FaceHappy />}
      {mood === "sleepy" && <FaceSleepy />}
    </svg>
  );
}
