var shuffleSequence = seq("intro", sepWith("sep", seq("practice")), sepWith("sep", rshuffle(startsWith("neut"), startsWith("pos"), startsWith("neg"))));

var practiceItemTypes = ["practice"];

var aj = "AcceptabilityJudgment";

var defaults = [
    "Separator", { transfer: 500,
                   normalMessage: "Please wait for the next sentence.",
                   errorMessage: "Wrong. Please wait for the next sentence." },
    "AcceptabilityJudgment", { q: "How would you characterize the overall emotion here?",
    							as: ["Positive",
                                   "Neutral",
                                   "Negative"],
                               presentAsScale: false,
                               hasCorrect: false,
                               randomOrder: false },
    "Message", { hideProgressBar: true }
];


var items = [ ["sep", "Separator", { }],


["intro", "Form", { html: { include: "example_intro.html" } }],

["practice", aj, {s: "John walked the dog.", hasCorrect: 1, instructions: "This is an example of a neutral sentence. Choose the \"Neutral\" option to proceed."}],
["practice", aj, {s: "Mary excitedly greeted the arriving guests.", hasCorrect: 0, instructions: "This sentence is more emotive. Choose an appropriate response."}],
["practice", aj, {s: "The student was arrested for his violent behavior.", hasCorrect: 2, instructions: "This is the last practice before the survey begins."}],

[["neut1", 1], aj, {s: "<p> They spread butter on the sourdough. </p>"}],
[["neut1", 1], aj, {s: "<p> She poured coffee grounds on the flower beds. </p>"}],
[["neut1", 1], aj, {s: "<p> He made pizza for the potluck. </p>"}],

[["neut2", 2], aj, {s: "<p> They set up tents in the backyard. </p>"}],
[["neut2", 2], aj, {s: "<p> She grew sunflowers in the greenhouse. </p>"}],
[["neut2", 2], aj, {s: "<p> He sent an email to the band members. </p>"}],

[["neut3", 3], aj, {s: "<p> They served cocktails at the ballgame. </p>"}],
[["neut3", 3], aj, {s: "<p> She used a towel as a bath mat. </p>"}],
[["neut3", 3], aj, {s: "<p> He painted turtles on the skylight. </p>"}],

[["neut4", 4], aj, {s: "<p> They used school busses for the ski trip. </p>"}],
[["neut4", 4], aj, {s: "<p> She climbed Lassen with a guide dog. </p>"}],
[["neut4", 4], aj, {s: "<p> He took chicken feed from the rooster cage. </p>"}],

[["neut5", 5], aj, {s: "<p> They wore beanies to the concert. </p>"}],
[["neut5", 5], aj, {s: "<p> She slipped casefiles under the news reports. </p>"}],
[["neut5", 5], aj, {s: "<p> He picked wildflowers for the bouquet. </p>"}],

[["neut6", 6], aj, {s: "<p> They kicked branches off the building. </p>"}],
[["neut6", 6], aj, {s: "<p> She traded pennies for the peanuts. </p>"}],
[["neut6", 6], aj, {s: "<p> He taped messages to the blackboard. </p>"}],

[["neut7", 7], aj, {s: "<p> They built shelters in the bushes. </p>"}],
[["neut7", 7], aj, {s: "<p> She drew portraits in the waiting room. </p>"}],
[["neut7", 7], aj, {s: "<p> He mailed parcels to the senators. </p>"}],

[["neut8", 8], aj, {s: "<p> They gave raises to the employees. </p>"}],
[["neut8", 8], aj, {s: "<p> She stamped visas for the tourists. </p>"}],
[["neut8", 8], aj, {s: "<p> He wore khakis to the wedding. </p>"}],

[["pos1", 1], aj, {s: "<p> She bought presents for the new baby. </p>"}],
[["pos1", 1], aj, {s: "<p> He tickled the lion cub on the safari. </p>"}],
[["pos1", 1], aj, {s: "<p> They sang love songs all night long. </p>"}],

[["pos2", 2], aj, {s: "<p> She kissed the rescue dog after adopting it. </p>"}],
[["pos2", 2], aj, {s: "<p> He called his mom to tell her the good news. </p>"}],
[["pos2", 2], aj, {s: "<p> They stopped for cake after the musical. </p>"}],

[["pos3", 3], aj, {s: "<p> She achieved her dream of being famous. </p>"}],
[["pos3", 3], aj, {s: "<p> He inspired the children to succeed. </p>"}],
[["pos3", 3], aj, {s: "<p> They transformed the garden into an oasis. </p>"}],

[["pos4", 4], aj, {s: "<p> She hugged her sister after she graduated. </p>"}],
[["pos4", 4], aj, {s: "<p> He surprised the students with homemade cookies. </p>"}],
[["pos4", 4], aj, {s: "<p> They cheered Martin toward the finish line. </p>"}],

[["pos5", 5], aj, {s: "<p> She watched movies with her best friend. </p>"}],
[["pos5", 5], aj, {s: "<p> He mastered cake decorating for his friend's birthday. </p>"}],
[["pos5", 5], aj, {s: "<p> They gave tips to the ice cream man. </p>"}],

[["pos6", 6], aj, {s: "<p>She searched Google for honeymoon destinations.  </p>"}],
[["pos6", 6], aj, {s: "<p> He enchanted the children with magic tricks. </p>"}],
[["pos6", 6], aj, {s: "<p> They fascinated the kitten with a feather boa. </p>"}],

[["pos7", 7], aj, {s: "<p> She praised the students for their hard work. </p>"}],
[["pos7", 7], aj, {s: "<p> He called the excited girls to the stage. </p>"}],
[["pos7", 7], aj, {s: "<p> They pleased the manager with their  hard work. </p>"}],

[["pos8", 8], aj, {s: "<p> She told her grandmother a heartwarming tale.  </p>"}],
[["pos8", 8], aj, {s: "<p> He helped the boyscouts earn a merit  badge.  </p>"}],
[["pos8", 8], aj, {s: "<p> They waved to the characters at the Disneyland parade. </p>"}],

[["neg1", 1], aj, {s: "<p> She yelled obscenities at the police officer. </p>"}],
[["neg1", 1], aj, {s: "<p> He kicked dirt in the dog's eyes. </p>"}],
[["neg1", 1], aj, {s: "<p> They broke laws in every country. </p>"}],

[["neg2", 2], aj, {s: "<p> She chewed out the mayor for election fraud. </p>"}],
[["neg2", 2], aj, {s: "<p> He tricked the tourists out of their money. </p>"}],
[["neg2", 2], aj, {s: "<p> They tricked voters for fraudulent votes. </p>"}],

[["neg3", 3], aj, {s: "<p> She sunk the boat in the harbor. </p>"}],
[["neg3", 3], aj, {s: "<p> He found a tick on his earlobe. </p>"}],
[["neg3", 3], aj, {s: "<p> They banned lacrosse from the fields. </p>"}],

[["neg4", 4], aj, {s: "<p> She pinched her little brother on the arm. </p>"}],
[["neg4", 4], aj, {s: "<p> He flew his paper airplane into the lake. </p>"}],
[["neg4", 4], aj, {s: "<p> They sent hate mail to the councilman. </p>"}],

[["neg5", 5], aj, {s: "<p> She burned popcorn in the microwave. </p>"}],
[["neg5", 5], aj, {s: "<p> He knocked over the bookshelf in the living room. </p>"}],
[["neg5", 5], aj, {s: "<p> They found out their car was stolen. </p>"}],

[["neg6", 6], aj, {s: "<p> She tasted the milk that had gone sour. </p>"}],
[["neg6", 6], aj, {s: "<p> He burned pictures of his ex-girlfriend. </p>"}],
[["neg6", 6], aj, {s: "<p> They ate dinner in complete silence. </p>"}],

[["neg7", 7], aj, {s: "<p> She framed the innocent bystander. </p>"}],
[["neg7", 7], aj, {s: "<p> He became sick from rotten meat. </p>"}],
[["neg7", 7], aj, {s: "<p> They vandalized the side of the schoolbus. </p>"}],

[["neg8", 8], aj, {s: "<p> She forged her mother's signature. </p>"}],
[["neg8", 8], aj, {s: "<p> He closed the door on the friendly neighbor. </p>"}],
[["neg8", 8], aj, {s: "<p> They threatened to sue for perjury.  </p>"}]

];