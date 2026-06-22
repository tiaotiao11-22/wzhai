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

function normalizeAssetPath(value) {
    var text = String(value || "").trim();
    if (!text) {
        return "";
    }
    if (/^(?:[a-z]+:)?\/\//i.test(text) || text.indexOf("./") === 0 || text.indexOf("../") === 0 || text.indexOf("/") === 0) {
        return text;
    }
    return "./Wei Zhai_files/" + text;
}

function normalizeAuthor(author) {
    if (typeof author === "string") {
        var text = author.trim();
        var flags = text.match(/([*#]+)\s*$/);
        return {
            name: text.replace(/\s*[*#]+\s*$/, "").trim(),
            coFirst: !!(flags && flags[1].indexOf("#") !== -1),
            corresponding: !!(flags && flags[1].indexOf("*") !== -1)
        };
    }

    if (!author || typeof author !== "object") {
        return { name: "", coFirst: false, corresponding: false };
    }

    return {
        name: String(author.name || "").trim(),
        coFirst: !!(author.coFirst || author.equalFirst || author.first),
        corresponding: !!author.corresponding
    };
}

function normalizePaper(paper, ownerName) {
    var links = paper.links || {};
    return {
        id: paper.id || "",
        title: paper.title || "",
        title_url: paper.title_url || paper.titleLink || links.pdf || links.project || links.code || "",
        authors: Array.isArray(paper.authors) ? paper.authors : [],
        me: paper.me || ownerName || "",
        year: typeof paper.year === "number" ? paper.year : null,
        section: paper.section || (paper.preprint ? "preprint" : (typeof paper.year === "number" ? String(paper.year) : "preprint")),
        featured: !!(paper.featured || paper.selected || paper.recentHighlight),
        rating: paper.rating || "",
        pdf: paper.pdf || links.pdf || "",
        project: paper.project || links.project || "",
        code: paper.code || links.code || "",
        image: normalizeAssetPath(paper.image || (paper.media && paper.media.image) || ""),
        video: normalizeAssetPath(paper.video || (paper.media && paper.media.video) || ""),
        venue_html: paper.venue_html || "",
        venue: paper.venue || "",
        note: paper.note || paper.venueNote || "",
        description: paper.description || "",
        bibtex: paper.bibtex || "",
        starRepos: paper.starRepos || {}
    };
}

function renderAuthor(author, me) {
    var meta = normalizeAuthor(author);
    var isMe = String(me || "").trim().toLowerCase() === meta.name.toLowerCase();
    var nameHtml;
    var markerHtml = "";

    if (!meta.name) {
        return "";
    }

    if (isMe) {
        nameHtml = '<strong class="me">' + escapeHtml(meta.name) + "</strong>";
    } else {
        nameHtml = escapeHtml(meta.name);
    }

    if (meta.coFirst) {
        markerHtml += '<span class="author-marker">*</span>';
    }
    if (meta.corresponding) {
        markerHtml += '<span class="author-marker">&#9993;</span>';
    }

    return nameHtml + markerHtml;
}

function renderAuthors(authors, me) {
    return authors.map(function(author) {
        return renderAuthor(author, me);
    }).join(", ");
}

function renderTitle(paper) {
    var href = paper.title_url || "";
    if (!href) {
        return '<span class="paper-title pending-link" title="Link pending update">' + escapeHtml(paper.title) + "</span>";
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

function renderStarBadge(repo) {
    if (!repo) {
        return "";
    }
    return [
        '<span class="link-stars" data-star-repo="' + escapeHtml(repo) + '" hidden title="GitHub stars">',
        '    <span class="link-stars-icon" aria-hidden="true">',
        '        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">',
        '            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.57 7.57 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>',
        "        </svg>",
        "    </span>",
        '    <span class="link-stars-text">Star</span>',
        "</span>"
    ].join("");
}

function renderLinkItem(kind, href, label, repo) {
    return '<span class="paper-link-item"><a href="' + escapeHtml(href) + '">' + escapeHtml(label) + "</a>" + renderStarBadge(repo) + "</span>";
}

function renderButtonItem(label, targetId) {
    return '<span class="paper-link-item"><button type="button" class="bib-toggle" data-toggle-target="' + escapeHtml(targetId) + '">' + escapeHtml(label) + "</button></span>";
}

function renderLinks(paper) {
    var links = [];
    if (paper.pdf) {
        links.push(renderLinkItem("pdf", paper.pdf, "PDF", paper.starRepos.pdf));
    }
    if (paper.project) {
        links.push(renderLinkItem("project", paper.project, "Project", paper.starRepos.project));
    }
    if (paper.code) {
        links.push(renderLinkItem("code", paper.code, "Code", paper.starRepos.code));
    }
    if (paper.bibtex) {
        links.push(renderButtonItem("BibTeX", paper.id + "-bib"));
    }
    if (!paper.pdf && !paper.project && !paper.code && !paper.bibtex) {
        links.push('<span class="pending-link" title="Link pending update">Link pending update</span>');
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
    return '\n            <span class="highlight-tag">' + escapeHtml(formatRatingLabel(paper.rating)) + "</span>";
}

function renderBibtex(paper) {
    if (!paper.bibtex) {
        return "";
    }
    return [
        "",
        '        <div id="' + escapeHtml(paper.id) + '-bib" class="bibtex-block">',
        '<pre class="bibtex-pre">' + escapeHtml(paper.bibtex) + "</pre>",
        "        </div>"
    ].join("\n");
}

var repoStarCache = {};

function formatStarCount(value) {
    var count = Number(value || 0);
    if (count >= 1000) {
        return (Math.round(count / 100) / 10) + "k";
    }
    return String(count);
}

async function fetchRepoStars(repo) {
    if (!repo) {
        return null;
    }

    if (Object.prototype.hasOwnProperty.call(repoStarCache, repo)) {
        return repoStarCache[repo];
    }

    try {
        var response = await fetch("https://api.github.com/repos/" + repo, {
            headers: {
                "Accept": "application/vnd.github+json"
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch repo stars for " + repo);
        }
        var data = await response.json();
        var stars = typeof data.stargazers_count === "number" ? data.stargazers_count : null;
        repoStarCache[repo] = stars;
        return stars;
    } catch (error) {
        console.warn(error);
        repoStarCache[repo] = null;
        return null;
    }
}

async function hydrateRepoStars() {
    var starNodes = Array.prototype.slice.call(document.querySelectorAll(".link-stars[data-star-repo]"));
    var uniqueRepos = starNodes
        .map(function(node) { return node.getAttribute("data-star-repo"); })
        .filter(function(repo, index, array) { return repo && array.indexOf(repo) === index; });

    await Promise.all(uniqueRepos.map(async function(repo) {
        var stars = await fetchRepoStars(repo);
        if (stars === null) {
            return;
        }
        document.querySelectorAll('.link-stars[data-star-repo="' + repo.replace(/"/g, '\\"') + '"]').forEach(function(node) {
            var textNode = node.querySelector(".link-stars-text");
            if (textNode) {
                textNode.textContent = formatStarCount(stars);
            }
            node.hidden = false;
        });
    }));
}

function renderVenue(paper) {
    if (paper.venue_html) {
        return '<div class="paper-venue">\n            ' + paper.venue_html + renderRating(paper) + "\n        </div>";
    }

    if (!paper.venue) {
        return "";
    }

    var noteHtml = paper.note ? '\n            <br><span class="paper-note">' + escapeHtml(paper.note) + "</span>" : "";
    return '<div class="paper-venue">\n            <span class="venue-name">' + escapeHtml(paper.venue) + "</span>" + renderRating(paper) + noteHtml + "\n        </div>";
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
        "        " + renderVenue(paper),
        '        <div class="paper-authors">',
        "            " + renderAuthors(paper.authors || [], paper.me),
        "        </div>"
    ];

    if (paper.description) {
        parts.push('        <div class="paper-desc">');
        parts.push("            " + escapeHtml(paper.description));
        parts.push("        </div>");
    }

    parts.push("        " + renderLinks(paper));
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
    var ownerName = data.owner || data.profileName || "Wei Zhai";
    var papers = (data.papers || []).map(function(paper) {
        return normalizePaper(paper, ownerName);
    });
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
            paper.style.display = "";
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
            header.style.display = "";
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
        await hydrateRepoStars();
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
