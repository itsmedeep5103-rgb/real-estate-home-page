import { useEffect, useState } from 'react'
import { fetchTestimonials } from '../mocks/index.js'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    let active = true
    fetchTestimonials().then((data) => {
      if (active) setTestimonials(data)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading">What our clients say</h2>
        <ul className="testimonial-grid">
          {testimonials.map((item) => (
            <li key={item.id} className="testimonial-card">
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
