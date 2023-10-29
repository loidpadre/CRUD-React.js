import { AiFillSliders } from "react-icons/ai"
import { Wrapper } from "./style"
export default function Header() {
    return (
        <Wrapper>
            <div className="logo">
                <AiFillSliders  size={90} color="#fff"/>
            </div>
            <div className="text">
                <h1>O SEU APP DE TAREFA</h1>
                <small>Crie sua tarefa diaria, e registra os seus passos</small>
            </div>
        </Wrapper>
    )
}