import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { InfoCarouselComponent } from './main-page/info-carousel/info-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmationComponent,
    MainPageComponent,
    ProductCategoryComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    InfoCarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
