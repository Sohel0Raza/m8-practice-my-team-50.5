
const Player = (props) => {
    const {name, picture, profession, price, team, age} = props.player
    const buyPlayer = props.buyPlayer;
    return (
            <div className="my-3">
                <div className="col">
                    <div className="card h-100">
                        <img src={picture} className="card-img-top p-2 rounded-3" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{name}</h5>
                                <p className="fw-semibold m-0">Profession: {profession}</p>
                                <p className="m-0">Age: {age}</p>
                                <p className="card-text">Team: {team}</p>
                                <p>Market value: $ {price}m</p>
                                <button onClick={()=>buyPlayer(props.player)} className="btn btn-info px-5 py-1 text-white">Buy</button>
                            </div>
                    </div>
                </div>
            </div>
    );
};

export default Player;