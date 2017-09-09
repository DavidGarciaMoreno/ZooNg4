import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn =
	trigger('fadeIn',  [
		transition(':enter', [
			style({
				opacity: 0
			}),
			animate('300ms linear', 			
				style({
					opacity: 1
			}))
		])
	])