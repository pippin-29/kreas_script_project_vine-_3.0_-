/*
//||||||Filename: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine-_3.0_-/src/app/modules/app/app.module.ts
//||||||Path: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine-_3.0_-
//||||||Created Date: Friday, March 1st 2024, 8:36:06 pm
//||||||Author: Daniel haddington
//||||||
//||||||Copyright (c) 2024 Copyright © [2024] [Daniel Haddington]. All rights reserved.
*/ 

/* About File:- 


*/

// node_module imports //
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

// Container Components //
import { AppComponent } from "../../components/app/app.component";
import { FooterComponent } from "../../components/page/footer/footer.component";
import { HeaderComponent } from "../../components/page/header/header.component";
import { BodyComponent } from "../../components/page/body/body.component";
import { SideLeftComponent } from "../../components/page/side-left/side-left.component";
import { SideRightComponent } from "../../components/page/side-right/side-right.component";

// User Interfaces Components //
import { ToggleButtonComponent } from "../../components/page/toggle-button/toggle-button.component";
import { DataInputComponent } from "../../components/page/data-input/data-input.component";
import { SetButtonComponent } from "../../components/page/set-button/set-button.component";

// Displays //
import { GridLeftComponent } from "../../components/page/grid/grid-left/grid-left.component";
import { GridRightComponent } from "../../components/page/grid/grid-right/grid-right.component";
import { GraphComponent } from "../../components/page/grid/graph/graph.component";



@NgModule ({
	declarations: [
		/** Containers */
		AppComponent,
		FooterComponent,
		HeaderComponent,
		BodyComponent,
		SideLeftComponent,
		SideRightComponent,
		
		/** User Interfaces */
		ToggleButtonComponent,
		SetButtonComponent,
		DataInputComponent,

		/** Displays */
		GridLeftComponent,
		GridRightComponent,
		GraphComponent
	],
	imports : [
		BrowserModule,
		RouterModule
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
