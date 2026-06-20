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

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function formatRatingLabel(rating) {
    if (!rating) {
        return "";
    }
    return rating.charAt(0).toUpperCase() + rating.slice(1);
}

function renderAuthors(authors, me) {
    return authors.map(function(author) {
        return author === me ? '<span class="me">' + escapeHtml(author) + '</span>' : escapeHtml(author);
    }).join(", ");
}

function renderTitle(paper) {
    var href = paper.title_url || "";
    if (!href) {
        return '<a class="paper-title" title="Link pending update">' + escapeHtml(paper.title) + "</a>";
    }
    return '<a href="' + escapeHtml(href) + '" class="paper-title">' + escapeHtml(paper.title) + "</a>";
}

function renderMedia(paper) {
    if (paper.video) {
        return [
            '<div class="paper-img">',
            '    <video autoplay loop muted playsinline>',
            '        <source src="' + escapeHtml(paper.video) + '" type="video/mp4">',
            "    </video>",
            "</div>"
        ].join("\n");
    }

    if (paper.image) {
        return [
            '<div class="paper-img">',
            '    <img src="' + escapeHtml(paper.image) + '" alt="' + escapeHtml(paper.title) + '">',
            "</div>"
        ].join("\n");
    }

    return "";
}

function renderLinks(paper) {
    var links = [];
    if (paper.pdf) {
        links.push('<a href="' + escapeHtml(paper.pdf) + '">PDF</a>');
    }
    if (paper.project) {
        links.push('<a href="' + escapeHtml(paper.project) + '">Project</a>');
    }
    if (paper.code) {
        links.push('<a href="' + escapeHtml(paper.code) + '">Code</a>');
    }
    if (paper.bibtex) {
        links.push('<button type="button" class="bib-toggle" data-toggle-target="' + escapeHtml(paper.id) + '-bib">BibTeX</button>');
    }
    if (!links.length) {
        return "";
    }
    return '<div class="paper-links">\n            ' + links.join("\n            ") + "\n        </div>";
}

function renderRating(paper) {
    if (!paper.rating) {
        return "";
    }
    return '\n            <span class="highlight-tag">(' + escapeHtml(formatRatingLabel(paper.rating)) + ")</span>";
}

function renderBibtex(paper) {
    if (!paper.bibtex) {
        return "";
    }
    return [
        '',
        '        <div id="' + escapeHtml(paper.id) + '-bib" class="bibtex-block">',
        '<pre class="bibtex-pre">' + escapeHtml(paper.bibtex) + "</pre>",
        "        </div>"
    ].join("\n");
}

function renderVenue(paper) {
    var venueHtml = paper.venue_html || "";
    if (!venueHtml) {
        return "";
    }
    return '<div class="paper-venue">\n            ' + venueHtml + renderRating(paper) + "\n        </div>";
}

function renderPaper(paper) {
    var classes = ["paper-row", "pub-" + paper.section];
    if (paper.featured) {
        classes.push("pub-selected");
    }

    var parts = [
        '<div class="' + classes.join(" ") + '">',
        renderMedia(paper),
        '    <div class="paper-content">',
        "        " + renderTitle(paper),
        '        <div class="paper-authors">',
        "            " + renderAuthors(paper.authors || [], paper.me),
        "        </div>",
        "        " + renderVenue(paper),
        "        " + renderLinks(paper)
    ];

    if (paper.description) {
        parts.push("");
        parts.push('        <div class="paper-desc">');
        parts.push("            " + escapeHtml(paper.description));
        parts.push("        </div>");
    }

    parts.push(renderBibtex(paper));
    parts.push("    </div>");
    parts.push("</div>");
    parts.push("");
    parts.push("");
    return parts.join("\n");
}

function buildPublicationOrder(papers) {
    var years = papers
        .map(function(paper) { return paper.year; })
        .filter(function(year) { return typeof year === "number"; })
        .filter(function(year, index, array) { return array.indexOf(year) === index; })
        .sort(function(a, b) { return b - a; })
        .map(function(year) { return String(year); });

    var order = [];
    if (papers.some(function(paper) { return paper.section === "preprint"; })) {
        order.push("preprint");
    }
    return order.concat(years);
}

function renderPublications(data) {
    var papers = data.papers || [];
    var order = buildPublicationOrder(papers);
    var filters = [{ key: "selected", label: "Recent Highlights" }];

    order.forEach(function(section) {
        filters.push({
            key: section,
            label: section === "preprint" ? "Pre-print" : section
        });
    });
    filters.push({ key: "all", label: "All" });

    var filtersRoot = document.getElementById("pub-filters");
    var listRoot = document.getElementById("publications-list");

    filtersRoot.innerHTML = filters.map(function(filter) {
        return '<button class="filter-btn" data-filter="' + escapeHtml(filter.key) + '">' + escapeHtml(filter.label) + "</button>";
    }).join("\n    ");

    var htmlParts = [];
    order.forEach(function(section) {
        var sectionPapers = papers.filter(function(paper) {
            return paper.section === section;
        });
        if (!sectionPapers.length) {
            return;
        }

        htmlParts.push('<div class="year-header">' + (section === "preprint" ? "Pre-Print" : escapeHtml(section)) + "</div>");
        htmlParts.push("");
        sectionPapers.forEach(function(paper) {
            htmlParts.push(renderPaper(paper));
        });
    });

    listRoot.innerHTML = htmlParts.join("\n");
}

function renderPublicationError(message) {
    var listRoot = document.getElementById("publications-list");
    if (listRoot) {
        listRoot.innerHTML = '<p class="paper-desc">' + escapeHtml(message) + "</p>";
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
        if (category === "selected" && !paper.classList.contains("pub-selected")) {
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

async function initPublications() {
    try {
        if (!window.PAPERS_DATA || !Array.isArray(window.PAPERS_DATA.papers)) {
            throw new Error("Failed to load papers.js");
        }
        var data = window.PAPERS_DATA;
        renderPublications(data);
        filterPubs("selected");
    } catch (error) {
        console.error(error);
        renderPublicationError("Failed to load publications data.");
    }
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

    initPublications();
});
