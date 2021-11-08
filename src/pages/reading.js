// Import 
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Define 
const AboutPage = () => {
  return (
    <Layout pageTitle="Reading List">
      <p>A non-exhuastive list of content I've found interesting lately.  Mileage may vary.</p>
      <h2>Media</h2>
      <ul>
        <li>Slate Star Codex (< Link to="https://slatestarcodex.com/top-posts/">blog</Link>) [There is a new blog from the same blogger, but the top posts from the classic SSC are some of my favorites]</li>
        <li>Hardcore Hitory with Dan Carlin (< Link to="https://www.dancarlin.com/">podcast</Link>)</li>
        <li>Great Art Explained (YouTube <Link to="https://www.youtube.com/channel/UCePDFpCr78_qmVtpoB1Axaw">channel</Link>)</li>
        
      </ul>
      <h2>Fiction</h2>
      <ul> 
        <li>War and Peace*</li>
        <li>Catcher in the Rye</li>
        <li>Of Mice and Men</li>
        <li>Desperate Characters</li>
        <li>Catch 22</li>
        <li>Infinte Jest</li>
        <li>Middlemarch*</li>
        <li>Jane Eyre</li>
        <li>Atlas Shrugged</li>
        <li>Faust</li>
        <li>On the Road</li>
        <li>100 Years of Solitude</li>
      </ul>
      <p>* indicates in progress</p>
    </Layout>
  )
}

// Export 
export default AboutPage