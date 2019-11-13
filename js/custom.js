const generateRandomBg = (idx=-1) => {
    const colorArr = ['#ED1C24','#22333B','#5E503F','#1A936F','#004E89', '#7D1538', '#BC2C1A', '#020402', '#758173'];
    let bgColor;
    if(idx==-1)
        bgColor =  colorArr[Math.floor(Math.random()*colorArr.length)];
    else
        bgColor = colorArr[idx];
    
    document.getElementById('myMainBg').style.background = bgColor;
    // document.querySelectorAll('#colorlib-aside #colorlib-main-menu ul li.active a').setAttribute('style',`color:${bgColor}`)
}

generateRandomQuote = (idx=-1) => {
    const quoteArr = [
        "In the end, it's not the years in your life that count. It's the life in your years",
        "Life isn't about finding yourself. Life is about creating yourself",
        "You get in life what you have the courage to ask for",
        "The most important thing is to enjoy your life -- to be happy -- it's all that matters",
        "Life is 10% what happens to us and 90% how we react to it",
        "Your time is limited, so don't waste it living someone else's life",
        "Fix the cause, not the symptom",
        "Java is to JavaScript what car is to Carpet",
        "In order to be irreplaceable, one must always be different"
    ];
    let displayQuote;
    if(idx==-1)
        displayQuote =  quoteArr[Math.floor(Math.random()*quoteArr.length)];
    else
        displayQuote = quoteArr[idx];
    
    document.getElementById('myQuoteText').innerText = `" ${displayQuote} "`;
}

const contactFormSubmit = ()=>{
    document.getElementById("contactSubmitBtn").setAttribute("value","Sending...");
    $.post("https://script.google.com/macros/s/AKfycbyBEgQL6yY5bC999gP3J6AsroGhBf5xihrxALI/exec",$('#gform').serialize(),()=>{alert('Your request has been submitted successfully!');document.getElementById("gform").reset();document.getElementById("contactSubmitBtn").setAttribute("value","Send Message");});
    return false;
}

window.onload = ()=>{
    generateRandomBg();
    generateRandomQuote();
}