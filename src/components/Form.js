import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
        quantity: 0
    };

    render() {
        return (
            <div>
                <h3>Ajouter des articles à acheter</h3>
                <form>
                    <input type="number" placeholder="quantité"/>
                    <input type="text" placeholder="nom de l'article"/>
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