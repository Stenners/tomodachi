export const FaceSleepy = ({ strokeColor = "#6c3c22", strokeWidth = 8 }) => (
  <g id="face-sleepy">
    <path
      d="M200 130 Q 210 110 220 130"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fill="none"
    />
    <path
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      d="M260 130 Q 270 110 280 130"
      fill="none"
    />
    <line
      x1="225"
      y1="150"
      x2="255"
      y2="150"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </g>
);
