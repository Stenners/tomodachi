interface BodyProps {
  // Main body colors
  bodyColor?: string;
  bodyStrokeColor?: string;

  // Feet colors
  feetColor?: string;
  feetStrokeColor?: string;

  // arm colors
  armColor?: string;
  armStrokeColor?: string;

  // spot color
  spotColor?: string;

  // Stroke width
  strokeWidth?: number;
}

export function Body({
  bodyColor = "#fed780",
  bodyStrokeColor = "#6c3c22",
  feetColor = "#fec04f",
  feetStrokeColor = "#6c3c22",
  armColor = "#fed780",
  armStrokeColor = "#6c3c22",
  spotColor = "#f7c15c",
  strokeWidth = 8,
}: BodyProps = {}) {
  return (
    <g id="body">
      {/* Feet */}
      <ellipse
        style={{
          fill: feetColor,
          fillOpacity: 1,
          stroke: feetStrokeColor,
          strokeWidth: strokeWidth,
          strokeOpacity: 1,
        }}
        cx="263"
        cy="281"
        rx="32"
        ry="30"
      />
      <ellipse
        style={{
          fill: feetColor,
          fillOpacity: 1,
          stroke: feetStrokeColor,
          strokeWidth: strokeWidth,
          strokeOpacity: 1,
        }}
        cx="141"
        cy="281"
        rx="32"
        ry="30"
      />
      <path
        style={{
          fill: feetColor,
          fillOpacity: 1,
          stroke: feetStrokeColor,
          strokeWidth: strokeWidth,
          strokeOpacity: 1,
        }}
        d="m 323,244 c 0,0 30,9 43,3 14,-7 -6,53 -65,26 -49,-23 18,-30 22,-29 z"
      />

      {/* Main body */}
      <path
        style={{
          fill: bodyColor,
          fillOpacity: 1,
          stroke: bodyStrokeColor,
          strokeWidth: strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeOpacity: 1,
        }}
        d="m 63,143 c 0,0 3,-132 141,-132 130,0 142,133 142,133 0,0 34,149 -142,147 C 36,289 60,183 63,143 Z"
        transform="translate(-1,4)"
      />

      {/* Spots */}
      {/* Upper right large */}
      <ellipse
        style={{ fill: spotColor, fillOpacity: 1 }}
        cx="250"
        cy="55"
        rx="8"
        ry="12"
      />
      {/* Upper right small */}
      <ellipse
        style={{ fill: spotColor, fillOpacity: 1 }}
        cx="262"
        cy="80"
        rx="4"
        ry="7"
      />
      {/* Lower left large */}
      <ellipse
        style={{ fill: spotColor, fillOpacity: 1 }}
        cx="90"
        cy="210"
        rx="5"
        ry="9"
      />
      {/* Lower left small */}
      <ellipse
        style={{ fill: spotColor, fillOpacity: 1 }}
        cx="98"
        cy="230"
        rx="3"
        ry="6"
      />

      {/* Left arm */}
      <g transform="translate(-2,0)">
        <path
          style={{
            fill: armStrokeColor,
            fillOpacity: 1,
          }}
          d="m 64,137 c 0,0 -44,37 -38,66 6,29 34,21 46,8 13,-14 0,-10 0,-10 -13,11 0,-5 -14,-8 z"
        />
        <path
          style={{
            fill: armColor,
            fillOpacity: 1,
          }}
          d="m 74,141 c 0,0 -47,33 -42,58 2,12 13,17 22,13 10,-4 21,-14 26,-20 9,-11 20,-35 20,-35 z"
        />
      </g>

      {/* Right arm */}
      <g transform="matrix(-1,0,0,1,407,-1)">
        <path
          style={{
            fill: armStrokeColor,
            fillOpacity: 1,
          }}
          d="m 64,137 c 0,0 -44,37 -38,66 6,29 34,21 46,8 13,-14 0,-10 0,-10 -13,11 0,-5 -14,-8 z"
        />
        <path
          style={{
            fill: armColor,
            fillOpacity: 1,
          }}
          d="m 74,141 c 0,0 -45,33 -40,58 2,12 11,17 20,13 10,-4 21,-14 26,-20 9,-11 20,-35 20,-35 z"
        />
      </g>
    </g>
  );
}
