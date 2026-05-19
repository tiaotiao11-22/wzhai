function toggleNewsHistory() {
    var hiddenDiv = document.getElementById("news-hidden");
    var btn = document.getElementById("news-btn-text");

    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
        hiddenDiv.style.display = "block";
        btn.innerHTML = "Collapse History &#9650;";
    } else {
        hiddenDiv.style.display = "none";
        btn.innerHTML = "View History News... &#9660;";
    }
}

function filterPubs(category) {
    var buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(function(btn) {
        if (btn.getAttribute("data-filter") === category) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    var papers = document.querySelectorAll(".paper-row");
    papers.forEach(function(paper) {
        if (category === "all" || paper.classList.contains("pub-" + category)) {
            paper.style.display = "flex";
        } else {
            paper.style.display = "none";
        }
    });

    var headers = document.querySelectorAll(".year-header");
    headers.forEach(function(header) {
        if (category === "all") {
            header.style.display = "inline-block";
        } else {
            header.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        var newsToggle = event.target.closest("[data-action='toggle-news-history']");
        if (newsToggle) {
            toggleNewsHistory();
            return;
        }

        var pubFilter = event.target.closest(".filter-btn[data-filter]");
        if (pubFilter) {
            filterPubs(pubFilter.getAttribute("data-filter"));
            return;
        }

        var bibToggle = event.target.closest(".bib-toggle[data-toggle-target]");
        if (bibToggle) {
            toggleblock(bibToggle.getAttribute("data-toggle-target"));
        }
    });

    filterPubs("selected");
});
