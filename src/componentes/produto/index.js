const produto = ({props}) => {
    const {valor} = props;
    return (
        <div>
            <h3>{valor.nome}</h3>
            <p>preco: {valor.preco}</p>
        </div>
    );
}

export default produto;