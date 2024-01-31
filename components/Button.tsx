"use client"
import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon,variant, full }: ButtonProps) => {
  return (
    <button
        className={`px-5 py-3 flex items-center justify-center gap-1 border ${variant} w-full`}
        type={type}
    >
      {icon && <Image src={icon} alt={title} width={28} height={28} className="block" />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button