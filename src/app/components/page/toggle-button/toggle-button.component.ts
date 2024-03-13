/*
/>>Filename: /home/pippin-29/dev_thynk/Thynk-Unlimited/kreas_script_project_vine-_3.0_-/src/app/components/page/toggle-button/toggle-button.component.ts
/>>Path: /home/pippin-29/dev_thynk/Thynk-Unlimited/kreas_script_project_vine-_3.0_-
/>>Created Date: Tuesday, March 12th 2024, 10:13:57 am
/>>Author: Daniel Haddington
/>>
/>>Copyright (c) 2024 Copyright © [2024] [Daniel Haddington]. All rights reserved.
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