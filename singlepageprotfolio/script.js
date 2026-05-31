function addRecommendation() {

    let recommendation =
        document.getElementById("new_recommendation");

    if(recommendation.value != "") {

        let element = document.createElement("div");

        element.setAttribute("class", "recommendation");

        element.innerHTML =
            "\"" + recommendation.value + "\"";

        document.getElementById("all_recommendations")
            .appendChild(element);

        recommendation.value = "";

        showPopup(true);
    }
}

function showPopup(bool) {

    if(bool) {
        document.getElementById('popup').style.visibility = 'visible';
    }
    else {
        document.getElementById('popup').style.visibility = 'hidden';
    }
}