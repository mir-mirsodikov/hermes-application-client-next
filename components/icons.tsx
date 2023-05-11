export function HermesLogo() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 dark:stroke-gray-100 stroke-gray-800"
    >
      <path d="M9 6V8L19 3V1L9 6Z"  strokeWidth="0.7" />
      <path d="M9 8V10L17 6V4L9 8Z"  strokeWidth="0.7" />
      <path d="M9 10V12L15 9V7L9 10Z"  strokeWidth="0.7" />
      <path
        d="M9 6L5.5 7.5V13M5.5 15.5C6.86683 14.9142 7.63316 14.5858 9 14V12M5.5 15.5V13M5.5 15.5L1 17.5L2 14.5L5.5 13"
        strokeWidth="0.7"
      />
      <path
        d="M5.44816 9.58809L6.88191 8.9215M5.61796 11.0785L7.05172 10.4119"
        strokeWidth="0.7"
      />
    </svg>
  );
}

export function Moon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7 stroke-gray-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
}

export function Sun() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
}
