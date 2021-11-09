import React, { Component } from "react";
import styled from "styled-components";
import { Positive, Delete, Suspect, Restrict } from "../buttons/action-button.component";
import { Button } from '@acesso-io/genoma-components-react';


class DivergenceCard extends Component {

    render() {
        const info = [
            {
                label: 'CPF',
                value: 'XXX.XXX.00-XX'
            },
            {
                label: 'Nome',
                value: 'Nome e sobrenome'
            },
            {
                label: 'Origem',
                value: 'Cliente origem'
            },
            {
                label: 'Data',
                value: 'XX/XX/XXXX - XX:XX'
            },
        ]

        return(
            <CardContainer>
                <ImageContainer>
                    <span className={this.props.type.class}> {this.props.type.label} </span>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d255e12-9bdc-486f-afb3-6f051dcde02f/d50416b-4eb1cb7e-1f32-4a93-b852-0b59bc85e47d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlkMjU1ZTEyLTliZGMtNDg2Zi1hZmIzLTZmMDUxZGNkZTAyZlwvZDUwNDE2Yi00ZWIxY2I3ZS0xZjMyLTRhOTMtYjg1Mi0wYjU5YmM4NWU0N2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MmO3kKJ-TzTC0TujsYr2bduqszv732Ud6cv9o33nF5A" alt="divergence"></img>
                </ImageContainer>
                <div className="buttons-area">
                    <Positive>+</Positive>
                    <Delete>-</Delete>
                    <Suspect>S</Suspect>
                    <Restrict>R</Restrict>
                </div>
                <ul className="info-area">
                {info.map((item, index) => {
                    return <li key={index}>{item.label}: {item.value}</li>
                })}
                </ul>
                <div className="save-button">
                    <Button color="primary" size="small" variant="link">Salvar</Button>
                </div>
            </CardContainer>
        );
    }

}


const CardContainer = styled.div`
    width: 300px;
    height: 600px;
    border: 1px solid #000;
    position: relative;

    .buttons-area {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 100%;
        top: 350px;
        background: #FFFFFF;
    }

    .info-area {
        margin: 40px 5px 0 20px;
        list-style: none;
        li {
            margin-top: 0.2rem; 
        }
    }

    .save-button {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;

const ImageContainer = styled.div`
    span {
        position: absolute;
        top: 0;
        width: -webkit-fill-available;
        padding: 0.2rem;
        background: transparent;
        &.current {
            background: #00FF00;
        }
        &.conflict {
            background: #FF0000;
            color: #FFFFFF;
        }
    }
    img {
        max-height: 350px;
    }
`;

export default DivergenceCard