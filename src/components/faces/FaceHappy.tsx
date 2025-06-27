interface FaceHappyProps {
  eyeColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  blushColor?: string;
}

export function FaceHappy({
  eyeColor = "#6c3c22",
  blushColor = "#fda67e",
  strokeColor = "#6c3c22",
  strokeWidth = 8,
}: FaceHappyProps = {}) {
  return (
    <g id="face-happy">
      <ellipse
        style={{
          fill: eyeColor,
        }}
        id="path8"
        cx="244"
        cy="125"
        rx="12"
        ry="15"
      />
      <ellipse
        style={{
          fill: eyeColor,
        }}
        id="path8-7"
        cx="160"
        cy="125"
        rx="12"
        ry="15"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="m 221.94315,143.73986 c -19.0001,20.65227 -39.10166,0.55072 -39.10166,0.55072"
        id="path11"
      />
      <ellipse
        style={{
          fill: blushColor
        }}
        cx="135"
        cy="155"
        rx="20"
        ry="17"
      />
      <ellipse
        style={{
          fill: blushColor
        }}
        cx="268"
        cy="155"
        rx="20"
        ry="17"
      />
    </g>
  );
}
