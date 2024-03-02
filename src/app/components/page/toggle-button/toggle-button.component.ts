/*
//||||||Filename: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine_1.0/src/app/components/page/toggle-button/toggle-button.component.ts
//||||||Path: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine_1.0
//||||||Created Date: Friday, March 1st 2024, 8:35:40 pm
//||||||Author: Daniel haddington
//||||||
//||||||Copyright (c) 2024 Copyright © [2024] [Daniel Haddington]. All rights reserved.
*/ 

/* About File:- 


*/


import { Component, Input } from "@angular/core";

@Component ({
	selector: 'toggle-button',
	templateUrl: 'toggle-button.component.html',
	styleUrls: ['toggle-button-1.component.css']
})

export class ToggleButtonComponent {
	clickedCondition: boolean = false;
	hoverCondition: boolean = false;
	@Input() buttonName: string = '';
	id!: number;

	toggleClick() {
		this.clickedCondition = !this.clickedCondition;
	}
	toggleHover(hover_state: boolean) {
		this.hoverCondition = hover_state;
	}
 }