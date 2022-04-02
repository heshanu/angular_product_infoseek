;
import { Hrs24Pipe } from './shared/pipes/hrs24.pipe';
import { PipeExsamplesComponent } from './components/pipe-exsamples/pipe-exsamples.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ParentComponent } from './components/lifecycle/parent/parent.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { CurrencyInputDirective } from './shared/directives/currency-input.directive';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts/posts.component';
//import { PostsnewComponent } from './components/postsnew/postsnew.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

import { DeactivateGuard } from './shared/guards/deactivate.guard';
//import { TimePipe } from './shared/pipes/time.pipe';
import { M2cmPipe } from './shared/pipes/m2cm.pipe';
import { Dollar2lkrsPipe } from './shared/pipes/dollar2lkrs.pipe';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'product-list',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ft-list',
    component: FeaturedListComponent,
    canActivate: [AuthGuard],
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:id',
    component: PostDetailComponent,
  },
  {
    path: 'post-details',
    component: PostDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pipeEx',
    component: PipeExsamplesComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FeaturedListComponent,
    HeaderComponent,
    LoginComponent,
    PipeExsamplesComponent,
    PostDetailComponent,
    PostsComponent,
    ProductListComponent,
   Hrs24Pipe,
   M2cmPipe,
   Dollar2lkrsPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbPaginationModule
  ],
  providers: [Hrs24Pipe,Dollar2lkrsPipe,M2cmPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
