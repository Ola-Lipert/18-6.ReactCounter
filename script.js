var Counter = React.createClass({
    getInitialState: function() {//metoda, która pozwala nam określić początkowy stan naszego komponentu
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({//metoda ustawienie stanu
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},//ustawiamy jaka funkcja ma sie wykonać po wystąpieniu zdarzenia kliknięcia
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('button', {onClick: this.increment}, '+'),

        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));