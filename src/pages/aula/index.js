import React, { useState, useEffect } from 'react';
import QuestionForm from '../../components/QuestionForm';
import CommentList from '../../components/CommentList';
import AulaView from '../../components/AulaView';

function Aula() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('https://comentarios-ieat-default-rtdb.firebaseio.com/coments.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const commentsArray = Object.keys(data).map(key => ({
        id: key,
        id_do_aluno: data[key].id_do_aluno,
        comentario: data[key].comentario,
      }));
      setComments(commentsArray);
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  };

  const addComment = async (comment) => {
    try {
      const response = await fetch('https://comentarios-ieat-default-rtdb.firebaseio.com/coments.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      fetchComments();
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  const editComment = async (id, updatedComment) => {
    try {
      const response = await fetch(`https://comentarios-ieat-default-rtdb.firebaseio.com/coments/${id}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedComment),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      fetchComments();
    } catch (error) {
      console.error('Failed to edit comment:', error);
    }
  };

  const deleteComment = async (id) => {
    try {
      const response = await fetch(`https://comentarios-ieat-default-rtdb.firebaseio.com/coments/${id}.json`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      fetchComments();
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  };

  return (
    <>
      <AulaView />

      <div className='container'>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="geral-tab" data-bs-toggle="tab" href="#geral" role="tab"
              aria-controls="geral" aria-selected="true">Visão geral</button>
            <button class="nav-link" id="observ-tab" data-bs-toggle="tab" href="#observ" role="tab"
              aria-controls="observ" aria-selected="false">Observações</button>
            <button class="nav-link" id="question-tab" data-bs-toggle="tab" href="#question" role="tab"
              aria-controls="question" aria-selected="false">Perguntas</button>
          </div>
        </nav>


        <div class="tab-content">
          <div class="tab-pane fade show active" id="geral" role="tabpanel" aria-labelledby="geral-tab">
            <h3>Curso de Análise de Redes - redes de pequeno mundo, círculos sociais ou redes sem escala</h3>
            <h4>Descrição</h4>
            <p>A análise de rede - assim como sua prima próxima, análise de tráfego -, tem uso significativo em
              atividades de inteligência e contra-inteligência, envolvendo interceptação de comunicações em redes
              militares e terroristas, mas também pode ser usada para analisar difusão de epidemias.</p>
          </div>
          <div class="tab-pane fade" id="observ" role="tabpanel" aria-labelledby="observ-tab">
            <div class="d-flex align-items-start mb-2">
              <img src="imgs/prof.png" alt="Professor Icon" class="user-icon me-2" />
              <div>
                <h5 class="mb-1">Professor</h5>
                <p class="mb-1">Esta é uma observação do professor sobre o conteúdo da aula. Preste atenção aos
                  detalhes mencionados.</p>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="question" role="tabpanel" aria-labelledby="question-tab">
            <QuestionForm addComment={addComment} />
            <CommentList comments={comments} editComment={editComment} deleteComment={deleteComment} />
          </div>
        </div>
      </div>

    </>
  );
};

export default Aula;
