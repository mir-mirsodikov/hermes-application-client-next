interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: 'primary' | 'secondary';
}
export function Button({ text, onClick, type }: ButtonProps) {
  let buttonClass =
    'transition ease-in-out duration-300 px-5 py-3 rounded-md font-medium ';

  switch (type) {
    case 'primary':
      buttonClass += `bg-gray-500 dark:bg-gray-50 text-white dark:text-gray-800 hover:bg-gray-600 dark:hover:bg-gray-300`;
      break;
    case 'secondary':
      buttonClass += `border border-gray-400 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-700`;
      break;
    default:
      break;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
