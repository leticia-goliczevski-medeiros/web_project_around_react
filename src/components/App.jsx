import '../blocks/page.css'
import { useState } from 'react';
import Header from './Header.jsx'
import Main from './Main.jsx';
import Footer from './Footer.jsx'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  function handleImagePopupClick() {
    setIsImagePopupOpen(!isImagePopupOpen)
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
    setSelectedCard({})
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    handleImagePopupClick()
  }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main 
        onEditProfileClick={handleEditProfileClick} 
        onAddPlaceClick={handleAddPlaceClick} 
        onEditAvatarClick={handleEditAvatarClick} 
        onClose={closeAllPopups} 
        onCardClick={handleCardClick} 
        selectedCard={selectedCard} 
        isImagePopupOpen={isImagePopupOpen} 
        isEditProfilePopupOpen={isEditProfilePopupOpen} 
        isAddPlacePopupOpen={isAddPlacePopupOpen} 
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
