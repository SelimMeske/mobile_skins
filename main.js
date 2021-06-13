let mode = null;
let choosedBackSkin = null;
let choosedCamSkin = null;

let allMaterials = document.querySelectorAll('.material-card > img');
let backSkinImage = document.querySelector('.back-image');
let allMaterialCards = document.querySelectorAll('.material-card');
let removeMaterials = document.querySelector('.et-delete-material');
let backButton = document.querySelector('.et-back-button');
let mainPopupWindow = document.querySelector('.et-main-popup-window');
let chooseCamSkinButton = document.querySelector('.et-card-camera-skin');
let chooseBackSkinButton = document.querySelector('.et-card-back-skin');
let ribbon = document.querySelector('.et-add-ribbon');
let addSkinButton = document.querySelector('.et-add-skin-button');

for(let i=0; i<allMaterials.length; i++) {
    allMaterials[i].addEventListener('click', e => {
        
        let parent_card = e.target.parentElement;
        let material = parent_card.id;
        
        if (parent_card.classList.contains('et-card-selected')) {
            remove_all_selected_material_cards(allMaterialCards);
            backSkinImage.href.baseVal = "";
            if(mode == 'back_skin') {
                choosedBackSkin = null;
            }
        }else{
            remove_all_selected_material_cards(allMaterialCards);
            parent_card.classList.add('et-card-selected');
            switch(material){
                case "carbon-red":
                    backSkinImage.href.baseVal = carbonRed;
                    choosedBackSkin = 'carbon_red';
                    break;
                case "carbon-black":
                    backSkinImage.href.baseVal = carbonBlack;
                    choosedBackSkin = 'carbon_black';
                    break;
                case "leather-black":
                    backSkinImage.href.baseVal = leatherBlack;
                    choosedBackSkin = 'leather_black';
                    break;
                case "wood-bamboo":
                    backSkinImage.href.baseVal = woodBamboo;
                    choosedBackSkin = 'wood_bamboo';
                    break;  
                case "marble-white":
                    backSkinImage.href.baseVal = marbleWhite;
                    choosedBackSkin = 'marble_white';
                    break;
            }
            
        }

        
    });
}

chooseBackSkinButton.addEventListener('click', e => {
    mode = 'back_skin';

    mainPopupWindow.classList.remove('et-close-popup-window');
});

backButton.addEventListener('click', e => {
    apply_skin_and_close();
});

addSkinButton.addEventListener('click', e => {
    apply_skin_and_close();
});

function apply_skin_and_close() {

    if(choosedBackSkin) {
        chooseBackSkinButton.classList.add('et-choosed');
        ribbon.innerHTML = '<span>&#10003;</span>';
    }else {
        chooseBackSkinButton.classList.remove('et-choosed');
        ribbon.innerHTML = 'DODAJ';
    }

    mainPopupWindow.classList.add('et-close-popup-window');
}

function remove_all_selected_material_cards(elems){
    for(let l=0; l<elems.length; l++){
        elems[l].classList.remove('et-card-selected');
    }
}