import React from "react";
import "./Main.css";

import Post from "./Post";
export default class Main extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Glauber Carvalho"
          // avatar: 'http://url...
        },
        date: "29 Aug 2019",
        content:
          "Pessoal, Eu estou fazendo a primeira aplicação react da bootcamp 2019!!!",
        comments: [
          {
            id: 1,
            author: {
              name: "Irineu NãoSabe"
              // avatar: 'http://url...
            },
            content: "Você não sabe e nem eu"
          },
          {
            id: 2,
            author: {
              name: "Hater Da Internet"
              // avatar: 'http://url...
            },
            content: "Aposto que copiou da internet"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Alguem Da Internet"
          // avatar: 'http://url...
        },
        date: "29 Aug 2019",
        content: "Isso é um site? ",
        comments: [
          {
            id: 1,
            author: {
              name: "Seu Lunga"
              // avatar: 'http://url...
            },
            content:
              "Não, é uma sujeira no seu computador com o nome de facebook"
          },
          {
            id: 2,
            author: {
              name: "Meme da internet"
              // avatar: 'http://url...
            },
            content: "Os cara é bruto"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Glauber Carvalho"
          // avatar: 'http://url...
        },
        date: "30 Aug 2019",
        content: "Olha a zuação ai gente!",
        comments: []
      }
    ]
  };
  render() {
    return (
      <main>
        <div className="container">
          {this.state.posts.map(post => (
            <Post key={post.id} postdata={post} />
          ))}{" "}
        </div>
      </main>
    );
  }
}
