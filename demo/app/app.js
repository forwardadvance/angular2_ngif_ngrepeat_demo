// ngIf
// <div *ngIf="showKitten">Go Left</div>
// ngFor:
// <li *ngFor="let cat of cats">
//   {{cat.name}}
// </li>


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <like (liked)="handleClick($event)"></like>
      <div>{{message | json}}</div>
    `
  })
  .Class({
    constructor: function() {
      this.handleClick = function(evt) {
        this.message = evt;
      }
    }
  })

var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);


