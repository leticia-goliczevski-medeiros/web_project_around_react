import '../blocks/gallery.css';
import deleteIcon from '../images/delete-icon.png'
import heartIcon from '../images/heart-icon.png'
import heartIconAcive from '../images/heart-icon-active.png'

export default function Gallery({cards}) {
  return (
    <section className="gallery">
      <ul className="gallery__cards">
      {cards.map(card=> (
        <li className="gallery__card" key={card._id}>
          <img className="gallery__card-image" src={card.link} />
          <img
            className="gallery__delete-icon"
            src={deleteIcon}
            alt="Ícone de excluir."
          />
          <div className="gallery__card-info">
            <h2 className="gallery__card-title">{card.name}</h2>
            <div className="gallery__like-info">
              <img
                className="gallery__heart-icon"
                src={card.likes.length? heartIconAcive: heartIcon}
                alt="Ícone de coração."
              />
              <p className="gallery__like-count">{card.likes.length}</p>
            </div>
          </div>
        </li>
      ))}

      </ul>
    </section>
  )
}