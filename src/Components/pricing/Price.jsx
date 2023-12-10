import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import Title from "../common/title/Title"

const Price = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
      <Title title="Our Pricing" subtitle="Pricing & Packages"/>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Price