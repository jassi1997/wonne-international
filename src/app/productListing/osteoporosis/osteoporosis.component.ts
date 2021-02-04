import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osteoporosis',
  templateUrl: './osteoporosis.component.html',
  styleUrls: ['./osteoporosis.component.css']
})
export class OsteoporosisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){ var acc = document.getElementsByClassName("accordion");
	var i;
	
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("actives");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	  });
  }
}
}
