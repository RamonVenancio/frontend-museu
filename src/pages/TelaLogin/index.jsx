import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Api } from '../../services';
import { useNavigate } from 'react-router-dom';

const TelaLoginContainer = styled.section`
*{
    background-color: #FFF;
    border-radius: 4px;
}

    & h2{
        text-align: center;
        padding: 20px;
    }

    & form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.170);
        width: 450px;
        height: 320px;
        margin: auto;
    }

    input{
        width: 90%;
        color: #9EADBA;
        padding: 14px 20px;
        border: 1px solid #b8b8b8;
        border-radius: 4px;
        margin: 10px auto;
        display: flex;
        justify-content: center;
        cursor: pointer;

    }

    label{
        font-weight: bold;
        color: #4c5c6b;
        margin: 0 25px;
    }

    button{
        display: inline-block;
        width: 90%;
        background-color: #5CE1E6;
        color: #323131;
        padding: 14px 20px;
        border: 1px solid #5CE1E6;
        border-radius: 4px;
        margin: 20px auto;
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
`;

const TelaLogin = () => {
    const {register, handleSubmit, reset} = useForm()
    const navigate = useNavigate()
    const login = async(data) => {
        await Api.post('/user/login',data).then((res)=>{
            console.log(res)
            localStorage.setItem('token',JSON.stringify(res.data.token))
            navigate('/admin')
        }).catch((error)=>{
            console.log(error)
        })
    
    }
    return(
        <>
        <TelaLoginContainer>
            <form>
                <h2>LOGIN</h2>
                <label>Usuário:</label>
                <input 
                type="text"
                {...register('email')}
                />
                <label>Senha:</label>
                <input 
                type="password"
                {...register('senha')}
                />
                <button type="button" onClick={()=>handleSubmit(login)()}>Entrar</button>
            </form>
        </TelaLoginContainer>

        </>
    );
}

export default TelaLogin;