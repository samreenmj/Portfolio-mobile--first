const menu = document.querySelector('.menu_list');
const menuItems = document.querySelectorAll('.link_item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menuIcon = document.querySelector('.open');
const workSection = document.getElementById('work');
let btnModal;
let span;
const projects = [
  {
    name: 'Tonic',
    skills: { campany: 'CANOPY', stack: 'Back End Dev', year: '2015' },
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    image: './images/Snapshoot-Portfolio0.png',
    livelink: 'https://samreenmj.github.io/Portfolio-mobile--first/',
    sourcelink: 'https://github.com/samreenmj/Portfolio-mobile--first',
    classes: 'card',
    imgClass: 'rien',
    textClass: 'rien',
  },
  {
    name: 'Multi-PostStories',
    skills: { campany: 'FACEBOOK', stack: 'Full Stack Dev', year: '2015' },
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: 'images/SnapshootPortfolio4.png',
    livelink: 'https://samreenmj.github.io/Portfolio-mobile--first/',
    sourcelink: 'https://github.com/samreenmj/Portfolio-mobile--first',
    classes: 'card_reverse',
    imgClass: 'first_reverse',
    textClass: 'second_reverse',
  },
  {
    name: 'Facebook 360',
    skills: { campany: 'FACEBOOK', stack: 'Full Stack Dev', year: '2015' },
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './images/SnapshootPortfolio2.png',
    livelink: 'https://samreenmj.github.io/Portfolio-mobile--first/',
    sourcelink: 'https://github.com/samreenmj/Portfolio-mobile--first',
    classes: 'card',
    imgClass: 'rien',
    textClass: 'rien',
  },
  {
    name: 'Uber Navigation',
    skills: { campany: 'Uber', stack: 'Lead Developer', year: '2018' },
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './images/SnapshootPortfolio1.png',
    livelink: 'https://samreenmj.github.io/Portfolio-mobile--first/',
    sourcelink: 'https://github.com/samreenmj/Portfolio-mobile--first',
    classes: 'card_reverse',
    imgClass: 'first_reverse',
    textClass: 'second_reverse',
  },
];

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    hamburger.classList.remove('closingIcon');
    document.body.classList.remove('hide_y_scroll');
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    hamburger.classList.add('closingIcon');
    document.body.classList.add('hide_y_scroll');
  }
}
function displayCard() {
  let allCards = '';
  projects.forEach((project) => {
    let techlist = '';
    for (let j = 0; j < project.technologies.length; j += 1) {
      techlist = `${techlist}<li class="project_tag">${project.technologies[j]}</li>`;
    }
    allCards = `${allCards}
    <div class="${project.classes}" tabindex="0">
      <img class="${project.imgClass}" tabindex="0" src="${project.image}" srcset="">
      <div class="${project.textClass} text_side" tabindex="0">
      <h2 tabindex="0">${project.name}</h2>
      <div class="title">
        <h5 tabindex="0">${project.skills.campany}</h5>
        <ul class="title_list">
          <li tabindex="0">${project.skills.stack}</li>
          <li tabindex="0">${project.skills.year}</li>
        </ul>
      </div>
      <p tabindex="0">${project.description}</p>
            <ul class="tech_list">
            ${techlist}
            </ul>
    <button class="btn_details btn_modal">See Project</button>
          <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="closeModal" id="closeModal">&times;</span>
          <div class="text_side modal_head" tabindex="0">
            <h2 tabindex="0">${project.name}</h2>
            <div class="title">
              <h5 tabindex="0">${project.skills.campany}</h5>
              <ul class="title_list">
                <li tabindex="0">${project.skills.stack}</li>
                <li tabindex="0">${project.skills.year}</li>
              </ul>
            </div>
          </div>
          <img class="" tabindex="0" src="${project.image}" srcset="">
          <div class="details">
            <div class="leftSide">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
                releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with
                the
                releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of
                type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
            </div>
            <div class="rightSide">
                <ul class="tech_list_modal tech_list">
                    ${techlist}
                </ul>
                <hr class="divider">
                <div class="btn_links">
                  <button class="btn_details btn_modal"><a href="${project.livelink}" class="modal_link" target="_blank">See live</a><img class="" tabindex="0" src="./images/see_live_btn.png" srcset=""></button>
                  <button class="btn_details btn_modal"><a href="${project.sourcelink}" class="modal_link" target="_blank">See Source</a><img class="" tabindex="0" src="./images/see_source_btn.png" srcset=""></button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>`;
  });
  workSection.innerHTML = allCards;
  span = document.querySelectorAll('.closeModal');
  btnModal = document.querySelectorAll('.btn_modal');
  btnModal.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentNode.lastElementChild.style.display = 'block';
      btn.parentNode.lastElementChild.style.zIndex = '300';
      document.body.classList.add('hide_y_scroll');
      window.onclick = (event) => {
        if (event.target === btn.parentNode.lastElementChild) {
          btn.parentNode.lastElementChild.style.display = 'none';
          document.body.classList.remove('hide_y_scroll');
        }
      };
    });
  });
  span.forEach((el) => {
    el.addEventListener('click', () => {
      el.parentNode.parentElement.style.display = 'none';
      document.body.classList.remove('hide_y_scroll');
    });
  });
}
displayCard();
hamburger.addEventListener('click', toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});