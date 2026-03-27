'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const regions = [
  { flag:'🇺🇸', name:'North America', countries:'USA, Canada, Mexico — Auto shops, retail chains, janitorial suppliers' },
  { flag:'🇩🇪', name:'Europe', countries:'Germany, UK, France, Netherlands, Italy — Industrial & hospitality sectors' },
  { flag:'🇦🇪', name:'Middle East', countries:'UAE, Saudi Arabia, Qatar, Kuwait — Hotels, hospitals, distributors' },
  { flag:'🌏', name:'Asia Pacific', countries:'Australia, Singapore, Malaysia — Wholesale distributors & importers' },
]

export default function ExportMarkets() {
  return (
    <section className="bg-[#0a0a0a] section-pad">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="Global Reach"
          title="Exporting to 45+ Countries"
          subtitle="Our products reach buyers on every continent."
          dark
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* SVG Map */}
          <div className="bg-gold/4 border border-gold/12 rounded p-8 lg:p-12">
            <svg viewBox="0 0 800 420" className="w-full opacity-70">
              {/* Continent ellipses */}
              <ellipse cx="185" cy="165" rx="105" ry="80" stroke="rgba(201,168,76,0.25)" fill="rgba(201,168,76,0.05)" strokeWidth="1.5" />
              <ellipse cx="235" cy="295" rx="65" ry="85" stroke="rgba(201,168,76,0.25)" fill="rgba(201,168,76,0.05)" strokeWidth="1.5" />
              <ellipse cx="410" cy="140" rx="60" ry="55" stroke="rgba(201,168,76,0.60)" fill="rgba(201,168,76,0.12)" strokeWidth="2" />
              <ellipse cx="415" cy="270" rx="70" ry="90" stroke="rgba(201,168,76,0.20)" fill="rgba(201,168,76,0.04)" strokeWidth="1.5" />
              <ellipse cx="500" cy="195" rx="50" ry="40" stroke="rgba(201,168,76,0.65)" fill="rgba(201,168,76,0.12)" strokeWidth="2" />
              <ellipse cx="580" cy="175" rx="90" ry="70" stroke="rgba(201,168,76,0.30)" fill="rgba(201,168,76,0.06)" strokeWidth="1.5" />
              <ellipse cx="660" cy="320" rx="60" ry="45" stroke="rgba(201,168,76,0.20)" fill="rgba(201,168,76,0.04)" strokeWidth="1.5" />

              {/* Dashed connector lines */}
              <line x1="548" y1="185" x2="155" y2="155" stroke="#c9a84c" opacity="0.2" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="548" y1="185" x2="400" y2="135" stroke="#c9a84c" opacity="0.2" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="548" y1="185" x2="505" y2="195" stroke="#c9a84c" opacity="0.2" strokeDasharray="4 4" strokeWidth="1" />

              {/* Export dots */}
              <motion.g
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <circle cx="548" cy="185" r="7" fill="#c9a84c" opacity="0.9" />
                <circle cx="548" cy="185" r="14" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.4" />
              </motion.g>
              <circle cx="155" cy="155" r="5" fill="#c9a84c" opacity="0.7" />
              <circle cx="400" cy="135" r="5" fill="#c9a84c" opacity="0.7" />
              <circle cx="505" cy="195" r="5" fill="#c9a84c" opacity="0.7" />

              {/* Label */}
              <text x="548" y="215" textAnchor="middle" fill="rgba(201,168,76,0.8)" fontSize="10" fontFamily="DM Sans">
                Karachi, PK
              </text>
            </svg>
            <p className="text-center text-xs text-white/30 mt-4 tracking-wide">
              Our products reach buyers on every continent
            </p>
          </div>

          {/* Regions list */}
          <div>
            {regions.map((region) => (
              <div
                key={region.name}
                className="flex gap-5 items-start pb-7 mb-7 border-b border-gold/10 last:border-0 last:pb-0 last:mb-0"
              >
                <span className="text-3xl leading-none mt-0.5">{region.flag}</span>
                <div>
                  <h4 className="font-serif text-gold text-lg font-medium mb-1">
                    {region.name}
                  </h4>
                  <p className="text-[0.82rem] text-white/50 font-light leading-relaxed">
                    {region.countries}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
