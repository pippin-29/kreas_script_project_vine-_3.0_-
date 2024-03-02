/*
//||||||Filename: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine_1.0/src/app/components/page/set-button/set-button.component.ts
//||||||Path: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine_1.0
//||||||Created Date: Friday, March 1st 2024, 8:47:54 pm
//||||||Author: Daniel haddington
//||||||
//||||||Copyright (c) 2024 Copyright © [2024] [Daniel Haddington]. All rights reserved.
*/ 

/* About File:- 


*/



import { Component, Input } from "@angular/core";

@Component ({
	selector: 'set-button',
	templateUrl: 'set-button.component.html',
	styleUrl: 'set-button.component.css'
})

export class SetButtonComponent {
	clickedCondition: boolean = false;
	hoverCondition: boolean = false;
	@Input() buttonName: string = '';

	toggleClick() {
		this.clickedCondition = !this.clickedCondition;
		setTimeout(() => {
			this.clickedCondition = !this.clickedCondition;
		}, 1000);
	}
	toggleHover(hover_state: boolean) {
		this.hoverCondition = hover_state;
	}	
}