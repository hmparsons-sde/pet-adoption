var appRoot = require('app-root-path');
var myModule = require(appRoot + '/lib/my-module.js');

const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    name: "Trouble",
    color: "Poop-Colored",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://www.urzeitshop.de/10622-tm_thickbox_default/trex-walking-brown-dinosaur-toy-figure-by-papo.jpg",
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://www.picclickimg.com/d/l400/pict/143669995821_/NEW-LEGO-Animal-Dinosaur-Baby.jpg",
  },
  {
    name: "Sassy",
    color: "Poop-Colored",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://i.redd.it/1kl53ca8h5351.jpg",
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600",
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    name: "Smokey",
    color: "Poop-Colored",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://www.wildrepublic.com/wp-content/uploads/2018/11/Triceratops-xl.jpg",
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg",
  },
  {
    name: "Salem",
    color: "Poop-Colored",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://m.dw.com/image/51635244_401.jpg",
  },
  {
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47445681/4/?bust=1595788364&width=720",
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",
  },
  {
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://www.seekpng.com/png/detail/341-3417511_playful-red-dino-playful-red-dino-roblox.png",
  },
  {
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0344/6469/files/ginger_tabby_1_grande.jpg?v=1598893627",
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",
  },
  {
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://cache.desktopnexus.com/thumbseg/97/97556-bigthumbnail.jpg",
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl:
      "https://catsaspets.files.wordpress.com/2010/04/greenpetsecoliving.jpg",
  },
  {
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://previews.123rf.com/images/iimages/iimages1510/iimages151000412/46526044-red-dinosaur-with-spikes-tail-illustration.jpg",
  },
];

//PRINT TO DOM

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const petLoop = (array) => {
  let domString = '';
  for (let i = 0; i < array.length; i++) {
    domString += `<div class="card text-center" style="width: 10rem;" id=${i}>
                      <div class="card-header fw-bold">${array[i].name}</div>
                      <div class="card-image my-2"><img src=${array[i].imageUrl} alt="Animal" class="card-image img-thumbnail w-75"></div>
                    <div class="card-body p-0">
                      <p class="fs-5 m-0">${array[i].color}</p>
                      <p class="card-text fs-6">${array[i].specialSkill}</p>
                      </div>
                      <div class="card-footer text-muted">${array[i].type}</div>
                      <button type="button" id=${i} class="btn btn-outline-danger">Delete</button>
                    </div>`;
  }
  printToDom("#pet-card-container", domString);
};

const handleButtonClick = (e) => {
  const buttonId = e.target.id;
  const selectedPets = [];

//FILTER & SORT

  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === buttonId) {
      selectedPets.push(pets[i]);
    }
    
  }
  petLoop(selectedPets);
  if (buttonId === 'all') {
    petLoop(pets);
  }
  
};

//DELETE BUTTON - danger - no "are you sure" warning

const deletePet = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === 'button') {
    pets.splice(targetId, 1);
    petLoop(pets);
  }
};

//BUTTONS ON BUTTONS

const buttonEvents = () => {
  document.querySelector('#all').addEventListener('click', handleButtonClick);
  document.querySelector('#cat').addEventListener('click', handleButtonClick);
  document.querySelector('#dog').addEventListener('click', handleButtonClick);
  document.querySelector('#dino').addEventListener('click', handleButtonClick);
  document.querySelector('#pet-card-container').addEventListener('click', deletePet);
};

//INITIALIZE - do this after declaring all values - at run time.

const init = () => {
  petLoop(pets);
  buttonEvents();
};
init();
