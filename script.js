const percentages = [85, 95, 67];

document.addEventListener("DOMContentLoaded", () => {
  percentages.forEach((percentage, index) => {
    const ratingBar = document.getElementById(`rating-bar-${index + 1}`);
    ratingBar.style.width = `${percentage}%`;
    
    const ratingPercent = document.getElementById(`rating-percent-${index + 1}`);
    ratingPercent.innerText = `${percentage}%`;
  });
});