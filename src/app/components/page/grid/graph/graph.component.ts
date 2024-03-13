/*
/>>Filename: /home/pippin-29/dev_thynk/Thynk-Unlimited/kreas_script_project_vine-_3.0_-/src/app/components/page/grid/graph/graph.component.ts
/>>Path: /home/pippin-29/dev_thynk/Thynk-Unlimited/kreas_script_project_vine-_3.0_-
/>>Created Date: Tuesday, March 12th 2024, 10:13:57 am
/>>Author: Daniel Haddington
/>>
/>>Copyright (c) 2024 Copyright © [2024] [Daniel Haddington]. All rights reserved.
*/ 

/* About File:- 


*/


import { Component, ElementRef, AfterViewInit, ViewChild } from "@angular/core";
import * as d3 from 'd3';

@Component ({
	selector: 'graph',
	templateUrl: 'graph.component.html',
	styleUrl: 'graph.component.css'
})

export class GraphComponent implements AfterViewInit {
	@ViewChild('svgContainer') svgContainer!: ElementRef;
	id!: number;

	constructor() { }

	ngAfterViewInit(): void {
		const heading: string = '';
		const width: number = 1111;
		const height: number = 445;
		let i: number = 0;

		const svg = d3.select(this.svgContainer.nativeElement)
			.attr('width', width)
			.attr('height', height);

		console.log('svg');
		while(i < width)
		{ //horizontal grid lines
			svg.append('line')
				.attr('x1', i)
				.attr('y1', 0)
				.attr('x2', i)
				.attr('y2', height)
				.style('stroke', 'plum')
				.style('stroke-width', 0.32);
			i += 5;
		} //vertical grid lines
		i = 0;
		while(i < height)
		{
			svg.append('line')
				.attr('x1', 0)
				.attr('y1', i)
				.attr('x2', width)
				.attr('y2', i)
				.style('stroke', 'plum')
				.style('stroke-width', 0.32);
			i += 5;
		}
		svg.append('line')
			.attr('x1', 0)
			.attr('y1', height / 1.072)
			.attr('x2', width)
			.attr('y2', height / 1.072)
			.style('stroke', 'black')
			.style('stroke-width', 2);
		svg.append('line')
			.attr('x1', width / 37)
			.attr('y1', 0)
			.attr('x2', width / 37)
			.attr('y2', height)
			.style('stroke', 'black')
			.style('stroke-width', 2);

		const data: any = [
			{ x: 0, y: 0 },
			{ x: 100, y: 100 },
			{ x: 200, y: 50 },
			{ x: 300, y: 150 },
			{ x: 400, y: 100 }
		];
		
		// const line = d3.line()
		// 	.x(d => data.x)
		// 	.y(d => data.y);
		
		// 	// Append the curve
		// 	svg.append('path')
		// 		.datum(data)
		// 		.attr('fill', 'none')
		// 		.attr('stroke', 'black')
		// 		.attr('stroke-width', 3)
		// 		.attr('d', line);
		}
	}