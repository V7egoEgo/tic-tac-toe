const battlePole = document.querySelectorAll('.playing-field__box');
battlePole.forEach(el => el.addEventListener('click', hod));
function remove()
{
	const battlePole = document.querySelectorAll('.playing-field__box');
	battlePole.forEach(el =>{
		el.classList.remove('nolik','kerestik');
		el.addEventListener('click', hod);
	} )
    counter = 0;
}
function closer(event)
{
	const popUpBox = document.querySelector('.pop-up');
	popUpBox.classList.add('_pop-up__closer');
}
let counter = 0;
let combs =
[
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
function hod(event) 
{    
counter++;
	if (counter <= 9 && counter%2 == 0 )
	{
		event.target.classList.add('nolik');
		event.target.removeEventListener('click', hod);
		event.target.classList.contains('nolik')
        isVictory(battlePole , counter)
	}else
	{
		event.target.classList.add('kerestik');
		event.target.removeEventListener('click', hod);
		event.target.classList.contains('kerestik')
        isVictory(battlePole)
	}
    
}
function isVictory(battlePole)
{
	const popUpBox = document.querySelector('.pop-up');
	const textVin = popUpBox.querySelector('.text__p');
	let combs = 
	[
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let comb of combs) 
	{
		if 
		(
			battlePole[comb[0]].classList.contains('kerestik') == battlePole[comb[1]].classList.contains('kerestik') &&
			battlePole[comb[1]].classList.contains('kerestik') == battlePole[comb[2]].classList.contains('kerestik') &&
			battlePole[comb[0]].classList.contains('kerestik') != '' 
		) 
		{
			textVin.textContent = 'Победил первый игрок';
			popUpBox.classList.remove('_pop-up__closer');
		}else if 
		(
			battlePole[comb[0]].classList.contains('nolik') == battlePole[comb[1]].classList.contains('nolik') &&
			battlePole[comb[1]].classList.contains('nolik') == battlePole[comb[2]].classList.contains('nolik') &&
			battlePole[comb[0]].classList.contains('nolik') != ''
		) 
		{
			textVin.textContent = 'Второй игрок победил';
			popUpBox.classList.remove('_pop-up__closer');
		}else 
		{
			
		}	
	}

}