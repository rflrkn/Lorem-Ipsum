// Create all the context menu items.

browser.contextMenus.create({
    id: "inputParagraph",
    title: browser.i18n.getMessage("menuItemParagraph"),
    contexts: ["editable"]
});

browser.contextMenus.create({
    id: "inputSentence",
    title: browser.i18n.getMessage("menuItemSentence"),
    contexts: ["editable"]
});

/* *************************************** */
browser.contextMenus.create({
    id: "separator-0",
    type: "separator",
    contexts: ["editable"]
});
/* *************************************** */

browser.contextMenus.create({
    id: "inputSlipsum",
    title: browser.i18n.getMessage("menuItemSlipsum"),
    contexts: ["editable"]
});

browser.contextMenus.create({
    id: "inputTripsum",
    title: browser.i18n.getMessage("menuItemTripsum"),
    contexts: ["editable"]
});

/* *************************************** */
browser.contextMenus.create({
    id: "separator-1",
    type: "separator",
    contexts: ["editable"]
});
/* *************************************** */

browser.contextMenus.create({
    id: "inputCorporate",
    title: browser.i18n.getMessage("menuItemCorporate"),
    contexts: ["editable"]
});


/* The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked. */

browser.contextMenus.onClicked.addListener(function(info, tab){
    switch(info.menuItemId){
        case "inputSentence":
            browser.tabs.executeScript({
                code: `var lorem = new Array(10);

                       lorem[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                       lorem[1] = "Elementum integer enim neque volutpat ac.";
                       lorem[2] = "Nec nam aliquam sem et tortor.";
                       lorem[3] = "Turpis massa sed elementum tempus egestas sed sed risus.";
                       lorem[4] = "Platea dictumst quisque sagittis purus.";
                       lorem[5] = "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet.";
                       lorem[6] = "Nunc aliquet bibendum enim facilisis.";
                       lorem[7] = "Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.";
                       lorem[8] = "Nibh nisl condimentum id venenatis.";
                       lorem[9] = "Id faucibus nisl tincidunt eget nullam non nisi."; 
                           
                       var text = lorem[Math.floor(Math.random() * 10)];
                       if(document.activeElement.value == ""){
                            document.activeElement.value = text;
                       } else {
                            document.activeElement.value = document.activeElement.value + " " + text;
                       }`

            });
            break;
        case "inputParagraph":
            browser.tabs.executeScript({
                code: `var lorem = new Array(10);

                       lorem[0] = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
                       lorem[1] = "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";
                       lorem[2] = "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.";
                       lorem[3] = "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";
                       lorem[4] = "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.";
                       lorem[5] = "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.";
                       lorem[6] = "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.";
                       lorem[7] = "Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.";
                       lorem[8] = "Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.";
                       lorem[9] = "Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Gratuitous octopus niacin, sodium glutimate.";
                       
                       var text = lorem[Math.floor(Math.random() * 10)];
                       if(document.activeElement.value == ""){
                            document.activeElement.value = text;
                       } else {
                            document.activeElement.value = document.activeElement.value + " " + text;
                       }`

            });
            break;
        case "inputSlipsum":
            browser.tabs.executeScript({
                code: `var slipsum = new Array(10);
                       slipsum[0] = "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?";
                       slipsum[1] = "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.";
                       slipsum[2] = "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.";
                       slipsum[3] = "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.";
                       slipsum[4] = "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.";
                       slipsum[5] = "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.";
                       slipsum[6] = "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.";
                       slipsum[7] = "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.";
                       slipsum[8] = "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?";
                       slipsum[9] = "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.";
                       
                       var text = slipsum[Math.floor(Math.random() * 10)];
                       if(document.activeElement.value == ""){
                            document.activeElement.value = text;
                       } else {
                            document.activeElement.value = document.activeElement.value + " " + text;
                       }`

            });
            break;
        case "inputTripsum":
            browser.tabs.executeScript({
                code: `var trump = new Array(13);
                       trump[0] = "Lorem Ispum is a choke artist. It chokes!";
                       trump[1] = "An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?";
                       trump[2] = "I’m the best thing that ever happened to placeholder text. You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life. He’s not a word hero. He’s a word hero because he was captured. I like text that wasn’t captured.";
                       trump[3] = "You could see there was text coming out of her eyes, text coming out of her wherever. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud. I know words. I have the best words. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. The best taco bowls are made in Trump Tower Grill. I love Hispanics!";
                       trump[4] = "I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. My text is long and beautiful, as, it has been well documented, are various other parts of my website.";
                       trump[5] = "An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? You could see there was text coming out of her eyes, text coming out of her wherever. We have so many things that we have to do better... and certainly ipsum is one of them. My placeholder text, I think, is going to end up being very good with women.";
                       trump[6] = "We have so many things that we have to do better... and certainly ipsum is one of them. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. This placeholder text is gonna be HUGE. The other thing with Lorem Ipsum is that you have to take out its family.";
                       trump[7] = "I’m the best thing that ever happened to placeholder text. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. That other text? Sadly, it’s no longer a 10.";
                       trump[8] = "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?";
                       trump[9] = "Despite the constant negative ipsum covfefe.";
                       trump[10] = "An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. Lorem Ispum is a choke artist. It chokes!";
                       trump[11] = "I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem card.";
                       trump[12] = "You could see there was text coming out of her eyes, text coming out of her wherever. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right? When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.";                       
                       
                       var text = trump[Math.floor(Math.random() * 13)];
                       if(document.activeElement.value == ""){
                            document.activeElement.value = text;
                       } else {
                            document.activeElement.value = document.activeElement.value + " " + text;
                       }`

            });
        case "inputCorporate":
            browser.tabs.executeScript({
                code: `var corporate = new Array(15);
                       corporate[0] = "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.";
                       corporate[1] = "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.";
                       corporate[2] = "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.";
                       corporate[3] = "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.";
                       corporate[4] = "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.";
                       corporate[5] = "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.";
                       corporate[6] = "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.";
                       corporate[7] = "Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.";
                       corporate[8] = "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.";
                       corporate[9] = "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.";
                       corporate[10] = "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or 'organic' sources.";
                       corporate[11] = "Credibly innovate granular internal or 'organic' sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.";
                       corporate[12] = "Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.";
                       corporate[13] = "Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.";
                       corporate[14] = "Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.";
                       
                       
                       
                       var text = corporate[Math.floor(Math.random() * 15)];
                       if(document.activeElement.value == ""){
                            document.activeElement.value = text;
                       } else {
                            document.activeElement.value = document.activeElement.value + " " + text;
                       }`

            });
            break;
    }
});