var container = document.getElementById("root");

function Participante(props) {
    const  [numero, setNumero] = React.useState(0);

    function Votar() {
        setNumero(numero + 1);
    }

    return (
        <>
            <h1>{props.nome}</h1>
            <h2>{numero}</h2>
            <button onClick={Votar}>Votar</button>
        </>
    )
}

function Votacao() {
    return (
        <>
            <Participante nome="MC" />
            <Participante nome="BK" />
            <Participante nome="PP" />
        </>
    )

}

ReactDOM.createRoot(container).render(<Votacao />)