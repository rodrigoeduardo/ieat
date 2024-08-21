import React, { useState } from 'react';

const CommentItem = ({ comment, editComment, deleteComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.comentario);

  const handleEdit = () => {
    editComment(comment.id, { comentario: editText });
    setIsEditing(false);
  };

  return (
    <li className="list-group-item">
      {isEditing ? (
        <div>
          <textarea
            className="form-control mb-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEdit} className="btn btn-success">Salvar</button>
          <button onClick={() => setIsEditing(false)} className="btn btn-danger ml-2">Cancelar</button>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5>{comment.id}</h5>
            <p>{comment.comentario}</p>
          </div>
          <div className="d-flex">
            <button onClick={() => setIsEditing(true)} className="btn btn-light">
              <img src="imgs/editar.png" alt="Editar" style={{ width: '20px' }} />
            </button>
            <button onClick={() => deleteComment(comment.id)} className="btn btn-light ml-2">
              <img src="imgs/excluir.png" alt="Excluir" style={{ width: '20px' }} />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default CommentItem;
