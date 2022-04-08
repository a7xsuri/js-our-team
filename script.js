const DataUtents = [{ 'photo':'./img/wayne-barnett-founder-ceo.jpg', 'name':'Wayne Barnett', 'job':'Founder & CEO'},
{ 'photo':'./img/walter-gordon-office-manager.jpg', 'name':'Walter Gordon', 'job':'Office Manager'},
{ 'photo':'./img/scott-estrada-developer.jpg', 'name':'Scott Estrada', 'job':'Developer'},
{ 'photo':'./img/barbara-ramos-graphic-design.jpg', 'name':'Barbara Ramos', 'job':'Graphic Design'},
{ 'photo':'./img/angela-lopez-social-media-manager.jpg', 'name':'Angela Lopez', 'job':'Social Media Manager'},
{ 'photo':'./img/angela-caroll-chief-editor.jpg', 'name':'Angela Caroll', 'job':'Chief Editor'}
]



function InsertPeople(){
    for( let key in DataUtents){
        console.log(DataUtents[key])
    }
}

InsertPeople();