/*
/>>Filename: /home/pippin-29/dev_thynk/Thynk-Unlimited/kreas_script_project_vine-_3.0_-/src/app/components/page/set-button/set-button.component.ts
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