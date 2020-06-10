import React from 'react';

class Form extends React.Component {
    state = {
        name    : '',
        quantity: 0
    };

    render() {
        return (
            <div>
                <h3>Ajouter des articles à acheter</h3>
                <form>
                    <input
                        type="number"
                        placeholder="quantité"
                        value=""
                        onChange={
                            //la fonction permet de différé l'action du onChange
                            // () => console.log('coucou')
                            // (event) => console.log(event)
                            // (event) => this.setState({quantity: event.target.value})
                            (event) => this.setState({quantity: 5})
                        }
                    />
                    <input
                        type="text"
                        placeholder="nom de l'article"
                        value=""
                        onChange={(event) => this.setState({name: event.target.value})} />
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        );
    }
}

/*const Form = () => {

    return (
      <div>Form Component</div>
    );
};*/

export default Form;