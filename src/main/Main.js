import ReactMarkdown from "react-markdown";
import Button from 'react-bootstrap/Button';

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">Aucune note selectionée</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          
          id="title"
          placeholder="Titre de la note"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Veuillez rentrer votre note"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
         
        <Button variant="outline-success">Enregistrer</Button>{' '}
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
