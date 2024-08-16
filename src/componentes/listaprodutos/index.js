

const listaprodutos = ({ produtos}) => {
    return (
        <div> {produtos.map( (p)=>(<produto valor={p}></produto>))}</div>
    );
};