import "../src/App.css"
type Skill = {
    skill: string;
}
function Card({skill}: Skill){ 
    return(
        <>
            <div className="card">
                <h1> {skill }</h1>
            </div>
        </>
    )
}
export default Card