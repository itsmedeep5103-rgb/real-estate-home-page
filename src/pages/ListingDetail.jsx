import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchListings, fetchSite } from '../mocks/index.js'

export default function ListingDetail() {
  const { id } = useParams()
  const [listing, setListing] = useState(undefined) // undefined = loading, null = not found
  const [site, setSite] = useState(null)

  useEffect(() => {
    let active = true

    fetchListings().then((all) => {
      if (active) setListing(all.find((l) => String(l.id) === String(id)) ?? null)
    })

    fetchSite().then((data) => {
      if (active) setSite(data)
    })

    return () => {
      active = false
    }
  }, [id])

  // Accessible page title
  useEffect(() => {
    if (listing && site) {
      document.title = `${listing.title} — ${site.name}`
    }
  }, [listing, site])

  if (listing === undefined) {
    return (
      <div className="container detail-page">
        <p role="status">Loading listing…</p>
      </div>
    )
  }

  if (listing === null) {
    return (
      <div className="container detail-page">
        <h1>Listing not found</h1>
        <p>Sorry, we couldn&rsquo;t find that property.</p>
        <Link className="btn" to="/">
          Back to listings
        </Link>
      </div>
    )
  }

  const priceLabel = `\u20B9${listing.price.toLocaleString('en-IN')}`
  const statusLabel = listing.type === 'rent' ? 'For Rent' : 'For Sale'
  const monthlyNote = listing.type === 'rent' ? ' per month' : ''

  return (
    <article className="detail-page container" aria-labelledby="detail-title">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <span>{listing.title}</span>
      </nav>

      <h1 id="detail-title">{listing.title}</h1>
      <p className="detail-location">
        {listing.area}, {listing.city}
      </p>

      <img
        className="detail-image"
        src={listing.image}
        alt={listing.alt}
      />

      <div className="detail-summary">
        <p className="listing-badge">{statusLabel}</p>
        <p className="detail-price">
          {priceLabel}
          {monthlyNote}
        </p>
        <ul className="listing-meta">
          <li>{listing.bedrooms} Beds</li>
          <li>{listing.bathrooms} Baths</li>
          <li>{listing.areaSqFt.toLocaleString('en-IN')} sq ft</li>
        </ul>
      </div>

      <section aria-labelledby="detail-desc-heading">
        <h2 id="detail-desc-heading">About this property</h2>
        <p>{listing.description}</p>
      </section>

      <section aria-labelledby="detail-features-heading">
        <h2 id="detail-features-heading">Features</h2>
        <ul className="feature-list">
          {listing.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <Link className="btn btn-secondary" to="/">
        Back to listings
      </Link>
    </article>
  )
}
