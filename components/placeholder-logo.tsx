interface PlaceholderLogoProps {
  letter: string
  size?: number
  className?: string
}

export function PlaceholderLogo({ letter, size = 40, className = "" }: PlaceholderLogoProps) {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
  ]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div
      className={`flex items-center justify-center rounded-full ${randomColor} ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <span className="text-white font-bold text-xl">{letter.toUpperCase()}</span>
    </div>
  )
}

