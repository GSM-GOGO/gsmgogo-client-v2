interface PercentGuageBoxProps {
  percent: string;
}

const PercentGuageBox = ({ percent }: PercentGuageBoxProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="12" viewBox="0 0 150 12" fill="none">
    <g clipPath="url(#clip0_318_1003)">
      <rect width="150" height="12" rx="6" fill="#44444B" />
      <rect y="-5" width={`${percent}%`} height="25" fill="#B7B7BE" />
    </g>
    <defs>
      <clipPath id="clip0_318_1003">
        <rect width="150" height="12" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default PercentGuageBox;
