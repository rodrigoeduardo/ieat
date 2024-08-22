import React, { useState, useEffect } from "react";
import "./index.css";
import { useAuthContext } from "../../contexts/useAuthContext";

const Cursos = () => {
  const { user, isLoggedIn } = useAuthContext();
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id, name, price) => {
    setCart((prevCart) => {
      const existingCourse = prevCart.find((item) => item.id === id);
      let updatedCart;

      if (existingCourse) {
        updatedCart = prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...prevCart, { id, name, price, quantity: 1 }];
      }

      alert("Curso adicionado ao carrinho");
      return updatedCart;
    });
  };

  return (
    <>
      <h1 className="text-center">CURSOS</h1>
      <div className="card-deck d-flex justify-content-center flex-wrap">
        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="1"
          data-name="ANÁLISE DE REDES"
          data-price="10.00"
        >
          <img
            className="card-img-top"
            src="./imgs/rede.jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">ANÁLISE DE REDES</h5>
            <p className="card-text">
              O curso de "Análise de Redes" oferece uma visão aprofundada sobre
              as estruturas complexas e interconectadas que permeiam diversos
              sistemas, como redes sociais, de comunicação e de transporte. Ao
              explorar conceitos fundamentais e técnicas avançadas de análise,
              os alunos desenvolvem habilidades essenciais para compreender e
              interpretar padrões, identificar nós influentes e entender
              dinâmicas de fluxo e interação em diferentes contextos. Com um
              enfoque multidisciplinar, o curso capacita os participantes a
              aplicarem os conhecimentos adquiridos em áreas como sociologia,
              ciência política, computação e engenharia, contribuindo para a
              resolução de problemas complexos e a tomada de decisões
              informadas.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "1")
              }
              onClick={() => addToCart("1", "ANÁLISE DE REDES", 10.0)}
            >
              {user?.boughtCourses?.find((course) => course.id === "1")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="2"
          data-name="BIOINFORMÁTICA"
          data-price="12.00"
        >
          <img
            className="card-img-top"
            src="imgs/bioinfo.jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">BIOINFORMÁTICA</h5>
            <p className="card-text">
              O curso de Bioinformática é uma disciplina interdisciplinar que
              combina os princípios da biologia, da informática e da ciência da
              computação para estudar e analisar dados biológicos complexos. Os
              alunos desse curso exploram técnicas avançadas de análise de dados
              genômicos, proteômicos e metabolômicos, utilizando ferramentas
              computacionais e algoritmos específicos. Com uma demanda crescente
              na área da saúde, agronomia e biotecnologia, a Bioinformática
              oferece aos estudantes oportunidades de contribuir para avanços
              significativos na compreensão de processos biológicos e no
              desenvolvimento de novas terapias e tecnologias.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "2")
              }
              onClick={() => addToCart("2", "BIOINFORMÁTICA", 12.0)}
            >
              {user?.boughtCourses?.find((course) => course.id === "2")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="3"
          data-name="GERENCIAMENTO DE T.I"
          data-price="30.00"
        >
          <img
            className="card-img-top"
            src="imgs/gerenciamento_de_t.i_2.png"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">GERENCIAMENTO DE T.I</h5>
            <p className="card-text">
              O curso de Gerenciamento de Tecnologia da Informação (T.I.)
              oferece uma abordagem abrangente para capacitar profissionais a
              gerenciar eficientemente os recursos tecnológicos de uma
              organização. Ao combinar conceitos de gestão empresarial com
              conhecimentos técnicos específicos da área de T.I., os alunos
              desenvolvem habilidades essenciais para liderar equipes, tomar
              decisões estratégicas e garantir o alinhamento entre os objetivos
              de negócio e as soluções tecnológicas. Com um foco na aplicação
              prática de metodologias e ferramentas de gestão, o curso prepara
              os estudantes para enfrentar os desafios dinâmicos do mercado de
              trabalho atual.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "3")
              }
              onClick={() => addToCart("3", "GERENCIAMENTO DE T.I", 30.0)}
            >
              {user?.boughtCourses?.find((course) => course.id === "3")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="4"
          data-name="INTELIGÊNCIA ARTIFICIAL"
          data-price="24.00"
        >
          <img
            className="card-img-top"
            src="imgs/I.A..jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">INTELIGÊNCIA ARTIFICIAL</h5>
            <p className="card-text">
              O curso de Inteligência Artificial oferece uma abordagem dinâmica
              e inovadora para entender e aplicar conceitos avançados em
              tecnologia. Através de uma combinação de teoria e prática, os
              alunos exploram algoritmos de aprendizado de máquina, redes
              neurais, processamento de linguagem natural e muito mais. Com uma
              demanda crescente por profissionais qualificados nesta área, o
              curso prepara os alunos para enfrentar os desafios do mundo real e
              impulsionar avanços significativos na inteligência artificial.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "4")
              }
              onClick={() => addToCart("4", "INTELIGÊNCIA ARTIFICIAL", 24.0)}
            >
              {user?.boughtCourses?.find((course) => course.id === "4")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="5"
          data-name="INTERNET DAS COISAS"
          data-price="15.00"
        >
          <img
            className="card-img-top"
            src="imgs/internet_das_coisas.jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">INTERNET DAS COISAS</h5>
            <p className="card-text">
              O curso de "Internet das Coisas" oferece uma visão abrangente
              sobre a interconexão de dispositivos físicos por meio da internet,
              possibilitando a coleta e troca de dados em tempo real. Os alunos
              exploram conceitos fundamentais de IoT, como sensores, redes de
              comunicação e plataformas de análise de dados, capacitando-os a
              desenvolver soluções inovadoras para diversos setores, como saúde,
              agricultura, indústria e cidades inteligentes. Com uma abordagem
              prática e foco nas últimas tendências tecnológicas, o curso
              prepara os estudantes para enfrentar os desafios e aproveitar as
              oportunidades oferecidas pelo mundo conectado da IoT.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "5")
              }
              onClick={() => addToCart("5", "INTERNET DAS COISAS", 15.0)}
            >
              {user?.boughtCourses?.find((course) => course.id === "5")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="6"
          data-name="TECNOLOGIA E EDUCAÇÃO"
          data-price="6.00"
        >
          <img
            className="card-img-top"
            src="imgs/educacao.jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">TECNOLOGIA E EDUCAÇÃO</h5>
            <p className="card-text">
              O curso de "Tecnologia e Educação" oferece uma abordagem
              interdisciplinar, unindo os campos da tecnologia da informação e
              comunicação com os processos educacionais. Ao explorar as formas
              inovadoras de integração da tecnologia no ensino, os alunos
              adquirem habilidades essenciais para projetar, implementar e
              avaliar soluções tecnológicas voltadas para a melhoria da
              aprendizagem. Com foco na pesquisa e na prática pedagógica, o
              curso prepara profissionais aptos a enfrentar os desafios
              contemporâneos da educação digitalizada.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "6")
              }
              onClick={() => addToCart("6", "TECNOLOGIA E EDUCAÇÃO", 6.0)}
            >
              {user?.boughtCourses?.find((course) => course.id === "6")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="7"
          data-name="T.I SUSTENTÁVEL"
          data-price="7.00"
        >
          <img
            className="card-img-top"
            src="imgs/tech_folha.jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">T.I SUSTENTÁVEL</h5>
            <p className="card-text">
              O curso de "T.I. SustentáveL" visa capacitar profissionais de
              Tecnologia da Informação com competências voltadas para o
              desenvolvimento e implementação de soluções tecnológicas que
              promovam a sustentabilidade ambiental e social. Ao integrar
              conceitos de TI e práticas sustentáveis, os estudantes aprenderão
              a projetar sistemas e infraestruturas que reduzam o consumo de
              recursos naturais, minimizem impactos ambientais e contribuam para
              uma economia mais verde. Com um currículo inovador e focado em
              questões contemporâneas, o curso prepara os alunos para enfrentar
              os desafios da transformação digital de forma ética e responsável.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "7")
              }
              onClick={() => addToCart("7", "T.I SUSTENTÁVEL", 7.0)}
            >
              {user?.boughtCourses?.find((course) => course.id === "7")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="8"
          data-name="ENGENHARIA DA COMPUTAÇÃO"
          data-price="80.00"
        >
          <img
            className="card-img-top"
            src="imgs/eng_computacao.jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">ENGENHARIA DA COMPUTAÇÃO</h5>
            <p className="card-text">
              O curso de Engenharia da Computação é uma área multidisciplinar
              que combina conhecimentos de engenharia elétrica e ciência da
              computação para formar profissionais aptos a projetar e
              desenvolver sistemas computacionais. Com uma sólida base em
              matemática, física e programação, os estudantes aprendem a
              projetar hardware e software, além de explorar áreas como
              inteligência artificial, sistemas embarcados e redes de
              computadores. O curso prepara os alunos para enfrentar desafios
              tecnológicos e inovar em diversas áreas, contribuindo para o
              avanço da sociedade digital.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "8")
              }
              onClick={() => addToCart("8", "ENGENHARIA DA COMPUTAÇÃO", 80.0)}
            >
              {user?.boughtCourses?.find((course) => course.id === "8")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="9"
          data-name="REALIDADE VIRTUAL E AUMENTADA"
          data-price="19.00"
        >
          <img
            className="card-img-top"
            src="imgs/R.V_e_R.A"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">REALIDADE VIRTUAL E AUMENTADA</h5>
            <p className="card-text">
              O curso de Realidade Virtual e Aumentada oferece uma experiência
              imersiva e inovadora, explorando as tecnologias de RV e RA e seu
              potencial em diversos campos. Os alunos têm a oportunidade de
              desenvolver habilidades práticas na criação de ambientes virtuais
              e aplicativos interativos, além de entender os princípios teóricos
              por trás dessas tecnologias emergentes. Com uma demanda crescente
              por profissionais qualificados nesse campo, o curso prepara os
              estudantes para enfrentar os desafios e aproveitar as
              oportunidades no mercado de trabalho digital do futuro.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "9")
              }
              onClick={() =>
                addToCart("9", "REALIDADE VIRTUAL E AUMENTADA", 19.0)
              }
            >
              {user?.boughtCourses?.find((course) => course.id === "9")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="10"
          data-name="ACESSIBILIDADE TECNOLÓGICA"
          data-price="10.00"
        >
          <img
            className="card-img-top"
            src="imgs/acessibilidade.jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">ACESSIBILIDADE TECNOLÓGICA</h5>
            <p className="card-text">
              O curso de Acessibilidade Tecnológica aborda questões essenciais
              relacionadas à inclusão e acessibilidade no ambiente digital. Ao
              explorar temas como design universal, adaptação de interfaces e
              desenvolvimento de tecnologias assistivas, os participantes
              adquirem habilidades fundamentais para tornar produtos e serviços
              digitais acessíveis a todas as pessoas, independentemente de suas
              habilidades ou limitações. Com um foco na promoção da igualdade de
              oportunidades e na garantia de uma experiência inclusiva para
              todos os usuários, esse curso desempenha um papel crucial na
              construção de um mundo digital mais acessível e equitativo.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "10")
              }
              onClick={() =>
                addToCart("10", "ACESSIBILIDADE TECNOLÓGICA", 10.0)
              }
            >
              {user?.boughtCourses?.find((course) => course.id === "10")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>

        <div
          className="card col-xl-3 col-md-5 col-10 m-2 shadow cartao"
          data-id="11"
          data-name="DESENVOLVIMENTO DE SOFTWARE"
          data-price="51.00"
        >
          <img
            className="card-img-top"
            src="imgs/soft.jpg"
            alt="Imagem de capa do card"
          />
          <div className="card-body overflow-auto">
            <h5 className="card-title">DESENVOLVIMENTO DE SOFTWARE</h5>
            <p className="card-text">
              O curso de desenvolvimento de software oferece aos estudantes uma
              sólida base teórica e prática para se tornarem profissionais
              altamente qualificados na área da tecnologia da informação. Ao
              longo do curso, os alunos aprendem a projetar, desenvolver e
              implementar sistemas de software eficientes e inovadores,
              utilizando as mais recentes tecnologias e metodologias de
              desenvolvimento. Com uma abordagem prática e orientada para o
              mercado, o curso prepara os alunos para enfrentarem os desafios do
              mundo real e contribuírem para o avanço contínuo da indústria de
              tecnologia.
            </p>
          </div>
          <div className="card-footer mt-1 d-flex justify-content-center">
            <form action="/redes">
              <button className="btn btn-info d-flex p-2 m-2">LEIA MAIS</button>
            </form>
            <button
              className="add-to-cart btn btn-primary d-flex p-2 m-2"
              disabled={
                !isLoggedIn ||
                user?.boughtCourses?.find((course) => course.id === "11")
              }
              onClick={() =>
                addToCart("11", "DESENVOLVIMENTO DE SOFTWARE", 51.0)
              }
            >
              {user?.boughtCourses?.find((course) => course.id === "11")
                ? "Comprado"
                : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursos;
