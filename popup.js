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

name_text.addEventListener("click", openLink);
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

document.getElementById("name").innerHTML = links.name;

function openLink()
{
    var linktoopen;
    if(this.id == 'name')
        alert(`Thanks for using me ${name}!`)
    else if(this.id == 'website_link')
        linktoopen = links.website_link;
    else if(this.id == 'linkedin_link')
        linktoopen = links.linkedin_link;
    else if(this.id == 'medium_link')
        linktoopen = links.medium_link;
    else if(this.id == 'twitter_link')
        linktoopen = links.twitter_link;
    else if(this.id == 'github_link')
        linktoopen = links.github_link;
    else if(this.id == 'whatsapp_link')
        linktoopen = links.whatsapp_link;
    else if(this.id == 'facebook_link')
        linktoopen = links.facebook_link;
    else if(this.id == 'youtube_link')
        linktoopen = links.youtube_link;
        
    else if(this.id == 'meet_link')
        linktoopen = links.meet_link;
    else if(this.id == 'teams_link')
        linktoopen = links.teams_link;
    else if(this.id == 'zoom_link')
        linktoopen = links.zoom_link;
    else if(this.id == 'webex_link')
        linktoopen = teams.webex_link;
        
    window.open(linktoopen, '_blank'); 
    //copyToClipboard(linktoopen);
};

/*
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
*/
