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

[["neut1", 1], aj, {s: " They spread butter on the sourdough. "}],
[["neut1", 1], aj, {s: " She poured coffee grounds on the flower beds. "}],
[["neut1", 1], aj, {s: " He made pizza for the potluck. "}],

[["neut2", 2], aj, {s: " They set up tents in the backyard. "}],
[["neut2", 2], aj, {s: " She grew sunflowers in the greenhouse. "}],
[["neut2", 2], aj, {s: " He sent an email to the band members. "}],

[["neut3", 3], aj, {s: " They served cocktails at the ballgame. "}],
[["neut3", 3], aj, {s: " She used a towel as a bath mat. "}],
[["neut3", 3], aj, {s: " He painted turtles on the skylight. "}],

[["neut4", 4], aj, {s: " They used school busses for the ski trip. "}],
[["neut4", 4], aj, {s: " She climbed mountains with a guide dog. "}],
[["neut4", 4], aj, {s: " He took chicken feed from the rooster cage. "}],

[["neut5", 5], aj, {s: " They wore beanies to the concert. "}],
[["neut5", 5], aj, {s: " She slipped casefiles under the news reports. "}],
[["neut5", 5], aj, {s: " He picked wildflowers for the bouquet. "}],

[["neut6", 6], aj, {s: " They kicked branches off the building. "}],
[["neut6", 6], aj, {s: " She traded pennies for the peanuts. "}],
[["neut6", 6], aj, {s: " He taped messages to the blackboard. "}],

[["neut7", 7], aj, {s: " They built shelters in the bushes. "}],
[["neut7", 7], aj, {s: " She drew portraits in the waiting room. "}],
[["neut7", 7], aj, {s: " He mailed parcels to the senators. "}],

[["neut8", 8], aj, {s: " They gave raises to the employees. "}],
[["neut8", 8], aj, {s: " She stamped visas for the tourists. "}],
[["neut8", 8], aj, {s: " He wore khakis to the wedding. "}],

[["pos1", 1], aj, {s: " She bought presents for the new baby. "}],
[["pos1", 1], aj, {s: " He tickled the lion cub on the safari. "}],
[["pos1", 1], aj, {s: " They sang love songs all night long. "}],

[["pos2", 2], aj, {s: " She kissed the rescue dog after adopting it. "}],
[["pos2", 2], aj, {s: " He called his mom to tell her the good news. "}],
[["pos2", 2], aj, {s: " They stopped for cake after the musical. "}],

[["pos3", 3], aj, {s: " She achieved her dream of being famous. "}],
[["pos3", 3], aj, {s: " He inspired the children to succeed. "}],
[["pos3", 3], aj, {s: " They transformed the garden into an oasis. "}],

[["pos4", 4], aj, {s: " She hugged her sister after she graduated. "}],
[["pos4", 4], aj, {s: " He surprised the students with homemade cookies. "}],
[["pos4", 4], aj, {s: " They cheered Martin toward the finish line. "}],

[["pos5", 5], aj, {s: " She watched movies with her best friend. "}],
[["pos5", 5], aj, {s: " He mastered cake decorating for his friend's birthday. "}],
[["pos5", 5], aj, {s: " They gave tips to the ice cream man. "}],

[["pos6", 6], aj, {s: "She searched Google for honeymoon destinations.  "}],
[["pos6", 6], aj, {s: " He enchanted the children with magic tricks. "}],
[["pos6", 6], aj, {s: " They fascinated the kitten with a feather boa. "}],

[["pos7", 7], aj, {s: " She praised the students for their hard work. "}],
[["pos7", 7], aj, {s: " He called the excited girls to the stage. "}],
[["pos7", 7], aj, {s: " They pleased the manager with their  hard work. "}],

[["pos8", 8], aj, {s: " She told her grandmother a heartwarming tale.  "}],
[["pos8", 8], aj, {s: " He helped the boyscouts earn a merit  badge.  "}],
[["pos8", 8], aj, {s: " They waved to the characters at the Disneyland parade. "}],

[["neg1", 1], aj, {s: " She yelled obscenities at the police officer. "}],
[["neg1", 1], aj, {s: " He kicked dirt in the dog's eyes. "}],
[["neg1", 1], aj, {s: " They broke laws in every country. "}],

[["neg2", 2], aj, {s: " She chewed out the mayor for election fraud. "}],
[["neg2", 2], aj, {s: " He tricked the tourists out of their money. "}],
[["neg2", 2], aj, {s: " They tricked voters for fraudulent votes. "}],

[["neg3", 3], aj, {s: " She sunk the boat in the harbor. "}],
[["neg3", 3], aj, {s: " He found a tick on his earlobe. "}],
[["neg3", 3], aj, {s: " They banned lacrosse from the fields. "}],

[["neg4", 4], aj, {s: " She pinched her little brother on the arm. "}],
[["neg4", 4], aj, {s: " He flew his paper airplane into the lake. "}],
[["neg4", 4], aj, {s: " They sent hate mail to the councilman. "}],

[["neg5", 5], aj, {s: " She burned popcorn in the microwave. "}],
[["neg5", 5], aj, {s: " He knocked over the bookshelf in the living room. "}],
[["neg5", 5], aj, {s: " They found out their car was stolen. "}],

[["neg6", 6], aj, {s: " She tasted the milk that had gone sour. "}],
[["neg6", 6], aj, {s: " He burned pictures of his ex-girlfriend. "}],
[["neg6", 6], aj, {s: " They ate dinner in complete silence. "}],

[["neg7", 7], aj, {s: " She framed the innocent bystander. "}],
[["neg7", 7], aj, {s: " He became sick from rotten meat. "}],
[["neg7", 7], aj, {s: " They vandalized the side of the schoolbus. "}],

[["neg8", 8], aj, {s: " She forged her mother's signature. "}],
[["neg8", 8], aj, {s: " He closed the door on the friendly neighbor. "}],
[["neg8", 8], aj, {s: " They threatened to sue for perjury.  "}]

];