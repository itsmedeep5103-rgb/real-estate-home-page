import { useEffect, useState } from 'react'
import { fetchAgents } from '../mocks/index.js'

export default function Agents() {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    let active = true
    fetchAgents().then((data) => {
      if (active) setAgents(data)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <section className="agents" aria-labelledby="agents-heading">
      <div className="container">
        <h2 id="agents-heading">Meet our agents</h2>
        <p className="section-intro">
          Talk to a local expert who knows Jaipur inside out.
        </p>
        <ul className="agent-grid">
          {agents.map((agent) => (
            <li key={agent.id} className="agent-card">
              <img src={agent.image} alt={agent.alt} loading="lazy" />
              <h3>{agent.name}</h3>
              <p className="agent-role">{agent.role}</p>
              <p className="agent-contact">{agent.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
