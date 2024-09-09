export const Hero = ({img, icono, color, btnCallAction, titulo, contenido}) => {
    return (
        <section className="Section-hero" style={{color:{color}}}>
            <div className="Section-flex">
                <img src={icono} alt="icono" />
                <h1>{titulo}</h1>
                <p>{contenido}</p>
                <img src={btnCallAction.img} alt="btnCallAction" />
            </div>
            <div>
                <img src={img} alt="hero" />
            </div>
        </section>
    );
}