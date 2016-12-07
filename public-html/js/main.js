

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
    var body = document.getElementById("body");
    var title = document.getElementById("title");
    var subtitle = document.getElementById("subtitle");
    var content = document.getElementById("content");
    //default values
    body.style.backgroundImage = "url('media/31085034036_912d039346_o.jpg')";
    body.style.backgroundSize = "100%";
    body.style.backgroundAttachment = "fixed";
    title.innerText = "Down To The Wire";
    subtitle.innerText = "A blog about servers, networking, and other topics";
    //END default values
    if (RegExp("adventure-in-raidz-recovery.html").test(window.location.href))
    {
        content.style = "text-align: left;font-size: 1.5em;margin:5em;"
        title.innerText = "An Adventure in RAIDZ Data Recovery";
        subtitle.innerText = "ZFS, Freenas, and Bad Decisions";
    }
    if (RegExp("phys-compute-server.html").test(window.location.href))
    {
        content.style = "text-align: left; font-size: 1.4em; margin: 1em;";
        title.innerText = "Dr. Workman's New Server";
        subtitle.innerText = "Some photos and specs of a truly beastly machine.";
    }
}