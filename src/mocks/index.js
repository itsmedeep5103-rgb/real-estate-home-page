// Central mock API.
// Every mock entity has a `fetch*()` function that returns a Promise with a
// small delay, mimicking a real backend. To go live, replace the body of each
// function with a `fetch('/api/...')` call — the components do not change.

import { site } from './site.js'
import { hero } from './hero.js'
import { listings } from './listings.js'
import { agents } from './agents.js'
import { testimonials } from './testimonials.js'
import { stats } from './stats.js'

const LATENCY_MS = 350

const delay = (value, ms = LATENCY_MS) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms))

export const fetchSite = () => delay(site)
export const fetchHero = () => delay(hero)
export const fetchListings = () => delay(listings)
export const fetchAgents = () => delay(agents)
export const fetchTestimonials = () => delay(testimonials)
export const fetchStats = () => delay(stats)
