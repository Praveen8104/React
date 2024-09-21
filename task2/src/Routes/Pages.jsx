import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

function Contact() {
  const {id} = useParams;
  console.log(id);
  return (
    <div>
      Contact
    </div>
  )
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
      </div>
      <Outlet />
      <h2>Footer</h2>
    </div>
  )
}
function About() {
  return (
    <div>
      About
    </div>
  )
}

export { Home, Contact, About }
