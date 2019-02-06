var Counter = React.createClass({
    getInitialState: function() {//metoda, która pozwala nam określić początkowy stan naszego komponentu
        return {
            counter: 0
        };
    },

    getDefultProps: function() {
        console.log('Początkowy stan propsów ustawiony domyślnie')
    },

    getInitialState: function() {
        console.log('Początkowy stan komponentu')
    },

    componentWillMount: function() {
        console.log('Metody wywoływana zaraz przed wykonaniem metody render, na ekranie pokazuje stan początkowy')
    },

    react: function() {
        console.log('Metoda, która odpowiada za wygląd komponentu podczas pierwszego wyświetlenie oraz po każdej zmianie, zwraca ReactElement')
    },

    componentDidMount: function() {
        console.log('Aktualizacja stanu komponentu')
    },

    componentWillReceiveProps: function() {
        console.log('Metoda wywoływana tylko wtedy gdy komponent otrzyma nowe właściwości')
    },

    shouldComponentUpdate: function() {
        console.log('Metoda wywoływana tuż przed render, sprawdza czy rzeczywiście trzeba jeszcze raz zaktualizować komponent')
    },

    componentWillUpdate: function() {
        console.log('Metoda przygotowująca na nadchdzące zmiany')
    },

    componentDidUpdate: function() {
        console.log('Metoda aktualizująca stan komponentu - zmiany na DOM')
    },

    componentWillUnmount: function() {
        console.log('Metoda kończąca życie komponentu, służy do ewentualnych zadań czyszczenia np. wyczyszczenie jakiś elementów DOM')
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

var elements = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
)


ReactDOM.render(elements, document.getElementById('app'));