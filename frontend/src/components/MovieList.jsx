import { useEffect, useState } from 'react';

function MovieList() {

    const [filmes, setfilmes] = useState([]);

    useEffect(async () => {
        const url = "http://localhost:5000/filmes";
        const res = await fetch(url);
        setfilmes(await res.json());
    }, []);

    return (
        <table className="striped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Episódios</th>
                    <th>Episódio atual</th>
                    <th>Visto por último</th>
                </tr>
            </thead>

            <tbody>
                {filmes.map(filmes => {
                    let tipo = filmes.tipo === 1 ? 'Série' : 'Filme';
                    let formatDate = (filmes.ult_vis).split('T', 1);

                    return (
                        <tr key={filmes.id}>
                            <td>{filmes.titulo}</td>
                            <td>{tipo}</td>
                            <td>{filmes.total_ep}</td>
                            <td>{filmes.atual_ep}</td>
                            <td>{formatDate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default MovieList;
