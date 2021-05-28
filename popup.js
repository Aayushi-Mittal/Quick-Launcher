let links = {
    "name": 'User Name',
    "website_link": 'https://google.com/',
    "linkedin_link": 'https://www.linkedin.com/in/',
    "medium_link": 'https://medium.com/',
    "twitter_link": 'https://twitter.com/',
    "github_link": 'https://github.com/',
    "whatsapp_link": 'https://web.whatsapp.com/',
    "facebook_link": 'https://facebook.com',
    "youtube_link": 'https://www.youtube.com/',
    "meet_link": 'https://meet.google.com/',
    "teams_link": 'https://teams.microsoft.com/',
    "zoom_link": 'https://zoom.us/meetings',
    "webex_link": 'https://cart.webex.com/sign-up'
}

/*
var name_text = document.getElementById('name');
var website_link = document.getElementById('website_link');
var linkedin_link = document.getElementById('linkedin_link');
var medium_link = document.getElementById('medium_link');
var twitter_link = document.getElementById('twitter_link');
var github_link = document.getElementById('github_link');
var whatsapp_link = document.getElementById('whatsapp_link');
var facebook_link = document.getElementById('facebook_link');
var youtube_link = document.getElementById('youtube_link');

var meet_link = document.getElementById('meet_link');
var teams_link = document.getElementById('teams_link');
var zoom_link = document.getElementById('zoom_link');
var webex_link = document.getElementById('webex_link');

name_text.addEventListener("click", sayHi);
website_link.addEventListener("click", openLink);
linkedin_link.addEventListener("click", openLink);
medium_link.addEventListener("click", openLink);
twitter_link.addEventListener("click", openLink);
github_link.addEventListener("click", openLink);
whatsapp_link.addEventListener("click", openLink);
facebook_link.addEventListener("click", openLink);
youtube_link.addEventListener("click", openLink);

meet_link.addEventListener("click", openLink);
teams_link.addEventListener("click", openLink);
zoom_link.addEventListener("click", openLink);
webex_link.addEventListener("click", openLink);
*/

var name_text = document.getElementById('name');
var website_open = document.getElementById('website_open');
var linkedin_open = document.getElementById('linkedin_open');
var medium_open = document.getElementById('medium_open');
var twitter_open = document.getElementById('twitter_open');
var github_open = document.getElementById('github_open');
var whatsapp_open = document.getElementById('whatsapp_open');
var facebook_open = document.getElementById('facebook_open');
var youtube_open = document.getElementById('youtube_open');

var meet_open = document.getElementById('meet_open');
var teams_open = document.getElementById('teams_open');
var zoom_open = document.getElementById('zoom_open');
var webex_open = document.getElementById('webex_open');

var website_copy = document.getElementById('website_copy');
var linkedin_copy = document.getElementById('linkedin_copy');
var medium_copy = document.getElementById('medium_copy');
var twitter_copy = document.getElementById('twitter_copy');
var github_copy = document.getElementById('github_copy');
var whatsapp_copy = document.getElementById('whatsapp_copy');
var facebook_copy = document.getElementById('facebook_copy');
var youtube_copy = document.getElementById('youtube_copy');

var meet_copy = document.getElementById('meet_copy');
var teams_copy = document.getElementById('teams_copy');
var zoom_copy = document.getElementById('zoom_copy');
var webex_copy = document.getElementById('webex_copy');



name_text.addEventListener("click", sayHi);
website_open.addEventListener("click", openLink);
linkedin_open.addEventListener("click", openLink);
medium_open.addEventListener("click", openLink);
twitter_open.addEventListener("click", openLink);
github_open.addEventListener("click", openLink);
whatsapp_open.addEventListener("click", openLink);
facebook_open.addEventListener("click", openLink);
youtube_open.addEventListener("click", openLink);

