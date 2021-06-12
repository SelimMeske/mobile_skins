//Back skins links
let carbon_red = "http://infinityskins.ba/wp-content/uploads/2021/05/carbon-red.png";
let carbon_black = "http://infinityskins.ba/wp-content/uploads/2021/05/carbon-black.png";
let leather_black = "http://infinityskins.ba/wp-content/uploads/2021/05/leather-black.png";
let wood_bamboo = "http://infinityskins.ba/wp-content/uploads/2021/05/wood-bamboo.png";
let marble_white = "http://infinityskins.ba/wp-content/uploads/2021/05/marble-white.png";

//Cam skins links
let carbo_black_cam_skin = "http://infinityskins.ba/wp-content/uploads/2021/06/carbon-black-1-1.png";
let wood_bamboo_cam_skin = "http://infinityskins.ba/wp-content/uploads/2021/06/wood-mahogany-1.png";
let carbon_yellow_cam_skin = "http://infinityskins.ba/wp-content/uploads/2021/06/carbon-yellow-1.png";
let carbon_red_cam_skin = "http://infinityskins.ba/wp-content/uploads/2021/06/carbon-red-3.png";
let white_carbon_cam_skin = "http://infinityskins.ba/wp-content/uploads/2021/06/marble-white-1.png";

let mode = null;
let choosed_back_skin = null;
let choosed_cam_skin = null;

let all_materials = document.querySelectorAll('.material-card > img');
let back_skin_image = document.querySelector('.back-image');
let all_material_cards = document.querySelectorAll('.material-card');
let remove_materials = document.querySelector('.et-delete-material');
let back_button = document.querySelector('.et-back-button');
let main_popup_window = document.querySelector('.et-main-popup-window');
let choose_cam_skin_button = document.querySelector('.et-card-camera-skin');
let choose_back_skin_button = document.querySelector('.et-card-back-skin');
let ribbon = document.querySelector('.et-add-ribbon');
let add_skin_button = document.querySelector('.et-add-skin-button');

for(let i=0; i<all_materials.length; i++) {
    all_materials[i].addEventListener('click', e => {
        
        let parent_card = e.target.parentElement;
        let material = parent_card.id;
        
        if (parent_card.classList.contains('et-card-selected')) {
            remove_all_selected_material_cards(all_material_cards);
            back_skin_image.href.baseVal = "";
            if(mode == 'back_skin') {
                choosed_back_skin = null;
            }
        }else{
            remove_all_selected_material_cards(all_material_cards);
            parent_card.classList.add('et-card-selected');
            switch(material){
                case "carbon-red":
                    back_skin_image.href.baseVal = carbon_red;
                    choosed_back_skin = 'carbon_red';
                    break;
                case "carbon-black":
                    back_skin_image.href.baseVal = carbon_black;
                    choosed_back_skin = 'carbon_black';
                    break;
                case "leather-black":
                    back_skin_image.href.baseVal = leather_black;
                    choosed_back_skin = 'leather_black';
                    break;
                case "wood-bamboo":
                    back_skin_image.href.baseVal = wood_bamboo;
                    choosed_back_skin = 'wood_bamboo';
                    break;  
                case "marble-white":
                    back_skin_image.href.baseVal = marble_white;
                    choosed_back_skin = 'marble_white';
                    break;
            }
            
        }

        
    });
}

choose_back_skin_button.addEventListener('click', e => {
    mode = 'back_skin';

    main_popup_window.classList.remove('et-close-popup-window');
});

back_button.addEventListener('click', e => {
    apply_skin_and_close();
});

add_skin_button.addEventListener('click', e => {
    apply_skin_and_close();
});

function apply_skin_and_close() {

    if(choosed_back_skin) {
        choose_back_skin_button.classList.add('et-choosed');
        ribbon.innerHTML = '<span>&#10003;</span>';
    }else {
        choose_back_skin_button.classList.remove('et-choosed');
        ribbon.innerHTML = 'DODAJ';
    }

    main_popup_window.classList.add('et-close-popup-window');
}

function remove_all_selected_material_cards(elems){
    for(let l=0; l<elems.length; l++){
        elems[l].classList.remove('et-card-selected');
    }
}