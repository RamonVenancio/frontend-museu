import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { InputMask } from 'primereact/inputmask';
import { Api } from '../../services';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const TelaVisitanteContainer = styled.section`
*{
    background-color: #FFF;
    border-radius: 4px;
}

.container{
    margin: 10px 20px;
}

.formulario {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
}

form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.170);
    width: 450px;
    height: 440px;
}

h2{
    text-align: center;
    padding: 20px;
}

label{
    font-weight: bold;
    color: #4c5c6b;
    font-size: 12px;
    margin-bottom: 10px;
}

input, select{
    width: 100%;
    height: 30px;
    font-size: 11px;
    color: #9EADBA;
    padding: 0px 5px;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &.cc{
        text-transform: capitalize;
    }
    &.ee{
        text-transform: uppercase;
        
    }
}

button{
    display: inline-block;
    width: 90%;
    background-color: #5CE1E6;
    color: #323131;
    padding: 8px;
    border: 1px solid #5CE1E6;
    border-radius: 4px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    }

    button:hover{
        background-color: #60ebf0;
        border: 1px solid #60ebf0;
    }

.agrupamento {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input, select{
        width: 190px;
        
    }
}

`;

const TelaVisitante = () => {
    const {register, handleSubmit, reset} = useForm() 
    const toastTopRight = useRef(null);
    const showMessage = (severity, data) => {
        const label = toastTopRight.current.innerText;

        toastTopRight.current.show({ severity: severity, summary: data, life: 3000 });
    };
    const enviarDados = (data)=>{
        Api.post("http://localhost:3003/visitors",data).then((item)=>{
            console.log(item)
        }).catch((error, e) => {
            showMessage('Error', error.response.data)
            console.log(error)
            console.log(data)
        })
    }
    return(
        <>
        <Toast ref={toastTopRight} position="top-right" />
        <TelaVisitanteContainer>
        <form>
            <h2>Seja bem vindo(a), visitante!</h2>

        <div className='container'>
            <div className='formulario'>
            <label>Nome do visitante</label>
            <input type="text" {...register('nome')}/>
            </div>

            <div className='formulario'>
            <label>CPF</label>
            <InputMask type="text" name="cpf" mask='999.999.999-99' maxLength={14} {...register('cpf')}/>
        
            </div>

            <div className='formulario'>
            <label>Profissão</label>
            <input type="text" {...register('profissao')}/>
            </div>

            <div className="agrupamento">
                <div className='formulario'>
                    <label>Gênero</label>
                    <select id="genero" name="genero" {...register('genero')}>
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>

                <div className='formulario'>
                    <label>Idade</label>
                    <input type="number" name="idade" {...register('idade')}/>
                </div>
            </div>

                <div className='agrupamento'>
                    <div className='formulario'>
                        <label>Cidade</label>
                        <input className='cc' id="cidade" name="cidade"type='text' placeholder='Digite sua cidade, ex: Fortaleza' {...register('cidade')}/>
                    </div>

                    <div className='formulario'>
                    <label>Estado</label>
                    <input className='ee' id="estado" name="estado"type='text' placeholder='Digite seu estado, ex: CE' maxLength={2} {...register('estado')}/>
                    </div>
                </div>
            </div>
            
            <button type='button' onClick={()=>handleSubmit(enviarDados)()}>Enviar</button>
        </form>
        </TelaVisitanteContainer>
        </>
    );
}

export default TelaVisitante;