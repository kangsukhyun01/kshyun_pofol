const gridOne = document.querySelector('.columns');
const columns = [...gridOne.querySelectorAll('.column')];
const items = columns.map((column, pos) => {
    return [...column.querySelectorAll('.column__item')].map(item => ({
        element: item,
        column: pos,
        wrapper: item.querySelector('.column__item-imgwrap'),
		image: item.querySelector('.column__item-img')
    }));
});
const mergedItems = items.flat();
//flat() 메서드는 중첩된 배열을 단일 배열
//const items = [ [1, 2], [3, 4], [5, 6] ];  ==>[1, 2, 3, 4, 5, 6]



const scroll = () => {
	let maxColumns = columns.length;
	let middleColumn = Math.floor(maxColumns / 2);
	let xIncrement = (maxColumns > 1) ? 400 / (maxColumns - 1) : 0;

	mergedItems.forEach(item => {
		gsap.set(item.element, {
			perspective: 1500
		});

		let xPercentValue = 0;
		let rotationXValue = 0;
		let zValue = 0;
		
		if (item.column === 0) {
			xPercentValue = -200;
		} else if (item.column === middleColumn) {
			xPercentValue = 0;
		} else if (item.column === maxColumns - 1) {
			xPercentValue = 200;
		} else {
			xPercentValue = -200 + (item.column * xIncrement);
		}

		rotationXValue = -25*(item.column+1);
		zValue = 30*(item.column+1);
		
		gsap
		.timeline({
			defaults: {
				ease: 'power2'
			},
			scrollTrigger: {
				trigger: item.element,
				start: 'top bottom',
				end: 'clamp(center top)',
				scrub: true
			}
		})
		.fromTo(item.wrapper, {
			rotationX: rotationXValue,
			z: zValue,
			yPercent: 30,
			xPercent: xPercentValue
		}, {
			startAt: {transformOrigin: '50% 100%'},
			rotationX: 0,
			z: 0,
			yPercent: 0,
			xPercent: 0
		}, 0)
		.fromTo(item.image, {
			filter: 'hue-rotate(90deg)',
			scale: 2.5
		}, {
			filter: 'hue-rotate(0deg)',
			scale: 1
		}, 0);
	});
}

window.addEventListener("load",() => {
	scroll();
});