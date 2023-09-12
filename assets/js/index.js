function tabSwitch(tab) {
    for (let key in game["sidebar_tabs"]) game["sidebar_tabs"][key]["active"] = false;
    game["sidebar_tabs"][tab]["active"] = true
    update("tabs")
}


function update(_update) {
    if (_update === "all") {
        document.title = `openscape ~ ${game["version"]}`
    }
    if (_update === "all" || _update === "tabs") {
        // sidebar tabs
        $("#sidebar_section_main").empty()
        $("#sidebar_section_skills").empty()
        for (let key in game["sidebar_tabs"]) {
            let sidebar_tab = document.createElement("button")

            sidebar_tab.innerHTML = key;
            sidebar_tab.onclick = function() { tabSwitch(key) }

            if (game["sidebar_tabs"][key]["active"] === true) {
                sidebar_tab.className = "sidebar_section_button sidebar_section_button_active"
                document.getElementById(`page_${key}`).style.display = ""
            } else {
                sidebar_tab.className = "sidebar_section_button"
                document.getElementById(`page_${key}`).style.display = "none"
            }

            document.querySelector(`#sidebar_section_${game["sidebar_tabs"][key]["section"]}`).appendChild(sidebar_tab)
        }
    }
}
update("all") // keep at bottom