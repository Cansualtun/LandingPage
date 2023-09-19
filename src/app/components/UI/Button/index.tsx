export default function Button({ children }: any) {
  return (
    <button
      type="button"
      className="text-white bg-[#F15D51] hover:bg-[#00001A] font-medium  text-md w-[185px] h-[50px]"
    >
      {children}
    </button>
  );
}
