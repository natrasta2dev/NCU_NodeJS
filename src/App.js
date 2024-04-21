import React, { useState, useEffect } from "react";
import "./App.css";
import NotesContainer from "./components/NotesContainer";
import NoteEditor from "./components/NoteEditor";
import Loader from "./components/Loader";
import Login from "./components/Login";  // Assurez-vous que ce composant est bien importé
import Register from "./components/Register";  // Assurez-vous que ce composant est bien importé
import { useNotes } from "./components/useNotes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchData } from "./components/apiUtils";

const App = () => {
  const {
    notes,
    loading,
    selectedNote,
    showAllNotes,
    handleShowAllNotes,
    handleCreateNewNote,
    handleNoteClick,
    handleUpdateNote,
    handleDeleteNote,
    handlePinNote,
    handleToggleNoteCompletion,
  } = useNotes();

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  const fetchUserProfile = async () => {
    try {
      const profileData = await fetchData("/profile");
      console.log("User profile data:", profileData);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  const addUser = newUser => {
    console.log("Adding user:", newUser);
    setUser(newUser);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header className="App-header">
        <h1>Notes</h1>
        {user ? (
          <>
            <div className="status-bar">User: {user.name}</div>
            <button onClick={toggleDarkMode} className={`mode-toggle-button ${isDarkMode ? "dark-mode" : "light-mode"}`}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <ToastContainer position="bottom-right" />
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className="form-container">
                  <form onSubmit={e => {
                    e.preventDefault();
                    const { title, content } = e.target;
                    handleCreateNewNote(title.value, content.value);
                    e.target.reset();
                  }}>
                    <input type="text" name="title" placeholder="Titre" required />
                    <textarea name="content" placeholder="Contenu" className="resize_none" required></textarea>
                    <button type="submit">Créer une note</button>
                  </form>
                </div>
                <NotesContainer
                  notes={notes}
                  showAllNotes={showAllNotes}
                  onNoteClick={handleNoteClick}
                  onShowAllNotes={handleShowAllNotes}
                  onPinNote={handlePinNote}
                  onToggleNoteCompletion={handleToggleNoteCompletion}
                />
                {selectedNote && (
                  <NoteEditor
                    selectedNote={selectedNote}
                    onUpdateNote={handleUpdateNote}
                    onDeleteNote={handleDeleteNote}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <>
            <Login setUser={setUser} />
            <Register addUser={addUser} />
          </>
        )}
      </header>
    </div>
  );
};

export default App;
