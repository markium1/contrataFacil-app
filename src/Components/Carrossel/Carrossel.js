import { Image, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Carrossel() {
  return (
    <Carousel data-bs-theme="dark" className="w-75 mx-auto">
      <Carousel.Item>
        <Image
          thumbnail
          className="d-block w-100"
          src="../../img/tecnicoinformatica.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="d-flex justify-content-center mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Visão Geral</Card.Title>
              <Card.Text>
                Bem-vindo à ContrataFácil, a sua plataforma para encontrar
                serviços terceirizados de forma simples e eficiente. Conectamos
                você a profissionais qualificados, tornando a terceirização uma
                experiência fácil.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          thumbnail
          className="d-block w-100"
          src="../../img/mecanico.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="d-flex justify-content-center mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Diferenciação</Card.Title>
              <Card.Text>
                ContrataFácil está transformando a busca por serviços
                terceirizados. Nossa plataforma intuitiva e recursos avançados
                oferecem acesso rápido aos melhores profissionais. Somos
                dedicados à qualidade, confiabilidade e conveniência
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          thumbnail
          className="d-block w-100"
          src="../../img/cabeleleiro.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption className="d-flex justify-content-center mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Valor para Clientes</Card.Title>
              <Card.Text>
                Encontre soluções precisas na ContrataFácil. Perfis detalhados e
                pesquisa criteriosa ajudam a tomar decisões informadas.
                Economize tempo, minimize burocracia e encontre parceiros
                confiáveis prontos para atender às suas demandas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;
