import { ReactNode } from "react";

interface Props {
    id: number;
    imagem: string;
    titulo: string;
    texto1: string;
    texto2: string;
    footer: ReactNode;
}

const Card = ({id, imagem, titulo, texto1, texto2, footer}: Props) => {
  return (
    <div className="card border-0 mb-5">
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
