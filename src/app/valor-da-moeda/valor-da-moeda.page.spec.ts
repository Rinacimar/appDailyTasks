import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValorDaMoedaPage } from './valor-da-moeda.page';

describe('ValorDaMoedaPage', () => {
  let component: ValorDaMoedaPage;
  let fixture: ComponentFixture<ValorDaMoedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorDaMoedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValorDaMoedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
