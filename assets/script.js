const folders = {
  "OldChurch": [
    "assets/OldChurch/1.jpg",
    "assets/OldChurch/2.jpg",
    "assets/OldChurch/3.jpg",
    "assets/OldChurch/4.jpg",
    "assets/OldChurch/5.jpg",
    "assets/OldChurch/6.jpg",
    "assets/OldChurch/8.jpg",
    "assets/OldChurch/9.jpg",
    "assets/OldChurch/10.jpg",
    "assets/OldChurch/11.jpg",
    "assets/OldChurch/12.jpg",
    "assets/OldChurch/13.jpg",
    "assets/OldChurch/14.jpg",
    "assets/OldChurch/15.jpg",
    "assets/OldChurch/16.jpg",
    "assets/OldChurch/17.jpg",
    "assets/OldChurch/18.jpg",
    "assets/OldChurch/19.jpg",
    "assets/OldChurch/20.jpg",
    "assets/OldChurch/21.jpg",
    "assets/OldChurch/22.jpg",
    "assets/OldChurch/23.jpg",
    "assets/OldChurch/24.jpg",
    "assets/OldChurch/25.jpg",
    "assets/OldChurch/26.jpg",
    "assets/OldChurch/46.jpg"
  ],

  "CWT At Moghvan": [
    "assets/CWT At Moghvan/27.jpg",
    "assets/CWT At Moghvan/28.jpg",
    "assets/CWT At Moghvan/29.jpg",
    "assets/CWT At Moghvan/30.jpg",
    "assets/CWT At Moghvan/31.jpg",
    "assets/CWT At Moghvan/32.jpg",
    "assets/CWT At Moghvan/33.jpg",
    "assets/CWT At Moghvan/34.jpg",
    "assets/CWT At Moghvan/35.jpg",
    "assets/CWT At Moghvan/36.jpg",
    "assets/CWT At Moghvan/37.jpg",
    "assets/CWT At Moghvan/38.jpg",
    "assets/CWT At Moghvan/39.jpg",
    "assets/CWT At Moghvan/40.jpg",
    "assets/CWT At Moghvan/41.jpg",
    "assets/CWT At Moghvan/42.jpg",
    "assets/CWT At Moghvan/43.jpg",
    "assets/CWT At Moghvan/44.jpg",
    "assets/CWT At Moghvan/45.jpg"
  ],

  "CWT At Seminar Centre Lakhali": [
    "assets/CWT At Seminar Centre Lakhali/49.jpg"
  ],

  "CWT At Verakui": [
    "assets/CWT At Verakui/47.jpg",
    "assets/CWT At Verakui/48.jpg"
  ],

  "CWT At Dolvan": [
    "assets/CWT At Dolvan/50.jpg",
    "assets/CWT At Dolvan/51.jpg",
    "assets/CWT At Dolvan/52.jpg",
    "assets/CWT At Dolvan/53.jpg",
    "assets/CWT At Dolvan/54.jpg",
    "assets/CWT At Dolvan/55.jpg",
    "assets/CWT At Dolvan/56.jpg"
  ],

  "CWT in silvar jubali at Taparvada": [
    "assets/CWT in silvar jubali at Taparvada/57.jpg",
    "assets/CWT in silvar jubali at Taparvada/58.jpg"
    ,
    "assets/CWT in silvar jubali at Taparvada/59.jpg",
    "assets/CWT in silvar jubali at Taparvada/60.jpg",
    "assets/CWT in silvar jubali at Taparvada/61.jpg",
    "assets/CWT in silvar jubali at Taparvada/62.jpg",
    "assets/CWT in silvar jubali at Taparvada/63.jpg",
    "assets/CWT in silvar jubali at Taparvada/64.jpg",
    "assets/CWT in silvar jubali at Taparvada/65.jpg",
    "assets/CWT in silvar jubali at Taparvada/66.jpg",
    "assets/CWT in silvar jubali at Taparvada/67.jpg",
    "assets/CWT in silvar jubali at Taparvada/68.jpg",
    "assets/CWT in silvar jubali at Taparvada/69.jpg",
    "assets/CWT in silvar jubali at Taparvada/70.jpg",
    "assets/CWT in silvar jubali at Taparvada/71.jpg",
    "assets/CWT in silvar jubali at Taparvada/72.jpg",
    "assets/CWT in silvar jubali at Taparvada/73.jpg",
    "assets/CWT in silvar jubali at Taparvada/74.jpg",
    "assets/CWT in silvar jubali at Taparvada/75.jpg",
    "assets/CWT in silvar jubali at Taparvada/76.jpg",
    "assets/CWT in silvar jubali at Taparvada/77.jpg",
    "assets/CWT in silvar jubali at Taparvada/78.jpg",
    "assets/CWT in silvar jubali at Taparvada/79.jpg",
    "assets/CWT in silvar jubali at Taparvada/80.jpg",
    "assets/CWT in silvar jubali at Taparvada/81.jpg",
    "assets/CWT in silvar jubali at Taparvada/82.jpg",
    "assets/CWT in silvar jubali at Taparvada/83.jpg"
  ]
  
};

let currentPhotos = [];
let currentIndex = 0;

function openFolder(folderName) {
  document.getElementById('folderView').style.display = "none";
  document.getElementById('photoView').style.display = "block";
  document.getElementById('backBtn').style.display = "inline-block";

  currentPhotos = folders[folderName];

  let html = "";
  currentPhotos.forEach((img, index) => {
    html += `
      <div class="photo" onclick="viewFull(${index})">
        <img src="${img}">
      </div>
    `;
  });

  document.getElementById('photoView').innerHTML = html;
}

function showFolders() {
  document.getElementById('folderView').style.display = "block";
  document.getElementById('photoView').style.display = "none";
  document.getElementById('backBtn').style.display = "none";
}

function viewFull(index) {
  currentIndex = index;
  document.getElementById('fullscreenView').style.display = "flex";
  document.getElementById('fullImage').src = currentPhotos[currentIndex];
}

function closeFull() {
  document.getElementById('fullscreenView').style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentPhotos.length;
  document.getElementById('fullImage').src = currentPhotos[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
  document.getElementById('fullImage').src = currentPhotos[currentIndex];
}
window.onload = function() {
    Object.keys(folders).forEach(folderName => {
        let firstImage = folders[folderName][0]; // first image of that folder
        let folderDiv = document.getElementById("folder-" + folderName);
        if (folderDiv) {
            folderDiv.querySelector("img").src = firstImage;
            folderDiv.querySelector("img").style.width = "150px";
            folderDiv.querySelector("img").style.height = "120px";
            folderDiv.querySelector("img").style.objectFit = "cover";
            folderDiv.querySelector("img").style.borderRadius = "6px";
        }
    });
};


