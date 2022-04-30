import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'

export function NewRoom() {
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className='main-content'>
                    <h2>Criar um nova sala</h2>
                    <img src={logoImg} alt="Letmeask" />
                    
                    <form action="">
                        <input type="text" placeholder='Nome da sala' />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link></p>
                </div>
            </main>
        </div>
    )
}