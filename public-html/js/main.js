

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
    title.innerText = "Down To The Wire";
    subtitle.innerText = "A blog about servers, networking, and other topics";
    //END default values
    if (RegExp("form.php").test(window.location.href))
    {
        content.style = "text-align: center;font-size: 1.3em;margin:5em;";
        title.innerText = "Form Demo";
        subtitle.innerText = "Using PHP as backend to make things a little interesting";
    }
    if (RegExp("adventure-in-raidz-recovery.html").test(window.location.href))
    {
        content.style = "text-align: left;font-size: 1.5em;margin:2em;";
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

function mail(email) {
    
}