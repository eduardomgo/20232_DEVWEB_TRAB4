import { ReactNode } from "react";

interface Props {
   /**
  * Imagem do card
  */
  imagem: string;
  titulo: string;
  texto1: string;
  texto2: string;
  footer: ReactNode;
  onClick?: () => void;
}

const Card = (props: Props) => {
  const {
    imagem, 
    titulo, 
    texto1, 
    texto2, 
    footer,
    onClick
  } = props;

  return (
    <div className="card border-0 mb-5" onClick={onClick}>
      <img src={imagem} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto1}</p>
        <p className="card-text fw-bold" style={{color: "rgb(220, 53, 69)"}}>R$ {texto2}</p>        
      </div>
      <div className="card-footer border-0 p-0">{footer}</div>
    </div>
  );
};

export default Card;
