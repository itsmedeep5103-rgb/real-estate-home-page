import { useEffect, useState } from 'react'
import { fetchSite } from '../mocks/index.js'

export default function Footer() {
  const [site, setSite] = useState(null)
  const year = new Date().getFullYear()

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
    <footer className="site-footer">
      <div className="container footer-inner">
        <section className="footer-col" aria-labelledby="footer-brand-heading">
          <h2 id="footer-brand-heading" className="footer-heading">
            {site?.name ?? ''}
          </h2>
          <address>
            {site?.address ?? ''}
            <br />
            Phone: {site?.phone ?? ''}
            <br />
            Email: {site?.email ?? ''}
          </address>
        </section>

        <nav className="footer-col" aria-labelledby="footer-links-heading">
          <h2 id="footer-links-heading" className="footer-heading">
            Quick links
          </h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="copyright">
        &copy; {year} {site?.name ?? ''}. All rights reserved.
      </p>
    </footer>
  )
}
