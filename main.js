//Skin links
let carbon_red = "http://infinityskins.ba/wp-content/uploads/2021/05/carbon-red.png";
let carbon_black = "http://infinityskins.ba/wp-content/uploads/2021/05/carbon-black.png";
let leather_black = "http://infinityskins.ba/wp-content/uploads/2021/05/leather-black.png";
let wood_bamboo = "http://infinityskins.ba/wp-content/uploads/2021/05/wood-bamboo.png";
let marble_white = "http://infinityskins.ba/wp-content/uploads/2021/05/marble-white.png";

let all_materials = document.querySelectorAll('.material-card > img');
let back_skin_image = document.querySelector('.back-image');
let all_material_cars = document.querySelectorAll('.material-card');

console.log(all_materials)

for(let i=0; i<all_materials.length; i++) {
    all_materials[i].addEventListener('click', e => {

        remove_all_selected_material_cards(all_material_cars);
        
        let parent_card = e.target.parentElement;
        let material = parent_card.id;
        
        if (parent_card.classList.contains('et-card-selected')) {
            remove_all_selected_material_cards(all_material_cars);
            back_skin_image.href.baseVal = "";
        }else{
            remove_all_selected_material_cards(all_materials);
            parent_card.classList.add('et-card-selected');
            switch(material){
                case "carbon-red":
                    back_skin_image.href.baseVal = carbon_red;
                    break;
                case "carbon-black":
                    back_skin_image.href.baseVal = carbon_black;
                    break;
                case "leather-black":
                    back_skin_image.href.baseVal = leather_black;
                    break;
                case "wood-bamboo":
                    back_skin_image.href.baseVal = wood_bamboo;
                    break;  
                case "marble-white":
                    back_skin_image.href.baseVal = marble_white;
                    break;
            }
            
        }

        
    });
}

function remove_all_selected_material_cards(elems){
    for(let l=0; l<elems.length; l++){
        elems[l].classList.remove('et-card-selected');
    }
}