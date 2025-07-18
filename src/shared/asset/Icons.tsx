const Kakao = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M12.5025 3.51594C7.54121 3.51594 3.51831 6.84142 3.51831 10.9651C3.51831 13.5191 5.07551 15.7538 7.4414 17.1106L6.4432 21.0108C6.42378 21.0876 6.42703 21.1689 6.45241 21.2437C6.47778 21.3185 6.52404 21.3831 6.585 21.429C6.64596 21.4748 6.71871 21.4997 6.79326 21.5C6.86792 21.5004 6.94079 21.4763 7.0022 21.4312L11.3745 18.3398C11.7439 18.3769 12.1182 18.3983 12.4975 18.3983C17.4588 18.3983 21.4817 15.0728 21.4817 10.9491C21.4817 6.82547 17.4588 3.5 12.4975 3.5"
        fill="black"
      />
    </svg>
  );
};

const Naver = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3052 9.01953L5.38313 0.603821H0.5V16.3962H5.69482V7.98046L11.6169 16.3962H16.5V0.603821H11.3052V9.01953Z"
        fill="white"
      />
    </svg>
  );
};

const Google = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_40000060_3538)">
        <path
          clipRule="evenodd"
          d="M17.78 9.69606C17.78 9.08444 17.7251 8.49636 17.6232 7.93185H9.5V11.2681H14.1418C13.9419 12.3463 13.3342 13.2598 12.4207 13.8713V16.0354H15.2082C16.8391 14.5339 17.78 12.3228 17.78 9.69606Z"
          fill="#4285F4"
        />
        <path
          clipRule="evenodd"
          d="M9.5 18.1249C11.8288 18.1249 13.7811 17.3525 15.2082 16.0353L12.4207 13.8712C11.6484 14.3887 10.6604 14.6944 9.5 14.6944C7.25356 14.6944 5.35214 13.1773 4.6739 11.1386H1.79236V13.3733C3.21157 16.1921 6.12839 18.1249 9.5 18.1249Z"
          fill="#34A853"
        />
        <path
          clipRule="evenodd"
          d="M4.67392 11.1388C4.50142 10.6213 4.40341 10.0685 4.40341 9.50006C4.40341 8.93156 4.50142 8.37881 4.67392 7.86128V5.62662H1.79239C1.20824 6.79099 0.875 8.10829 0.875 9.50006C0.875 10.8918 1.20824 12.2091 1.79239 13.3734L4.67392 11.1388Z"
          fill="#FBBC05"
        />
        <path
          clipRule="evenodd"
          d="M9.5 4.3054C10.7663 4.3054 11.9032 4.74057 12.7971 5.59523L15.2709 3.12142C13.7772 1.72966 11.8248 0.875 9.5 0.875C6.12839 0.875 3.21157 2.80779 1.79236 5.62659L4.6739 7.86125C5.35214 5.82261 7.25356 4.3054 9.5 4.3054Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_40000060_3538">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Icons = {
  Kakao,
  Naver,
  Google,
};

export default Icons;
