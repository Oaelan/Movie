import { ButtonHTMLAttributes } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
  onClick: () => void;
}

export default function SliderButton({
  direction,
  onClick,
}: SliderButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        "w-10 h-10 flex items-center justify-center bg-secondary hover:bg-tertiary border border-border p-2 rounded-full transition-colors duration-200"
      }
    >
      {direction === "left" ? (
        <IoChevronBack className="w-6 h-6 text-text-secondary" />
      ) : (
        <IoChevronForward className="w-6 h-6 text-text-secondary" />
      )}
    </button>
  );
}
