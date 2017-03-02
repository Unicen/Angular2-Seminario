import { async, TestBed } from '@angular/core/testing';
import { BeerListComponent } from './beer-list.component';
describe('BeerListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BeerListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BeerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/sebastiangonzalez/Documents/Angular2-Seminario/MyApp/src/app/beer-list/beer-list.component.spec.js.map