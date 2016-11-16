// ngIf
// <div *ngIf="showKitten">Kitten</div>
// <template [ngIf]="showKitten">
//   <img src="kitten.jpg" />
// </template>
//
// ngFor:
// <li *ngFor="let cat of cats">
//   {{cat.name}}
// </li>
// [{name: "miffy"},{name: "squiffy"}, {name: "bob"}]
// let i=index"
// first, last, even, odd


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <ul>
        <li *ngFor="let cat of cats; let i = index; let even = even; let odd = odd">
          {{cat.name}} - {{i}}
        </li>
      </ul>
    `
  })
  .Class({
    constructor: function() {
      this.cats = [{name: "miffy"},{name: "squiffy"}, {name: "bob"}]
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


// <a (click)="showKitten = !showKitten">Click</a>
// <!-- <div [hidden]="!showKitten">
//   <img src="kitten.jpg" />
// </div> -->
// <div *ngIf="showKitten">
//   <img src="kitten.jpg" />
// </div>

// <template [ngIf]="showKitten">
//   <div>
//     <img src="kitten.jpg" />
//   </div>
// </template>

