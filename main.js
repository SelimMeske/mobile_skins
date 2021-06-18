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
let ribbon = document.querySelectorAll('.et-add-ribbon');
let addSkinButton = document.querySelector('.et-add-skin-button');
let addSkinCards = document.querySelectorAll(".et-card");
let backSkinCard = document.querySelector("#et-back-skin");
let camSkinCard = document.querySelector("#et-cam-skin");


//Add mode depending on what did the user choose, back or cam skin.
for(let p=0; p<addSkinCards.length; p++) {
    addSkinCards[p].addEventListener("click", e => {
        if (e.target == backSkinCard) {
            mode = 'back_skin';
            mainPopupWindow.classList.remove('et-close-popup-window');
        }else if (e.target == camSkinCard) {
            mode = 'cam_skin';
            mainPopupWindow.classList.remove('et-close-popup-window');
        }
    });
}

for(let i=0; i<allMaterials.length; i++) {
    allMaterials[i].addEventListener('click', e => {

        console.log('Trenutni mode je : ' + mode);
        
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
                    backSkinImage.href.baseVal = galaxyS21.carbonRedBack;
                    choosedBackSkin = 'carbon_red';
                    break;
                case "carbon-black":
                    backSkinImage.href.baseVal = galaxyS21.carbonBlackBack;
                    choosedBackSkin = 'carbon_black';
                    break;
                case "leather-black":
                    backSkinImage.href.baseVal = galaxyS21.carbonGrayBack;
                    choosedBackSkin = 'leather_black';
                    break;
                case "wood-bamboo":
                    backSkinImage.href.baseVal = galaxyS21.carbonYellowBack;
                    choosedBackSkin = 'wood_bamboo';
                    break;  
                case "marble-white":
                    backSkinImage.href.baseVal = galaxyS21.carbonWhiteBack;
                    choosedBackSkin = 'marble_white';
                    break;
            }
            
        }

        
    });
}

chooseBackSkinButton.addEventListener('click', e => {
    mode = 'back_skin';

    
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