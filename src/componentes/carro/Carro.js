import {useState} from 'react'

import styles from './assets/Carro.module.css'

function Carro() {

    const [carro, setCarro] = useState({
        ligado: false,
        velocidade: 0,
    })

    function handleChangeLigado(value) {
        setCarro((carroAnterior) => ({
            ...carroAnterior,
            ligado: value,
        }))

        carro.ligado ? handleChangeResetVelocidade() : console.log("Acelere") 
    }
    
    function handleChangeVelocidade() {
        setCarro((carroAnterior) => ({
            ...carroAnterior,
            velocidade: carro.velocidade + 10
        }))
    }

    function handleChangeVelocidadeFreio() {
        setCarro((carroAnterior) => ({
            ...carroAnterior,
            velocidade: carro.velocidade - 10
        }))
    }

    function handleChangeResetVelocidade() {
        setCarro((carroAnterior) => ({
            ...carroAnterior,
            velocidade: 0
        }))
    }

    return(
        <div className={styles.container}>
            <div className={styles.painel}>
                <p>O Carro está {carro.ligado? "ligado" : "desligado"}</p>
                <p>Velocidade: {carro.velocidade}</p>
            </div>

            <div className={styles.operacoes}>
                <input type="checkbox"
                    checked={carro.ligado}
                    onChange={(e) => {
                        handleChangeLigado(e.target.checked)
                    }}
                />

                <button onClick={() => 
                    carro.ligado ? handleChangeVelocidade() : console.log("Ligue o carro")}
                >
                    Acelerar carro
                </button>

                <button onClick={() => 
                    carro.ligado && carro.velocidade >= 10 ? handleChangeVelocidadeFreio() : console.log("Ligue o carro")}
                >
                    Freie o carro
                </button>
            </div>
        
        </div>
    )
}

export default Carro