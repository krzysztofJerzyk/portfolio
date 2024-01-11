import star from "../images/star.svg"
import demo from "../images/demo.svg"
import github from "../images/github2.svg"

const userName = 'krzysztofJerzyk'
const direction = 'desc'
const projectContainer = document.querySelector('.projects--js')

fetch(`http://api.github.com/users/${userName}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
    for(let repository of response){
        const {description,name, stargazers_count, topics, homepage, html_url} = repository

        let tags = ``

        for(znak of topics){
            tags += `<li class="card-technology-element">${znak}</li>`
        }

        const element = `<article
        class="article-container article-container-remove-padding article-window"
        >
        <div class="div-container">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
        <div class="padding">
          <header class="flex-header small-padding">
            <h3 class="header-card">${name}</h3>
            <p class="paragraph-with-flex">
              <img src="${star}" alt="" />${stargazers_count}</p>
          </header>
          <p class="paragraph-card">
            ${description}
          </p>
          <ul class="card-technology">
           <li class="card-technology-element">CSS</li>
           <li class="card-technology-element">javascript</li>
           <li class="card-technology-element">mysql</li>
           <li class="card-technology-element">framework vue</li>
            ${tags}
          </ul>
          <div class="section__button">
            <a
              href="${homepage}"
              target="_blank"
              rel="noreferrer nofollow"
              class="section__link section__link--special section__small section__link-special-padding"
              ><img class="special-size" src="${demo}" />View
              demo</a
            >
            <a
              href="${html_url}"
              target="_blank"
              rel="noreferrer nofollow"
              class="section__link section__link--special section__small section__link-special-padding"
              ><img class="special-size" src="${github}" />Source
              code</a
            >
          </div>
        </div>
        </article>`

        projectContainer.insertAdjacentHTML('afterbegin', element)

    }
})
.catch((e) => console.log(e))