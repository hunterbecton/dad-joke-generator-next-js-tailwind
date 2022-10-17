export const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      className='rounded-md bg-amber-four py-3 px-6 text-button-sm text-amber-ten hover:bg-amber-five focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-four disabled:opacity-70 md:py-4 md:px-8 md:text-button-base'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
