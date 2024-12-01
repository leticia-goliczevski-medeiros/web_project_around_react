import '../blocks/page.css'
import { useEffect, useState } from 'react';
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx'
import NewCard from './Main/components/Popup/NewCard/NewCard.jsx'
import EditProfile from './Main/components/Popup/EditProfile/EditProfile.jsx'
import EditAvatar from './Main/components/Popup/EditAvatar/EditAvatar.jsx'
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(()=> {
    api
      .getUser()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((userObject) => {
        setCurrentUser(userObject)
      }).catch((error) => {
        console.log(error);
      });
  }, [])

  function handleUpdateUser(user) {
    api.saveProfileInfo(user).then((res)=> {if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);}).then((userObject)=> setCurrentUser(userObject))
  };

  function handleUpdateAvatar(avatarLink) {
    api.updateProfilePicture(avatarLink).then((res)=> {if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);}).then((userObject)=> setCurrentUser(userObject))
  };

  const editProfilePopup = { title: "Edit profile", children: <EditProfile onClosePopup={handleClosePopup}/> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar onClosePopup={handleClosePopup}/> };

  const [cards, setCards] = useState([])
 
  function handleCardLike(card) {
    if (card.isLiked) {
      api
      .removeCardLike(card._id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((updatedCard) => {
        setCards((cards) => {
          return cards.map((currentCard) => {
            return currentCard._id === card._id ? updatedCard : currentCard
          })
        })
    })
      .catch((error) => {
        console.log(error);
      });
    } else {
      api
      .addCardLike(card._id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((updatedCard) => {
        setCards((cards) => {
          return cards.map((currentCard) => {
            return currentCard._id === card._id ? updatedCard : currentCard
          })
        })
    })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .then(() => {
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function handleAddPlaceSubmit(name, link) {
    api.addCard(name, link).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .then((addedCard) => {
      setCards([addedCard, ...cards])
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const newCardPopup = { title: "New card", children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} onClosePopup={handleClosePopup}/> };

  useEffect(()=> {
      api
      .getInitialCards()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((cardsList) => {
        setCards(cardsList);
      })
      .catch((error) => {
        console.log(error);
        setCards([]);
      });
  }, [])
  
  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
      <div className="App">
        <div className="page">
          <Header />
          <Main 
          onOpenPopup={handleOpenPopup} 
          onClosePopup={handleClosePopup} 
          popup={popup} 
          newCardPopup={newCardPopup} 
          editAvatarPopup={editAvatarPopup} 
          editProfilePopup={editProfilePopup} 
          cards={cards} 
          onCardLike={handleCardLike} 
          onCardDelete={handleCardDelete} />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
