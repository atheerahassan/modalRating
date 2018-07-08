import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  @Input() numStars: number = 5;
  @Input() value: number = 4;


  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];

  constructor(private view:ViewController) {
  }

  log(valor) {
    console.log(valor);
  }

  ngAfterViewInit() {

    this.calc();
    }

    calc() {
      this.stars = [];
      let tmp = this.value;
      for(let i=0; i < this.numStars; i++, tmp--){
        if (tmp >= 1)
          this.stars.push("star");
        
        else if (tmp > 0 && tmp < 1)
          this.stars.push("star-half");
        
        else this.stars.push("star-outline");
    }

  }


  starClicked(index) {

    this.value = index + 1;
    this.ionClick.emit(this.value);
    this.calc();
    
  }

  dismiss() {
    this.view.dismiss();
  }
}

