let tries = 1;
let artifactTaken = false;

function openLevel(level) {
  document.getElementById('levels').classList.remove('active');
  setTimeout(() => {
    document.getElementById('game').classList.add('active');
    document.getElementById('levelTitle').innerText = 'Уровень ' + level;
  }, 300);
}

function openChest() {
  if (artifactTaken) return;

  document.getElementById('reward').style.display = 'flex';
  const reward = Math.random() > 0.5 ? '🪬 Артефакт найден!' : '🎁 Бесплатная попытка +1';

  if (reward.includes('попытка')) {
    tries++;
    document.getElementById('tries').innerText = 'Попытки: ' + tries;
  } else {
    artifactTaken = true;
  }

  document.getElementById('rewardText').innerText = reward;

  setTimeout(() => {
    document.getElementById('reward').style.display = 'none';
  }, 2000);
}
