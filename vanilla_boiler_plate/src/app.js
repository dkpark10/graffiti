export default class App {
  constructor({ target }) {
    this.target = target;
    this.render();
  }

  render(){
    this.target.innerHTML = 'hawi';
  }
};
