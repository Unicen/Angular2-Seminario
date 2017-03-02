import { async, TestBed } from '@angular/core/testing';
import { BeerCartComponent } from './beer-cart.component';
describe('BeerCartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BeerCartComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BeerCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/sebastiangonzalez/Documents/Angular2-Seminario/MyApp/src/app/beer-cart/beer-cart.component.spec.js.map