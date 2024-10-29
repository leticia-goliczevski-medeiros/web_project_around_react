import '../blocks/gallery.css';
import deleteIcon from '../images/delete-icon.png'

export default function Gallery() {
  return (
    <section className="gallery">
      <ul className="gallery__cards">
        <template id="card-template">
          <li className="gallery__card">
            <img className="gallery__card-image" src=" " />
            <img
              className="gallery__delete-icon"
              src={deleteIcon}
              alt="Ícone de excluir."
            />
            <div className="gallery__card-info">
              <h2 className="gallery__card-title">Título</h2>
              <div className="gallery__like-info">
                <img
                  className="gallery__heart-icon"
                  src=""
                  alt="Ícone de coração."
                />
                <p className="gallery__like-count"></p>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </section>
  )
}