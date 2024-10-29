import ProfileSection from './ProfileSection.js';
import Gallery from './Gallery.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddCardPopup from './AddCardPopup.js';
import ImagePopup from './ImagePopup.js';
import PopupWithConfirmation from './PopupWithConfirmation.js';
import UpdateProfilePicturePopup from './UpdateProfilePicturePopup.js';
import { useEffect } from 'react';

export default function Main() {
  return (
    <main className='content'>
      <ProfileSection />
      <Gallery />
      <EditProfilePopup />
      <AddCardPopup />
      <ImagePopup />
      <PopupWithConfirmation />
      <UpdateProfilePicturePopup />
    </main>
  )
}