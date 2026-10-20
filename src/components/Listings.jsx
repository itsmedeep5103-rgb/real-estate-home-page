import { useEffect, useState } from 'react'
import ListingCard from './ListingCard.jsx'
import { fetchListings } from '../mocks/index.js'

export default function Listings() {
  const [listings, setListings] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let active = true

    fetchListings()
      .then((data) => {
        if (active) {
          setListings(data)
          setStatus('ready')
        }
      })
      .catch(() => {
        if (active) setStatus('error')
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <section className="listings" aria-labelledby="listings-heading">
      <div className="container">
        <h2 id="listings-heading">Featured Properties in Jaipur</h2>
        <p className="section-intro">
          Browse a selection of homes currently available to buy or rent.
        </p>

        {status === 'loading' && <p role="status">Loading listings…</p>}
        {status === 'error' && (
          <p role="alert">Sorry, we couldn&rsquo;t load the listings. Please try again.</p>
        )}

        {status === 'ready' && (
          <ul className="listing-grid">
            {listings.map((listing) => (
              <li key={listing.id}>
                <ListingCard listing={listing} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
