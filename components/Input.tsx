import { useState } from "react"
type Props = {
  handleAddSkill: (input: string) => void;
};
function InputSkillSection({handleAddSkill}: Props){
    const [newSkill, setNewSkill] = useState<string>("");
    function handlenewskill(){
        handleAddSkill(newSkill);
        setNewSkill('');
    }
    return(
        <>
        <input
            type="string"
            value={newSkill}
            onChange={(e)=>{setNewSkill(e.target.value)}}
            placeholder="Enter Skill"
            style={{marginRight:10}}
        />
        <button onClick={handlenewskill}>Submit</button>
        </>
    )
}
export default InputSkillSection;