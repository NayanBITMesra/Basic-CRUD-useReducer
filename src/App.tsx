import { useReducer } from 'react'
import InputSkillSection from "../components/Input.tsx"
import DeleteSkillSection from "../components/delete.tsx"
import Card from "../components/card.tsx"
import './App.css'

type SkillSet = string[]
type Action = 
  | { type: "add_skill"; skill: string }
  | { type: "delete_skill"; id: number };

function skillReducer(skillSet:SkillSet, action: Action){
  switch(action.type){
    case "add_skill":
      return [...skillSet, action.skill]
    case "delete_skill":
      return skillSet.filter((_,index: number) => index === action.id)
  }
}
function App() {
  const [skillSet, dispatch] = useReducer(skillReducer, []);
  function handleAddSkill(skill: string){
    dispatch({ type: "add_skill" , skill: skill});
  }
  function handleDeleteSkill(id: string){
    const integer_id: number = Number(id);
    dispatch({ type: "delete_skill", id: integer_id});
  }
  return (
    <>
      <div className='input-delete-container'>
      <h2> Add Skill </h2>
      <div className='individual-input-delete-container'> <InputSkillSection handleAddSkill = {handleAddSkill}/> </div>
      <h2> Delete Skill </h2>
      <div className='individual-input-delete-container'> <DeleteSkillSection handleDeleteSkill = {handleDeleteSkill}/> </div>
      </div>
      <div className = "card-container">
      {
        skillSet.map((skill: string) => {
          return <Card skill = {skill}/>;
        })
      }
      </div>
        
    </>
  )
}

export default App
