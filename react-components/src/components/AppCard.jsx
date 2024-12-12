import style from './AppCard.module.css';

function AppCard() {
    return (
        <div className={style.card}>
            <div className={style.img}>
                {/* Assicurati che l'immagine sia nella cartella public/img */}
                <img src="/img/nome-immagine.jpg" alt="Esempio" />
            </div>
            <div className={style.text}>
                <h2>Titolo del post</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, qui, ad corporis magni nemo minus fuga optio voluptatibus, exercitationem necessitatibus facere maiores? Voluptates dolor nam repellendus illum, neque exercitationem ullam.</p>
                <button className={style.cardButton}>Leggi</button>
            </div>
        </div>
    );
}

export default AppCard;
