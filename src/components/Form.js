import React from 'react';

class Form extends React.Component {
    state = {
        name    : '',
        quantity: 0
    };

    handleSubmit = (event) => {
        //empêche rafraîchissement page sur submit
        event.preventDefault();
        this.props.addArticle(this.state);
        console.log(this.state);

    };

    render() {
        return (
            <div>
                <h3>{this.props.FormTitle}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="number"
                        placeholder="quantité"
                        /*rendre un état courant avec this.state*/
                        value={this.state.quantity}
                        onChange={
                            //la fonction permet de différé l'action du onChange
                            // () => console.log('coucou')
                            // (event) => console.log(event)
                            //(event) => this.setState({quantity: 5})
                             (event) => this.setState({quantity: event.target.value})

                        }
                    />
                    <input
                        type="text"
                        placeholder="nom de l'article"
                        value={this.state.name}
                        onChange={(event) => this.setState({name: event.target.value})}
                    />
                    <button type="submit">
                        Ajouter
                    </button>
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