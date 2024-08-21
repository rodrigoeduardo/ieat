function AulaView() {
    return (
        <div class="video-container">
        <div class="video-player embed-responsive embed-responsive-21by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8" frameborder="0"
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
    )
} export default AulaView