// Import 
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Define 
const AboutPage = () => {
  return (
    <Layout pageTitle="Coding Projects">
      <p>Current project is bulding out this web site- more to come.</p>

      <h2>Languages</h2>
        <ul>
          <li>C# + .NET</li>
          <li>React</li>
          <li>Typescript</li>
          <li>< Link to="https://en.wikipedia.org/wiki/MUMPS">MUMPS</Link> + Cache</li> 
          <li>SQL</li>
          <li>JavaScript</li>
          <li>HTML + CSS</li>
          <li>Java</li>
          <li>Python</li>
          <li>C</li>
        </ul>
        <p>In order roughly by knowledge level, descending</p>
    </Layout>
  )
}

// Export 
export default AboutPage