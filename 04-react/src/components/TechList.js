import React, { Component } from "react";
import TechItem from "./TechItem";

export default class TechList extends Component {
  static defaultProps = {
    // Propriedades ocultas
  };
  static propTypes = {
    // Validação de tipos das propriedades
  };
  state = {
    newTech: "",
    techs: []
  };

  // Ciclo de vida
  // Executado assim que o component aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem("techs");
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  // Executado sempre que houver alterações nas props ou estado
  // componentDidUpdate(prevProps, prevState) {

  // }
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }
  // Executado quando o componente deixa de existir
  componentWillUnmount() {}

  handleImputChange = e => {
    this.setState({ newTech: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ techs: [...this.state.techs, this.state.newTech] });
    this.setState({ newTech: "" });
  };
  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleImputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
