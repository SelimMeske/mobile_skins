//Skin links
let carbon_red = "http://infinityskins.ba/wp-content/uploads/2021/05/carbon-red.png";
let carbon_black = "http://infinityskins.ba/wp-content/uploads/2021/05/carbon-black.png";
let leather_black = "http://infinityskins.ba/wp-content/uploads/2021/05/leather-black.png";
let wood_bamboo = "http://infinityskins.ba/wp-content/uploads/2021/05/wood-bamboo.png";
let marble_white = "http://infinityskins.ba/wp-content/uploads/2021/05/marble-white.png";

let all_materials = document.querySelectorAll('.material-card');

for(let i=0; i<all_materials.length; i++) {
    all_materials[i].addEventListener('click', e => {
        let material = e.target.parentElement.id;
        console.log(material);
    });
}