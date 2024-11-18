import '../blocks/gallery.css';
import Card from './Card.jsx'


export default function Gallery({cards, onCardClick}) {
  return (
    <section className="gallery">
      <ul className="gallery__cards">
      {cards.map(card=> (
        <Card card={card} key={card._id} onCardClick={onCardClick}/>
      ))}

      </ul>
    </section>
  )
}