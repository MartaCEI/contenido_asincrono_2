const URLSTATIC = import.meta.env.VITE_STATIC_URL

const Client = ({content, logo}) => {
    return (
        <div className="Client-div">
        <img className="Client-img" src={`${URLSTATIC}/svg/${logo}`} alt={logo} />
        <h3 className="Client-h3">{content}</h3>
    </div>
    );
}

export default Client;


