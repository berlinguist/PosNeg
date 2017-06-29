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

["practice", aj, {s: {html: "<big> <b> John walked the dog."}, hasCorrect: 1, instructions: "This is an example of a neutral sentence. Choose the \"Neutral\" option to proceed."}],
["practice", aj, {s: {html: "<big> <b>Mary excitedly greeted the arriving guests."}, hasCorrect: 0, instructions: "This sentence is more emotive. Choose an appropriate response."}],
["practice", aj, {s: {html: "<big> <b>The student was arrested for his violent behavior."}, hasCorrect: 2, instructions: "This is the last practice before the survey begins."}],

[["neut1", 1], aj, {s: {html: "<big> <b> They spread butter on the sourdough. "}}],
[["neut1", 1], aj, {s: {html: "<big> <b> She poured coffee grounds on the flower beds. "}}],
[["neut1", 1], aj, {s: {html: "<big> <b> He made pizza for the potluck. "}}],

[["neut2", 2], aj, {s: {html: "<big> <b> They set up tents in the backyard. "}}],
[["neut2", 2], aj, {s: {html: "<big> <b> She grew sunflowers in the greenhouse. "}}],
[["neut2", 2], aj, {s: {html: "<big> <b> He sent an email to the band members. "}}],

[["neut3", 3], aj, {s: {html: "<big> <b> They served cocktails at the ballgame. "}}],
[["neut3", 3], aj, {s: {html: "<big> <b> She used a towel as a bath mat. "}}],
[["neut3", 3], aj, {s: {html: "<big> <b> He painted turtles on the skylight. "}}],

[["neut4", 4], aj, {s: {html: "<big> <b> They used school busses for the ski trip. "}}],
[["neut4", 4], aj, {s: {html: "<big> <b> She climbed mountains with a guide dog. "}}],
[["neut4", 4], aj, {s: {html: "<big> <b> He took chicken feed from the rooster cage. "}}],

[["neut5", 5], aj, {s: {html: "<big> <b> They wore beanies to the concert. "}}],
[["neut5", 5], aj, {s: {html: "<big> <b> She slipped casefiles under the news reports. "}}],
[["neut5", 5], aj, {s: {html: "<big> <b> He picked wildflowers for the bouquet. "}}],

[["neut6", 6], aj, {s: {html: "<big> <b> They kicked branches off the building. "}}],
[["neut6", 6], aj, {s: {html: "<big> <b> She traded pennies for the peanuts. "}}],
[["neut6", 6], aj, {s: {html: "<big> <b> He taped messages to the blackboard. "}}],

[["neut7", 7], aj, {s: {html: "<big> <b> They built shelters in the bushes. "}}],
[["neut7", 7], aj, {s: {html: "<big> <b> She drew portraits in the waiting room. "}}],
[["neut7", 7], aj, {s: {html: "<big> <b> He mailed parcels to the senators. "}}],

[["neut8", 8], aj, {s: {html: "<big> <b> They gave raises to the employees. "}}],
[["neut8", 8], aj, {s: {html: "<big> <b> She stamped visas for the tourists. "}}],
[["neut8", 8], aj, {s: {html: "<big> <b> He wore khakis to the wedding. "}}],

[["pos1", 9], aj, {s: {html: "<big> <b> She bought presents for the new baby. "}}],
[["pos1", 9], aj, {s: {html: "<big> <b> He tickled the lion cub on the safari. "}}],
[["pos1", 9], aj, {s: {html: "<big> <b> They sang love songs all night long. "}}],

[["pos2", 10], aj, {s: {html: "<big> <b> She kissed the rescue dog after adopting it. "}}],
[["pos2", 10], aj, {s: {html: "<big> <b> He called his mom to tell her the good news. "}}],
[["pos2", 10], aj, {s: {html: "<big> <b> They stopped for cake after the musical. "}}],

[["pos3", 11], aj, {s: {html: "<big> <b> She achieved her dream of being famous. "}}],
[["pos3", 11], aj, {s: {html: "<big> <b> He inspired the children to succeed. "}}],
[["pos3", 11], aj, {s: {html: "<big> <b> They transformed the garden into an oasis. "}}],

