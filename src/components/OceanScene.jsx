export default function OceanScene({ variant = 'home' }) {
  if (variant === 'auth') {
    return (
      <svg viewBox="0 0 480 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        {/* Sky gradient */}
        <defs>
          <linearGradient id="skyAuth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A3D62" />
            <stop offset="100%" stopColor="#1B6CA8" />
          </linearGradient>
          <linearGradient id="waterAuth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B6CA8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3DC1D3" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Clouds */}
        <ellipse cx="80" cy="40" rx="40" ry="14" fill="white" opacity="0.15" />
        <ellipse cx="60" cy="38" rx="28" ry="12" fill="white" opacity="0.12" />
        <ellipse cx="380" cy="55" rx="35" ry="12" fill="white" opacity="0.12" />
        <ellipse cx="400" cy="52" rx="25" ry="10" fill="white" opacity="0.1" />

        {/* Stars/sparkles */}
        <circle cx="150" cy="25" r="1.5" fill="white" opacity="0.3" />
        <circle cx="300" cy="35" r="1" fill="white" opacity="0.25" />
        <circle cx="420" cy="20" r="1.5" fill="white" opacity="0.2" />

        {/* Ocean waves */}
        <path d="M0 140 Q60 125 120 140 Q180 155 240 140 Q300 125 360 140 Q420 155 480 140 V200 H0Z" fill="url(#waterAuth)" />
        <path d="M0 155 Q60 142 120 155 Q180 168 240 155 Q300 142 360 155 Q420 168 480 155 V200 H0Z" fill="white" opacity="0.08" />
        <path d="M0 170 Q60 160 120 170 Q180 180 240 170 Q300 160 360 170 Q420 180 480 170 V200 H0Z" fill="white" opacity="0.05" />

        {/* Coral silhouettes */}
        <path d="M30 200 Q35 175 40 180 Q45 170 48 175 Q52 165 55 175 Q60 170 62 180 Q65 175 70 200Z" fill="white" opacity="0.06" />
        <path d="M400 200 Q405 178 410 183 Q415 170 420 178 Q425 168 428 178 Q432 172 435 183 Q440 178 445 200Z" fill="white" opacity="0.06" />

        {/* Fish silhouettes */}
        <g transform="translate(200, 165)" opacity="0.1">
          <ellipse cx="0" cy="0" rx="12" ry="5" fill="white" />
          <polygon points="12,-4 20,0 12,4" fill="white" />
        </g>
        <g transform="translate(320, 178)" opacity="0.07">
          <ellipse cx="0" cy="0" rx="8" ry="3.5" fill="white" />
          <polygon points="8,-3 14,0 8,3" fill="white" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 480 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="skyHome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="60%" stopColor="#B0E0F0" />
          <stop offset="100%" stopColor="#E0F2F8" />
        </linearGradient>
        <linearGradient id="waterHome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3DC1D3" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1B6CA8" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="100%" stopColor="#E8D5A8" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="480" height="180" fill="url(#skyHome)" />

      {/* Clouds */}
      <ellipse cx="100" cy="30" rx="50" ry="16" fill="white" opacity="0.7" />
      <ellipse cx="75" cy="28" rx="35" ry="14" fill="white" opacity="0.6" />
      <ellipse cx="130" cy="32" rx="30" ry="12" fill="white" opacity="0.5" />

      <ellipse cx="350" cy="45" rx="40" ry="13" fill="white" opacity="0.5" />
      <ellipse cx="380" cy="43" rx="28" ry="11" fill="white" opacity="0.4" />

      {/* Sun */}
      <circle cx="420" cy="35" r="22" fill="#FFD93D" opacity="0.8" />
      <circle cx="420" cy="35" r="30" fill="#FFD93D" opacity="0.15" />

      {/* Birds */}
      <path d="M200 25 Q205 20 210 25" stroke="#555" strokeWidth="1.2" fill="none" opacity="0.3" />
      <path d="M220 30 Q224 26 228 30" stroke="#555" strokeWidth="1" fill="none" opacity="0.25" />

      {/* Ocean waves */}
      <path d="M0 110 Q40 100 80 110 Q120 120 160 110 Q200 100 240 110 Q280 120 320 110 Q360 100 400 110 Q440 120 480 110 V180 H0Z" fill="url(#waterHome)" />
      <path d="M0 120 Q50 112 100 122 Q150 132 200 120 Q250 108 300 120 Q350 132 400 120 Q450 108 480 118 V180 H0Z" fill="#1B6CA8" opacity="0.25" />
      <path d="M0 135 Q60 128 120 138 Q180 148 240 135 Q300 122 360 135 Q420 148 480 138 V180 H0Z" fill="#0A3D62" opacity="0.15" />

      {/* Beach/sand */}
      <path d="M0 155 Q80 148 160 158 Q240 168 320 155 Q400 142 480 155 V180 H0Z" fill="url(#sand)" opacity="0.5" />

      {/* Sailboat */}
      <g transform="translate(320, 90)">
        <line x1="0" y1="-35" x2="0" y2="5" stroke="#8B6914" strokeWidth="2" />
        <polygon points="0,-35 20,-10 0,-5" fill="white" opacity="0.9" />
        <polygon points="0,-30 -12,-10 0,-5" fill="#E8E8E8" opacity="0.8" />
        <path d="M-12,5 Q0,8 12,5" fill="#5B3A0A" />
      </g>

      {/* Palm tree */}
      <g transform="translate(50, 95)">
        <rect x="-2" y="0" width="4" height="35" rx="2" fill="#8B6914" opacity="0.6" />
        <ellipse cx="10" cy="-5" rx="18" ry="6" fill="#2E7D32" opacity="0.5" transform="rotate(-20)" />
        <ellipse cx="-8" cy="-3" rx="16" ry="5" fill="#388E3C" opacity="0.45" transform="rotate(15)" />
        <ellipse cx="5" cy="-8" rx="14" ry="5" fill="#43A047" opacity="0.4" transform="rotate(-40)" />
      </g>

      {/* Wave foam lines */}
      <path d="M0 115 Q20 112 40 115 Q60 118 80 115" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M200 112 Q220 109 240 112 Q260 115 280 112" stroke="white" strokeWidth="1" fill="none" opacity="0.35" />
      <path d="M380 115 Q400 112 420 115 Q440 118 460 115" stroke="white" strokeWidth="0.8" fill="none" opacity="0.3" />
    </svg>
  );
}
