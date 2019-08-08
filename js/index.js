const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav_links = document.querySelectorAll("nav a");
nav_links[0].textContent = siteContent["nav"]["nav-item-1"];
nav_links[1].textContent = siteContent["nav"]["nav-item-2"];
nav_links[2].textContent = siteContent["nav"]["nav-item-3"];
nav_links[3].textContent = siteContent["nav"]["nav-item-4"];
nav_links[4].textContent = siteContent["nav"]["nav-item-5"];
nav_links[5].textContent = siteContent["nav"]["nav-item-6"];

let cta_section_text = document.querySelector(".cta-text h1");
cta_section_text.textContent = siteContent["cta"]["h1"];
cta_section_text.innerHTML = "DOM<br> Is<br> Awesome";
// let br_element = document.createElement("BR");


let cta_section_button = document.querySelector(".cta-text button")
cta_section_button.textContent = siteContent["cta"]["button"];

let cta_image = document.getElementById("cta-img");
cta_image.setAttribute('src', siteContent["cta"]["img-src"]);

let just_top_content = document.querySelectorAll(".top-content");
just_top_content[0].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["features-h4"];
just_top_content[0].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["features-content"];
just_top_content[0].getElementsByTagName("h4")[1].textContent = siteContent["main-content"]["about-h4"];
just_top_content[0].getElementsByTagName("p")[1].textContent = siteContent["main-content"]["about-content"];

let middle_image = document.getElementById("middle-img");
middle_image.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let just_bottom_content = document.querySelectorAll(".bottom-content");
just_bottom_content[0].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["services-h4"];
just_bottom_content[0].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["services-content"];
just_bottom_content[0].getElementsByTagName("h4")[1].textContent = siteContent["main-content"]["product-h4"];
just_bottom_content[0].getElementsByTagName("p")[1].textContent = siteContent["main-content"]["product-content"];
just_bottom_content[0].getElementsByTagName("h4")[2].textContent = siteContent["main-content"]["vision-h4"];
just_bottom_content[0].getElementsByTagName("p")[2].textContent = siteContent["main-content"]["vision-content"];

let contacts = document.querySelector(".contact h4");
contacts.textContent = siteContent["contact"]["contact-h4"];

let contacts_p = document.querySelectorAll(".contact p");
contacts_p[0].textContent = siteContent["contact"]["address"];
contacts_p[0].innerHTML = "123 Way 456 Street<br>Somewhere, US";
contacts_p[1].textContent = siteContent["contact"]["phone"];
contacts_p[2].textContent = siteContent["contact"]["email"];

let footer_copy = document.querySelector("footer p");
footer_copy.textContent = siteContent["footer"]["copyright"];