meet_open.addEventListener("click", openLink);
teams_open.addEventListener("click", openLink);
zoom_open.addEventListener("click", openLink);
webex_open.addEventListener("click", openLink);

website_copy.addEventListener("click", copyLink);
linkedin_copy.addEventListener("click", copyLink);
medium_copy.addEventListener("click", copyLink);
twitter_copy.addEventListener("click", copyLink);
github_copy.addEventListener("click", copyLink);
whatsapp_copy.addEventListener("click", copyLink);
facebook_copy.addEventListener("click", copyLink);
youtube_copy.addEventListener("click", copyLink);

meet_copy.addEventListener("click", copyLink);
teams_copy.addEventListener("click", copyLink);
zoom_copy.addEventListener("click", copyLink);
webex_copy.addEventListener("click", copyLink);


document.getElementById("name").innerHTML = links.name;

function sayHi()
{
    var n = links.name;
    alert(`Hi ${n}!`)
}

function openLink()
{
    var linktoopen;
    if(this.id == 'website_open')
        linktoopen = links.website_link;
    else if(this.id == 'linkedin_open')
        linktoopen = links.linkedin_link;
    else if(this.id == 'medium_open')
        linktoopen = links.medium_link;
    else if(this.id == 'twitter_open')
        linktoopen = links.twitter_link;
    else if(this.id == 'github_open')
        linktoopen = links.github_link;
    else if(this.id == 'whatsapp_open')
        linktoopen = links.whatsapp_link;
    else if(this.id == 'facebook_open')
        linktoopen = links.facebook_link;
    else if(this.id == 'youtube_open')
        linktoopen = links.youtube_link;
    else if(this.id == 'meet_open')
        linktoopen = links.meet_link;
    else if(this.id == 'teams_open')
        linktoopen = links.teams_link;
    else if(this.id == 'zoom_open')
        linktoopen = links.zoom_link;
    else if(this.id == 'webex_open')
        linktoopen = links.webex_link;
    //alert(`link: ${linktoopen}`)
    window.open(linktoopen, '_blank'); 
    //copyToClipboard(linktoopen);
};

function copyToClipboard(text) {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
  };

function copyLink()
{
    var linktoopen;
    if(this.id == 'website_copy')
        linktoopen = links.website_link;
    else if(this.id == 'linkedin_copy')
        linktoopen = links.linkedin_link;
    else if(this.id == 'medium_copy')
        linktoopen = links.medium_link;
    else if(this.id == 'twitter_copy')
        linktoopen = links.twitter_link;
    else if(this.id == 'github_copy')
        linktoopen = links.github_link;
    else if(this.id == 'whatsapp_copy')
        linktoopen = links.whatsapp_link;
    else if(this.id == 'facebook_copy')
        linktoopen = links.facebook_link;
    else if(this.id == 'youtube_copy')
        linktoopen = links.youtube_link;
    else if(this.id == 'meet_copy')
        linktoopen = links.meet_link;
    else if(this.id == 'teams_copy')
        linktoopen = links.teams_link;
    else if(this.id == 'zoom_copy')
        linktoopen = links.zoom_link;
    else if(this.id == 'webex_copy')
        linktoopen = links.webex_link;

        const input = document.createElement('input');
        input.style.position = 'fixed';
        input.style.opacity = 0;
        input.value = linktoopen;
        document.body.appendChild(input);
        input.select();
        document.execCommand('Copy');
        document.body.removeChild(input);
        alert(`Copied the link : ${linktoopen}`);
}

/*
function copyLink()
{
    linktoopen.select();
    linktoopen.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the link: " + linktoopen.value);
    console.log("Copied the link :)");
    var copyText = links.id;
    copyText.select();
    //copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the link: " + copyText.value);
    console.log("Copied the link :)");
};
*/

// javascript:(function(){ let script = createElement('script'); script.src = "popup.js"; document.body.appendChild('script); })();
//window.open('https://www.google.com', '_blank');
 
