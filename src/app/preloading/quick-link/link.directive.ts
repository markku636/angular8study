import { Directive, ElementRef, Optional, Inject, OnChanges, OnInit
  , OnDestroy, Input } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { LinkHandler } from './link-handler.service';
import { LinkHandlerStrategy } from './link-handler-strategy';

@Directive({
  selector: '[routerLink]'
})
export class LinkDirective implements OnInit, OnChanges, OnDestroy {
  @Input() routerLink: string;
  private rl: RouterLink | RouterLinkWithHref;
  private linkHandler: LinkHandlerStrategy;

  constructor(
    @Inject(LinkHandler) private linkHandlers: LinkHandlerStrategy[],
    private el: ElementRef,
    @Optional() link: RouterLink,
    @Optional() linkWithHref: RouterLinkWithHref
  ) {
    this.linkHandler = this.linkHandlers.filter(h => h.supported()).shift();
    this.rl = link || linkWithHref;
  }

  ngOnInit() {
    this.linkHandler.register(this);
  }

  ngOnChanges() {
    this.linkHandler.unregister(this);
    this.linkHandler.register(this);
  }

  ngOnDestroy() {
    this.linkHandler.unregister(this);
  }

  get element(): Element {
    return this.el.nativeElement;
  }

  get urlTree(): any {
    return this.rl.urlTree;
  }
}
