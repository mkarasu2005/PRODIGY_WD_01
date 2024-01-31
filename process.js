function showhome(){
    document.getElementById('home').style.display='block';
    document.getElementById('about').style.display='none';
    document.getElementById('internships').style.display='none';
    document.getElementById('faqs').style.display='none';
    document.getElementById('contact').style.display='none';
}

function showAbout(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='block';
    document.getElementById('internships').style.display='none';
    document.getElementById('faqs').style.display='none';
    document.getElementById('contact').style.display='none';
}

function showIntership(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('internships').style.display='block';
    document.getElementById('faqs').style.display='none';
    document.getElementById('contact').style.display='none';
}

function showFAQs(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('internships').style.display='none';
    document.getElementById('faqs').style.display='block';
    document.getElementById('contact').style.display='none';
}

function showcontact(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('internships').style.display='none';
    document.getElementById('faqs').style.display='none';
    document.getElementById('contact').style.display='block';
}


window.addEventListener('load');