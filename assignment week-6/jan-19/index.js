
var reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "https://media.istockphoto.com/photos/young-online-business-owner-looking-at-laptop-while-preparing-for-picture-id1165073587?s=612x612",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate quos perspiciatis officiis earum odio molestias cumque suscipit totam modi?",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente praesentium, dolor, beatae atque perspiciatis necessitatibus in non quae at consequuntur porro error aliquid cum laboriosam?",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_960_720.jpg",
      text: "SLorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate quos perspiciatis officiis earum odio molestias cumque suscipit totam modi",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "THE BOSS",
      img: "https://media.istockphoto.com/photos/confident-online-business-owner-picture-id1186728491?s=612x612",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente praesentium, dolor, beatae atque perspiciatis necessitatibus in non quae at consequuntur porro error aliquid cum laboriosam?",
    },
  ];
  
  var imgElement = document.getElementById("person-img");
  var author = document.getElementById("author");
  var job = document.getElementById("job");
  var info = document.getElementById("info");
  var prevBtn = document.querySelector(".previous-btn");
  var nextBtn = document.querySelector(".next-btn");
  var randomBtn = document.querySelector(".btn");
  
 
  
  var currentIndex = 0;
  
  prevBtn.addEventListener("click", prevClick);
  nextBtn.addEventListener("click", nextClick);
  randomBtn.addEventListener("click", randomaize);
  
  function prevClick() {
    if (currentIndex === 0) {
      currentIndex = reviews.length - 1;
    } else {
      currentIndex--;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function nextClick() {
    if (currentIndex === reviews.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function randomaize() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.innerText = reviews[currentIndex].text;
  }