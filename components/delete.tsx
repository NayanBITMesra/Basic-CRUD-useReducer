import { useState } from "react"
type HandleDeleteSkill = {
    handleDeleteSkill: (input: string) => void;
}
function DeleteSkillSection({handleDeleteSkill}: HandleDeleteSkill){
    const [id, setId] = useState<string>("");
    function handleDeleteID(){
        handleDeleteSkill(id);
        setId("");
    }
    return(
        <>
        <input
        type="string"
        placeholder="Enter Index: "
        value={id}
        onChange={(e)=>setId((e.target.value))}
        style={{marginRight:10}}
        />
        <button onClick={(handleDeleteID)}> Submit </button>
        </>
    )
}
export default DeleteSkillSection;