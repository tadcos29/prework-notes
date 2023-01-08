var rgTopics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var topic;
var randomTopic = rgTopics[Math.floor(Math.random() * rgTopics.length)];

console.log('Here are the topics we learned through Prework:');
ListTopics();
SelectTopic();



function ListTopics(){
for (x=0; x<rgTopics.length; x++) {
console.log(rgTopics[x]);
}
}

function SelectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }