import React from 'react'
import Layout from '../components/Layout'

function Services() {
  return (

    <Layout>
        <h1> Services</h1>

        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Service</th>
      <th scope="col">Fees</th>
      <th scope="col">Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Electric Bike convesion</td>
      <td> $100 </td>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Bike repair</td>
      <td>On condition</td>
      <td>Yes</td>
    </tr>
    
  </tbody>
</table>
    </Layout>
   
  )
}

export default Services