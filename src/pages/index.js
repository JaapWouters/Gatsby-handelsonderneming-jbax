import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
        <h2>Personenauto's</h2>
          <h3>Landbouwvoertuigen</h3>
          <p>Handel en reparatie van personen-, bedrijfs- en landbouwvoertuigen.</p>
          <Link className={styles.btn} to="/aanbod">Voertuigen die ik aanbied</Link>
        </div>
        <img src="/carfix2.png" alt="site banner" style={{maxWidth: "130%"}}/>
      </section>
    </Layout>
  )
}