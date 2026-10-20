import { useEffect, useState } from 'react'
import { fetchHero, fetchStats } from '../mocks/index.js'

export default function Hero() {
  const [hero, setHero] = useState(null)
  const [stats, setStats] = useState([])

  useEffect(() => {
    let active = true
    fetchHero().then((data) => {
      if (active) setHero(data)
    })
    fetchStats().then((data) => {
      if (active) setStats(data)
    })
    return () => {
      active = false
    }
  }, [])

  if (!hero) return null

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 id="hero-heading">{hero.headline}</h1>
          <p className="hero-sub">{hero.subheadline}</p>
          <div className="hero-actions">
            <a className="btn" href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </a>
            <a className="btn btn-secondary" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <dl className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.id} className="stat">
              <dd className="stat-value">{stat.value}</dd>
              <dt className="stat-label">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
