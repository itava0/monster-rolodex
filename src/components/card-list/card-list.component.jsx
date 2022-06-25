import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster, i) => (
          <h1 key={i}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
