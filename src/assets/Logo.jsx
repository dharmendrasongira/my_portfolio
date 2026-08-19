const Logo = () => {
  return (
    <svg
      role="img"
      aria-label="Dharmendra Songira"
      viewBox="0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ds_logo_fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f8cff" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="14" fill="url(#ds_logo_fill)" />
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="14"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      <path d="M12 34.5h24" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="Poppins, Segoe UI, Helvetica, Arial, sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-1"
        fill="#ffffff"
      >
        DS
      </text>
    </svg>
  );
};

export default Logo;
