let score = 0; // Başlangıç mesafesi

function handleClick() {
    // Skoru arttır
    score++;
    // Mesafeyi güncelle
    document.getElementById('score').innerText = Distance: ${score * 10} KM;

    // GIF'e animasyon ekle
    animateTrollFace();
}

function animateTrollFace() {
    const trollFace = document.getElementById('troll-face');
    trollFace.style.transform = 'translateY(-30px)';
    setTimeout(() => {
        trollFace.style.transform = 'translateY(0)';
    }, 300); // 300ms süresince yukarı kayacak
}