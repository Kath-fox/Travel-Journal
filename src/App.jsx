import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Cards'
import data from './data'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id} 
        item={item}
      />
    )
  })
  
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
