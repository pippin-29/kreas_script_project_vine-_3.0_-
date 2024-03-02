/*
//||||||Filename: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine-_3.0_-/src/app/components/page/data-input/data-input.component.ts
//||||||Path: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine-_3.0_-
//||||||Created Date: Friday, March 1st 2024, 8:35:40 pm
//||||||Author: Daniel haddington
//||||||
//||||||Copyright (c) 2024 Copyright © [2024] [Daniel Haddington]. All rights reserved.
*/ 

/* About File:- 


*/

import { Component, Input} from "@angular/core";

@Component ({
	selector: 'data-input',
	templateUrl: 'data-input.component.html',
	styleUrls: ['data-input-1.component.css']
})

export class DataInputComponent {

	@Input() inputValue: number = 0;
	batch: number = 0;
	id!: number;
	error: string = '';

	onInputChange() {
		if (this.batch < -32) {
			this.batch = 0;
			this.error = '"BOT-OUT" This Device Has An Input Range of "-32"-"+32"';
		} else if (this.batch > 32) {
			this.batch = 32;
			this.error = '"TOP-OUT" This Device Has An Input Range of "-32"-"+32"';
		}
	}
}