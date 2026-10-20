import { useEffect, useState } from 'react'
import { fetchSite } from '../mocks/index.js'

export default function Header() {
  const [site, setSite] = useState(null)

  useEffect(() => {
    let active = true
    fetchSite().then((data) => {
      if (active) setSite(data)
    })
    return () => {
      active = false
    }
  }, [])

  const navLinks = site?.navLinks ?? []

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          {site?.name ?? ''}
        </a>
        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
