// Ornamento decorativo dourado: linha fina com losango central estilizado.
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70" />
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className="text-gold"
      >
        <path
          d="M9 0.5 11.5 6.5 17.5 9 11.5 11.5 9 17.5 6.5 11.5 0.5 9 6.5 6.5Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  )
}
