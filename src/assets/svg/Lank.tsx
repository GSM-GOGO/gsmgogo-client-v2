const Lank1 = ({height}) => {
  return (
    <svg width="100" height={height} viewBox={`0 0 100 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={`M0 20C0 8.9543 8.95431 0 20 0H80C91.0457 0 100 8.95431 100 20V${height-4}C100 ${height-1.791} 98.2091 ${height} 96 ${height}H4C1.79086 ${height} 0 ${height-1.791} 0 ${height-4}V20Z`}
        fill="url(#paint0_linear_388_5976)"
      />
      <defs>
        <linearGradient id="paint0_linear_388_5976" x1="50" y1="0" x2="50" y2={`${height}`} gradientUnits="userSpaceOnUse">
          <stop stopColor="#23F69A" />
          <stop offset="1" stopColor="#1A80B9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Lank1;
