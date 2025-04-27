import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import WhyUs from './Components/WhyUs'
import Products from './Components/Products'
import Testimonal from './Components/Testimonal'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import Cart from './Components/Cart'

const App = () => {

  const faqs = [
    {
      "question": "What makes FashionVista products unique?",
      "answer": "At FashionVista, we focus on delivering exclusive designs crafted from high-quality materials. Our collections combine timeless elegance with the latest trends to keep your wardrobe fresh and stylish."
    },
    {
      "question": "Do you offer international shipping?",
      "answer": "Yes, we offer fast and reliable international shipping to multiple countries. Shipping charges and delivery times may vary based on your location."
    },
    {
      "question": "How can I track my order?",
      "answer": "Once your order is shipped, you’ll receive a tracking number via email. You can use it to track your shipment directly from our website or the courier’s tracking page."
    },
    {
      "question": "What is your return policy?",
      "answer": "We offer a 14-day return policy for unused and unworn items. Please ensure products are returned with original tags and packaging. For detailed instructions, visit our Returns & Exchanges page."
    },
    {
      "question": "Can I change or cancel my order after placing it?",
      "answer": "If you need to change or cancel your order, please contact our support team within 2 hours of placing the order. Once the order is processed, changes cannot be made."
    },
    {
      "question": "Are your sizes true to standard measurements?",
      "answer": "Yes, our sizing follows standard measurements. However, we recommend checking the size guide available on each product page for the best fit."
    },
    {
      "question": "How do I contact customer service?",
      "answer": "You can reach out to our customer service team via the Contact Us page, by email at support@fashionvista.com, or through our live chat available during business hours."
    }
  ]
  const [showCart, setShowCart] = useState(false)
  return (
  <>
    <Navbar setShowCart={setShowCart} />
    <Hero/>
    <WhyUs/>
    <Stats/>
    <Products/>
    <Testimonal/>
    <FAQ heading={"Frequently Asked, Expertly Answered"} subheading={"Everything You Need to Know About FashionVist"} faqs={faqs} />
    <Footer />
    <Cart showCart={showCart} setShowCart={setShowCart} />
    </>      
  )
}

export default App