[["pos4", 12], aj, {s: {html: "<big> <b> She hugged her sister after she graduated. "}}],
[["pos4", 12], aj, {s: {html: "<big> <b> He surprised the students with homemade cookies. "}}],
[["pos4", 12], aj, {s: {html: "<big> <b> They cheered Martin toward the finish line. "}}],

[["pos5", 13], aj, {s: {html: "<big> <b> She watched movies with her best friend. "}}],
[["pos5", 13], aj, {s: {html: "<big> <b> He mastered cake decorating for his friend's birthday. "}}],
[["pos5", 13], aj, {s: {html: "<big> <b> They gave tips to the ice cream man. "}}],

[["pos6", 14], aj, {s: {html: "<big> <b>She searched Google for honeymoon destinations.  "}}],
[["pos6", 14], aj, {s: {html: "<big> <b> He enchanted the children with magic tricks. "}}],
[["pos6", 14], aj, {s: {html: "<big> <b> They fascinated the kitten with a feather boa. "}}],

[["pos7", 15], aj, {s: {html: "<big> <b> She praised the students for their hard work. "}}],
[["pos7", 15], aj, {s: {html: "<big> <b> He called the excited girls to the stage. "}}],
[["pos7", 15], aj, {s: {html: "<big> <b> They pleased the manager with their  hard work. "}}],

[["pos8", 16], aj, {s: {html: "<big> <b> She told her grandmother a heartwarming tale.  "}}],
[["pos8", 16], aj, {s: {html: "<big> <b> He helped the boyscouts earn a merit  badge.  "}}],
[["pos8", 16], aj, {s: {html: "<big> <b> They waved to the characters at the Disneyland parade. "}}],

[["neg1", 17], aj, {s: {html: "<big> <b> She yelled obscenities at the police officer. "}}],
[["neg1", 17], aj, {s: {html: "<big> <b> He kicked dirt in the dog's eyes. "}}],
[["neg1", 17], aj, {s: {html: "<big> <b> They broke laws in every country. "}}],

[["neg2", 18], aj, {s: {html: "<big> <b> She chewed out the mayor for election fraud. "}}],
[["neg2", 18], aj, {s: {html: "<big> <b> He tricked the tourists out of their money. "}}],
[["neg2", 18], aj, {s: {html: "<big> <b> They tricked voters for fraudulent votes. "}}],

[["neg3", 19], aj, {s: {html: "<big> <b> She sunk the boat in the harbor. "}}],
[["neg3", 19], aj, {s: {html: "<big> <b> He found a tick on his earlobe. "}}],
[["neg3", 19], aj, {s: {html: "<big> <b> They banned lacrosse from the fields. "}}],

[["neg4", 20], aj, {s: {html: "<big> <b> She pinched her little brother on the arm. "}}],
[["neg4", 20], aj, {s: {html: "<big> <b> He flew his paper airplane into the lake. "}}],
[["neg4", 20], aj, {s: {html: "<big> <b> They sent hate mail to the councilman. "}}],

[["neg5", 21], aj, {s: {html: "<big> <b> She burned popcorn in the microwave. "}}],
[["neg5", 21], aj, {s: {html: "<big> <b> He knocked over the bookshelf in the living room. "}}],
[["neg5", 21], aj, {s: {html: "<big> <b> They found out their car was stolen. "}}],

[["neg6", 22], aj, {s: {html: "<big> <b> She tasted the milk that had gone sour. "}}],
[["neg6", 22], aj, {s: {html: "<big> <b> He burned pictures of his ex-girlfriend. "}}],
[["neg6", 22], aj, {s: {html: "<big> <b> They ate dinner in complete silence. "}}],

[["neg7", 23], aj, {s: {html: "<big> <b> She framed the innocent bystander. "}}],
[["neg7", 23], aj, {s: {html: "<big> <b> He became sick from rotten meat. "}}],
[["neg7", 23], aj, {s: {html: "<big> <b> They vandalized the side of the schoolbus. "}}],

[["neg8", 24], aj, {s: {html: "<big> <b> She forged her mother's signature. "}}],
[["neg8", 24], aj, {s: {html: "<big> <b> He closed the door on the friendly neighbor. "}}],
[["neg8", 24], aj, {s: {html: "<big> <b> They threatened to sue for perjury.  "}}]

];