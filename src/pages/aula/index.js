import './index.css'

export default function Aula() {
    return (
        <>
            <div class="video-container">
                <div class="video-player embed-responsive embed-responsive-21by9">
                    <iframe class="embed-responsive-item" title="Aula" src="https://www.youtube.com/embed/zpOULjyy-n8" frameborder="0"
                        gesture="media" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>

                <div id="accordion" class="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne">
                                    Módulo 1: Introdução à Análise de Redes
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <ul class="list-unstyled">
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>O que são Redes Complexas?</span>
                                        <span class="duration">10:00</span>
                                    </li>
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Teoria dos Grafos Aplicada</span>
                                        <span class="duration">12:30</span>
                                    </li>
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Análise Estrutural de Redes</span>
                                        <span class="duration">15:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    Módulo 2: Métricas e Medidas em Redes
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                <ul class="list-unstyled">
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Centralidade e Prestígio</span>
                                        <span class="duration">20:00</span>
                                    </li>
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Coeficientes de Clusterização</span>
                                        <span class="duration">25:00</span>
                                    </li>
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Medidas de Centralidade em Grafos</span>
                                        <span class="duration">30:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree">
                                    Módulo 3: Aplicações da Análise de Redes
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                <ul class="list-unstyled">
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Redes Sociais e Interacionais</span>
                                        <span class="duration">20:00</span>
                                    </li>
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Redes em Epidemiologia</span>
                                        <span class="duration">25:00</span>
                                    </li>
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Redes Biológicas e de Cooperação</span>
                                        <span class="duration">30:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"
                                    aria-expanded="false" aria-controls="collapseFour">
                                    Módulo 4: Ferramentas Avançadas em Análise de Redes
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="card-body">
                                <ul class="list-unstyled">
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Simulação de Redes Complexas</span>
                                        <span class="duration">20:00</span>
                                    </li>
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Modelagem de Redes Dinâmicas</span>
                                        <span class="duration">25:00</span>
                                    </li>
                                    <li class="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                        <span>Análise de Redes Temporais</span>
                                        <span class="duration">30:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
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

                        <form id="question-form">
                            <div class="form-group">
                                <label for="question-text">Sua Pergunta:</label>
                                <textarea class="form-control" id="question-text" rows="3" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar Pergunta</button>
                        </form>
                        <div class="d-flex justify-content-center"><form id="edicao_bot"></form></div>
                        <ul id="questions-list" class="list-group mt-3"></ul>
                    </div>
                </div>
            </div>
        </>
    )
}