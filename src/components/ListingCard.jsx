import { Link } from 'react-router-dom'

export default function ListingCard({ listing }) {
  const priceLabel = `\u20B9${listing.price.toLocaleString('en-IN')}`
  const statusLabel = listing.type === 'rent' ? 'For Rent' : 'For Sale'

  return (
    <article className="listing-card">
      <img src={listing.image} alt={listing.alt} loading="lazy" />
      <div className="listing-body">
        <p className="listing-badge">{statusLabel}</p>
        <h3 className="listing-title">{listing.title}</h3>
        <p className="listing-price">{priceLabel}</p>
        <p className="listing-location">
          {listing.area}, {listing.city}
        </p>
        <ul className="listing-meta">
          <li>{listing.bedrooms} Beds</li>
          <li>{listing.bathrooms} Baths</li>
          <li>{listing.areaSqFt.toLocaleString('en-IN')} sq ft</li>
        </ul>
        <Link className="btn" to={`/listing/${listing.id}`}>
          View details
        </Link>
      </div>
    </article>
  )
}
