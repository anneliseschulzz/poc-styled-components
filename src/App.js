import React, { Component } from "react"
import styled from "styled-components";
import '@acesso-io/genoma-components-react/dist/styles.css';
import '@acesso-io/genoma-components-react/dist/reset.css';

import DivergenceCard from './components/divergence-card/divergence-card.component'

class App extends Component {
  render() {
    const current = {
      class: 'current',
      label: 'Pessoa análise' 
    }
    const restricted = {
      class: 'conflict', 
      label: 'Restrito'
    }

    return (
      <MainLayout>
        <DivergenceCard type={current} ></DivergenceCard>
        <DivergenceCard type={restricted} ></DivergenceCard>
      </MainLayout>
    )
  }
}

const MainLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export default App;
