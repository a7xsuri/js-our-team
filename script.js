const DataUtents = [{ photo:'./img/wayne-barnett-founder-ceo.jpg', name:'Wayne Barnett', job:'Founder & CEO'},
{ photo:'./img/walter-gordon-office-manager.jpg', name:'Walter Gordon', job:'Office Manager'},
{ photo:'./img/scott-estrada-developer.jpg', name:'Scott Estrada', job:'Developer'},
{ photo:'./img/barbara-ramos-graphic-designer.jpg', name:'Barbara Ramos', job:'Graphic Design'},
{ photo:'./img/angela-lopez-social-media-manager.jpg', name:'Angela Lopez', job:'Social Media Manager'},
{ photo:'./img/angela-caroll-chief-editor.jpg', name:'Angela Caroll', job:'Chief Editor'}
]
console.log(DataUtents.length)
const Container = document.querySelector(".team-container")

function InsertPeople(){
    for(let i = 0;i<DataUtents.length;i++){
        const CardContainer = document.createElement("div");
        CardContainer.classList.add("team-card");

        const CardImg = document.createElement("div");
        CardImg.classList.add("card-image");

        const CardText = document.createElement("div");
        CardText.classList.add("card-text");

        const CardTextTitle = document.createElement("h3");
        const CardTextJob = document.createElement("p");

        CardImg.innerHTML = '<img src="' + DataUtents[i].photo + '">';
        CardTextTitle.innerHTML = DataUtents[i].name;
        CardTextJob.innerHTML = DataUtents[i].job;

        CardText.append(CardTextTitle);
        CardText.append(CardTextJob);
        CardContainer.append(CardImg);
        CardContainer.append(CardText);
        Container.append(CardContainer);
    }
}

InsertPeople();