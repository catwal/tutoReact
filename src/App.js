import React    from 'react';
import logo     from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import Form     from './components/Form';

class App extends React.Component {

    state = { articles : [] };

    addArticle = (article) => {
        //récupération état courant
        let oldArticles = this.state.articles;
        //article.id = this.state.articles.length + 1;
        //library uuid
        article.id = Date.now();
        //créer un nouveau tableau plutot que de modifier un tableau existant avec push
        let newArticles = [...oldArticles, article];
        this.setState({articles: newArticles});

        console.log('article vu par le parent', article);

    };

    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </header>

                <h3>Liste de courses</h3>

                <Form FormTitle="liste des courses à acheter" addArticle={this.addArticle} />

                <ItemList articles={this.state.articles}/>

            </div>
        );
    }
}

export default App;
