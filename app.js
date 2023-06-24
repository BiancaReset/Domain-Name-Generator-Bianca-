let pronoun = [
  "any",
  "anyone",
  "whatever",
  "both",
  "everything",
  "who",
  "he",
  "I",
  "it",
  "many",
  "me",
  "nobody",
  "nothing",
];
let adjective = [
  "small",
  "huge",
  "hilarious",
  "amusing",
  "absurd",
  "bizarre",
  "energetic",
  "clumsy",
  "dramatic",
  "grumpy",
  "hypnotic",
];
let noun = [
  "person",
  "racoon",
  "car",
  "coke",
  "mask",
  "fork",
  "mouse",
  "road",
  "air",
  "frog",
  "lentil",
  "bicycle",
  "dishwasher",
];
let urlExtension = [".com", ".net", ".org", ".cl"];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < urlExtension.length; l++) {
        console.log(`${pronoun[i]}${adjective[j]}${noun[k]}${urlExtension[l]}`);
      }
    }
  }
}
