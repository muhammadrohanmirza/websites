interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  dark?: boolean
  center?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <div className={`eyebrow ${center ? 'justify-center' : ''}`}>
        <div className="eyebrow-line" />
        <span className="eyebrow-text">{eyebrow}</span>
      </div>
      <h2
        className={`font-serif mt-2 ${dark ? 'text-white' : 'text-black'}`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 font-light max-w-md ${
            dark ? 'text-white/50' : 'text-gray-600'
          } ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
