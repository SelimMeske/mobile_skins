let mode = null;
let choosedBackSkin = null;
let choosedCamSkin = null;

let allMaterials = document.querySelectorAll('.material-card > img');
let backSkinImage = document.querySelector('.back-image');
let camSkinImage = document.querySelector('.cam-image');
let allMaterialCards = document.querySelectorAll('.material-card');
let removeMaterials = document.querySelector('.et-delete-material');
let backButton = document.querySelector('.et-back-button');
let mainPopupWindow = document.querySelector('.et-main-popup-window');
let chooseCamSkinButton = document.querySelector('.et-card-camera-skin');
let chooseBackSkinButton = document.querySelector('.et-card-back-skin');
let ribbon = document.querySelectorAll('.et-add-ribbon');
let addSkinButton = document.querySelector('.et-add-skin-button');
let addSkinCards = document.querySelectorAll(".clicable-et-card");
let backSkinCard = document.querySelector("#et-back-skin");
let camSkinCard = document.querySelector("#et-cam-skin");


//Add mode depending on what did the user choose, back or cam skin.
for(let p=0; p<addSkinCards.length; p++) {
    addSkinCards[p].addEventListener("click", e => {

        if (e.target.parentNode == backSkinCard) {
            mode = 'back_skin';
            mainPopupWindow.classList.remove('et-close-popup-window');
        }else if (e.target.parentNode == camSkinCard) {
            mode = 'cam_skin';
            mainPopupWindow.classList.remove('et-close-popup-window');
        }
    });
}

for(let i=0; i<allMaterials.length; i++) {
    allMaterials[i].addEventListener('click', e => {
        
        let parent_card = e.target.parentElement;
        let material = parent_card.id;
        
        if (parent_card.classList.contains('et-card-selected')) {
            remove_all_selected_material_cards(allMaterialCards);
            console.log(mode);
            if(mode == 'back_skin') {
                choosedBackSkin = null;
                backSkinImage.href.baseVal = "";
            }else if(mode == 'cam_skin'){
                choosedCamSkin = null;
                camSkinImage.href.baseVal = "";
            }
        }else{
            remove_all_selected_material_cards(allMaterialCards);
            parent_card.classList.add('et-card-selected');
            switch(material){
                case "carbon-red":
                    if (mode == 'back_skin'){
                        backSkinImage.href.baseVal = galaxyS21.carbonRedBack;
                        choosedBackSkin = 'carbon_red';
                    }else if(mode == 'cam_skin'){
                        camSkinImage.href.baseVal = galaxyS21.carbonRedCam;
                    }
                    break;
                case "carbon-black":
                    if (mode == 'back_skin'){
                        backSkinImage.href.baseVal = galaxyS21.carbonBlackBack;
                        choosedBackSkin = 'carbon_black';
                    }else if(mode == 'cam_skin'){
                        camSkinImage.href.baseVal = galaxyS21.carbonBlackCam;
                    }
                    break;
                case "carbon-gray":
                    if (mode == 'back_skin'){
                        backSkinImage.href.baseVal = galaxyS21.carbonGrayBack;
                        choosedBackSkin = 'carbon_gray';
                    }else if(mode == 'cam_skin'){
                        camSkinImage.href.baseVal = galaxyS21.carbonGrayCam;
                    }
                    break;
                case "carbon-yellow":
                    if (mode == 'back_skin'){
                        backSkinImage.href.baseVal = galaxyS21.carbonYellowBack;
                        choosedBackSkin = 'carbon_yellow';
                    }else if(mode == 'cam_skin'){
                        camSkinImage.href.baseVal = galaxyS21.yellowCarbonCam;
                    }
                    break;  
                case "carbon-white":
                    if (mode == 'back_skin'){
                        backSkinImage.href.baseVal = galaxyS21.carbonWhiteBack;
                        choosedBackSkin = 'carbon_white';
                    }else if(mode == 'cam_skin'){
                        camSkinImage.href.baseVal = galaxyS21.whiteCarbonCam;
                    }
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