import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Optional, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import {fromEvent} from 'rxjs';

/**
 * Use :
 *   <input errorMsg>
 */
@Directive({
  selector: '[errorMsg]'
})
export class ErrorDirective implements OnInit {

  constructor(private host: ElementRef,
              @Optional() @Self() private ngControlSelf: NgControl) {}

  @HostListener('blur') onBlur() {
    console.log('fromEvent subscribing HOSTLISTENER');
    // sending here a fake modification event
    // this is a good solution
    // if (this.ngControlSelf) {
    //   console.log('self not null');
    //   (this.ngControlSelf as any).control.updateValueAndValidity();
    // }
  }

  @Input() monInput!: string;

  @HostBinding() id: string = 'TYTY44 ';

  ngOnInit(): void {
    console.log('MON INPUT ***********', this.monInput);
    console.log(this.host.nativeElement);

    fromEvent(this.host.nativeElement, 'blur')
      .subscribe(() => {
        console.log('fromEvent subscribing');
        // sending here a fake modification event

        // this is a good solution
        if (this.ngControlSelf) {
          console.log('self not null');
          (this.ngControlSelf as any).control.updateValueAndValidity();
        }

        // OR uncomment this other solution: (and comment in the previous one, to see it works alone)

        // // for standard input "input" an event will trigger changes
        // setTimeout(() => {
        //   const newEvent = document.createEvent('Event');
        //   newEvent.initEvent('input', false, false);
        //   // <<<<<<<<< ANGULAR will catch this input event and dispatch a valusChanges for the blur initial event
        // !!;
        //   this.host.nativeElement.dispatchEvent(newEvent);
        // }, 0);
        //
        // // for <select> "change" event is better!
        // setTimeout(() => {
        //   const newEvent = document.createEvent('Event');
        //   newEvent.initEvent('change', false, false);
        //   // <<<<<<<<< ANGULAR will catch this "change" event and dispatch a valusChanges for the blur initial event
        // !!; this.host.nativeElement.dispatchEvent(newEvent); }, 0);
      });
  }
}


