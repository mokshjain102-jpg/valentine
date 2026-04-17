function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

let total=0, disease=0, healthy=0;

function analyzeImage() {
  const result = document.getElementById('result');

  const isDisease = Math.random() > 0.4;
  const confidence = (85 + Math.random()*10).toFixed(2);

  total++;
  if(isDisease) disease++; else healthy++;

  document.getElementById('total').innerText = total;
  document.getElementById('disease').innerText = disease;
  document.getElementById('healthy').innerText = healthy;

  const diseaseName = isDisease ? "Leaf Blight" : "Healthy";

  result.innerHTML = `${diseaseName} (${confidence}%)`;

  const li = document.createElement('li');
  li.innerText = `${diseaseName} - ${confidence}%`;
  document.getElementById('historyList').appendChild(li);

  document.getElementById('scanCount').innerText = total;
}
