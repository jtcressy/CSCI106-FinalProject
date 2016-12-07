function navbarOnLoad() {
    var url = window.location.href;
    $("#navbar a").each(function() {
        if (url == (this.href)) {
            $(this).closest("li").addClass("active");
        }
    });
}

function bodyOnLoad() {
    navbarOnLoad();
    body = document.getElementById("body");
    title = document.getElementById("title");
    subtitle = document.getElementById("subtitle");
    content = document.getElementById("content");
    if (RegExp("adventure-in-raidz-recovery.html").test(window.location.href))
    {
        content.style = "text-align: left;font-size: 1.5em;margin:5em;"
        title.innerText = "An Adventure in RAIDZ Data Recovery";
        subtitle.innerText = "ZFS, Freenas, and Bad Decisions";
    }
    if (RegExp("index.html").test(window.location.href))
    {
        body.style.backgroundImage = "url('media/31085034036_912d039346_o.jpg')";
        title.innerText = "Down To The Wire";
        subtitle.innerText = "A blog about servers, networking, and other topics";
    }
    if (RegExp("phys-compute-server.html").test(window.location.href))
    {
        content.style = "text-align: left; font-size: 1.3em; margin: 2em;";
        title.innerText = "Dr. Workman's New Server";
        subtitle.innerText = "Some photos and specs of a truly beastly machine.";
    }
}