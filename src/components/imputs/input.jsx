import { AiOutlinePlus, AiFillDelete, AiFillEdit } from "react-icons/ai"
import { Wrapper } from "./style"
import { useState } from "react"


let index = 0
export default function Input() {

    const [list, setList] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const  [search, setSearch]= useState("")
    const [salveEdite, setsalveEdite] = useState(null)


    

    //add function
    function handleAdd(e) {
        e.preventDefault()
        if (salveEdite === null) {
            setList(
                [
                    ...list,
                    {
                        id: index++,
                        title: title,
                        description: description

                    }
                ]
            )
        }

        setDescription("")
        setTitle("")

    }
    //Delete function
    function handleDelete(IdDelete) {
        setList(
            list.filter(e => e.id != IdDelete)
        )
    }

    //Edite function
    function handleEdite(IdEdite) {
        const textEdite = list.find(e => e.id === IdEdite)
        setTitle(textEdite.title)
        setDescription(textEdite.description)
        setsalveEdite(IdEdite)
    }

    //salving edite
    function handleSave() {
        setList(
            list.map((tes) => {
                if (tes.id === salveEdite) {
                    return {
                        ...tes,
                        title: title,
                        description: description
                    }
                }
                return tes
            })
        )
        setDescription("")
        setTitle("")
        setsalveEdite(null)
    }


    //search data
    
    return (
        <Wrapper>
            {/* <input type="text" className="pesquisar" placeholder="Pesquisar" onChange={(e => setSearch(e.target.value))}/><br />
            <hr /> */}
            {salveEdite === null ? (<button onClick={handleAdd}><AiOutlinePlus size={20} /></button>) : (<button onClick={handleSave}>Salvar</button>)}
            <form>
                <div className="innputs">
                    <input type="text" value={title} placeholder="Insira o titulo da tarefa..." onChange={(e => setTitle(e.target.value))} /><br />
                    <input type="text" value={description} placeholder="Descrição da tarefa..." onChange={(e => setDescription(e.target.value))} />
                </div>

            </form>
            <div>
                {
                    list.map((e) => (
                        <li key={e.id} className="list">
                            <div className="task">
                                <h3>{e.title}</h3>
                                <p>{e.description}</p>
                            </div>
                            <div className="btn">
                                <button className="delete" onClick={() => handleDelete(e.id)}><AiFillDelete /></button>
                                <button className="edite" onClick={() => handleEdite(e.id)}><AiFillEdit /></button>
                            </div>
                        </li>
                    ))
                }
            </div>
        </Wrapper>
    )
}