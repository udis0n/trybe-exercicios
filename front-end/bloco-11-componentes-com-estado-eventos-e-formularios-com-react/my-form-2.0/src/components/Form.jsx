import React, { Component } from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import RadioButtons from './RadioButtons';
import estadosBrasileiros from '../data';

export default class Form extends Component {
  state = {
    nome: '',
    email: '',
    CPF: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  };

  render() {
    const optionsUF = estadosBrasileiros.map((estado) => <option value={estado}>{estado}</option>);

    return (
      <form>
        <fieldset className="personal-data">
          {/* Nome - texto, 40 caracteres, caracteres para uppercase assim que digitados, obrigatório */}
          <TextInput
            handleChange={this.handleChange}
            state={this.state.nome}
            name="nome"
            labelName="Nome"
            maxLength={40}
            required={true}
          />

          {/*//// Email - texto, 50 caracteres, obrigatório */}
          <TextInput
            handleChange={this.handleChange}
            state={this.state.email}
            name="email"
            labelName="Email"
            maxLength={50}
            required={true}
          />

          {/*//// CPF - texto, 11 caracteres, obrigatório */}
          <TextInput
            handleChange={this.handleChange}
            state={this.state.CPF}
            name="CPF"
            labelName="CPF"
            maxLength={11}
            required={true}
          />

          {/* Endereço - texto, 200 caracteres, remover caracteres especiais, obrigatório */}
          <TextInput
            handleChange={this.handleChange}
            state={this.state.endereco}
            name="endereco"
            labelName="Endereço"
            maxLength={200}
            required={true}
          />

          {/* Cidade - texto, 28 caracteres, ao remover o foco efeito onBlur, verificar se o começa com número se sim limpar campo, obrigatório */}
          <TextInput
            handleChange={this.handleChange}
            state={this.state.cidade}
            name="cidade"
            labelName="Cidade"
            maxLength={28}
            required={true}
          />

          {/*//// Estado - combobox, todos os estados do Brasil, obrigatório */}
          <SelectInput
            handleChange={this.handleChange}
            name="estado"
            listOfOptions={optionsUF}
            required={true}
          />

          {/* Tipo - radio button, casa ou apartamento, obrigatório */}
          <RadioButtons />
        </fieldset>

        {/* Fieldset para dados do seu último emprego */}

        {/* Botão que cria div com os dados preenchidos  */}
        <button>Enviar</button>

        {/* Botão que limpa tudo */}
      </form>
    );
  }
}
